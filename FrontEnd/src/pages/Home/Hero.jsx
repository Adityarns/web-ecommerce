import { ChevronRight } from "react-feather";

export default function Hero() {
  return (
    <div>
      <div className="relative hero grid py-14 items-center xl:gap-0 gap-5 px-6 w-full h-screen bg-[url(./assets/Beranda/beranda-img.jpeg)] bg-no-repeat bg-cover bg-center bg-blend-multiply before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:to-black before:opacity-50 before:pointer-events-none">
        <div className="relative flex flex-col items-center lg:items-start justify-center text-center md:text-left lg:pl-6 xl:pl-18 pb-5 md:py-56 z-10">
          <div className="pl-8">
            <div className="pt-2">
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
                <p className="flex text-2xl/snug items-center gap-2 font-bold">
                  Tentang Matcha <ChevronRight size={30}></ChevronRight>
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="About grid py-14 my-2 items-center xl:gap-0 gap-5 px-6 max-w-8xl max-h-screen mx-auto pt-28">
        <div className="flex flex-col justify-center text-center ">
          <h1 className="text-7xl/snug font-bold text-[#748E63]">
            Mengapa Harus Matcha?
          </h1>
          <div cl>Mengapa</div>
        </div>
      </div>
    </div>
  );
}
