import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "react-feather";

export default function Navbar() {
  const underlineClass =
    "md:absolute md:left-0 md:-bottom-1 md:w-full md:h-[2px] md:bg-[#748E63] md:scale-x-0 md:group-hover:scale-x-75 md:transition-transform md:origin-center md:duration-200";
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
        navbar w-full z-50  flex justify-around items-center
        py-6  text-[#589507] transition-all duration-300
        md:fixed md:top-0 md:left-0 
        md:bg-[#FAF8ED]/80 md:backdrop-blur-md md:shadow-md
      `}
    >
      <div className="logo flex">
        {/* <img src={DataImage.LogoImage} alt="LogoImage" className="w-[100px]" /> */}
        <h1 className="flex text-4xl font-bold bg-white text-black p-1 md:bg-transparent md:text-[#589507] items-center">
          MyMatcha
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
          <Link
            to={`/`}
            className="flex relative group text-xl font-bold md:hover:text-[#748E63]"
          >
            Home <span className={underlineClass}></span>
          </Link>
        </li>
        <li>
          <Link
            to={`/About`}
            className="flex relative group text-xl font-bold md:hover:text-[#748E63]"
          >
            About <span className={underlineClass}></span>
          </Link>
        </li>
        <li>
          <Link
            to={`/Menu`}
            className="flex relative group text-xl font-bold md:hover:text-[#748E63]"
          >
            Menu <span className={underlineClass}></span>
          </Link>
        </li>
        <li>
          <Link
            to={`/Contact`}
            className="flex relative group text-xl font-bold md:hover:text-[#748E63]"
          >
            Contact <span className={underlineClass}></span>
          </Link>
        </li>
        <li>
          <Link
            to={`/Cart`}
            className="flex relative group text-xl font-bold md:hover:text-[#748E63]"
          >
            <ShoppingCart></ShoppingCart>{" "}
            <span className={underlineClass}></span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
