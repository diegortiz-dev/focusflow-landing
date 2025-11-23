"use client";
import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    name: "Remy Santos",
    role: "CEO, TechStart",
    image: "👨‍💼",
    content: "FocusFlow transformou completamente nossa equipe. Produtividade aumentou 250% e o engajamento nunca esteve tão alto.",
    rating: 5
  },
  {
    name: "Pedro Henrique",
    role: "Analista de Cybersecurity",
    image: "👨‍💻",
    content: "Finalmente consigo manter o foco em projetos complexos. A interface é impecável e as funcionalidades são exatamente o que eu precisava.",
    rating: 5
  },
  {
    name: "Mauro Do Divino",
    role: "Desenvolvedor Full Stack",
    image: "👨‍💻",
    content: "As integrações com minhas ferramentas favoritas e o analytics detalhado fazem toda diferença. Indispensável no meu workflow.",
    rating: 5
  },
  {
    name: "Duda Dias",
    role: "Médica cirurgiã",
    image: "👩‍💼",
    content: "A melhor ferramenta de produtividade que já usei. O modo Deep Focus é revolucionário e os insights são incríveis.",
    rating: 5
  },
  {
    name: "Diego Ortiz",
    role: "Empreendedor",
    image: "🧑‍💼",
    content: "ROI impressionante. Em 3 meses recuperei o investimento apenas com o aumento de produtividade. Recomendo fortemente!",
    rating: 5
  },
  {
    name: "Kleber Oliveira",
    role: "Cientista de Dados",
    image: "👩‍🔬",
    content: "Interface intuitiva, recursos poderosos e suporte excepcional. FocusFlow elevou minha produtividade a outro nível.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-32 px-4 bg-gradient-to-b from-black via-purple-950/10 to-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-6">
            <span className="text-purple-400 font-semibold">DEPOIMENTOS</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Amado por <span className="gradient-text">Profissionais</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Veja o que nossos usuários têm a dizer sobre a transformação em suas rotinas
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="relative p-8 bg-gradient-to-br from-white/5 to-white/[0.02] border border-purple-500/20 rounded-2xl backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300 h-full">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-400 rounded-full flex items-center justify-center text-2xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-bold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 text-6xl text-purple-500/10 font-serif">"</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-500 mb-8">Confiado por empresas líderes</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
            <div className="text-2xl font-bold text-gray-600">GOOGLE</div>
            <div className="text-2xl font-bold text-gray-600">MICROSOFT</div>
            <div className="text-2xl font-bold text-gray-600">AMAZON</div>
            <div className="text-2xl font-bold text-gray-600">META</div>
            <div className="text-2xl font-bold text-gray-600">APPLE</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
