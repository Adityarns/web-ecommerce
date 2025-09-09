import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item, quantity) => {
    const newItem = {
      id: item.id,
      nama: item.nama,
      harga: item.harga,
      gambar: item.gambar,
      quantity,
      totalPrice: item.harga * quantity,
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
