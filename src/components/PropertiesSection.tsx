import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ArrowRight, BedDouble, Maximize2, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

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
import propertyNature from "@/assets/property-nature.jpeg";
import propertyCostaAzul from "@/assets/property-costa-azul.jpeg";

interface Property {
  image: string;
  name: string;
  location: string;
  description: string;
  fullDescription?: string;
  type: string;
  category: "mcmv" | "litoral";
  bedrooms?: string;
  area?: string;
}

const properties: Property[] = [
  // MCMV Properties
  {
    image: propertyRaizes,
    name: "Raízes",
    location: "Ilha do Leite, Recife - PE",
    description: "Ao lado do Colégio Salesiano. Localização privilegiada com vista panorâmica da cidade.",
    type: "CIDADE",
    category: "mcmv",
  },
  {
    image: propertyVale,
    name: "Vale Caxangá Golf Club",
    location: "Várzea, Recife - PE",
    description: "Às margens da Av. Caxangá, em frente ao Golf Club. Localização nobre com área verde.",
    type: "CIDADE",
    category: "mcmv",
  },
  {
    image: propertyWave,
    name: "Wave Boa Viagem",
    location: "Imbiribeira, Recife - PE",
    description: "Próximo ao Shopping Recife e Uninassau. Excelente localização com fácil acesso e infraestrutura completa.",
    type: "CIDADE",
    category: "mcmv",
  },
  {
    image: propertyPaineiras,
    name: "Viva Paineiras",
    location: "Paulista, PE",
    description: "Próximo ao Terminal Pelópidas. Área de lazer completa e excelente custo-benefício.",
    type: "CIDADE",
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
  // Litoral Properties (ordenados: Costa dos Coqueiros, Orla, Habitá, Boulevard, Costa Azul, Costa do Mar, Naturê, Tropí)
  {
    image: propertyCosta,
    name: "Costa dos Coqueiros",
    location: "Praia dos Carneiros, PE",
    description: "Empreendimento em região de crescimento turístico e forte valorização, ideal para renda com locações e uso próprio.",
    fullDescription: "O Costa dos Coqueiros é um projeto voltado para investidores que buscam valorização e geração de renda no litoral nordestino. Com localização estratégica e crescente demanda turística, o empreendimento oferece estrutura de lazer, conforto e excelente potencial para locações por temporada. Uma oportunidade para quem deseja diversificar patrimônio em um destino em expansão.",
    type: "Investimento",
    category: "litoral",
    bedrooms: "Studio e 2 quartos",
    area: "24.96 a 79.12m²",
  },
  {
    image: propertyOrla,
    name: "Orla Praia dos Carneiros",
    location: "Praia dos Carneiros, PE",
    description: "Empreendimento à beira-mar com grande potencial de valorização e renda.",
    fullDescription: "O Orla Praia dos Carneiros oferece uma experiência de resort em uma das praias mais paradisíacas do Brasil. Com unidades frente mar e estrutura completa, o projeto se destaca pela alta demanda turística e potencial de rentabilidade em locações de curta temporada.",
    type: "Investimento",
    category: "litoral",
    bedrooms: "2 a 6 quartos",
    area: "59.67 a 218.05m²",
  },
  {
    image: propertyHabita,
    name: "Habitá Praia do Cupe",
    location: "Praia do Cupe, PE",
    description: "No polo turístico de Porto de Galinhas, ideal para renda recorrente com locações.",
    fullDescription: "Localizado na Praia do Cupe, em Porto de Galinhas, o Habitá é uma excelente opção para quem deseja investir em um destino consolidado. A região possui alta taxa de ocupação durante o ano inteiro, o que favorece a geração de renda com aluguel de temporada e a valorização constante do imóvel.",
    type: "Investimento",
    category: "litoral",
    bedrooms: "2 a 6 quartos",
    area: "59.67 a 650.92m²",
  },
  {
    image: propertyBoulevard,
    name: "Boulevard Praia dos Carneiros",
    location: "Praia dos Carneiros, PE",
    description: "Sofisticação em Carneiros com alto potencial de rentabilidade em locações de temporada.",
    fullDescription: "O Boulevard Praia dos Carneiros está localizado em um dos destinos mais desejados do Nordeste. O projeto une exclusividade, lazer completo e forte demanda turística durante todo o ano. Ideal para investidores que buscam renda com aluguel por temporada e valorização em uma das praias mais prestigiadas de Pernambuco.",
    type: "Investimento",
    category: "litoral",
    bedrooms: "Studio, 2 e 3 quartos",
    area: "25.20 a 99.61m²",
  },
  {
    image: propertyCostaAzul,
    name: "Costa Azul",
    location: "Praia dos Carneiros, PE",
    description: "Localização estratégica no litoral com foco em valorização e renda.",
    fullDescription: "O Costa Azul é ideal para quem busca entrar no mercado imobiliário turístico com segurança. Com lazer completo e localização em área de expansão, o empreendimento possui forte potencial de valorização e geração de renda com locações.",
    type: "Investimento",
    category: "litoral",
    bedrooms: "Studio, 2 e 3 quartos",
    area: "24.89 a 87.23m²",
  },
  {
    image: propertyCostaMar,
    name: "Costa do Mar",
    location: "Praia dos Carneiros, PE",
    description: "Projeto moderno no litoral com foco em valorização e renda com locações.",
    fullDescription: "O Costa do Mar foi pensado para quem busca investir em um imóvel versátil, com unidades funcionais e excelente potencial de valorização. Com estrutura de lazer e localização estratégica, é ideal para uso próprio e geração de renda através de locações de curta temporada.",
    type: "Investimento",
    category: "litoral",
    bedrooms: "Studio, 2 e 3 quartos",
    area: "24.89 a 87.23m²",
  },
  {
    image: propertyNature,
    name: "Naturê Eco Residência",
    location: "Muro Alto, PE",
    description: "Qualidade de vida, natureza e potencial de valorização no litoral.",
    fullDescription: "O Naturê Eco Residência combina conforto, sustentabilidade e localização estratégica. O projeto atende à crescente procura por destinos tranquilos e exclusivos, oferecendo excelente oportunidade de investimento com valorização e renda.",
    type: "Investimento",
    category: "litoral",
    bedrooms: "Studio, 2 e 3 quartos",
    area: "30.27 a 149.46m²",
  },
  {
    image: propertyTropi,
    name: "Tropí Eco Residência",
    location: "Praia de Muro Alto, PE",
    description: "Conceito sustentável e integração com a natureza em destino turístico crescente.",
    fullDescription: "O Tropí Eco Residência traz uma proposta moderna e sustentável, com integração à natureza e foco em bem-estar. Ideal para quem busca um imóvel diferenciado para uso próprio e também para locação em um mercado que valoriza experiências exclusivas.",
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
const LitoralCard = ({ property, whatsappLink }: { property: Property; whatsappLink: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
    >
      {/* Image with overlay */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/50 to-transparent" />
        
        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          {/* Location tag */}
          <span className="font-sans text-xs font-semibold tracking-widest uppercase text-primary mb-2">
            {property.location}
          </span>
          
          {/* Property name */}
          <h3 className="font-serif text-xl md:text-2xl font-medium text-white mb-3 leading-tight">
            {property.name}
          </h3>
          
          {/* Property details */}
          <div className="flex flex-wrap items-center gap-3 text-white/90 mb-3">
            {property.bedrooms && (
              <div className="flex items-center gap-1.5">
                <BedDouble className="w-4 h-4 text-primary" />
                <span className="font-sans text-xs">{property.bedrooms}</span>
              </div>
            )}
            {property.area && (
              <div className="flex items-center gap-1.5">
                <Maximize2 className="w-4 h-4 text-primary" />
                <span className="font-sans text-xs">{property.area}</span>
              </div>
            )}
          </div>

          {/* Short description */}
          <p className="font-sans text-xs text-white/80 leading-relaxed mb-3">
            {property.description}
          </p>

          {/* Collapsible full description */}
          {property.fullDescription && (
            <Collapsible open={isOpen} onOpenChange={setIsOpen}>
              <CollapsibleTrigger className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors mb-3">
                <span className="font-sans text-xs font-medium">
                  {isOpen ? "Ver menos" : "Ver mais detalhes"}
                </span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
              </CollapsibleTrigger>
              <CollapsibleContent className="overflow-hidden data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up">
                <p className="font-sans text-xs text-white/70 leading-relaxed mb-3">
                  {property.fullDescription}
                </p>
              </CollapsibleContent>
            </Collapsible>
          )}

          {/* CTA Button */}
          <Button
            asChild
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-sans text-sm font-medium gap-2 group/btn"
          >
            <a href={`${whatsappLink}${encodeURIComponent(property.name)}`} target="_blank" rel="noopener noreferrer">
              Quero saber mais
              <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

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
            <TabsList className="bg-card border border-border p-1.5 h-auto rounded-full shadow-lg">
              <TabsTrigger
                value="litoral"
                className="font-sans text-sm font-medium px-8 py-3 rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md transition-all duration-300"
              >
                <span className="mr-2">🏖️</span>
                Litoral & Investimento
              </TabsTrigger>
              <TabsTrigger
                value="mcmv"
                className="font-sans text-sm font-medium px-8 py-3 rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md transition-all duration-300"
              >
                <span className="mr-2">🏠</span>
                MCMV & Residencial
              MCMV & Cidade
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
