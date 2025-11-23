"use client";
import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Defina suas Tarefas",
    description: "Liste o que precisa ser feito e priorize"
  },
  {
    number: "2",
    title: "Inicie o Timer",
    description: "Use a técnica Pomodoro: 25 min de foco"
  },
  {
    number: "3",
    title: "Faça uma Pausa",
    description: "Descanse 5 minutos entre sessões"
  },
  {
    number: "4",
    title: "Acompanhe o Progresso",
    description: "Veja suas estatísticas e melhore"
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16"
        >
          Como Funciona
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
