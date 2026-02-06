import { motion } from "framer-motion";
import { ArrowRight, Leaf } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-gradient-matcha relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -left-20 w-96 h-96 border border-matcha-cream rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-32 -right-32 w-[500px] h-[500px] border border-matcha-cream rounded-full"
        />
      </div>

      {/* Floating Leaves */}
      <motion.div
        className="absolute top-20 right-20 text-matcha-cream/20"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Leaf size={100} />
      </motion.div>
      <motion.div
        className="absolute bottom-20 left-20 text-matcha-cream/10"
        animate={{ y: [0, 15, 0], rotate: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Leaf size={80} />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-matcha-cream mb-6 leading-tight">
            Mulai Perjalanan
            <br />
            Matcha Anda
          </h2>
          <p className="text-lg md:text-xl text-matcha-cream/80 mb-10 leading-relaxed">
            Dapatkan diskon 15% untuk pembelian pertama dan panduan gratis
            cara menyeduh matcha yang sempurna
          </p>

          {/* Email Form */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Masukkan email Anda"
              className="w-full sm:flex-1 px-6 py-4 rounded-full bg-matcha-cream/10 border border-matcha-cream/30 text-matcha-cream placeholder:text-matcha-cream/50 focus:outline-none focus:border-matcha-cream/60 transition-colors"
            />
            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-matcha-cream text-matcha-dark font-semibold rounded-full transition-all duration-300 hover:bg-matcha-light hover:shadow-elevated hover:scale-105">
              Berlangganan
              <ArrowRight size={18} />
            </button>
          </div>

          <p className="text-sm text-matcha-cream/50 mt-4">
            Kami tidak akan mengirim spam. Baca{" "}
            <a href="#" className="underline hover:text-matcha-cream/70">
              kebijakan privasi
            </a>{" "}
            kami.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
