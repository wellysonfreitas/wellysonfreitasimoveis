import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ArrowRight, BedDouble, Maximize2, ChevronDown, ChevronRight, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Cidade Properties (single-image fallbacks)
import propertyWave from "@/assets/property-wave.webp";
import propertyRaizes from "@/assets/property-raizes.jpeg";
import propertyPaineiras from "@/assets/property-paineiras.jpeg";
import propertyVale from "@/assets/property-vale.png";
import propertySplendore from "@/assets/property-splendore.jpg";
import propertyEstilo from "@/assets/property-estilo.webp";
import propertySolare from "@/assets/property-solare.png";
import propertyHori from "@/assets/property-hori.png";
import propertyCandeias from "@/assets/property-candeias.jpg";

// Litoral Properties
import propertyKoa from "@/assets/property-koa.jpeg";
import propertyMauna from "@/assets/property-mauna.jpg";
import propertyNau from "@/assets/property-nau.jpg";
import propertyMarano from "@/assets/property-marano.png";


// Gallery images (multi-image carousels)
const galleryModules = import.meta.glob(
  "@/assets/properties/**/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" }
) as Record<string, string>;

const gallery = (slug: string): string[] => {
  const entries = Object.entries(galleryModules)
    .filter(([path]) => path.includes(`/properties/${slug}/`))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, url]) => url);
  return entries;
};

interface Property {
  images: string[];
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
    images: gallery("aurum-hall"),
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
    images: gallery("beira-mar-piedade"),
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
    images: [propertySplendore],
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
    images: gallery("palacio-videiras"),
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
    images: [propertyRaizes],
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
    images: gallery("praca-dos-aracas"),
    name: "Praça dos Araçás",
    location: "Cordeiro, Recife - PE",
    description: "Breve lançamento a 140m do Mercado Soberano. Torre única com 27 pavimentos, varanda gourmet, fechadura digital e vagas para carro elétrico.",
    fullDescription: "Rua Desembargador Manoel de Sá Pereira, nº 101 — Cordeiro. 1 torre, 27 pavimentos tipo e 2 elevadores. Plantas de 52,68m² (2 quartos, 1 suíte), 66,53m² (3 quartos, 1 suíte) e 83,25m² (3 quartos, 2 suítes), todas com varanda gourmet. Fechadura digital, preparação para aquecedor de passagem e vagas para carro elétrico. Lazer com piscina adulto e deck, piscina infantil, hidro, academia, coworking, salão de festas, terraço coberto, playground e brinquedoteca.",
    type: "BREVE LANÇAMENTO",
    category: "cidade",
    bedrooms: "2 e 3 quartos, até 2 suítes",
    area: "52 a 83m²",
    price: "A partir de R$ 419.000",
  },
  {

    images: gallery("parc-college"),
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
    images: gallery("millennium"),
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
    images: gallery("elevare"),
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
    images: gallery("isa-melo"),
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
    images: [propertyVale],
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
    images: [propertyEstilo],
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
    images: [propertyWave],
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
    images: gallery("ilha-retiro-boulevard"),
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
    images: gallery("patio-camino"),
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
    images: [propertySolare],
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
    images: gallery("vale-guararapes"),
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
    images: [propertyHori],
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
    images: gallery("morata"),
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
    images: gallery("vila-giovanna"),
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
    images: [propertyPaineiras],
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
    images: [propertyCandeias],
    name: "Candeias Life Club",
    location: "Candeias, Jaboatão - PE",
    description: "Apartamentos com lazer completo — piscina adulto e infantil, coworking e espaço fitness.",
    type: "CIDADE",
    category: "cidade",
    bedrooms: "2 e 3 quartos",
    area: "43 a 54m²",
    price: "A partir de R$ 270.000",
  },
  // Litoral
  {
    images: gallery("nature-muro-alto"),
    name: "Naturê Eco Residência",
    location: "Muro Alto, PE",
    description: "Pronto para morar em Muro Alto. Conceito eco, arquitetura autoral e lazer de resort à beira-mar.",
    fullDescription: "O Naturê Eco Residência combina conforto, sustentabilidade e localização privilegiada em Muro Alto. Rooftop com piscina e vista mar, deck bar, áreas de convivência e integração total com a natureza — excelente opção para segunda residência e locação de alto padrão.",
    type: "PRONTO",
    category: "litoral",
    bedrooms: "Studio, 2 e 3 quartos",
    area: "30.27 a 149.46m²",
    price: "A partir de R$ 2.241.000",
  },
  {
    images: gallery("orla-carneiros"),
    name: "Orla Praia dos Carneiros",
    location: "Praia dos Carneiros, PE",
    description: "Frente mar em Carneiros, com entrega prevista para o 1º semestre de 2028. Estrutura de resort e alta demanda de temporada.",
    fullDescription: "O Orla Praia dos Carneiros oferece uma experiência de resort em uma das praias mais paradisíacas do Brasil: piscinas frente mar, academia com vista, deck e lazer completo. Há ainda uma última unidade de 2 quartos com 59m² por R$ 997.000.",
    type: "EM OBRA",
    category: "litoral",
    bedrooms: "2 a 6 quartos",
    area: "59.67 a 218.05m²",
    price: "A partir de R$ 1.409.000",
  },
  {
    images: gallery("habita-cupe"),
    name: "Habitá Praia do Cupe",
    location: "Praia do Cupe, Porto de Galinhas - PE",
    description: "Em obra no polo turístico de Porto de Galinhas. Piscinas, quadra coberta e academia com vista para o mar.",
    fullDescription: "Localizado na Praia do Cupe, o Habitá é uma excelente opção para investir em um destino consolidado, com alta taxa de ocupação o ano inteiro. Lazer completo com piscinas, quadra coberta, academia panorâmica e áreas de convivência à beira-mar.",
    type: "EM OBRA",
    category: "litoral",
    bedrooms: "2 a 6 quartos",
    area: "59.67 a 650.92m²",
    price: "A partir de R$ 1.374.000",
  },
  {
    images: gallery("tropi-muro-alto"),
    name: "Tropí Eco Residência",
    location: "Praia de Muro Alto, PE",
    description: "Pronto em Muro Alto. Rooftop com piscina privativa, bar com vista mar e conceito eco.",
    fullDescription: "O Tropí Eco Residência traz uma proposta moderna e sustentável, com rooftops privativos, complexo de piscinas, bar panorâmico e espaço kids. Ideal para uso próprio e para locação em um mercado que valoriza experiências exclusivas.",
    type: "PRONTO",
    category: "litoral",
    bedrooms: "2 e 3 quartos",
    area: "56.87 a 149.46m²",
    price: "A partir de R$ 1.244.000",
  },
  {
    images: gallery("nomar-carneiros"),
    name: "Nomar Carneiros",
    location: "Praia dos Carneiros, PE",
    description: "Pronto e nas últimas unidades. Pé na areia em Carneiros, com piscinas frente mar, academia e área kids.",
    fullDescription: "O Nomar Carneiros está pronto e com as últimas unidades disponíveis. Acesso direto à praia, complexo de piscinas com vista para o mar, brinquedo aquático para crianças, academia equipada e amplo deck de convivência — uma das melhores opções de renda por temporada em Carneiros.",
    type: "PRONTO",
    category: "litoral",
    bedrooms: "Studio, 1 e 2 quartos",
    area: "26 a 90m²",
    price: "A partir de R$ 1.041.000",
  },
  {
    images: gallery("cais-eco"),
    name: "Cais Eco Residência",
    location: "Muro Alto, PE",
    description: "Pronto em Muro Alto. Rooftop com piscina e vista mar, praças internas e lazer familiar completo.",
    fullDescription: "O Cais Eco Residência entrega o melhor de Muro Alto pronto para uso: rooftop com piscina e vista para o mar, complexo aquático com área kids, jardins, lounges com fogueiras e ampla estrutura de convivência. Excelente perfil para segunda residência e locação de temporada.",
    type: "PRONTO",
    category: "litoral",
    bedrooms: "Studio, 1, 2 e 3 quartos",
    area: "28 a 120m²",
    price: "A partir de R$ 865.015",
  },
  {
    images: gallery("costa-azul"),
    name: "Costa Azul",
    location: "Praia dos Carneiros, PE",
    description: "Pronto para uso, com piscina, terraços gourmet e beach lounge — entrada acessível no litoral sul.",
    fullDescription: "O Costa Azul é ideal para quem busca entrar no mercado imobiliário turístico com segurança: unidades funcionais, terraços gourmet, piscina e beach lounge, em uma área de forte expansão na Praia dos Carneiros.",
    type: "PRONTO",
    category: "litoral",
    bedrooms: "Studio, 2 e 3 quartos",
    area: "24.89 a 87.23m²",
    price: "A partir de R$ 711.000",
  },
  {
    images: gallery("costa-do-mar"),
    name: "Costa do Mar",
    location: "Praia dos Carneiros, PE",
    description: "Entrega prevista para o 2º semestre de 2026. Unidades com deck, ofurô e piscina privativa no térreo.",
    fullDescription: "O Costa do Mar foi pensado para quem busca um imóvel versátil no litoral: opções com deck privativo, ofurô e área gourmet, além de complexo de piscinas e paisagismo integrado. Ótimo potencial de valorização com entrega próxima.",
    type: "EM OBRA",
    category: "litoral",
    bedrooms: "Studio, 2 e 3 quartos",
    area: "24.89 a 87.23m²",
    price: "A partir de R$ 710.000",
  },
  {
    images: gallery("boulevard-carneiros"),
    name: "Boulevard Praia dos Carneiros",
    location: "Praia dos Carneiros, PE",
    description: "Entrega prevista para o 1º semestre de 2027. Piscinas, playground e terraços gourmet em Carneiros.",
    fullDescription: "O Boulevard Praia dos Carneiros une lazer completo, unidades funcionais e forte demanda turística durante todo o ano. Ideal para investidores que buscam renda com aluguel por temporada e valorização em uma das praias mais prestigiadas de Pernambuco.",
    type: "EM OBRA",
    category: "litoral",
    bedrooms: "Studio, 2 e 3 quartos",
    area: "25.20 a 99.61m²",
    price: "A partir de R$ 525.000",
  },
  {
    images: gallery("solina-carneiros"),
    name: "Solina Praia dos Carneiros",
    location: "Praia dos Carneiros, PE",
    description: "Lançamento pé na areia em frente ao Parque Acqua Ventura, com estrutura de resort e 6 complexos de piscinas.",
    fullDescription: "O Solina é um residencial com estrutura de resort, pé na areia na Praia dos Carneiros e em frente ao Parque Acqua Ventura. Studios de 24,48m² e opções Garden de 34,81m². Lazer com 6 complexos de piscinas, raia de 50m, deck vista mar, splash pad, 2 quadras de beach tennis, minicampo gramado, espaços grill, restaurante, empório, academia, coworking, espaços kids e teens. Conta com modelo de operação para aluguel por temporada, facilitando a gestão do imóvel.",
    type: "LANÇAMENTO",
    category: "litoral",
    bedrooms: "Studio e Garden",
    area: "24.48 a 34.81m²",
    price: "A partir de R$ 389.000",
  },
  {
    images: gallery("gran-resort-maragogi"),
    name: "Gran Resort Maragogi",
    location: "Praia de Peroba, Maragogi - AL",
    description: "Lançamento pé na areia no Caribe Brasileiro, com piscina de 1.600m² de borda infinita e beach club exclusivo.",
    fullDescription: "Resort imobiliário de alto padrão pé na areia em Maragogi/AL. São 4 blocos residenciais e 1 de lazer, totalizando 656 unidades. Complexo aquático com piscina de 1.600m² com borda infinita, 3 raias semiolímpicas, hidros submersas e parque molhado, além de beach club, restaurantes, champanheria, sports bar, spa, anfiteatro, quadras de beach tennis e vôlei, coworking e self market. Studios de 22,50 a 40,72m², 1 quarto de 25,50 a 62,43m² e 2 quartos de 39 a 84,35m², com opções garden e duplex com rooftop privativo.",
    type: "LANÇAMENTO",
    category: "litoral",
    bedrooms: "Studios, 1 e 2 quartos",
    area: "22.50 a 84.35m²",
    price: "A partir de R$ 389.000",
  },
  {
    images: gallery("costa-dos-coqueiros"),
    name: "Costa dos Coqueiros",
    location: "Praia dos Carneiros, PE",
    description: "Entrega prevista para o 1º semestre de 2029. Melhor valor de entrada em Carneiros, com lazer completo.",
    fullDescription: "O Costa dos Coqueiros é um projeto voltado para quem busca valorização e geração de renda no litoral sul de Pernambuco. Piscinas, bar molhado, deck e áreas gourmet em uma região de forte crescimento turístico — com condições de entrada acessíveis por estar em fase inicial de obra.",
    type: "EM OBRA",
    category: "litoral",
    bedrooms: "Studio e 2 quartos",
    area: "24.96 a 79.12m²",
    price: "A partir de R$ 363.000",
  },
  {
    images: gallery("duna-beira-mar"),
    name: "Duna Beira Mar",
    location: "Praia de Tamandaré, PE",
    description: "Lançamento pé na areia em Tamandaré, com rooftop completo e unidades duplex frente mar.",
    fullDescription: "Arquitetura contemporânea integrada à paisagem praiana, pé na areia em Tamandaré, próximo à Praia dos Carneiros. Rooftop com piscina adulto e infantil, deck elevado, hidromassagem, sauna, restaurante, bistrô, terraço gourmet, sports bar, academia, brinquedoteca, minimarket e lavanderia. Studios a partir de 22,60m², 1 quarto de 24,78 a 32m² (com opção de deck e piscina privativa) e duplex de 2 quartos de 41,38 a 49,59m², inclusive frente mar.",
    type: "LANÇAMENTO",
    category: "litoral",
    bedrooms: "Studio, 1 e 2 quartos",
    area: "22.60 a 49.59m²",
    price: "A partir de R$ 285.000",
  },
  {
    images: [propertyMarano],
    name: "Marano Beira-Mar",
    location: "Porto de Galinhas, PE",
    description: "Beira-mar em Porto de Galinhas com rooftop e lazer completo — ideal para rentabilidade com locações.",
    fullDescription: "Localizado à beira-mar de Porto de Galinhas, o Marano entrega sofisticação e exclusividade. Studios a duplex com varanda gourmet e rooftop com vista para o mar, além de lazer completo.",
    type: "INVESTIMENTO",
    category: "litoral",
    bedrooms: "Studio a 2 quartos",
    area: "20 a 70m²",
  },
  {
    images: [propertyKoa],
    name: "KOA",
    location: "Porto de Galinhas, PE",
    description: "Projeto moderno com perfil de investimento e alta demanda por locações no litoral.",
    fullDescription: "O KOA une lazer, conforto e investimento em uma região turística em crescimento. Ideal para segunda moradia ou geração de renda com aluguel de temporada.",
    type: "INVESTIMENTO",
    category: "litoral",
    bedrooms: "Studio e 2 quartos",
    area: "24 a 65m²",
  },
  {
    images: [propertyMauna],
    name: "Mauna",
    location: "Praia de Tamandaré, PE",
    description: "Empreendimento moderno com forte potencial de valorização e renda com locação.",
    fullDescription: "O Mauna une arquitetura contemporânea, conforto e praticidade em uma proposta voltada para moradia de lazer e investimento, com potencial de retorno com aluguel por temporada.",
    type: "INVESTIMENTO",
    category: "litoral",
    bedrooms: "1 e 2 quartos",
    area: "35 a 70m²",
  },
  {
    images: [propertyNau],
    name: "Nau Home Resort",
    location: "Praia dos Carneiros, PE",
    description: "Resort residencial com lazer completo e alto potencial de retorno em locações.",
    fullDescription: "O Nau Home Resort oferece a experiência de um resort com a praticidade de um investimento imobiliário inteligente. Lazer completo, unidades funcionais e localização estratégica no litoral.",
    type: "INVESTIMENTO",
    category: "litoral",
    bedrooms: "Studio e 1 quarto",
    area: "20 a 59m²",
  },
];


const ITEMS_PER_PAGE = 6;

const PropertyGallery = ({
  images,
  name,
  badge,
  aspect = "aspect-[4/3]",
  overlay,
}: {
  images: string[];
  name: string;
  badge?: React.ReactNode;
  aspect?: string;
  overlay?: React.ReactNode;
}) => {
  const hasMultiple = images.length > 1;
  return (
    <div className={`relative ${aspect} overflow-hidden group/gal`}>
      <Carousel opts={{ loop: true }} className="w-full h-full [&>div:first-child]:h-full">
        <CarouselContent className="h-full ml-0">
          {images.map((src, i) => (
            <CarouselItem key={i} className="pl-0 h-full">
              <img
                src={src}
                alt={`${name} — imagem ${i + 1}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        {hasMultiple && (
          <>
            <CarouselPrevious
              type="button"
              onPointerDown={(e) => e.stopPropagation()}
              className="left-3 h-8 w-8 opacity-0 group-hover/gal:opacity-100 transition-opacity bg-background/80 hover:bg-background border-none"
            />
            <CarouselNext
              type="button"
              onPointerDown={(e) => e.stopPropagation()}
              className="right-3 h-8 w-8 opacity-0 group-hover/gal:opacity-100 transition-opacity bg-background/80 hover:bg-background border-none"
            />
            <div className="absolute bottom-3 right-3 z-10 px-2 py-0.5 rounded-full bg-charcoal/70 text-white text-[10px] font-sans tracking-wide">
              {images.length} fotos
            </div>
          </>
        )}
      </Carousel>
      {overlay}
      {badge}
    </div>
  );
};

const CidadeCard = ({ property, whatsappLink }: { property: Property; whatsappLink: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
    >
      <PropertyGallery
        images={property.images}
        name={property.name}
        badge={
          <span className="absolute top-4 left-4 z-10 px-3 py-1 text-xs font-sans font-medium tracking-wide uppercase bg-primary text-primary-foreground rounded-full">
            {property.type}
          </span>
        }
      />
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
        {property.price && (
          <div className="flex items-center gap-1.5 text-primary font-sans text-sm font-semibold mb-3">
            <Tag className="w-4 h-4" />
            <span>{property.price}</span>
          </div>
        )}
        <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-4">{property.description}</p>
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
};


const LitoralCard = ({ property, whatsappLink }: { property: Property; whatsappLink: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group flex flex-col rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 bg-charcoal"
    >
      {/* Top status banner */}
      <div className="bg-forest text-white text-center py-2.5 font-sans text-xs font-semibold tracking-[0.2em] uppercase">
        {property.type}
      </div>

      {/* Clean image, no dark overlay */}
      <PropertyGallery
        images={property.images}
        name={property.name}
        aspect="aspect-[4/3]"
      />

      {/* Info panel below image */}
      <div className="p-6 flex flex-col flex-1">
        <span className="font-sans text-xs font-semibold tracking-widest uppercase text-primary mb-2 block">
          {property.location}
        </span>
        <h3 className="font-serif text-xl md:text-2xl font-medium text-white mb-4 leading-tight">
          {property.name}
        </h3>

        <div className="flex flex-wrap items-center gap-4 text-white/90 mb-4">
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

        {property.price && (
          <div className="flex items-center gap-1.5 text-primary font-sans text-sm font-semibold mb-4">
            <Tag className="w-4 h-4" />
            <span>{property.price}</span>
          </div>
        )}

        <p className="font-sans text-xs text-white/75 leading-relaxed mb-4">{property.description}</p>

        {property.fullDescription && (
          <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <CollapsibleTrigger className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors mb-4">
              <span className="font-sans text-xs font-medium">
                {isOpen ? "Ver menos" : "Ver mais detalhes"}
              </span>
              <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
            </CollapsibleTrigger>
            <CollapsibleContent className="overflow-hidden data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up">
              <p className="font-sans text-xs text-white/65 leading-relaxed mb-4">
                {property.fullDescription}
              </p>
            </CollapsibleContent>
          </Collapsible>
        )}

        <Button
          asChild
          className="w-full mt-auto bg-primary hover:bg-primary/90 text-primary-foreground font-sans text-sm font-medium gap-2 group/btn"
        >
          <a href={`${whatsappLink}${encodeURIComponent(property.name)}`} target="_blank" rel="noopener noreferrer">
            Quero saber mais
            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </a>
        </Button>
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
