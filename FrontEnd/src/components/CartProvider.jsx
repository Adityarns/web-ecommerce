import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item, quantity) => {
    const newItem = {
      kode_barang: item.kode_barang,
      nama_barang: item.nama_barang,
      harga_barang: item.harga_barang,
      stok_barang: item.stok_barang,
      quantity,
      totalPrice: item.harga_barang * quantity,
    };

    setCartItems((prevItem) => [...prevItem, newItem]);
  };

  const Pesanan = {
    cartItems,
    addToCart,
  };
  return (
    <CartContext.Provider value={Pesanan}>{children}</CartContext.Provider>
  );
};
