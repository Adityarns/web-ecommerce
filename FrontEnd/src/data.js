import LogoImage from "./assets/Beranda/logo-matcha.png";
import HeroImage from "./assets/Beranda/hero-img.jpeg";
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
    nama: "Hot Matcha",
    harga: 28,
    ket: "Minuman hangat dengan bubuk matcha premium, cocok untuk menemani waktu santai dan memberi ketenangan di setiap tegukan."
  },
  {
    id: 2,
    gambar: IcedMatcha,
    nama: "Iced Matcha",
    harga: 32,
    ket: "Sajian matcha dingin yang menyegarkan, dengan rasa khas teh hijau Jepang yang dipadukan es untuk kesegaran maksimal.",
  },
  {
    id: 3,
    gambar: IceCream,
    nama: "Ice Cream Matcha",
    harga: 18,
    ket: "Es krim lembut bercita rasa matcha autentik, manis dan creamy, sempurna sebagai pencuci mulut.",
  },
  {
    id: 4,
    gambar: CripeImage,
    nama: "Cripe Matcha",
    harga: 25,
    ket: "Cripe tipis bertekstur renyah yang dilapisi dengan krim matcha, memberikan perpaduan manis dan gurih dalam satu gigitan.",
  },
  {
    id: 4,
    gambar: Macarons,
    nama: "Macarons Matcha",
    harga: 27,
    ket: "Kue mungil berwarna cantik dengan isian krim matcha lembut, manis, dan elegan sebagai camilan mewah.",
  },
  {
    id: 5,
    gambar: Mochi,
    nama: "Mochi Matcha",
    harga: 15,
    ket: "Mochi kenyal dengan isian matcha manis, menghadirkan rasa tradisional Jepang dengan sentuhan modern.",
  },
];

export { DataImage, MenuImage };
