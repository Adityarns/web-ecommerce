import { useCart } from "../../components/useCart";

export default function Cart() {
  const { cartItems } = useCart();

  // Hitung grand total
  const grandTotal = cartItems.reduce((total, item) => total + item.totalPrice, 0);

  return (
    <div className="tools mt-40 mb-5 min-h-screen w-full">
      <h1 className="text-3xl/snug font-bold text-center text-[#589507]">
        Check Out
      </h1>
      
      <div className="max-w-4xl mx-auto px-4">
        {cartItems.length === 0 ? (
          // Tampilan ketika cart kosong
          <div className="flex items-center justify-center bg-white rounded-2xl border-2 border-gray-200 shadow-sm p-12 mt-8">
            <div className="text-center">
              <p className="text-gray-500 text-lg mb-4">Keranjang Anda masih kosong</p>
              <p className="text-gray-400">Silakan tambahkan menu dari halaman menu</p>
            </div>
          </div>
        ) : (
          // Tampilan ketika ada item di cart
          <div className="mt-8 space-y-4">
            {cartItems.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="flex items-center bg-white rounded-2xl border-2 border-gray-200 shadow-sm hover:border-[#589507] p-6 transition-all duration-300"
              >
                {/* Gambar Item */}
                <div className="flex-shrink-0 mr-6">
                  <img
                    src={item.gambar}
                    alt={item.nama}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                </div>

                {/* Info Item */}
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-[#589507] mb-1">
                    {item.nama}
                  </h3>
                  <p className="text-gray-600 mb-2">
                    Harga: Rp. {item.harga}K
                  </p>
                  <p className="text-gray-600">
                    Quantity: {item.quantity}
                  </p>
                </div>

                {/* Total Harga Item */}
                <div className="text-right">
                  <p className="text-lg font-bold text-[#589507]">
                    Rp. {item.totalPrice}K
                  </p>
                </div>
              </div>
            ))}

            {/* Total Keseluruhan */}
            <div className="bg-[#589507] text-white rounded-2xl p-6 mt-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Total Harga:</h2>
                <p className="text-2xl font-bold">Rp. {grandTotal}K</p>
              </div>
            </div>

            {/* Button Checkout */}
            <div className="flex justify-center mt-8">
              <button className="bg-[#589507] text-white px-8 py-3 rounded-2xl border-2 border-[#748E63] hover:bg-[#FAF8ED] hover:text-[#748E63] transition-colors duration-300 font-bold text-lg">
                Proses Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}