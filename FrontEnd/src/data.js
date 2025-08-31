import LogoImage from "./assets/logo-matcha.png";
import HeroImage from "./assets/hero-img.jpeg";
import CripeImage from "./assets/ListMenu/cripe-img.jpeg";
import HotMatcha from "./assets/ListMenu/hot-matcha-img.jpeg";
import IcedMatcha from "./assets/ListMenu/iced-matcha-img.jpeg";
import IceCream from "./assets/ListMenu/ice-cream-img.jpeg";
import Macarons from "./assets/ListMenu/macarons-img.jpeg";
import Mochi from "./assets/ListMenu/mochi-img.jpeg";
const DataImage = {
  LogoImage,
  HeroImage,
};

const MenuImage = [
  {
    id: 1,
    gambar: HotMatcha,
    name: "Hot Matcha",
  },
  {
    id: 2,
    gambar: IcedMatcha,
    name: "Iced Matcha",
  },
  {
    id: 3,
    gambar: IceCream,
    name: "Ice Cream Matcha",
  },
  {
    id: 4,
    gambar: CripeImage,
    name: "Cripe Matcha",
  },
  {
    id: 4,
    gambar: Macarons,
    name: "Macarons Matcha",
  },
  {
    id: 5,
    gambar: Mochi,
    name: "Mochi Matcha",
  },
];

export { DataImage, MenuImage };
