import { motion } from "framer-motion";
import { Heart, Zap, Brain, Shield, Sparkles, Leaf } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Energi Stabil",
    description:
      "L-theanine dan kafein alami memberikan energi yang stabil tanpa jitters atau crash.",
  },
  {
    icon: Brain,
    title: "Fokus Tajam",
    description:
      "Tingkatkan konsentrasi dan kejernihan mental dengan kombinasi unik amino acid.",
  },
  {
    icon: Heart,
    title: "Jantung Sehat",
    description:
      "Antioksidan catechin membantu menjaga kesehatan kardiovaskular Anda.",
  },
  {
    icon: Shield,
    title: "Antioksidan Tinggi",
    description:
      "137x lebih banyak antioksidan EGCG dibanding teh hijau biasa.",
  },
  {
    icon: Sparkles,
    title: "Detoks Alami",
    description:
      "Klorofil tinggi membantu membersihkan racun dari tubuh secara natural.",
  },
  {
    icon: Leaf,
    title: "100% Organik",
    description:
      "Dipetik langsung dari kebun teh organik bersertifikat di Uji, Jepang.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function WhyMatcha() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

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
            Manfaat Luar Biasa
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Mengapa Harus{" "}
            <span className="text-gradient-matcha">Matcha?</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Temukan rahasia kesehatan yang telah dinikmati masyarakat Jepang
            selama berabad-abad
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative p-8 rounded-2xl bg-gradient-card border border-border/50 transition-all duration-500 hover:shadow-card hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-matcha flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                <benefit.icon size={24} className="text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>

              {/* Hover Accent */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
