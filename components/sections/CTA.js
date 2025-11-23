"use client";
import { motion } from "framer-motion";

const STATS = [
  { value: "50K+", label: "Usuários Ativos" },
  { value: "2M+", label: "Horas Focadas" },
  { value: "98%", label: "Satisfação" },
  { value: "4.9/5", label: "Avaliação" },
];

const BENEFITS = [
  "Teste grátis por 14 dias",
  "Sem cartão de crédito",
  "Cancele quando quiser",
];

export default function CTA() {

  return (
    <section className="relative py-32 px-4 bg-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/20 via-transparent to-purple-600/20"
        />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-12 md:p-16 bg-gradient-to-br from-purple-600/20 to-purple-900/20 border border-purple-500/30 rounded-3xl backdrop-blur-xl text-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/20 to-purple-600/0 animate-pulse" />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative z-10"
            >
              <div className="inline-block px-4 py-2 bg-purple-500/20 border border-purple-500/40 rounded-full mb-6">
                <span className="text-purple-300 font-semibold">✨ OFERTA ESPECIAL</span>
              </div>

              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Pronto para <span className="gradient-text">10x</span> Sua Produtividade?
              </h2>

              <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
                Junte-se a milhares de profissionais que já transformaram sua rotina e alcançaram resultados extraordinários
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(139, 92, 246, 0.8)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-5 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-xl font-bold text-xl glow-purple-strong shadow-2xl"
                >
                  Começar Gratuitamente →
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-5 bg-white/5 hover:bg-white/10 text-white border-2 border-purple-500/50 rounded-xl font-bold text-xl backdrop-blur-sm"
                >
                  Agendar Demo
                </motion.button>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
                {BENEFITS.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-green-400 text-xl">✓</span>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-2xl">★</span>
            ))}
          </div>
          <p className="text-gray-400 italic max-w-2xl mx-auto">
            "FocusFlow revolucionou minha forma de trabalhar. Aumentei minha produtividade em 300% e finalmente consigo manter o foco nas tarefas importantes."
          </p>
          <p className="text-purple-400 font-semibold mt-4">
            - Rhaykony Neves, Nutricionista
          </p>
        </motion.div>
      </div>
    </section>
  );
}
