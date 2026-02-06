import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Wijaya",
    role: "Yoga Instructor",
    content:
      "Matcha Moments telah menjadi bagian dari ritual pagi saya. Energinya yang tenang membantu saya fokus dalam setiap sesi yoga.",
    rating: 5,
    avatar: "S",
  },
  {
    name: "Budi Santoso",
    role: "Software Developer",
    content:
      "Beralih dari kopi ke matcha adalah keputusan terbaik. Tidak ada lagi jitters dan fokus saya jauh lebih stabil sepanjang hari.",
    rating: 5,
    avatar: "B",
  },
  {
    name: "Maya Putri",
    role: "Health Coach",
    content:
      "Kualitas matcha dari sini luar biasa. Warna hijau cerah dan rasa umami yang kaya - persis seperti yang saya coba di Kyoto!",
    rating: 5,
    avatar: "M",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6 },
  },
};

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block text-primary font-medium tracking-wider uppercase text-sm mb-4">
            Testimoni
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Apa Kata <span className="text-gradient-matcha">Mereka</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Cerita dari pelanggan yang telah merasakan manfaat matcha dalam kehidupan mereka
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative p-8 bg-card rounded-2xl border border-border/50 shadow-soft"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-gradient-matcha rounded-full flex items-center justify-center">
                  <Quote size={14} className="text-primary-foreground" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-0.5 mb-4 mt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-matcha-gold text-matcha-gold"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-matcha flex items-center justify-center text-primary-foreground font-semibold text-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
