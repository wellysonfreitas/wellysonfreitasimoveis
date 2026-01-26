import { motion } from "framer-motion";
import { Users, Target, Shield, Zap, HeartHandshake } from "lucide-react";

const differentials = [
  {
    icon: Users,
    title: "Atendimento Humanizado",
    description: "Cada cliente é único. Entendo suas necessidades e ofereço soluções personalizadas.",
  },
  {
    icon: Target,
    title: "Consultoria Estratégica",
    description: "Análise completa do mercado para você fazer o melhor investimento possível.",
  },
  {
    icon: Shield,
    title: "Transparência Total",
    description: "Clareza em cada etapa do processo. Sem surpresas, sem letras miúdas.",
  },
  {
    icon: Zap,
    title: "Agilidade no Processo",
    description: "Otimizo prazos e burocracias para acelerar a realização do seu sonho.",
  },
  {
    icon: HeartHandshake,
    title: "Pós-Venda Dedicado",
    description: "Meu compromisso não termina na entrega das chaves. Estou sempre disponível.",
  },
];

const DifferentialsSection = () => {
  return (
    <section className="section-padding bg-charcoal text-cream relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container-narrow relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block font-sans text-xs font-medium tracking-widest uppercase text-primary mb-4">
            Diferenciais
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-4">
            Por que escolher minha consultoria
          </h2>
          <p className="font-sans text-cream/70 leading-relaxed">
            Compromisso com excelência em cada detalhe da sua jornada imobiliária.
          </p>
        </motion.div>

        {/* Differentials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {differentials.map((diff, index) => (
            <motion.div
              key={diff.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center lg:text-left"
            >
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto lg:mx-0 mb-4">
                <diff.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-medium mb-2">
                {diff.title}
              </h3>
              <p className="font-sans text-sm text-cream/60 leading-relaxed">
                {diff.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
