import { motion } from "framer-motion";
import { Phone, Instagram, MapPin, Mail, Linkedin, Facebook } from "lucide-react";
import wfLogo from "@/assets/wf-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-cream">
      <div className="container-narrow py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <img
              src={wfLogo}
              alt="WF — Wellyson Freitas Imóveis"
              className="h-12 w-auto rounded-sm object-contain mb-5"
            />
            <h3 className="font-serif text-2xl font-semibold mb-4">
              Wellyson Freitas<span className="text-primary">.</span> Imóveis
            </h3>
            <p className="font-sans text-cream/60 leading-relaxed max-w-sm mb-6">
              Consultoria imobiliária especializada em imóveis para morar e investir
              em Recife e no litoral de Pernambuco. Atendimento consultivo do primeiro
              contato à assinatura do contrato.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://wa.me/5581981509195?text=Olá, vim pelo site e gostaria de conversar sobre imóveis."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/wellysonfreitasimoveis/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/wellyson-freitas/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/welysom.freitas"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="mailto:wellysonfreitasimoveis@gmail.com"
                aria-label="E-mail"
                className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-serif text-lg font-medium mb-4">Institucional</h4>
            <ul className="space-y-3">
              {[
                { label: "Sobre", href: "#sobre" },
                { label: "Serviços", href: "#servicos" },
                { label: "Imóveis", href: "#imoveis" },
                { label: "Financiamento", href: "#servicos" },
                { label: "Contato", href: "#contato" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-cream/60 hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

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
                  Rua Antônio Lumack do Monte, 96<br />
                  Empresarial Center II – 12º andar<br />
                  Boa Viagem, Recife - PE
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="https://wa.me/5581981509195?text=Olá, vim pelo site e gostaria de conversar sobre imóveis."
                  className="font-sans text-sm text-cream/60 hover:text-primary transition-colors"
                >
                  (81) 98150-9195
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:wellysonfreitasimoveis@gmail.com"
                  className="font-sans text-sm text-cream/60 hover:text-primary transition-colors break-all"
                >
                  wellysonfreitasimoveis@gmail.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="mt-12 pt-8 border-t border-cream/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-sans text-sm text-cream/40">
              © {currentYear} Wellyson Freitas Imóveis. Todos os direitos reservados.
            </p>
            <p className="font-sans text-sm text-cream/40">
              CRECI 23.117 · Política de Privacidade
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
