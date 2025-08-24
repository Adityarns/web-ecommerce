import { useEffect, useState } from "react";
import DataImage from "../data";

export default function Navbar() {
  const underlineClass =
    "md:absolute md:left-0 md:-bottom-1 md:w-full md:h-[2px] md:bg-[#144e94] md:scale-x-0 md:group-hover:scale-x-75 md:transition-transform md:origin-center md:duration-200";
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 150);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`
        navbar w-full z-50 px-10 flex justify-between items-center
        py-6 md:py-4 text-amber-50 transition-all duration-300
        md:fixed md:top-0 md:left-0 
        md:bg-[#0A0d14]/80 md:backdrop-blur-md md:shadow-md
      `}
    >
      <div className="logo">
        <h1 className="text-3xl font-bold bg-white text-black p-1 md:bg-transparent md:text-white">
          Portfolio
        </h1>
      </div>

      <ul
        className={`
          menu flex items-center sm:gap-10 gap-4
          transition-all duration-300
          fixed left-1/2 -translate-x-1/2 z-50
          ${active ? "top-0 opacity-100" : "-top-20 opacity-0"}
          md:static md:translate-x-0 md:top-0 md:opacity-100

          bg-white/30 backdrop-blur-md rounded-br-2xl rounded-bl-2xl p-2
          md:bg-transparent md:backdrop-blur-none md:rounded-none md:p-0
        `}
      >
        <li>
          <a
            href="#home"
            className="flex relative group text-4xl font-medium md:hover:text-[#144e94]"
          >
            Home
            <span className={underlineClass}></span>
          </a>
        </li>
        <li>
          <a
            href="#about"
            className= "relative group text-lg font-medium md:hover:text-[#144e94]"
          >
            About
            <span className={underlineClass}></span>
          </a>
        </li>
        <li>
          <a
            href="#project"
            className="relative group text-lg font-medium md:hover:text-[#144e94]"
          >
            Project
            <span className={underlineClass}></span>
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="relative group text-lg font-medium md:hover:text-[#144e94]"
          >
            Contact
            <span className={underlineClass}></span>
          </a>
        </li>
      </ul>

      <ul className="flex gap-3 color-">
        <li>
          <a href="https://github.com/Adityarns">
            <img
              src={DataImage.GithubImage}
              alt="GithubImage"
              className="w-[30px]"
            />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/aditya-rahman-syach-b9096133a/">
            <img
              src={DataImage.LinkedinImage}
              alt="LinkedinImage"
              className="w-[35px]"
            />
          </a>
        </li>
      </ul>
    </div>
  );
}
