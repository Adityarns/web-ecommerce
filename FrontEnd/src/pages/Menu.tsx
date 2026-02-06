import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, X, ShoppingBag, Loader2, RefreshCw } from "lucide-react";
import axios from "axios";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/contexts/CartContext";
import { toast } from "@/components/ui/sonner";
import {
  HotMatcha,
  IcedMatcha,
  IceCream,
  CripeImage,
  Macarons,
  Mochi,
} from "../assets/data.ts";

interface MenuItem {
  kode_barang: number;
  nama_barang: string;
  harga_barang: number;
  stok_barang: number;
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

export default function Menu() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { addToCart, setRefreshMenuCallback } = useCart();

  useEffect(() => {
    fetchMenuData();
    setRefreshMenuCallback(() => fetchMenuData);
  }, [setRefreshMenuCallback]);

  const fetchMenuData = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:3000/Menu");
      setMenuItems(response.data);
      setError(null);
    } catch (err) {
      setError(err.message || "Gagal memuat menu");
      console.error("Error fetching menu:", err);
    } finally {
      setLoading(false);
    }
  };

  const openPopup = (item: MenuItem) => {
    setSelectedItem(item);
    setQuantity(1);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedItem(null);
    setQuantity(1);
  };

  const handleAddToCart = () => {
    if (!selectedItem) return;
    addToCart(selectedItem, quantity);
    closePopup();
    toast.success(
      `${selectedItem.nama_barang} (${quantity}x) ditambahkan ke keranjang!`,
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-primary/20 text-primary rounded-full"
          >
            Pilihan Terbaik
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4"
          >
            Menu <span className="text-primary">Matcha</span> Kami
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Nikmati berbagai kreasi matcha premium yang dibuat dengan cinta dan
            bahan-bahan berkualitas tinggi
          </motion.p>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <Loader2 className="w-12 h-12 text-primary animate-spin mb-4" />
              <p className="text-muted-foreground">Memuat menu...</p>
            </div>
          ) : error && menuItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20">
              <p className="text-destructive mb-4">Error: {error}</p>
              <button
                onClick={fetchMenuData}
                className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
              >
                <RefreshCw size={18} />
                Coba Lagi
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menuItems.map((menu, index) => (
                <motion.div
                  key={menu.kode_barang}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative bg-card rounded-3xl border border-border overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-500"
                >
                  {/* Stock Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 text-sm font-medium bg-background/90 backdrop-blur-sm text-primary rounded-full border border-primary/20">
                      Stok: {menu.stok_barang}
                    </span>
                  </div>

                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={getImageByKodeBarang(menu.kode_barang)}
                      alt={menu.nama_barang}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {menu.nama_barang}
                    </h3>
                    <p className="text-2xl font-bold text-primary mb-4">
                      {formatCurrency(menu.harga_barang)}
                    </p>

                    <button
                      onClick={() => openPopup(menu)}
                      className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all duration-300 hover:shadow-lg"
                    >
                      <Plus size={18} />
                      Tambah Pesanan
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Popup Modal */}
      <AnimatePresence>
        {isPopupOpen && selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={closePopup}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-card rounded-3xl shadow-elegant max-w-md w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closePopup}
                className="absolute top-4 right-4 z-10 p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors"
              >
                <X size={20} />
              </button>

              {/* Image */}
              <div className="relative h-48">
                <img
                  src={getImageByKodeBarang(selectedItem.kode_barang)}
                  alt={selectedItem.nama_barang}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                  {selectedItem.nama_barang}
                </h3>
                <p className="text-xl font-bold text-primary mb-1">
                  {formatCurrency(selectedItem.harga_barang)}
                </p>
                <p className="text-sm text-muted-foreground mb-6">
                  Stok tersedia: {selectedItem.stok_barang}
                </p>

                {/* Quantity Selector */}
                <div className="flex items-center justify-center gap-4 mb-6">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-10 h-10 flex items-center justify-center bg-secondary rounded-full hover:bg-secondary/80 transition-colors"
                  >
                    <Minus size={18} />
                  </button>
                  <span className="text-2xl font-bold w-12 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() =>
                      setQuantity((q) =>
                        Math.min(selectedItem.stok_barang, q + 1),
                      )
                    }
                    className="w-10 h-10 flex items-center justify-center bg-secondary rounded-full hover:bg-secondary/80 transition-colors"
                  >
                    <Plus size={18} />
                  </button>
                </div>

                {/* Total */}
                <div className="p-4 bg-primary/10 rounded-2xl mb-6">
                  <p className="text-sm text-muted-foreground mb-1">
                    Total Harga
                  </p>
                  <p className="text-2xl font-bold text-primary">
                    {formatCurrency(selectedItem.harga_barang * quantity)}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={closePopup}
                    className="flex-1 py-3 px-6 bg-secondary text-secondary-foreground rounded-full font-medium hover:bg-secondary/80 transition-colors"
                  >
                    Batal
                  </button>
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-6 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
                  >
                    <ShoppingBag size={18} />
                    Tambah
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
