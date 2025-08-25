export default function App() {
  return (
    <div className="justify-center text-center  sm:pt-16">
      <div className="hero grid lg:grid-cols-2 grid-cols-1 py-10 md:py-36 items-center xl:gap-0 gap-5 px-6 max-w-7xl mx-auto animate__animated animate__fadeInUp animate__delay-0.5s">
        <div className="flex flex-col items-center lg:items-start justify-center text-center md:text-left lg:pl-6 xl:pl-30">
          <div>
            <h1 className="text-6xl/snug font-semibold text-[#589507] italic">
              Matcha Moments
            </h1>
            <p className="py-3 text-2xl">
              Dari ritual tradisional Jepang hingga cangkir Anda, rasakan
              kelezatan matcha autentik setiap hari
            </p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="#about"
              className="py-3 px-6 md:py-4 md:px-10 bg-[#144e94] hover:bg-[#146C94] rounded-3xl text-white"
            >
              About Me
            </a>
            <a
              href="#project"
              className="py-3 px-6 md:py-4 md:px-10 bg-[#0A0d14] hover:bg-[#146C94] rounded-3xl text-white border-[#144e94] border-2"
            >
              My Projects
            </a>
          </div>
        </div>

        <img
          // src={DataImage.HeroImage}
          alt="Hero Image"
          className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] rounded-full object-cover mx-auto border-[#144e94] border-3"
          loading="lazy"
        />
      </div>
    </div>
  );
}
