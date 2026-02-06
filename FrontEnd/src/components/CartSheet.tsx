import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { toast } from "@/components/ui/sonner";
import axios from "axios";
import {
  HotMatcha,
  IcedMatcha,
  IceCream,
  CripeImage,
  Macarons,
  Mochi,
} from "../assets/data.ts";

interface CartSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

const imageMap: Record<number, string> = {
  2: HotMatcha,
  3: IcedMatcha,
  4: IceCream,
  5: CripeImage,
  6: Macarons,
  7: Mochi,
};

const getImageByKodeBarang = (kodeBarang: number) => imageMap[kodeBarang];

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(value);
};

export default function CartSheet({ isOpen, onClose }: CartSheetProps) {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    grandTotal,
    refreshMenu,
  } = useCart();

  const handleCheckout = async () => {
    if (cartItems.length === 0) {
      toast.error("Keranjang masih kosong!");
      return;
    }

    try {
      await Promise.all(
        cartItems.map((item) =>
          axios.patch(`http://localhost:3000/Menu/${item.kode_barang}`, {
            stok_barang: item.stok_barang - item.quantity,
          }),
        ),
      );

      refreshMenu();

      clearCart();
      toast.success("Pesanan berhasil diproses!");
      onClose();
    } catch (error) {
      console.error("Error updating stock:", error);
      toast.error("Gagal memproses pesanan. Silakan coba lagi.");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Sheet */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-card shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center gap-3">
                <ShoppingBag className="text-primary" size={24} />
                <h2 className="font-display text-xl font-bold text-foreground">
                  Keranjang
                </h2>
                {cartItems.length > 0 && (
                  <span className="px-2 py-0.5 text-xs font-bold bg-primary text-primary-foreground rounded-full">
                    {cartItems.length}
                  </span>
                )}
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-secondary rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mb-4">
                    <ShoppingBag size={32} className="text-muted-foreground" />
                  </div>
                  <p className="text-lg font-medium text-foreground mb-2">
                    Keranjang Kosong
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Silakan tambahkan menu dari halaman menu
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <motion.div
                      key={item.kode_barang}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 100 }}
                      className="flex gap-4 p-4 bg-secondary/30 rounded-2xl"
                    >
                      {/* Image */}
                      <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                        <img
                          src={getImageByKodeBarang(item.kode_barang)}
                          alt={item.nama_barang}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Details */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-foreground truncate mb-1">
                          {item.nama_barang}
                        </h3>
                        <p className="text-sm text-primary font-bold mb-3">
                          {formatCurrency(item.harga_barang)}
                        </p>

                        <div className="flex items-center justify-between">
                          {/* Quantity Controls */}
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.kode_barang,
                                  item.quantity - 1,
                                )
                              }
                              className="w-8 h-8 flex items-center justify-center bg-background rounded-full hover:bg-secondary transition-colors"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="w-8 text-center font-medium">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.kode_barang,
                                  item.quantity + 1,
                                )
                              }
                              className="w-8 h-8 flex items-center justify-center bg-background rounded-full hover:bg-secondary transition-colors"
                            >
                              <Plus size={14} />
                            </button>
                          </div>

                          {/* Remove Button */}
                          <button
                            onClick={() => removeFromCart(item.kode_barang)}
                            className="p-2 text-destructive hover:bg-destructive/10 rounded-full transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>

                      {/* Total Price */}
                      <div className="text-right">
                        <p className="text-sm font-bold text-foreground">
                          {formatCurrency(item.totalPrice)}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="p-6 border-t border-border bg-background/50 backdrop-blur-sm">
                {/* Total */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-medium text-foreground">
                    Total
                  </span>
                  <span className="text-2xl font-bold text-primary">
                    {formatCurrency(grandTotal)}
                  </span>
                </div>

                {/* Checkout Button */}
                <button
                  onClick={handleCheckout}
                  className="w-full py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
                >
                  Pesan Sekarang
                </button>

                {/* Clear Cart */}
                <button
                  onClick={clearCart}
                  className="w-full mt-3 py-2 text-sm text-muted-foreground hover:text-destructive transition-colors"
                >
                  Kosongkan Keranjang
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
