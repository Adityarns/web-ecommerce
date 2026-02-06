import { motion } from "framer-motion";
import { Star, ShoppingBag } from "lucide-react";
import matchaHero from "../assets/Beranda/matcha-hero.jpg";

const products = [
  {
    name: "Ceremonial Grade Matcha",
    description:
      "Matcha kelas upacara teh dari Uji, Kyoto dengan rasa halus dan warna hijau cerah.",
    price: "Rp 285.000",
    rating: 5,
    reviews: 128,
    badge: "Best Seller",
  },
  {
    name: "Premium Culinary Matcha",
    description:
      "Sempurna untuk latte, smoothie, dan kreasi kuliner dengan karakter rasa yang bold.",
    price: "Rp 165.000",
    rating: 4.8,
    reviews: 89,
    badge: null,
  },
  {
    name: "Organic First Harvest",
    description:
      "Panen pertama musim semi dengan umami intense dan rasa manis alami yang lembut.",
    price: "Rp 425.000",
    rating: 5,
    reviews: 64,
    badge: "Premium",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

export default function Products() {
  return (
    <section id="products" className="py-24 md:py-32 bg-secondary/30 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block text-primary font-medium tracking-wider uppercase text-sm mb-4">
            Koleksi Kami
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Produk <span className="text-gradient-matcha">Unggulan</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Pilihan matcha premium langsung dari perkebunan terbaik di Jepang
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-card rounded-3xl overflow-hidden shadow-soft transition-all duration-500 hover:shadow-elevated hover:-translate-y-2"
            >
              {/* Badge */}
              {product.badge && (
                <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-gradient-matcha text-primary-foreground text-xs font-semibold rounded-full">
                  {product.badge}
                </div>
              )}

              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={matchaHero}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-matcha-deep/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={
                          i < Math.floor(product.rating)
                            ? "fill-matcha-gold text-matcha-gold"
                            : "text-muted"
                        }
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({product.reviews})
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {product.description}
                </p>

                {/* Price & CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-foreground">
                    {product.price}
                  </span>
                  <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-matcha text-primary-foreground font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105">
                    <ShoppingBag size={18} />
                    Beli
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
