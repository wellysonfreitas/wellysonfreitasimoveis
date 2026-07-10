import { motion } from "framer-motion";
import { UserCheck, Sparkles, TrendingUp, LifeBuoy, Calculator, MapPinned } from "lucide-react";

const differentials = [
  {
    icon: UserCheck,
    title: "Atendimento personalizado",
    description: "Cada cliente é único. Entendo objetivos, perfil e orçamento antes de qualquer indicação.",
  },
  {
    icon: Sparkles,
    title: "Especialista em lançamentos",
    description: "Acesso a novos empreendimentos com as melhores condições de tabela e negociação direta com as construtoras.",
  },
  {
    icon: TrendingUp,
    title: "Consultoria para investidores",
    description: "Análise de valorização, rentabilidade e potencial de locação em cada oportunidade apresentada.",
  },
  {
    icon: LifeBuoy,
    title: "Suporte completo no processo",
    description: "Acompanhamento em todas as etapas: visita, documentação, financiamento e assinatura.",
  },
  {
    icon: Calculator,
    title: "Análise de financiamento",
    description: "Simulações comparativas para escolher a estrutura de crédito mais vantajosa para você.",
  },
  {
    icon: MapPinned,
    title: "Imóveis selecionados",
    description: "Portfólio curado em Recife e no litoral de Pernambuco — só o que faz sentido para o seu perfil.",
  },
];

const DifferentialsSection = () => {
  return (
    <section className="section-padding bg-charcoal text-cream relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container-narrow relative z-10">
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
            Por que trabalhar comigo
          </h2>
          <p className="font-sans text-cream/70 leading-relaxed">
            Consultoria imobiliária com informação clara, curadoria criteriosa e presença em cada etapa.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((diff, index) => (
            <motion.div
              key={diff.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="text-left"
            >
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
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
