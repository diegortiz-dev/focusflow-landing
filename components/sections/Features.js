"use client";
import { motion } from "framer-motion";

const FEATURES = [
  {
    title: "Timer Pomodoro Avançado",
    description: "Sistema inteligente com intervalos personalizados e notificações adaptativas",
    icon: "⏱️",
    gradient: "from-purple-600 to-pink-600"
  },
  {
    title: "Analytics em Tempo Real",
    description: "Dashboard completo com métricas de produtividade e insights acionáveis",
    icon: "📊",
    gradient: "from-blue-600 to-purple-600"
  },
  {
    title: "Gestão Inteligente",
    description: "IA que prioriza tarefas automaticamente baseado em deadlines e importância",
    icon: "🧠",
    gradient: "from-purple-600 to-indigo-600"
  },
  {
    title: "Modo Deep Focus",
    description: "Bloqueio total de distrações com integração de apps e websites",
    icon: "🎯",
    gradient: "from-pink-600 to-purple-600"
  },
  {
    title: "Sincronização Multi-Device",
    description: "Acesse de qualquer lugar com sync instantâneo entre todos dispositivos",
    icon: "🔄",
    gradient: "from-indigo-600 to-purple-600"
  },
  {
    title: "Integrações Premium",
    description: "Conecte com Notion, Slack, Calendar e mais de 50 ferramentas",
    icon: "🔗",
    gradient: "from-purple-600 to-blue-600"
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-32 px-4 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-6">
            <span className="text-purple-400 font-semibold">RECURSOS PREMIUM</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Tecnologia de <span className="gradient-text">Ponta</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ferramentas profissionais para maximizar sua produtividade e alcançar resultados extraordinários
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative"
            >

              
              <div className="relative p-8 bg-gradient-to-br from-white/5 to-white/[0.02] border border-purple-500/20 rounded-2xl backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center text-3xl mb-6 glow-purple`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>

                <div className="mt-6 flex items-center text-purple-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Saiba mais</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
