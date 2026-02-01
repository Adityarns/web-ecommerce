import { useState, useEffect, useRef } from "react";
import { useCart } from "../../components/useCart";
import axios from "axios";
import {
  HotMatcha,
  IcedMatcha,
  IceCream,
  CripeImage,
  Macarons,
  Mochi,
} from "../../data";

// same mapping as Menu.jsx
const imageMap = {
  2: HotMatcha,
  3: IcedMatcha,
  4: IceCream,
  5: CripeImage,
  6: Macarons,
  7: Mochi,
};

const getImageByKodeBarang = (kodeBarang) => imageMap[kodeBarang] || null;

export default function Cart() {
  const { cartItems, clearCart } = useCart();
  const [showOrderPopup, setShowOrderPopup] = useState(false);
  const orderTimeoutRef = useRef(null);

  const handleOrderNow = () => {
    // Clear cart items
    clearCart();

    // Show popup
    setShowOrderPopup(true);

    // Clear previous timeout if any
    if (orderTimeoutRef.current) clearTimeout(orderTimeoutRef.current);

    // Auto-hide after 3s
    orderTimeoutRef.current = setTimeout(() => {
      setShowOrderPopup(false);
      orderTimeoutRef.current = null;
    }, 5000);
  };

  const handleUpdateStock = () => {
    cartItems.forEach(async (item) => {
      try {
        const response = await axios.get(
          `http://localhost:3000/Menu/${item.kode_barang}`,
        );
        const currentStock = response.data.stok_barang;
        const newStock = currentStock - item.quantity;
        await axios.put(`http://localhost:3000/Menu/${item.kode_barang}`, {
          stok_barang: newStock,
        });
      } catch (error) {
        console.error("Error updating stock:", error);
      }
    });
  };

  useEffect(() => {
    return () => {
      if (orderTimeoutRef.current) clearTimeout(orderTimeoutRef.current);
    };
  }, []);

  // Hitung grand total (numeric)
  const grandTotal = cartItems.reduce(
    (total, item) => total + (item.totalPrice || 0),
    0,
  );

  return (
    <div className="tools mt-40 mb-5 min-h-screen w-full">
      <h1 className="text-3xl/snug font-bold text-center text-[#589507]">
        Check Out
      </h1>

      <div className="max-w-4xl mx-auto px-4">
        {cartItems.length === 0 ? (
          <div className="flex items-center justify-center bg-white rounded-2xl border-2 border-gray-200 shadow-sm p-12 mt-8">
            <div className="text-center">
              <p className="text-gray-500 text-lg mb-4">
                Keranjang Anda masih kosong
              </p>
              <p className="text-gray-400">
                Silakan tambahkan menu dari halaman menu
              </p>
            </div>
          </div>
        ) : (
          <div className="mt-8 space-y-4">
            {cartItems.map((item, index) => (
              <div
                key={`${item.kode_barang}-${index}`}
                className="flex items-center bg-white rounded-2xl border-2 border-gray-200 shadow-sm hover:border-[#589507] p-6 transition-all duration-300"
              >
                
                {/* Gambar Item */}
                <div className="flex-shrink-0 mr-6">
                  <img
                    src={getImageByKodeBarang(item.kode_barang)}
                    alt={item.nama_barang}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                </div>

                {/* Info Item */}
                <div className="flex grow justify-around items-center">
                  <h3 className="text-xl font-bold text-[#589507]">
                    {item.nama_barang}
                  </h3>
                  <p className="text-gray-600">
                    Harga: Rp. {item.harga_barang}
                  </p>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                </div>

                {/* Total Harga Item */}
                <div className="text-right">
                  <p className="text-lg font-bold text-[#589507]">
                    Rp. {item.totalPrice}
                  </p>
                </div>
              </div>
            ))}

            {/* Total Keseluruhan */}
            <div className="bg-[#589507] text-white rounded-2xl p-6 mt-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Total Harga:</h2>
                <p className="text-2xl font-bold">Rp. {grandTotal}</p>
              </div>
            </div>

            {/* Button Checkout */}
            <div className="flex justify-center mt-8">
              <button
                className="bg-[#589507] text-white px-8 py-3 rounded-2xl border-2 border-[#748E63] hover:bg-[#FAF8ED] hover:text-[#748E63] transition-colors duration-300 font-bold text-lg"
                onClick={() => {
                  handleOrderNow();
                  handleUpdateStock();
                }}
              >
                Pesan Sekarang
              </button>
            </div>
          </div>
        )}
      </div>
      {/* Order Success Popup */}
      {showOrderPopup && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30"
          onClick={() => setShowOrderPopup(false)}
        >
          <div
            className="bg-white rounded-2xl p-6 shadow-2xl max-w-sm w-full text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-bold text-[#589507] mb-2">Sukses</h3>
            <p className="text-gray-700 mb-4">Pesanan berhasil diproses!</p>
            <div className="flex justify-center">
              <button
                onClick={() => setShowOrderPopup(false)}
                className="px-4 py-2 bg-[#589507] text-white rounded-lg hover:bg-[#748E63]"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
