import { motion } from "framer-motion";
import { Building2, Palmtree, Sparkles, Landmark, LineChart, FileCheck } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Apartamentos e Studios",
    description: "Curadoria de imóveis em Recife para morar bem — nas regiões mais valorizadas da cidade.",
  },
  {
    icon: Sparkles,
    title: "Lançamentos Imobiliários",
    description: "Acesso antecipado às melhores condições de tabela em novos empreendimentos.",
  },
  {
    icon: Palmtree,
    title: "Imóveis no Litoral",
    description: "Oportunidades selecionadas em Porto de Galinhas, Carneiros, Muro Alto e Tamandaré.",
  },
  {
    icon: LineChart,
    title: "Consultoria para Investidores",
    description: "Análise de rentabilidade, valorização e potencial de locação por temporada.",
  },
  {
    icon: Landmark,
    title: "Análise de Financiamento",
    description: "Simulações e orientação completa para escolher a melhor estrutura de crédito.",
  },
  {
    icon: FileCheck,
    title: "Acompanhamento Ponta a Ponta",
    description: "Da visita ao imóvel à assinatura do contrato — com transparência em cada etapa.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block font-sans text-xs font-medium tracking-widest uppercase text-primary mb-4">
            Como trabalho
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight mb-4">
            Consultoria especializada em cada etapa
          </h2>
          <p className="font-sans text-muted-foreground leading-relaxed">
            Do primeiro filtro de imóveis à assinatura do contrato — atendimento personalizado
            para quem quer morar bem ou investir com segurança.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-serif text-xl font-medium text-foreground mb-3">
                {service.title}
              </h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
