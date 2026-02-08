import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ArrowRight, BedDouble, Maximize2, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

// MCMV & Cidade Properties
import propertyWave from "@/assets/property-wave.webp";
import propertyCitta from "@/assets/property-citta.jpeg";
import propertyJoa from "@/assets/property-joa.jpeg";
import propertyRaizes from "@/assets/property-raizes.jpeg";
import propertyPaineiras from "@/assets/property-paineiras.jpeg";
import propertyPontal from "@/assets/property-pontal.jpeg";
import propertyNattu from "@/assets/property-nattu.jpeg";
import propertyVale from "@/assets/property-vale.png";
import propertySplendore from "@/assets/property-splendore.jpg";
import propertyEstilo from "@/assets/property-estilo.webp";
import propertySolare from "@/assets/property-solare.png";
import propertyHori from "@/assets/property-hori.png";
import propertyCandeias from "@/assets/property-candeias.jpg";
import propertyConquista from "@/assets/property-conquista.webp";
import propertyPrimavera from "@/assets/property-primavera.webp";
import propertyCurado from "@/assets/property-curado.jpg";
import propertyPalmeiras from "@/assets/property-palmeiras.jpg";
import propertyParaiso from "@/assets/property-paraiso.jpg";

// Litoral Properties
import propertyCosta from "@/assets/property-costa.webp";
import propertyBoulevard from "@/assets/property-boulevard.jpeg";
import propertyCostaMar from "@/assets/property-costa-mar.jpeg";
import propertyHabita from "@/assets/property-habita.jpeg";
import propertyOrla from "@/assets/property-orla.jpeg";
import propertyTropi from "@/assets/property-tropi.jpeg";
import propertyNature from "@/assets/property-nature.jpeg";
import propertyCostaAzul from "@/assets/property-costa-azul.jpeg";
import propertyGranResort from "@/assets/property-gran-resort.jpg";
import propertyKoa from "@/assets/property-koa.jpeg";
import propertyMauna from "@/assets/property-mauna.jpg";
import propertyNau from "@/assets/property-nau.jpg";
import propertyMarano from "@/assets/property-marano.png";

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
  // MCMV & Cidade Properties - Nova ordem: Raízes, Splendore, Vale, Wave, depois intercalando
  {
    image: propertyRaizes,
    name: "Raízes",
    location: "Ilha do Leite, Recife - PE",
    description: "Ao lado do Colégio Salesiano. Localização privilegiada no centro do Recife com fácil acesso e toda infraestrutura urbana.",
    type: "CIDADE",
    category: "mcmv",
    bedrooms: "2, 3 e 4 quartos",
    area: "50 a 196m²",
  },
  {
    image: propertySplendore,
    name: "Splendore Boa Viagem",
    location: "Boa Viagem, Recife - PE",
    description: "Empreendimento moderno em uma das regiões mais valorizadas do Recife, com lazer completo e acabamento de alto padrão.",
    type: "CIDADE",
    category: "mcmv",
    bedrooms: "2 e 3 quartos",
    area: "55 a 75m²",
  },
  {
    image: propertyVale,
    name: "Vale Caxangá Golf Club",
    location: "Várzea, Recife - PE",
    description: "Às margens da Av. Caxangá, em frente ao Golf Club. Localização nobre com área verde e qualidade de vida.",
    type: "CIDADE",
    category: "mcmv",
    bedrooms: "2 quartos",
    area: "47 a 61m²",
  },
  {
    image: propertyWave,
    name: "Wave Boa Viagem",
    location: "Imbiribeira, Recife - PE",
    description: "Próximo ao Shopping Recife e Uninassau. Excelente localização com fácil acesso e infraestrutura completa.",
    type: "CIDADE",
    category: "mcmv",
    bedrooms: "2 e 3 quartos",
    area: "46 a 58m²",
  },
  {
    image: propertyEstilo,
    name: "Estilo Boa Viagem",
    location: "Imbiribeira, Recife - PE",
    description: "Apartamentos de 2 e 3 quartos com suíte e varanda, condomínio com lazer completo. Próximo ao metrô e Shopping Recife.",
    type: "CIDADE",
    category: "mcmv",
    bedrooms: "2 e 3 quartos",
    area: "46 a 58m²",
  },
  {
    image: propertyConquista,
    name: "Conquista Paulista",
    location: "Maranguape I, Paulista - PE",
    description: "Condomínio Minha Casa Minha Vida com estrutura completa, lazer e segurança para toda a família.",
    type: "MCMV",
    category: "mcmv",
    bedrooms: "2 quartos",
    area: "41m²",
  },
  {
    image: propertySolare,
    name: "Pátio Solare",
    location: "Imbiribeira, Recife - PE",
    description: "Apartamentos de 2 quartos com suíte e varanda. Lazer completo com piscina, espaço fitness e praça piquenique.",
    type: "CIDADE",
    category: "mcmv",
    bedrooms: "2 quartos",
    area: "48 a 52m²",
  },
  {
    image: propertyPrimavera,
    name: "Viva Vida Primavera",
    location: "Nova Tiúma, São Lourenço da Mata - PE",
    description: "Empreendimento MCMV em bairro planejado com infraestrutura completa e fácil acesso ao centro do Recife.",
    type: "MCMV",
    category: "mcmv",
    bedrooms: "2 quartos",
    area: "36m²",
  },
  {
    image: propertyHori,
    name: "Pátio Horí",
    location: "Caxangá, Recife - PE",
    description: "Condomínio moderno com lazer completo incluindo piscina, quadra e área verde. Localização privilegiada na Caxangá.",
    type: "CIDADE",
    category: "mcmv",
    bedrooms: "2 quartos",
    area: "45 a 55m²",
  },
  {
    image: propertyCurado,
    name: "Vila Novo Curado",
    location: "Curado III, Jaboatão - PE",
    description: "Apartamentos MCMV com entrada facilitada em até 60 mensais. Lazer completo e localização estratégica.",
    type: "MCMV",
    category: "mcmv",
    bedrooms: "2 quartos",
    area: "45 a 52m²",
  },
  {
    image: propertyCandeias,
    name: "Candeias Life Club",
    location: "Candeias, Jaboatão - PE",
    description: "Apartamentos com benefícios MCMV, lazer completo com piscina adulto e infantil, coworking e espaço fitness.",
    type: "CIDADE",
    category: "mcmv",
    bedrooms: "2 e 3 quartos",
    area: "43 a 54m²",
  },
  {
    image: propertyPalmeiras,
    name: "Vila das Palmeiras",
    location: "PE-22, Maranguape II, Paulista - PE",
    description: "Apartamentos MCMV com 2 quartos e suíte, varanda e vaga de garagem. Infraestrutura completa e lazer.",
    type: "MCMV",
    category: "mcmv",
    bedrooms: "2 quartos",
    area: "51 a 60m²",
  },
  {
    image: propertyCitta,
    name: "Città San Martin",
    location: "San Martin, Recife - PE",
    description: "Condomínio completo com lazer e segurança. Realize o sonho da casa própria com parcelas acessíveis.",
    type: "CIDADE",
    category: "mcmv",
    bedrooms: "1 e 2 quartos",
    area: "33 a 35m²",
  },
  {
    image: propertyParaiso,
    name: "Vila do Paraíso",
    location: "Nossa Sra. do Ó, Paulista - PE",
    description: "Apartamentos de 48m² com varanda, área de lazer completa pensada para o bem-estar e tranquilidade da família.",
    type: "MCMV",
    category: "mcmv",
    bedrooms: "2 quartos",
    area: "48m²",
  },
  {
    image: propertyJoa,
    name: "Alto do Joá",
    location: "Camaragibe, PE",
    description: "Localizado ao lado do Atacadão. Infraestrutura completa e fácil acesso ao transporte público.",
    type: "MCMV",
    category: "mcmv",
    bedrooms: "2 quartos",
    area: "41m²",
  },
  {
    image: propertyPaineiras,
    name: "Viva Paineiras",
    location: "Jardim Paulista, Paulista - PE",
    description: "Próximo ao Terminal Pelópidas. Área de lazer completa e excelente custo-benefício.",
    type: "CIDADE",
    category: "mcmv",
    bedrooms: "2 quartos",
    area: "50 a 54m²",
  },
  {
    image: propertyPontal,
    name: "Pontal de Maracaípe",
    location: "Fragoso, Olinda - PE",
    description: "Próximo a Rio Doce. Ambiente tranquilo e familiar com toda a infraestrutura necessária.",
    type: "MCMV",
    category: "mcmv",
    bedrooms: "2 quartos",
    area: "41m²",
  },
  {
    image: propertyNattu,
    name: "Pátio Nattu",
    location: "Caxangá, Recife - PE",
    description: "Próximo à UPA da Caxangá. Condomínio moderno com lazer completo para toda a família.",
    type: "CIDADE",
    category: "mcmv",
    bedrooms: "2 quartos",
    area: "45m²",
  },
  // Litoral Properties
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
  {
    image: propertyGranResort,
    name: "Gran Resort Maragogi",
    location: "Praia de Maragogi, AL",
    description: "Resort de alto padrão em Maragogi, com grande potencial de valorização e renda com locação por temporada.",
    fullDescription: "Um resort imobiliário de alto padrão no coração do Caribe Brasileiro. O Gran Resort Maragogi une localização estratégica à beira-mar de Peroba com um projeto voltado para lazer completo, valorização e alta demanda por locação por temporada. Com unidades compactas e funcionais, é uma excelente oportunidade para quem busca investir em uma das regiões que mais cresce no turismo do Nordeste, próxima ao futuro aeroporto de Maragogi e com grande potencial de rentabilidade.",
    type: "Investimento",
    category: "litoral",
    bedrooms: "Studios, 1 e 2 quartos",
    area: "22.50 a 84m²",
  },
  {
    image: propertyKoa,
    name: "KOA",
    location: "Porto de Galinhas, PE",
    description: "Projeto moderno com perfil de investimento e alta demanda por locações no litoral.",
    fullDescription: "O KOA é um empreendimento com conceito moderno e lifestyle praiano, pensado para quem deseja unir lazer, conforto e investimento em uma região turística em crescimento. Com unidades compactas e áreas de convivência que valorizam a experiência do morador e do hóspede, o projeto se destaca como opção ideal para segunda moradia ou geração de renda com aluguel de temporada.",
    type: "Investimento",
    category: "litoral",
    bedrooms: "Studio e 2 quartos",
    area: "24 a 65m²",
  },
  {
    image: propertyMarano,
    name: "Marano Beira-Mar",
    location: "Porto de Galinhas, PE",
    description: "Beira-mar em Porto de Galinhas com rooftop e lazer completo — ideal para rentabilidade com locações.",
    fullDescription: "Localizado à beira-mar de Porto de Galinhas, o Marano entrega sofisticação e exclusividade em um dos destinos mais desejados do Nordeste. O empreendimento oferece studios a duplex com varanda gourmet e rooftop com vista para o mar, além de lazer completo com piscina, academia e espaços de convivência. Ideal para investidores que buscam valorização patrimonial e excelente retorno com locações de curta temporada.",
    type: "Investimento",
    category: "litoral",
    bedrooms: "Studio a 2 quartos",
    area: "20 a 70m²",
  },
  {
    image: propertyMauna,
    name: "Mauna",
    location: "Praia de Tamandaré, PE",
    description: "Empreendimento moderno com forte potencial de valorização e renda com locação.",
    fullDescription: "O Mauna é um projeto que une arquitetura contemporânea, conforto e praticidade em uma proposta voltada para moradia de lazer e investimento. Com unidades compactas e estrutura pensada para o dia a dia e temporadas, o empreendimento se destaca pela valorização da região e pelo potencial de retorno com aluguel por temporada.",
    type: "Investimento",
    category: "litoral",
    bedrooms: "1 e 2 quartos",
    area: "35 a 70m²",
  },
  {
    image: propertyNau,
    name: "Nau Home Resort",
    location: "Praia dos Carneiros, PE",
    description: "Resort residencial com lazer completo e alto potencial de retorno em locações.",
    fullDescription: "O Nau Home Resort foi planejado para oferecer a experiência de um resort com a praticidade de um investimento imobiliário inteligente. Com lazer completo, unidades funcionais e localização estratégica no litoral, o projeto atende tanto quem busca um refúgio à beira-mar quanto investidores interessados em renda recorrente com locações de temporada.",
    type: "Investimento",
    category: "litoral",
    bedrooms: "Studio e 1 quarto",
    area: "20 a 59m²",
  },
];

const ITEMS_PER_PAGE = 6;

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
      {(property.bedrooms || property.area) && (
        <div className="flex flex-wrap items-center gap-3 text-muted-foreground mb-3">
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
      )}
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

// Premium card for Litoral properties
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
  const [showAllLitoral, setShowAllLitoral] = useState(false);
  const [showAllMcmv, setShowAllMcmv] = useState(false);
  const whatsappLink = "https://wa.me/5581981509195?text=Olá, vim pelo site e gostaria de saber mais sobre o empreendimento ";

  const mcmvProperties = properties.filter((p) => p.category === "mcmv");
  const litoralProperties = properties.filter((p) => p.category === "litoral");

  const visibleLitoralProperties = showAllLitoral 
    ? litoralProperties 
    : litoralProperties.slice(0, ITEMS_PER_PAGE);
  
  const visibleMcmvProperties = showAllMcmv 
    ? mcmvProperties 
    : mcmvProperties.slice(0, ITEMS_PER_PAGE);

  const hasMoreLitoral = litoralProperties.length > ITEMS_PER_PAGE;
  const hasMoreMcmv = mcmvProperties.length > ITEMS_PER_PAGE;

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
            >
              {/* Grid with fade effect for hidden items */}
              <div className="relative">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {visibleLitoralProperties.map((property) => (
                    <LitoralCard key={property.name} property={property} whatsappLink={whatsappLink} />
                  ))}
                </div>
                
                {/* Subtle indicator when not showing all */}
                {!showAllLitoral && hasMoreLitoral && (
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
                )}
              </div>
              
              {/* See more button */}
              {hasMoreLitoral && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-center mt-8"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => setShowAllLitoral(!showAllLitoral)}
                    className="btn-outline-gold font-sans font-medium gap-2 group"
                  >
                    {showAllLitoral ? (
                      <>
                        Ver menos
                        <ChevronDown className="w-4 h-4 rotate-180 transition-transform" />
                      </>
                    ) : (
                      <>
                        Ver mais {litoralProperties.length - ITEMS_PER_PAGE} opções
                        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </Button>
                </motion.div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="mcmv"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Grid with fade effect for hidden items */}
              <div className="relative">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {visibleMcmvProperties.map((property) => (
                    <MCMVCard key={property.name} property={property} whatsappLink={whatsappLink} />
                  ))}
                </div>
                
                {/* Subtle indicator when not showing all */}
                {!showAllMcmv && hasMoreMcmv && (
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
                )}
              </div>
              
              {/* See more button */}
              {hasMoreMcmv && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-center mt-8"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => setShowAllMcmv(!showAllMcmv)}
                    className="btn-outline-gold font-sans font-medium gap-2 group"
                  >
                    {showAllMcmv ? (
                      <>
                        Ver menos
                        <ChevronDown className="w-4 h-4 rotate-180 transition-transform" />
                      </>
                    ) : (
                      <>
                        Ver mais {mcmvProperties.length - ITEMS_PER_PAGE} opções
                        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </Button>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PropertiesSection;
