import { useState, useEffect, useRef } from "react";
import { useCart } from "../../components/useCart";
import {
  HotMatcha,
  IcedMatcha,
  IceCream,
  CripeImage,
  Macarons,
  Mochi,
} from "../../data";

// Mapping kode_barang ke gambar
const imageMap = {
  2: HotMatcha,
  3: IcedMatcha,
  4: IceCream,
  5: CripeImage,
  6: Macarons,
  7: Mochi,
};

const getImageByKodeBarang = (kodeBarang) => {
  return imageMap[kodeBarang] || null;
};

export default function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { addToCart } = useCart();

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const toastTimeoutRef = useRef(null);

  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:3000/Menu");
      if (!response.ok) {
        throw new Error("Gagal mengambil data menu");
      }
      const result = await response.json();
      setMenuItems(result.data);
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error("Error fetching menu:", err);
    } finally {
      setLoading(false);
    }
  };
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

  const handleAddToCart = () => {
    addToCart(selectedItem, quantity);
    closePopup();

    // Show toast instead of alert
    setToastMessage(
      `${selectedItem.nama_barang} (${quantity}x) berhasil ditambahkan ke keranjang!`,
    );
    setShowToast(true);

    // Clear any existing timeout
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);

    // Auto-hide toast after 3s
    toastTimeoutRef.current = setTimeout(() => {
      setShowToast(false);
      toastTimeoutRef.current = null;
    }, 3000);
  };

  if (loading) {
    return (
      <div className="mt-32 mb-5 min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Memuat menu...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-32 mb-5 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-red-600 mb-4">Error: {error}</p>
          <button
            onClick={fetchMenuData}
            className="px-4 py-2 bg-[#589507] text-white rounded-lg hover:bg-[#748E63] transition-colors"
          >
            Coba Lagi
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="tools mt-32 mb-5 min-h-screen">
      <h1 className="text-4xl/snug font-bold text-center text-[#589507]">
        List Menu
      </h1>
      <div className="md:mt-14 mt-5 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-6 max-w-[1280px] mx-auto px-4">
        {menuItems.map((menu) => (
          <div
            className="relative flex flex-col bg-gradient-to-b from-white to-gray-50 rounded-2xl border border-gray-200 shadow-md hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 cursor-pointer overflow-hidden"
            key={menu.kode_barang}
          >
            {/* Price Badge */}
            <div className="absolute top-3 right-3">
              <div className="bg-white/90 text-[#589507] font-bold px-3 py-1 rounded-full text-md shadow">
                Stok:{menu.stok_barang}
              </div>
            </div>

            {/* Image Section */}
            <div className="flex justify-center items-center p-6">
              <div className="w-[200px] h-[200px] rounded-full overflow-hidden shadow-inner">
                <img
                  src={getImageByKodeBarang(menu.kode_barang)}
                  alt={menu.nama_barang}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col items-center text-center px-6 pb-6">
              <h2 className="font-bold text-[#589507] text-xl mb-2">
                {menu.nama_barang}
              </h2>
              <p className="text-sm text-gray-600 mb-3">
                Rp.:{" "}
                <span className="font-semibold text-gray-800">
                  {menu.harga_barang}
                </span>
              </p>

              {/* Button Section */}
              <div className="w-full mt-2">
                <button
                  onClick={() => openPopup(menu)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2 px-4 bg-[#589507] text-[#FAF8ED] rounded-3xl border-2 border-[#748E63] hover:bg-[#FAF8ED] hover:text-[#748E63] transition-colors duration-300 font-medium"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Tambah Pesanan
                </button>
              </div>
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
            className="bg-white p-6 rounded-2xl shadow-2xl w-96 max-w-[90vw] text-center transform transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Item Image */}
            <div className="flex justify-center mb-6">
              <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg">
                <img
                  src={getImageByKodeBarang(selectedItem.kode_barang)}
                  alt={selectedItem.nama_barang}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Item Info */}
            <h3 className="text-2xl font-bold text-[#589507] mb-2">
              {selectedItem.nama_barang}
            </h3>
            <p className="text-lg text-gray-600 font-bold mb-2">
              Rp. {selectedItem.harga_barang}
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Stok Tersedia: {selectedItem.stok_barang}
            </p>

            {/* Quantity Selector */}
            <div className="flex items-center justify-center space-x-4 mb-6">
              <button
                onClick={decrementQuantity}
                className="bg-gray-200 rounded-full w-8 h-8 hover:bg-gray-300 transition-colors text-lg font-bold flex items-center justify-center"
              >
                -
              </button>
              <p className="text-xl font-bold w-12">{quantity}</p>
              <button
                onClick={incrementQuantity}
                className="bg-gray-200 rounded-full w-8 h-8 hover:bg-gray-300 transition-colors text-lg font-bold flex items-center justify-center"
              >
                +
              </button>
            </div>
            {/* Total Price */}
            <div className="mb-6">
              <p className="text-lg ">
                Total: {""}
                <span className="text-[#589507] font-bold">
                  {selectedItem.harga_barang * quantity}
                </span>
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-3">
              <button
                onClick={closePopup}
                className="flex-1 px-4 py-3 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
              >
                Batal
              </button>
              <button
                onClick={handleAddToCart}
                className="flex-1 px-4 py-3 bg-[#589507] text-white rounded-lg hover:bg-[#748E63] transition-colors"
              >
                Tambah ke Keranjang
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast */}
      {showToast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-[#589507] text-white px-4 py-3 rounded-lg shadow-lg z-50 transition-opacity duration-300"
        >
          {toastMessage}
        </div>
      )}
    </div>
  );
}
