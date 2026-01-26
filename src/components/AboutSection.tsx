import { motion } from "framer-motion";
import { Award, Users, Handshake, Clock } from "lucide-react";
import consultantPhoto from "@/assets/consultant-photo.jpg";

const AboutSection = () => {
  const stats = [
    { icon: Award, value: "100%", label: "Dedicação" },
    { icon: Users, value: "∞", label: "Comprometimento" },
    { icon: Handshake, value: "1:1", label: "Atendimento personalizado" },
    { icon: Clock, value: "24h", label: "Disponibilidade" },
  ];

  return (
    <section id="sobre" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0">
              <img
                src={consultantPhoto}
                alt="Wellyson Freitas - Consultor Imobiliário"
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
              {/* Decorative frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary rounded-lg -z-10" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="inline-block font-sans text-xs font-medium tracking-widest uppercase text-primary">
              Sobre o Consultor
            </span>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight">
              Wellyson Freitas
            </h2>
            
            <div className="space-y-4 font-sans text-muted-foreground leading-relaxed">
              <p>
                Sou um consultor imobiliário em início de carreira, mas com a determinação 
                de quem constrói sua trajetória sobre os pilares da <strong className="text-foreground">honestidade, 
                dedicação e atendimento humanizado</strong>.
              </p>
              <p>
                Há cerca de um ano no mercado imobiliário de Pernambuco, escolhi trilhar 
                esse caminho com foco total em cada cliente. Acredito que qualidade supera 
                quantidade — por isso, meu diferencial está no <strong className="text-foreground">atendimento 
                personalizado</strong> e na atenção a cada detalhe da sua jornada.
              </p>
              <p>
                Seja você um comprador de primeiro imóvel através do Minha Casa Minha Vida, 
                um investidor em busca de oportunidades no litoral, ou alguém que deseja 
                um imóvel de alto padrão, estou aqui para caminhar ao seu lado, do primeiro 
                contato até a entrega das chaves.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <div className="font-serif text-2xl md:text-3xl font-medium text-foreground">
                    {stat.value}
                  </div>
                  <div className="font-sans text-xs text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
