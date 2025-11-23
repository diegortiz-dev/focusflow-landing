"use client";
import { motion } from "framer-motion";

const features = [
  {
    title: "Pomodoro Timer",
    description: "Técnica comprovada para maximizar foco e produtividade",
    icon: "⏱️"
  },
  {
    title: "Gestão de Tarefas",
    description: "Organize e priorize suas atividades diárias",
    icon: "✅"
  },
  {
    title: "Estatísticas",
    description: "Acompanhe seu progresso e melhore continuamente",
    icon: "📊"
  },
  {
    title: "Modo Foco",
    description: "Bloqueie distrações e mantenha-se concentrado",
    icon: "🎯"
  }
];

export default function Features() {
  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16"
        >
          Recursos Poderosos
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
