import { motion } from "framer-motion";
import {
  UserCheck,
  Sparkles,
  TrendingUp,
  Calculator,
  MapPinned,
  FileCheck,
} from "lucide-react";

const differentials = [
  {
    icon: UserCheck,
    title: "Atendimento personalizado",
    description:
      "Antes de qualquer indicação, entendo seu objetivo, perfil e orçamento. Você recebe uma seleção pensada para o seu caso — não uma lista genérica.",
  },
  {
    icon: MapPinned,
    title: "Portfólio selecionado",
    description:
      "Apartamentos, studios e imóveis de médio e alto padrão nas melhores regiões de Recife, além de oportunidades em Porto de Galinhas, Muro Alto, Carneiros e Tamandaré.",
  },
  {
    icon: Sparkles,
    title: "Especialista em lançamentos",
    description:
      "Acesso antecipado a novos empreendimentos e negociação direta com as construtoras — as melhores condições de tabela antes do mercado.",
  },
  {
    icon: TrendingUp,
    title: "Consultoria para investidores",
    description:
      "Análise de valorização, rentabilidade e potencial de locação por temporada em cada oportunidade apresentada.",
  },
  {
    icon: Calculator,
    title: "Análise de financiamento",
    description:
      "Simulações comparativas e orientação completa para escolher a estrutura de crédito mais vantajosa para o seu momento.",
  },
  {
    icon: FileCheck,
    title: "Acompanhamento ponta a ponta",
    description:
      "Da primeira visita à assinatura do contrato: documentação, negociação e prazos acompanhados de perto, com transparência em cada etapa.",
  },
];

const DifferentialsSection = () => {
  return (
    <section
      id="servicos"
      className="section-padding bg-charcoal text-cream relative overflow-hidden"
    >
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
            Consultoria & Diferenciais
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-4">
            Por que trabalhar comigo
          </h2>
          <p className="font-sans text-cream/70 leading-relaxed">
            Curadoria criteriosa, informação clara e presença em cada etapa — do
            primeiro filtro de imóveis à assinatura do contrato.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {differentials.map((diff, index) => (
            <motion.div
              key={diff.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="text-left group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/15 border border-primary/20 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-primary/25 group-hover:scale-105">
                <diff.icon className="w-5 h-5 text-primary" />
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
