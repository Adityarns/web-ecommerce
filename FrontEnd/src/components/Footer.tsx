import { motion } from "framer-motion";
import { Leaf, Instagram, MessageCircle, Mail, MapPin, Phone } from "lucide-react";

const footerLinks = {
  produk: ["Ceremonial Grade", "Culinary Grade", "First Harvest", "Aksesoris"],
  perusahaan: ["Tentang Kami", "Cerita Kami", "Keberlanjutan", "Karir"],
  bantuan: ["FAQ", "Pengiriman", "Pengembalian", "Hubungi Kami"],
};

export default function Footer() {
  return (
    <footer className="bg-matcha-deep text-matcha-cream relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-matcha-light rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer */}
        <div className="py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Leaf size={28} className="text-matcha-light" />
              <span className="font-display text-2xl font-bold">
                Matcha Moments
              </span>
            </div>
            <p className="text-matcha-cream/70 leading-relaxed mb-6">
              Menghadirkan pengalaman matcha autentik Jepang ke dalam setiap cangkir Anda.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-matcha-cream/10 flex items-center justify-center transition-all duration-300 hover:bg-matcha-cream/20 hover:scale-110"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-matcha-cream/10 flex items-center justify-center transition-all duration-300 hover:bg-matcha-cream/20 hover:scale-110"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-matcha-cream/10 flex items-center justify-center transition-all duration-300 hover:bg-matcha-cream/20 hover:scale-110"
              >
                <Mail size={18} />
              </a>
            </div>
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
            >
              <h4 className="font-display text-lg font-semibold mb-6 capitalize">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-matcha-cream/70 transition-colors duration-300 hover:text-matcha-cream"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="py-8 border-t border-matcha-cream/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-sm text-matcha-cream/60">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Jakarta, Indonesia</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+62 812 3456 7890</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>hello@matchamoments.id</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-matcha-cream/10 text-center">
          <p className="text-sm text-matcha-cream/50">
            © 2024 Matcha Moments. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
