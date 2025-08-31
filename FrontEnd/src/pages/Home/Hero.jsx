import { DataImage } from "../../data";
import { ChevronRight } from "react-feather";

export default function Hero() {
  return (
    <div>
      <div className="hero grid lg:grid-cols-2 grid-cols-1 py-10 md:py-36 items-center xl:gap-0 gap-5 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center lg:items-start justify-center text-center md:text-left lg:pl-6 xl:pl-18 pb-5">
          <div>
            <h1 className="text-6xl/snug font-medium text-[#589507] italic">
              Matcha Moments
            </h1>
            <p className="pt-2 pb-6 text-2xl text-left text-[#748E63]">
              Dari ritual tradisional Jepang hingga cangkir Anda, rasakan
              kelezatan matcha autentik setiap hari
            </p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="#about"
              className="py-2 px-6 md:py-3 md:px-8 
           bg-[#589507] text-[#FAF8ED] 
           rounded-3xl border-2 border-[#748E63] 
           hover:bg-[#FAF8ED] hover:text-[#748E63] 
           "
            >
              <p className="flex items-center gap-2">
                Tentang Matcha <ChevronRight size={30}></ChevronRight>
              </p>
            </a>
          </div>
        </div>
        <div className="pl-16">
          <img
            src={DataImage.HeroImage}
            alt="Hero Image"
            className="w-[250px] h-[250px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] rounded-full object-cover mx-auto border-[#748E63] border-3"
            loading="lazy"
          />
        </div>
      </div>

      {/* About */}
    </div>
  );
}
