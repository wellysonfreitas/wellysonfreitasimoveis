import { motion } from "framer-motion";
import { Phone, Instagram, MapPin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-cream">
      <div className="container-narrow py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <h3 className="font-serif text-2xl font-semibold mb-4">
              WF<span className="text-primary">.</span>Imóveis
            </h3>
            <p className="font-sans text-cream/60 leading-relaxed max-w-sm mb-6">
              Consultoria imobiliária especializada em transformar o sonho da 
              casa própria em realidade. Atuando em todo o estado de Pernambuco.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://wa.me/5581981509195?text=Olá, vim pelo site e gostaria de saber mais sobre imóveis."
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/rcimoveis"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:contato@rcimoveis.com.br"
                className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-serif text-lg font-medium mb-4">Navegação</h4>
            <ul className="space-y-3">
              {["Sobre", "Serviços", "Imóveis", "Depoimentos"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="font-sans text-sm text-cream/60 hover:text-primary transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-serif text-lg font-medium mb-4">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="font-sans text-sm text-cream/60">
                  Atuação em todo o estado de Pernambuco
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="https://wa.me/5581981509195?text=Olá, vim pelo site e gostaria de saber mais sobre imóveis."
                  className="font-sans text-sm text-cream/60 hover:text-primary transition-colors"
                >
                  (81) 98150-9195
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:contato@rcimoveis.com.br"
                  className="font-sans text-sm text-cream/60 hover:text-primary transition-colors"
                >
                  contato@rcimoveis.com.br
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-cream/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-sans text-sm text-cream/40">
              © {currentYear} RC Imóveis. Todos os direitos reservados.
            </p>
            <p className="font-sans text-sm text-cream/40">
              CRECI-PE: 00000-J
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
