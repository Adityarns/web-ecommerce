import { MenuImage } from "../../data";

export default function Menu() {
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
            <div className="flex justify-center">
              <button
                className="py-2 px-6 bg-[#589507] text-[#FAF8ED] rounded-3xl border-2 border-[#748E63] hover:bg-[#FAF8ED] hover:text-[#748E63] transition-colors duration-300 font-medium"
              >
                Tambah Pesanan
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}