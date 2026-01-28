import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import propertyWave from "@/assets/property-wave.webp";
import propertyCosta from "@/assets/property-costa.webp";
import propertyCitta from "@/assets/property-citta.jpeg";
import propertyJoa from "@/assets/property-joa.jpeg";
import propertyRaizes from "@/assets/property-raizes.jpeg";
import propertyPaineiras from "@/assets/property-paineiras.jpeg";
import propertyPontal from "@/assets/property-pontal.jpeg";
import propertyNattu from "@/assets/property-nattu.jpeg";
import propertyVale from "@/assets/property-vale.png";

const properties = [
  {
    image: propertyWave,
    name: "Wave Boa Viagem",
    location: "Imbiribeira, Recife - PE",
    description: "Próximo ao Shopping Recife e Uninassau. Excelente localização com fácil acesso e infraestrutura completa.",
    type: "MCMV",
  },
  {
    image: propertyCosta,
    name: "Costa dos Coqueiros",
    location: "Carneiros, PE",
    description: "Oportunidade única no litoral sul. Ideal para investidores que buscam rentabilidade e valorização.",
    type: "Investimento",
  },
  {
    image: propertyCitta,
    name: "Città San Martin",
    location: "San Martin, Recife - PE",
    description: "Condomínio completo com lazer e segurança. Realize o sonho da casa própria com parcelas acessíveis.",
    type: "MCMV",
  },
  {
    image: propertyJoa,
    name: "Alto do Joá",
    location: "Camaragibe, PE",
    description: "Localizado ao lado do Atacadão. Infraestrutura completa e fácil acesso ao transporte público.",
    type: "MCMV",
  },
  {
    image: propertyRaizes,
    name: "Raízes",
    location: "Ilha do Leite, Recife - PE",
    description: "Ao lado do Colégio Salesiano. Localização privilegiada com vista panorâmica da cidade.",
    type: "Alto Padrão",
  },
  {
    image: propertyPaineiras,
    name: "Viva Paineiras",
    location: "Paulista, PE",
    description: "Próximo ao Terminal Pelópidas. Área de lazer completa e excelente custo-benefício.",
    type: "MCMV",
  },
  {
    image: propertyPontal,
    name: "Pontal de Maracaípe",
    location: "Fragoso, Olinda - PE",
    description: "Próximo a Rio Doce. Ambiente tranquilo e familiar com toda a infraestrutura necessária.",
    type: "MCMV",
  },
  {
    image: propertyNattu,
    name: "Pátio Nattu",
    location: "Caxangá, Recife - PE",
    description: "Próximo à UPA da Caxangá. Condomínio moderno com lazer completo para toda a família.",
    type: "MCMV",
  },
  {
    image: propertyVale,
    name: "Vale Caxangá Golf Club",
    location: "Várzea, Recife - PE",
    description: "Às margens da Av. Caxangá, em frente ao Golf Club. Localização nobre com área verde.",
    type: "MCMV",
  },
];

const PropertiesSection = () => {
  const whatsappLink = "https://wa.me/5581981509195?text=Olá, vim pelo site e gostaria de saber mais sobre o empreendimento ";

  return (
    <section id="imoveis" className="section-padding bg-background">
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
            Portfólio
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight mb-4">
            Imóveis em destaque
          </h2>
          <p className="font-sans text-muted-foreground leading-relaxed">
            Conheça as melhores oportunidades em Minha Casa Minha Vida e investimentos no litoral de Pernambuco.
          </p>
        </motion.div>

        {/* Properties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <motion.div
              key={property.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="absolute top-4 left-4 px-3 py-1 text-xs font-sans font-medium tracking-wide uppercase bg-primary text-primary-foreground rounded-full">
                  {property.type}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl font-medium text-foreground mb-2">
                  {property.name}
                </h3>
                <div className="flex items-center gap-1.5 text-muted-foreground mb-3">
                  <MapPin className="w-4 h-4" />
                  <span className="font-sans text-sm">{property.location}</span>
                </div>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-5">
                  {property.description}
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full btn-outline-gold font-sans text-sm font-medium gap-2 group/btn"
                >
                  <a href={`${whatsappLink}${property.name}`} target="_blank" rel="noopener noreferrer">
                    Quero saber mais
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;
