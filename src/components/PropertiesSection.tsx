import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ArrowRight, BedDouble, Maximize2, ChevronDown, ChevronRight, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

// Cidade Properties
import propertyWave from "@/assets/property-wave.webp";
import propertyRaizes from "@/assets/property-raizes.jpeg";
import propertyPaineiras from "@/assets/property-paineiras.jpeg";
import propertyVale from "@/assets/property-vale.png";
import propertySplendore from "@/assets/property-splendore.jpg";
import propertyEstilo from "@/assets/property-estilo.webp";
import propertySolare from "@/assets/property-solare.png";
import propertyHori from "@/assets/property-hori.png";
import propertyCandeias from "@/assets/property-candeias.jpg";
import propertyValeGuararapes from "@/assets/property-vale-guararapes.jpg";
import propertyPatioCamino from "@/assets/property-patio-camino.jpg";
import propertyElevare from "@/assets/property-elevare.jpg";
import propertyMillennium from "@/assets/property-millennium.jpg";
import propertyVilaGiovanna from "@/assets/property-vila-giovanna.jpg";
import propertyParcCollege from "@/assets/property-parc-college.jpg";
import propertyPalacioVideiras from "@/assets/property-palacio-videiras.jpg";
import propertyIsaMelo from "@/assets/property-isa-melo.jpg";
import propertyIlhaRetiroBoulevard from "@/assets/property-ilha-retiro-boulevard.jpg";
import propertyAurumHall from "@/assets/property-aurum-hall.jpg";
import propertyMorata from "@/assets/property-morata.jpg";
import propertyBeiraMarPiedade from "@/assets/property-beira-mar-piedade.jpg";
import propertyLuarParque from "@/assets/property-luar-parque.jpg";
import propertyLikeClub from "@/assets/property-like-club.jpg";

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
  category: "cidade" | "litoral";
  bedrooms?: string;
  area?: string;
  price?: string;
}

const properties: Property[] = [
  // Cidade — Lançamentos e alto valor
  {
    image: propertyAurumHall,
    name: "Aurum Hall",
    location: "Casa Forte, Recife - PE",
    description: "Lançamento premium ao lado da Praça de Casa Forte. Apartamentos com 3 suítes e opção duplex, rooftop com piscina e wellness studio.",
    type: "LANÇAMENTO",
    category: "cidade",
    bedrooms: "3 suítes",
    area: "103 a 136m²",
    price: "A partir de R$ 1.425.000",
  },
  {
    image: propertyBeiraMarPiedade,
    name: "Beira Mar Piedade Prince",
    location: "Piedade, Jaboatão - PE",
    description: "Beira-mar de Piedade com quase 3.000m² de lazer. 3 quartos com até 3 suítes, projeto assinado por Pontual Arquitetos.",
    type: "LANÇAMENTO",
    category: "cidade",
    bedrooms: "3 quartos, até 3 suítes",
    area: "97 a 117m²",
    price: "A partir de R$ 1.394.000",
  },
  {
    image: propertySplendore,
    name: "Splendore Boa Viagem",
    location: "Boa Viagem, Recife - PE",
    description: "Empreendimento moderno em uma das regiões mais valorizadas do Recife, com lazer completo e acabamento de alto padrão.",
    type: "CIDADE",
    category: "cidade",
    bedrooms: "3 quartos - até 3 suítes",
    area: "70 a 86m²",
    price: "A partir de R$ 914.000",
  },
  {
    image: propertyPalacioVideiras,
    name: "Palácio das Videiras",
    location: "Madalena, Recife - PE",
    description: "Lançamento premium ao lado da Praça Eça de Queiroz. Unidades totalmente nascentes, varanda gourmet, arquitetura Pontual Arquitetos.",
    type: "LANÇAMENTO",
    category: "cidade",
    bedrooms: "3 quartos, 1 ou 3 suítes",
    area: "76 ou 104m²",
    price: "A partir de R$ 801.000",
  },
  {
    image: propertyRaizes,
    name: "Raízes",
    location: "Ilha do Leite, Recife - PE",
    description: "Ao lado do Colégio Salesiano. Localização privilegiada no centro do Recife com fácil acesso e toda infraestrutura urbana.",
    type: "CIDADE",
    category: "cidade",
    bedrooms: "2, 3 e 4 quartos",
    area: "50 a 196m²",
    price: "A partir de R$ 700.000",
  },
  {
    image: propertyParcCollege,
    name: "Parc College",
    location: "Boa Viagem, Recife - PE",
    description: "Alto padrão na Alameda das Hortências, entre os melhores colégios da região. Obras avançadas com rooftop premium e beach tennis.",
    type: "EM CONSTRUÇÃO",
    category: "cidade",
    bedrooms: "3 quartos com suíte",
    area: "61 a 66m²",
    price: "A partir de R$ 639.000",
  },
  {
    image: propertyMillennium,
    name: "Millennium Urban Home",
    location: "Boa Viagem, Recife - PE",
    description: "Pré-lançamento em Boa Viagem com studios e 2 quartos, rooftop com piscina de borda infinita e vista para o mar.",
    type: "PRÉ-LANÇAMENTO",
    category: "cidade",
    bedrooms: "Studios e 2 quartos",
    area: "24 a 50m²",
    price: "Studio a partir de R$ 316.000 · 2 quartos a partir de R$ 579.000",
  },
  {
    image: propertyElevare,
    name: "Elevare Smart Home",
    location: "Setúbal, Recife - PE",
    description: "Lançamento tecnológico com fechadura eletrônica, acesso por biometria facial, rooftop 180° e áreas comuns decoradas.",
    type: "LANÇAMENTO",
    category: "cidade",
    bedrooms: "Studio, 1 e 2 quartos",
    area: "23 a 41m²",
    price: "Studio R$ 309.000 · 1Q R$ 359.000 · 2Q R$ 545.000",
  },
  {
    image: propertyIsaMelo,
    name: "Isa Melo",
    location: "Ilha do Retiro, Recife - PE",
    description: "Lançamento da Renel na Ilha do Retiro. 3 quartos, 2 suítes (1 reversível), rooftop, coworking e lazer completo.",
    type: "LANÇAMENTO",
    category: "cidade",
    bedrooms: "3 quartos, 2 suítes",
    area: "62m²",
    price: "A partir de R$ 511.625",
  },
  {
    image: propertyVale,
    name: "Vale Caxangá Golf Club",
    location: "Várzea, Recife - PE",
    description: "Às margens da Av. Caxangá, em frente ao Golf Club. Localização nobre com área verde e qualidade de vida.",
    type: "CIDADE",
    category: "cidade",
    bedrooms: "2 quartos",
    area: "47 a 61m²",
    price: "A partir de R$ 487.900",
  },
  {
    image: propertyEstilo,
    name: "Estilo Boa Viagem",
    location: "Imbiribeira, Recife - PE",
    description: "Apartamentos de 2 e 3 quartos com suíte e varanda, condomínio com lazer completo. Próximo ao metrô e Shopping Recife.",
    type: "CIDADE",
    category: "cidade",
    bedrooms: "2 e 3 quartos",
    area: "46 a 58m²",
    price: "A partir de R$ 485.000",
  },
  {
    image: propertyWave,
    name: "Wave Boa Viagem",
    location: "Imbiribeira, Recife - PE",
    description: "Próximo ao Shopping Recife e Uninassau. Excelente localização com fácil acesso e infraestrutura completa.",
    type: "CIDADE",
    category: "cidade",
    bedrooms: "2 quartos",
    area: "46 a 58m²",
    price: "A partir de R$ 410.000",
  },
  {
    image: propertyIlhaRetiroBoulevard,
    name: "Ilha do Retiro Boulevard",
    location: "Ilha do Retiro, Recife - PE",
    description: "Verdadeiro resort urbano com mais de 24 itens de lazer e centro comercial integrado. 3 quartos com suíte.",
    type: "LANÇAMENTO",
    category: "cidade",
    bedrooms: "3 quartos, 1 suíte",
    area: "73m²",
    price: "A partir de R$ 365.000",
  },
  {
    image: propertyPatioCamino,
    name: "Pátio Camino",
    location: "Iputinga, Recife - PE",
    description: "Lançamento na Rua São Matheus. 2 quartos com suíte e varanda, bloco de lazer completo e prédio esbelto de arquitetos premiados.",
    type: "LANÇAMENTO",
    category: "cidade",
    bedrooms: "2 quartos, 1 suíte",
    area: "45m²",
    price: "Preço médio de R$ 360.000",
  },
  {
    image: propertySolare,
    name: "Pátio Solare",
    location: "Imbiribeira, Recife - PE",
    description: "Apartamentos de 2 quartos com suíte e varanda. Lazer completo com piscina, espaço fitness e praça piquenique.",
    type: "CIDADE",
    category: "cidade",
    bedrooms: "2 quartos",
    area: "48 a 52m²",
    price: "A partir de R$ 359.000",
  },
  {
    image: propertyValeGuararapes,
    name: "Vale dos Guararapes",
    location: "Piedade, Jaboatão - PE",
    description: "Lançamento na Av. Barreto de Menezes. 2 quartos com varanda gourmet, mais de 40 itens de lazer e 100% das unidades com vaga.",
    type: "LANÇAMENTO",
    category: "cidade",
    bedrooms: "2 quartos",
    area: "47 a 59m²",
    price: "A partir de R$ 352.000",
  },
  {
    image: propertyMillennium,
    name: "Luar do Parque",
    location: "Recife - PE",
    description: "Empreendimento com localização estratégica e proposta contemporânea de morar. Consulte disponibilidade e valores.",
    type: "CIDADE",
    category: "cidade",
    price: "Sob consulta",
  },
  {
    image: propertyLikeClub,
    name: "Like Club Boa Vista",
    location: "Boa Vista, Recife - PE",
    description: "Empreendimento com pegada club, lazer completo e localização central em Boa Vista. Consulte disponibilidade.",
    type: "CIDADE",
    category: "cidade",
    price: "Sob consulta",
  },
  {
    image: propertyHori,
    name: "Pátio Horí",
    location: "Caxangá, Recife - PE",
    description: "Condomínio moderno com lazer completo incluindo piscina, quadra e área verde. Localização privilegiada na Caxangá.",
    type: "CIDADE",
    category: "cidade",
    bedrooms: "2 quartos",
    area: "45 a 55m²",
    price: "A partir de R$ 299.000",
  },
  {
    image: propertyMorata,
    name: "Morata Living",
    location: "Imbiribeira, Recife - PE",
    description: "Em construção na Rua Prof. Rosilda Costa. 2 quartos com suíte, opções com garden privativo e lazer completo com beach tennis.",
    type: "EM CONSTRUÇÃO",
    category: "cidade",
    bedrooms: "2 quartos, 1 suíte",
    area: "43m²",
    price: "A partir de R$ 299.900",
  },
  {
    image: propertyVilaGiovanna,
    name: "Vila Giovanna",
    location: "Piedade, Jaboatão - PE",
    description: "Lançamento em Piedade próximo ao Shopping Guararapes. Torre única com 4 apartamentos por andar, rooftop e academia.",
    type: "LANÇAMENTO",
    category: "cidade",
    bedrooms: "2 quartos",
    area: "42m²",
    price: "A partir de R$ 302.900",
  },
  {
    image: propertyPaineiras,
    name: "Viva Paineiras",
    location: "Jardim Paulista, Paulista - PE",
    description: "Próximo ao Terminal Pelópidas. Área de lazer completa e excelente custo-benefício.",
    type: "CIDADE",
    category: "cidade",
    bedrooms: "2 quartos",
    area: "50 a 54m²",
    price: "A partir de R$ 275.000",
  },
  {
    image: propertyCandeias,
    name: "Candeias Life Club",
    location: "Candeias, Jaboatão - PE",
    description: "Apartamentos com lazer completo — piscina adulto e infantil, coworking e espaço fitness.",
    type: "CIDADE",
    category: "cidade",
    bedrooms: "2 e 3 quartos",
    area: "43 a 54m²",
    price: "A partir de R$ 270.000",
  },
  {
    image: propertyLuarParque,
    name: "Placeholder — remove",
    location: "",
    description: "",
    type: "CIDADE",
    category: "cidade",
  },
  // Litoral
  {
    image: propertyCosta,
    name: "Costa dos Coqueiros",
    location: "Praia dos Carneiros, PE",
    description: "Empreendimento em região de crescimento turístico e forte valorização, ideal para renda com locações e uso próprio.",
    fullDescription: "O Costa dos Coqueiros é um projeto voltado para investidores que buscam valorização e geração de renda no litoral nordestino. Com localização estratégica e crescente demanda turística, o empreendimento oferece estrutura de lazer, conforto e excelente potencial para locações por temporada.",
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
    fullDescription: "Localizado na Praia do Cupe, em Porto de Galinhas, o Habitá é uma excelente opção para quem deseja investir em um destino consolidado, com alta taxa de ocupação durante o ano inteiro.",
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
    fullDescription: "O Boulevard Praia dos Carneiros une exclusividade, lazer completo e forte demanda turística durante todo o ano. Ideal para investidores que buscam renda com aluguel por temporada e valorização em uma das praias mais prestigiadas de PE.",
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
    fullDescription: "O Costa Azul é ideal para quem busca entrar no mercado imobiliário turístico com segurança. Com lazer completo e localização em área de expansão, possui forte potencial de valorização.",
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
    fullDescription: "O Costa do Mar foi pensado para quem busca investir em um imóvel versátil, com unidades funcionais e excelente potencial de valorização. Ideal para uso próprio e geração de renda com locações de curta temporada.",
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
    fullDescription: "O Naturê Eco Residência combina conforto, sustentabilidade e localização estratégica. Atende à crescente procura por destinos tranquilos e exclusivos, oferecendo excelente oportunidade de investimento.",
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
    fullDescription: "O Tropí Eco Residência traz uma proposta moderna e sustentável, ideal para quem busca um imóvel diferenciado para uso próprio e também para locação em um mercado que valoriza experiências exclusivas.",
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
    fullDescription: "Um resort imobiliário de alto padrão no coração do Caribe Brasileiro. Localização estratégica à beira-mar de Peroba, próxima ao futuro aeroporto de Maragogi e com grande potencial de rentabilidade.",
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
    fullDescription: "O KOA une lazer, conforto e investimento em uma região turística em crescimento. Ideal para segunda moradia ou geração de renda com aluguel de temporada.",
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
    fullDescription: "Localizado à beira-mar de Porto de Galinhas, o Marano entrega sofisticação e exclusividade. Studios a duplex com varanda gourmet e rooftop com vista para o mar, além de lazer completo.",
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
    fullDescription: "O Mauna une arquitetura contemporânea, conforto e praticidade em uma proposta voltada para moradia de lazer e investimento, com potencial de retorno com aluguel por temporada.",
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
    fullDescription: "O Nau Home Resort oferece a experiência de um resort com a praticidade de um investimento imobiliário inteligente. Lazer completo, unidades funcionais e localização estratégica no litoral.",
    type: "Investimento",
    category: "litoral",
    bedrooms: "Studio e 1 quarto",
    area: "20 a 59m²",
  },
];

const ITEMS_PER_PAGE = 6;

const CidadeCard = ({ property, whatsappLink }: { property: Property; whatsappLink: string }) => (
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
      <h3 className="font-serif text-xl font-medium text-foreground mb-2">{property.name}</h3>
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
      <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-5">{property.description}</p>
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
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/50 to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <span className="font-sans text-xs font-semibold tracking-widest uppercase text-primary mb-2">
            {property.location}
          </span>
          <h3 className="font-serif text-xl md:text-2xl font-medium text-white mb-3 leading-tight">
            {property.name}
          </h3>
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
          <p className="font-sans text-xs text-white/80 leading-relaxed mb-3">{property.description}</p>

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
  const [activeTab, setActiveTab] = useState<"litoral" | "cidade">("litoral");
  const [showAllLitoral, setShowAllLitoral] = useState(false);
  const [showAllCidade, setShowAllCidade] = useState(false);
  const whatsappLink = "https://wa.me/5581981509195?text=Olá, vim pelo site e gostaria de saber mais sobre o empreendimento ";

  const cidadeProperties = properties.filter((p) => p.category === "cidade");
  const litoralProperties = properties.filter((p) => p.category === "litoral");

  const visibleLitoralProperties = showAllLitoral ? litoralProperties : litoralProperties.slice(0, ITEMS_PER_PAGE);
  const visibleCidadeProperties = showAllCidade ? cidadeProperties : cidadeProperties.slice(0, ITEMS_PER_PAGE);

  const hasMoreLitoral = litoralProperties.length > ITEMS_PER_PAGE;
  const hasMoreCidade = cidadeProperties.length > ITEMS_PER_PAGE;

  return (
    <section id="imoveis" className="section-padding bg-background">
      <div className="container-narrow">
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
            Imóveis selecionados
          </h2>
          <p className="font-sans text-muted-foreground leading-relaxed">
            Apartamentos, studios e lançamentos em Recife e oportunidades de investimento
            no litoral de Pernambuco.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center mb-12"
        >
          <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as "litoral" | "cidade")} className="w-auto">
            <TabsList className="bg-card border border-border p-1.5 h-auto rounded-full shadow-lg">
              <TabsTrigger
                value="litoral"
                className="font-sans text-sm font-medium px-8 py-3 rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md transition-all duration-300"
              >
                <span className="mr-2">🌊</span>
                Imóveis no Litoral
              </TabsTrigger>
              <TabsTrigger
                value="cidade"
                className="font-sans text-sm font-medium px-8 py-3 rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md transition-all duration-300"
              >
                <span className="mr-2">🏙️</span>
                Imóveis na Cidade
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </motion.div>

        <AnimatePresence mode="wait">
          {activeTab === "litoral" ? (
            <motion.div key="litoral" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
              <div className="relative">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {visibleLitoralProperties.map((property) => (
                    <LitoralCard key={property.name} property={property} whatsappLink={whatsappLink} />
                  ))}
                </div>
                {!showAllLitoral && hasMoreLitoral && (
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
                )}
              </div>
              {hasMoreLitoral && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-center mt-8">
                  <Button variant="outline" size="lg" onClick={() => setShowAllLitoral(!showAllLitoral)} className="btn-outline-gold font-sans font-medium gap-2 group">
                    {showAllLitoral ? (<>Ver menos<ChevronDown className="w-4 h-4 rotate-180 transition-transform" /></>) : (<>Ver mais {litoralProperties.length - ITEMS_PER_PAGE} opções<ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" /></>)}
                  </Button>
                </motion.div>
              )}
            </motion.div>
          ) : (
            <motion.div key="cidade" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
              <div className="relative">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {visibleCidadeProperties.map((property) => (
                    <CidadeCard key={property.name} property={property} whatsappLink={whatsappLink} />
                  ))}
                </div>
                {!showAllCidade && hasMoreCidade && (
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
                )}
              </div>
              {hasMoreCidade && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-center mt-8">
                  <Button variant="outline" size="lg" onClick={() => setShowAllCidade(!showAllCidade)} className="btn-outline-gold font-sans font-medium gap-2 group">
                    {showAllCidade ? (<>Ver menos<ChevronDown className="w-4 h-4 rotate-180 transition-transform" /></>) : (<>Ver mais {cidadeProperties.length - ITEMS_PER_PAGE} opções<ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" /></>)}
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
