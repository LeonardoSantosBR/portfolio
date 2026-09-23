import type { Experience } from '@/types/portfolio'

export const experiences: readonly Experience[] = [
  {
    role: 'CodeCamp — Estágio em desenvolvimento Front-end', roleKey: 'codecampRole', org: 'CodeLeap', logo: '/assets/logo-codeleap.png',
    period: 'fev 2026 – jul 2026 · 6 meses', periodKey: 'codecampPeriod', location: 'Londres e Região, Reino Unido · Remoto', locationKey: 'codecampLocation',
    bulletKeys: ['codecampBullet1', 'codecampBullet2', 'codecampBullet3'],
    bullets: ['Desenvolvimento e manutenção de sites e aplicativos performáticos utilizando React e React Native', 'Uso de TanStack React Query para gerenciamento de estado assíncrono', 'Aplicação de boas práticas de código e arquitetura'],
  },
  {
    role: 'Desenvolvedor de Back-end júnior', roleKey: 'noviRole', org: 'Agência Novi', logo: '/assets/logo-novi.png',
    period: 'mar 2023 – jan 2026 · 2 anos e 11 meses', periodKey: 'noviPeriod', location: 'São Paulo, Brasil · Remoto', locationKey: 'noviLocation',
    bulletKeys: ['noviBullet1', 'noviBullet2', 'noviBullet3'],
    bullets: ['Criação e manutenção de APIs usando Node.js e NestJS, com foco em TypeScript e JavaScript', 'Modelagem e implementação de regras de negócio', 'Construção de integrações e serviços back-end'],
  },
]
