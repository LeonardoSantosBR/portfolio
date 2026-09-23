import type { Project } from '@/types/portfolio'

export const projects: readonly Project[] = [
  { title: 'Curiosity', desc: 'Aplicação da NASA para explorar uma galeria espacial.', descKey: 'curiosity', tags: ['React Native', 'Tanstack React Query', 'Tailwind CSS'], link: 'https://github.com/LeonardoSantosBR/curiosity' },
  { title: 'Banking Transactions', desc: 'Projeto de transações bancárias desenvolvido com Java e Spring Boot.', descKey: 'banking', tags: ['Java 25', 'JWT', 'Spring Boot'], link: 'https://github.com/LeonardoSantosBR/banking-transactions-java-spring-boot' },
  { title: 'BirdAI', desc: 'Interface de catálogo de aves para uma aplicação full-stack.', descKey: 'birdai', tags: ['React Native', 'NestJs', 'PostgreSql', 'Supabase'], link: 'https://github.com/LeonardoSantosBR/birdai-ui' },
  { title: 'Test Corrections API', desc: 'API REST para criação de testes e geração de notas.', descKey: 'testCorrections', tags: ['NestJS', 'MySQL', 'Prisma', 'JWT', 'TypeScript'], link: 'https://github.com/LeonardoSantosBR/test-corrections-nestjs-prisma7' },
]
