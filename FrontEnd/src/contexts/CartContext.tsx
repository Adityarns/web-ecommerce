import { createContext, useContext, useState, ReactNode } from "react";

export interface CartItem {
  kode_barang: number;
  nama_barang: string;
  harga_barang: number;
  stok_barang: number;
  quantity: number;
  totalPrice: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (
    item: Omit<CartItem, "quantity" | "totalPrice">,
    quantity: number,
  ) => void;
  removeFromCart: (kode_barang: number) => void;
  updateQuantity: (kode_barang: number, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  grandTotal: number;
  setRefreshMenuCallback: (callback: () => void) => void;
  refreshMenu: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [refreshMenuCallback, setRefreshMenuCallback] = useState<
    (() => void) | null
  >(null);

  const addToCart = (
    item: Omit<CartItem, "quantity" | "totalPrice">,
    quantity: number,
  ) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (i) => i.kode_barang === item.kode_barang,
      );
      if (existingIndex >= 0) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        updated[existingIndex].totalPrice =
          updated[existingIndex].quantity * item.harga_barang;
        return updated;
      }
      return [
        ...prev,
        { ...item, quantity, totalPrice: quantity * item.harga_barang },
      ];
    });
  };

  const removeFromCart = (kode_barang: number) => {
    setCartItems((prev) =>
      prev.filter((item) => item.kode_barang !== kode_barang),
    );
  };

  const updateQuantity = (kode_barang: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(kode_barang);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.kode_barang === kode_barang
          ? { ...item, quantity, totalPrice: quantity * item.harga_barang }
          : item,
      ),
    );
  };

  const clearCart = () => setCartItems([]);

  const refreshMenu = () => {
    if (refreshMenuCallback) {
      refreshMenuCallback();
    }
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const grandTotal = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        grandTotal,
        setRefreshMenuCallback,
        refreshMenu,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}
