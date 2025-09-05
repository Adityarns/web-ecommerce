import { useState } from "react";
import { MenuImage } from "../../data";

export default function Menu() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const openPopup = (item) => {
    setIsPopupOpen(true);
    setSelectedItem(item);
    setQuantity(1);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedItem(null);
    setQuantity(1);
  };

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const addToCart = () => {
    console.log("Menambahkan ke keranjang:", {
      item: selectedItem,
      quantity: quantity,
      totalPrice: selectedItem.harga * quantity,
    });

    closePopup();

    alert(
      `${selectedItem.name} (${quantity}x) berhasil ditambahkan ke keranjang!`
    );
  };

  return (
    <div className="tools mt-32 mb-5 min-h-screen">
      <h1 className="text-4xl/snug font-bold text-center text-[#589507]">
        List Menu
      </h1>
      <div className="md:mt-14 mt-5 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-x-4 gap-y-8 max-w-[1280px] mx-auto px-4">
        {MenuImage.map((menu) => (
          <div
            className="flex flex-col bg-white rounded-2xl border-2 border-gray-200 shadow-sm hover:border-[#589507] p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer h-full"
            key={menu.id}
          >
            {/* Image Section */}
            <div className="flex justify-center mb-4">
              <img
                src={menu.gambar}
                alt={menu.name}
                className="w-[200px] h-[200px] rounded-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Content Section */}
            <div className="flex flex-col items-center text-center flex-grow">
              <h2 className="font-bold text-[#589507] text-xl mb-2">
                {menu.name}
              </h2>
              <p className="font-semibold text-lg text-gray-800 mb-3">
                Rp. {menu.harga}K
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-6 px-2 flex-grow">
                {menu.ket}
              </p>
            </div>

            {/* Button Section */}
            <div className="flex justify-center ">
              <button
                onClick={() => openPopup(menu)}
                className="py-2 px-6 bg-[#589507] text-[#FAF8ED] rounded-3xl border-2 border-[#748E63] hover:bg-[#FAF8ED] hover:text-[#748E63] transition-colors duration-300 font-medium cursor-pointer"
              >
                Tambah Pesanan
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Popup Section */}
      {isPopupOpen && selectedItem && (
        <div
          className="fixed inset-0 backdrop-blur-sm flex justify-center items-center z-50"
          onClick={closePopup}
        >
          <div
            className="bg-white p-8 rounded-2xl shadow-2xl w-96 max-w-[90vw] text-center transform transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={selectedItem.gambar} className="w-24 rounded-full"></img>
            <h3>{selectedItem.name}</h3>
            <button onClick={decrementQuantity}>-</button>
            <span>{quantity}</span>
            <button onClick={incrementQuantity}>+</button>
            <button onClick={closePopup}>Batal</button>
            <button onClick={addToCart}>Tambah ke Keranjang</button>
          </div>
        </div>
      )}
    </div>
  );
}
