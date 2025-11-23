"use client";
import { motion } from "framer-motion";

const STEPS = [
  {
    number: "01",
    title: "Configure Seu Workspace",
    description: "Crie projetos, defina metas e personalize seus intervalos Pomodoro",
    icon: "⚙️"
  },
  {
    number: "02",
    title: "Ative o Deep Focus",
    description: "Inicie sessões de foco intenso com bloqueio automático de distrações",
    icon: "🔥"
  },
  {
    number: "03",
    title: "Monitore Performance",
    description: "Acompanhe métricas em tempo real e receba insights personalizados",
    icon: "📈"
  },
  {
    number: "04",
    title: "Otimize Continuamente",
    description: "IA analisa seus padrões e sugere melhorias para maximizar resultados",
    icon: "🏆"
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-32 px-4 bg-gradient-to-b from-black via-purple-950/20 to-black overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-6">
            <span className="text-purple-400 font-semibold">PROCESSO SIMPLES</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Começar é <span className="gradient-text">Incrivelmente Fácil</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Quatro passos para transformar sua produtividade e alcançar resultados profissionais
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
          {STEPS.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative z-10 text-center"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-6 glow-purple shadow-2xl"
                >
                  <span className="text-3xl font-bold text-white">{step.number}</span>
                </motion.div>
                <div className="text-5xl mb-4">{step.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  className="absolute -top-4 -right-4 w-24 h-24 bg-purple-600/20 rounded-full blur-2xl -z-10"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-xl font-bold text-lg glow-purple-strong"
          >
            Iniciar Jornada Agora →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
