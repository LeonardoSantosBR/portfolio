import type { Project } from "@/types/portfolio";

export const projects: readonly Project[] = [
  {
    title: "Banking Transactions API",
    status: "building",
    desc: "API para gerenciamento de transações bancárias, com autenticação JWT, persistência de dados e integração com serviços da AWS. O projeto contempla regras para criação e consulta de transações, organização por usuários e uma estrutura preparada para evoluir com segurança e escalabilidade.",
    descKey: "banking",
    tags: ["Java 25", "AWS", "Spring Boot", "JWT", "Flyway"],
    link: "https://github.com/LeonardoSantosBR/banking-transactions-java-spring-boot",
  },
  {
    title: "World Cup Stickers Collection API",
    status: "building",
    desc: "API para organizar uma coleção de figurinhas da Copa do Mundo, permitindo cadastrar, consultar e controlar a coleção de forma estruturada. A solução facilita o acompanhamento das figurinhas obtidas e das que ainda faltam, com dados persistidos e acesso protegido.",
    descKey: "worldCupStickers",
    tags: ["Java 21", "AWS", "Spring Boot", "JWT", "Flyway"],
    link: "https://github.com/LeonardoSantosBR/worldcup-stickers-collection",
  },
  {
    title: "BirdAI",
    status: "finished",
    desc: "Interface mobile de catálogo de aves conectada a uma solução full-stack, reunindo exploração de espécies, dados organizados e integração com backend. A aplicação foi estruturada para facilitar a descoberta das aves e manter uma navegação clara em diferentes dispositivos.",
    descKey: "birdai",
    tags: ["React Native", "NestJs", "PostgreSql", "Supabase"],
    link: "https://github.com/LeonardoSantosBR/birdai-ui",
  },
  {
    title: "Cinema Management API",
    status: "finished",
    desc: "API desenvolvida para gerenciar cinemas, salas de exibição, filmes, sessões e reservas de assentos, oferecendo uma solução organizada e eficiente para o controle de toda a operação cinematográfica.",
    descKey: "cinemaManagement",
    tags: ["NestJS", "MySQL", "Prisma", "JWT"],
    link: "https://github.com/LeonardoSantosBR/api-cinema-nestjs",
  },
];
