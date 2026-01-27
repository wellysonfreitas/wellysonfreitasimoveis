import { motion } from "framer-motion";
import { Home, Building2, Palmtree, FileCheck, Landmark, Heart } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Primeiro Imóvel",
    description: "Assessoria completa para quem está realizando o sonho da casa própria pela primeira vez.",
  },
  {
    icon: Heart,
    title: "Minha Casa Minha Vida",
    description: "Especialista em imóveis do programa habitacional com subsídios e condições especiais.",
  },
  {
    icon: Landmark,
    title: "Aprovação de Crédito",
    description: "Suporte integral no processo de financiamento, da simulação à aprovação do crédito imobiliário.",
  },
  {
    icon: Palmtree,
    title: "Investimento no Litoral",
    description: "As melhores oportunidades para investidores em Porto de Galinhas, Muro Alto e região.",
  },
  {
    icon: Building2,
    title: "Consultoria Estratégica",
    description: "Análise personalizada para encontrar o imóvel ideal de acordo com seu perfil e objetivos.",
  },
  {
    icon: FileCheck,
    title: "Acompanhamento Completo",
    description: "Do primeiro contato à entrega das chaves: documentação, vistoria, registro e pós-venda.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block font-sans text-xs font-medium tracking-widest uppercase text-primary mb-4">
            Serviços
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight mb-4">
            Como posso ajudar você
          </h2>
          <p className="font-sans text-muted-foreground leading-relaxed">
            Ofereço consultoria personalizada para cada perfil de cliente, 
            com soluções sob medida para suas necessidades.
          </p>
        </motion.div>

        {/* Services Grid */}
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
