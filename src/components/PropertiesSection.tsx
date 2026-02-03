import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ArrowRight, BedDouble, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

// MCMV Properties
import propertyWave from "@/assets/property-wave.webp";
import propertyCitta from "@/assets/property-citta.jpeg";
import propertyJoa from "@/assets/property-joa.jpeg";
import propertyRaizes from "@/assets/property-raizes.jpeg";
import propertyPaineiras from "@/assets/property-paineiras.jpeg";
import propertyPontal from "@/assets/property-pontal.jpeg";
import propertyNattu from "@/assets/property-nattu.jpeg";
import propertyVale from "@/assets/property-vale.png";

// Litoral Properties
import propertyCosta from "@/assets/property-costa.webp";
import propertyBoulevard from "@/assets/property-boulevard.jpeg";
import propertyCostaMar from "@/assets/property-costa-mar.jpeg";
import propertyHabita from "@/assets/property-habita.jpeg";
import propertyOrla from "@/assets/property-orla.jpeg";
import propertyTropi from "@/assets/property-tropi.jpeg";

interface Property {
  image: string;
  name: string;
  location: string;
  description: string;
  type: string;
  category: "mcmv" | "litoral";
  bedrooms?: string;
  area?: string;
}

const properties: Property[] = [
  // MCMV Properties
  {
    image: propertyWave,
    name: "Wave Boa Viagem",
    location: "Imbiribeira, Recife - PE",
    description: "Próximo ao Shopping Recife e Uninassau. Excelente localização com fácil acesso e infraestrutura completa.",
    type: "MCMV",
    category: "mcmv",
  },
  {
    image: propertyCitta,
    name: "Città San Martin",
    location: "San Martin, Recife - PE",
    description: "Condomínio completo com lazer e segurança. Realize o sonho da casa própria com parcelas acessíveis.",
    type: "MCMV",
    category: "mcmv",
  },
  {
    image: propertyJoa,
    name: "Alto do Joá",
    location: "Camaragibe, PE",
    description: "Localizado ao lado do Atacadão. Infraestrutura completa e fácil acesso ao transporte público.",
    type: "MCMV",
    category: "mcmv",
  },
  {
    image: propertyRaizes,
    name: "Raízes",
    location: "Ilha do Leite, Recife - PE",
    description: "Ao lado do Colégio Salesiano. Localização privilegiada com vista panorâmica da cidade.",
    type: "Alto Padrão",
    category: "mcmv",
  },
  {
    image: propertyPaineiras,
    name: "Viva Paineiras",
    location: "Paulista, PE",
    description: "Próximo ao Terminal Pelópidas. Área de lazer completa e excelente custo-benefício.",
    type: "MCMV",
    category: "mcmv",
  },
  {
    image: propertyPontal,
    name: "Pontal de Maracaípe",
    location: "Fragoso, Olinda - PE",
    description: "Próximo a Rio Doce. Ambiente tranquilo e familiar com toda a infraestrutura necessária.",
    type: "MCMV",
    category: "mcmv",
  },
  {
    image: propertyNattu,
    name: "Pátio Nattu",
    location: "Caxangá, Recife - PE",
    description: "Próximo à UPA da Caxangá. Condomínio moderno com lazer completo para toda a família.",
    type: "MCMV",
    category: "mcmv",
  },
  {
    image: propertyVale,
    name: "Vale Caxangá Golf Club",
    location: "Várzea, Recife - PE",
    description: "Às margens da Av. Caxangá, em frente ao Golf Club. Localização nobre com área verde.",
    type: "MCMV",
    category: "mcmv",
  },
  // Litoral Properties
  {
    image: propertyCosta,
    name: "Costa dos Coqueiros",
    location: "Praia dos Carneiros, PE",
    description: "Oportunidade única no litoral sul. Ideal para investidores que buscam rentabilidade e valorização.",
    type: "Investimento",
    category: "litoral",
    bedrooms: "Studio e 2 quartos",
    area: "24.96 a 79.12m²",
  },
  {
    image: propertyBoulevard,
    name: "Boulevard Praia dos Carneiros",
    location: "Praia dos Carneiros, PE",
    description: "Empreendimento exclusivo com vista para o mar. Alta valorização e rentabilidade garantida.",
    type: "Investimento",
    category: "litoral",
    bedrooms: "Studio, 2 e 3 quartos",
    area: "25.20 a 99.61m²",
  },
  {
    image: propertyCostaMar,
    name: "Costa do Mar",
    location: "Praia dos Carneiros, PE",
    description: "Arquitetura moderna com acabamento premium. Perfeito para quem busca lazer e investimento.",
    type: "Investimento",
    category: "litoral",
    bedrooms: "Studio, 2 e 3 quartos",
    area: "24.89 a 87.23m²",
  },
  {
    image: propertyHabita,
    name: "Habitá Praia do Cupe",
    location: "Praia do Cupe, PE",
    description: "Resort residencial de alto padrão. Vista privilegiada para o mar e área de lazer completa.",
    type: "Investimento",
    category: "litoral",
    bedrooms: "2 a 6 quartos",
    area: "59.67 a 650.92m²",
  },
  {
    image: propertyOrla,
    name: "Orla Praia dos Carneiros",
    location: "Praia dos Carneiros, PE",
    description: "À beira-mar com infraestrutura completa. Ideal para férias em família ou renda por temporada.",
    type: "Investimento",
    category: "litoral",
    bedrooms: "2 a 6 quartos",
    area: "59.67 a 218.05m²",
  },
  {
    image: propertyTropi,
    name: "Tropí Eco Residência",
    location: "Praia de Muro Alto, PE",
    description: "Eco residência sustentável em uma das praias mais belas do litoral pernambucano.",
    type: "Investimento",
    category: "litoral",
    bedrooms: "2 e 3 quartos",
    area: "56.87 a 149.46m²",
  },
];

// Card for MCMV properties
const MCMVCard = ({ property, whatsappLink }: { property: Property; whatsappLink: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="group bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
  >
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
        <a href={`${whatsappLink}${encodeURIComponent(property.name)}`} target="_blank" rel="noopener noreferrer">
          Quero saber mais
          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
        </a>
      </Button>
    </div>
  </motion.div>
);

// Premium card for Litoral properties (based on reference image)
const LitoralCard = ({ property, whatsappLink }: { property: Property; whatsappLink: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="group relative rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
  >
    <a href={`${whatsappLink}${encodeURIComponent(property.name)}`} target="_blank" rel="noopener noreferrer" className="block">
      {/* Image with overlay */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent" />
        
        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          {/* Location tag */}
          <span className="font-sans text-xs font-semibold tracking-widest uppercase text-primary mb-2">
            {property.location}
          </span>
          
          {/* Property name */}
          <h3 className="font-serif text-2xl md:text-3xl font-medium text-white mb-4 leading-tight">
            {property.name}
          </h3>
          
          {/* Property details */}
          <div className="flex flex-wrap items-center gap-4 text-white/90">
            {property.bedrooms && (
              <div className="flex items-center gap-2">
                <BedDouble className="w-4 h-4 text-primary" />
                <span className="font-sans text-sm">{property.bedrooms}</span>
              </div>
            )}
            {property.area && (
              <div className="flex items-center gap-2">
                <Maximize2 className="w-4 h-4 text-primary" />
                <span className="font-sans text-sm">{property.area}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </a>
  </motion.div>
);

const PropertiesSection = () => {
  const [activeTab, setActiveTab] = useState<"litoral" | "mcmv">("litoral");
  const whatsappLink = "https://wa.me/5581981509195?text=Olá, vim pelo site e gostaria de saber mais sobre o empreendimento ";

  const mcmvProperties = properties.filter((p) => p.category === "mcmv");
  const litoralProperties = properties.filter((p) => p.category === "litoral");

  return (
    <section id="imoveis" className="section-padding bg-background">
      <div className="container-narrow">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
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

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center mb-12"
        >
          <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as "litoral" | "mcmv")} className="w-auto">
            <TabsList className="bg-muted/50 p-1 h-auto">
              <TabsTrigger
                value="litoral"
                className="font-sans text-sm font-medium px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
              >
                🏖️ Litoral & Investimento
              </TabsTrigger>
              <TabsTrigger
                value="mcmv"
                className="font-sans text-sm font-medium px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
              >
                🏠 MCMV & Residencial
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </motion.div>

        {/* Properties Grid */}
        <AnimatePresence mode="wait">
          {activeTab === "litoral" ? (
            <motion.div
              key="litoral"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {litoralProperties.map((property) => (
                <LitoralCard key={property.name} property={property} whatsappLink={whatsappLink} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="mcmv"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {mcmvProperties.map((property) => (
                <MCMVCard key={property.name} property={property} whatsappLink={whatsappLink} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PropertiesSection;
