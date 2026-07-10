import { motion } from "framer-motion";
import { ShieldCheck, Compass, Handshake, BadgeCheck } from "lucide-react";
import consultantPhoto from "@/assets/consultant-photo.jpg";

const AboutSection = () => {
  const stats = [
    { icon: Compass, value: "Recife & Litoral", label: "Atuação especializada" },
    { icon: ShieldCheck, value: "CRECI 23.117", label: "Registro profissional" },
    { icon: Handshake, value: "1:1", label: "Atendimento consultivo" },
    { icon: BadgeCheck, value: "Ponta a ponta", label: "Da escolha à assinatura" },
  ];

  return (
    <section id="sobre" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
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
                alt="Wellyson Freitas - Consultor Imobiliário em Recife"
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary rounded-lg -z-10" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="inline-block font-sans text-xs font-medium tracking-widest uppercase text-primary">
              Sobre o consultor
            </span>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight">
              Wellyson Freitas
            </h2>

            <div className="space-y-4 font-sans text-muted-foreground leading-relaxed">
              <p>
                Sou <strong className="text-foreground">Wellyson Freitas</strong>, consultor
                imobiliário em <strong className="text-foreground">Recife e no litoral de Pernambuco</strong>,
                especializado em ajudar quem deseja <strong className="text-foreground">morar bem</strong> ou
                <strong className="text-foreground"> construir patrimônio</strong> através do mercado imobiliário.
              </p>
              <p>
                Atendo clientes que buscam <strong className="text-foreground">apartamentos, studios e lançamentos</strong> nas
                principais regiões de Recife, e investidores interessados em
                <strong className="text-foreground"> imóveis no litoral</strong> — Porto de Galinhas, Muro Alto,
                Carneiros e Tamandaré — para segunda residência ou renda com locação de temporada.
              </p>
              <p>
                Meu trabalho é <strong className="text-foreground">consultivo</strong>: entendo o seu objetivo,
                analiso o mercado, apresento apenas empreendimentos que fazem sentido para o seu perfil e
                acompanho <strong className="text-foreground">cada etapa do processo</strong> — da escolha do
                imóvel à análise de financiamento e à assinatura do contrato. Transparência, informação
                clara e segurança em cada decisão.
              </p>
              <p className="text-sm">
                Registro profissional: <strong className="text-foreground">CRECI 23.117</strong>.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6">
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
                  <div className="font-serif text-lg md:text-xl font-medium text-foreground leading-tight">
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
