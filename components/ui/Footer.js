"use client";
import { motion } from "framer-motion";

const FOOTER_LINKS = {
  produto: [
    { label: "Recursos", href: "#features" },
    { label: "Preços", href: "#pricing" },
    { label: "Integrações", href: "#integrations" },
    { label: "Changelog", href: "#changelog" },
    { label: "Roadmap", href: "#roadmap" }
  ],
  empresa: [
    { label: "Sobre Nós", href: "#about" },
    { label: "Blog", href: "#blog" },
    { label: "Carreiras", href: "#careers" },
    { label: "Imprensa", href: "#press" },
    { label: "Contato", href: "#contact" }
  ],
  recursos: [
    { label: "Documentação", href: "#docs" },
    { label: "API", href: "#api" },
    { label: "Suporte", href: "#support" },
    { label: "Status", href: "#status" },
    { label: "Comunidade", href: "#community" }
  ],
  legal: [
    { label: "Privacidade", href: "#privacy" },
    { label: "Termos de Uso", href: "#terms" },
    { label: "Cookies", href: "#cookies" },
    { label: "Licenças", href: "#licenses" }
  ]
};

const SOCIAL_LINKS = [
  { icon: "🐦", label: "Twitter", href: "#" },
  { icon: "💼", label: "LinkedIn", href: "#" },
  { icon: "📸", label: "Instagram", href: "#" },
  { icon: "💙", label: "Discord", href: "#" },
];

export default function Footer() {

  return (
    <footer className="relative bg-black border-t border-purple-500/20 overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-950/20 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center glow-purple">
                  <span className="text-2xl">⚡</span>
                </div>
                <span className="text-2xl font-bold gradient-text">FocusFlow</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Plataforma profissional de gestão de tempo e produtividade. Transforme sua rotina com tecnologia de ponta.
              </p>
              <div className="flex gap-3">
                {SOCIAL_LINKS.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 rounded-lg flex items-center justify-center text-xl transition-all duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {Object.entries(FOOTER_LINKS).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <h4 className="text-white font-bold mb-4 capitalize">{category}</h4>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 p-8 bg-gradient-to-r from-purple-500/10 to-purple-600/10 border border-purple-500/20 rounded-2xl backdrop-blur-sm"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-2">Fique por Dentro</h3>
            <p className="text-gray-400 mb-6">Receba dicas de produtividade e novidades em primeira mão</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="seu@email.com"
                className="flex-1 px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-lg font-semibold whitespace-nowrap glow-purple"
              >
                Inscrever-se
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-purple-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>&copy; 2025 FocusFlow. Todos os direitos reservados.</p>
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2">
                <span className="text-green-400">•</span>
                <span>Todos os sistemas operacionais</span>
              </span>
              <span>Feito por Diego Ortiz, futuro desenvolvedor</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
