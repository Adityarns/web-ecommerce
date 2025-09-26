import { useState } from "react";
import { DataImage } from "../../data";
import { ChevronRight } from "react-feather";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="hero grid py-14 my-2 items-center xl:gap-0 gap-5 px-6 max-w-8xl max-h-screen mx-auto bg-[url(./assets/Beranda/beranda-img.jpeg)] bg-no-repeat bg-cover bg-center">
        <div className="flex flex-col items-center lg:items-start justify-center text-center md:text-left lg:pl-6 xl:pl-18 pb-5 md:py-56">
          <div className="pl-14">
            <div className="pt-4">
              <h1 className="text-8xl/snug font-bold text-[#FAF8ED]">
                Matcha Moments
              </h1>
              <div className="pb-6 text-2xl/tight font-medium text-left text-[#FAF8ED]">
                <p>Dari ritual tradisional Jepang hingga cangkir Anda,</p>
                <p>rasakan kelezatan matcha autentik setiap hari</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href="#about"
                className="py-1 px-6 md:py-2 md:px-8 
           bg-[#FAF8ED] text-[#748E63] 
           rounded-3xl border-2 border-[#FAF8ED] 
           hover:bg-[#748E63] hover:text-[#FAF8ED] 
           "
              >
                <p className="flex items-center gap-2 font-bold">
                  Tentang Matcha <ChevronRight size={30}></ChevronRight>
                </p>
              </a>
            </div>
          </div>
        </div>
        {/* <div className="pl-16">
          <img
            src={DataImage.HeroImage}
            alt="Hero Image"
            className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] rounded-full object-cover mx-auto border-[#748E63] border-3"
            loading="lazy"
          />
        </div> */}
      </div>

      {/* About */}
      <div className="flex flex-col items-center justify-center min-h-screen">
        {/* Tombol buka popup */}
        <button
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700"
        >
          Buka Popup
        </button>

        {/* Overlay & Popup */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
            onClick={() => setIsOpen(false)} // klik luar = tutup
          >
            <div
              className="bg-white p-6 rounded-2xl shadow-xl w-80 text-center"
              onClick={(e) => e.stopPropagation()} // biar klik popup gak nutup
            >
              <h2 className="text-xl font-bold mb-2">Halo!</h2>
              <p className="mb-4">Ini popup di tengah layar.</p>
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Tutup
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
