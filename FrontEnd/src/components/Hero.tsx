import { motion } from "framer-motion";
import { ChevronRight, Leaf } from "lucide-react";
import matchaHero from "../assets/Beranda/matcha-hero.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={matchaHero}
          alt="Matcha ceremony"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-matcha-deep/40 via-matcha-deep/20 to-matcha-deep/80" />
      </div>

      {/* Floating Leaves Decoration */}
      <motion.div
        className="absolute top-20 left-10 text-matcha-cream/30"
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Leaf size={60} />
      </motion.div>
      <motion.div
        className="absolute bottom-32 right-20 text-matcha-cream/20"
        animate={{ y: [0, 10, 0], rotate: [0, -8, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <Leaf size={80} />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-matcha-cream/10 backdrop-blur-sm border border-matcha-cream/20 mb-8"
          >
            <Leaf size={16} className="text-matcha-cream" />
            <span className="text-matcha-cream text-sm font-medium tracking-wide">
              Premium Japanese Matcha
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-display text-6xl md:text-7xl lg:text-8xl font-bold text-matcha-cream mb-6 leading-tight"
          >
            Matcha
            <span className="block text-matcha-light">Moments</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-10"
          >
            <p className="text-xl md:text-2xl text-matcha-cream/90 font-light leading-relaxed max-w-2xl mx-auto">
              Dari ritual tradisional Jepang hingga cangkir Anda,
              <br className="hidden md:block" />
              rasakan kelezatan matcha autentik setiap hari
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#about"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-matcha-cream text-matcha-dark font-semibold rounded-full transition-all duration-300 hover:bg-matcha-light hover:shadow-elevated hover:scale-105"
            >
              Tentang Matcha
              <ChevronRight
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="#products"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-matcha-cream/50 text-matcha-cream font-semibold rounded-full transition-all duration-300 hover:bg-matcha-cream/10 hover:border-matcha-cream"
            >
              Lihat Produk
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-matcha-cream/40 rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-3 bg-matcha-cream/60 rounded-full" />
          </motion.div>
        </motion.div> */}
      </div>
    </section>
  );
}
