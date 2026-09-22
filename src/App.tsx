import { useState } from 'react'
import './App.css'

import { CloudShader } from '@/components/ui/cloud-shader'
import { CardSpotlight } from '@/components/ui/card-spotlight'
import hero2 from './assets/hero2.jpeg'
import estacioLogo from './assets/estacio-logo-faculdade.jpg'

const skills = [
  ['JavaScript', 'https://cdn.simpleicons.org/javascript/F7DF1E'],
  ['TypeScript', 'https://cdn.simpleicons.org/typescript/3178C6'],
  ['Node.js', 'https://cdn.simpleicons.org/nodedotjs/339933'],
  ['Java', 'https://cdn.simpleicons.org/openjdk/ED8B00'],
  ['NestJS', 'https://cdn.simpleicons.org/nestjs/E0234E'],
  ['React', 'https://cdn.simpleicons.org/react/61DAFB'],
  ['React Native', 'https://cdn.simpleicons.org/react/3178C6'],
  ['AWS', 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/amazonwebservices.svg'],
  ['PostgreSQL', 'https://cdn.simpleicons.org/postgresql/4169E1'],
  ['Claude Code', 'https://cdn.simpleicons.org/claude/D97757'],
  ['MySQL', 'https://cdn.simpleicons.org/mysql/4479A1'],
  ['Prisma', 'https://cdn.simpleicons.org/prisma/ADB8D8'],
  ['ChatGPT', 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openai.svg'],
  ['Python', 'https://cdn.simpleicons.org/python/3776AB'],
  ['Spring Boot', 'https://cdn.simpleicons.org/springboot/6DB33F'],
  ['Docker', 'https://cdn.simpleicons.org/docker/2496ED'],
  ['Git', 'https://cdn.simpleicons.org/git/F05032'],
] as const

const certificates = [
  { name: 'Ciência da Computação', org: 'Estácio de Sá', period: '2021 – 2024', logo: estacioLogo },
] as const

const experiences = [
  {
    role: 'CodeCamp — Estágio em desenvolvimento Front-end',
    org: 'CodeLeap',
    logo: '/assets/logo-codeleap.png',
    period: 'fev 2026 – jul 2026 · 6 meses',
    location: 'Londres e Região, Reino Unido · Remoto',
    bullets: [
      'Desenvolvimento e manutenção de sites e aplicativos performáticos utilizando React e React Native',
      'Uso de TanStack React Query para gerenciamento de estado assíncrono',
      'Aplicação de boas práticas de código e arquitetura',
    ],
  },
  {
    role: 'Desenvolvedor de Back-end júnior',
    org: 'Agência Novi',
    logo: '/assets/logo-novi.png',
    period: 'mar 2023 – jan 2026 · 2 anos e 11 meses',
    location: 'São Paulo, Brasil · Remoto',
    bullets: [
      'Criação e manutenção de APIs usando Node.js e NestJS, com foco em TypeScript e JavaScript',
      'Modelagem e implementação de regras de negócio',
      'Construção de integrações e serviços back-end',
    ],
  },
] as const

const projects = [
  {
    title: 'SaaS de link analytics',
    desc: 'Plataforma de encurtamento e análise de links, construída como parte de um processo seletivo técnico — API RESTful, autenticação e dashboard de métricas.',
    tags: ['Node.js', 'TypeScript', 'PostgreSQL', 'Docker'],
  },
  {
    title: 'Ateliê da Coleguinha',
    desc: 'Site institucional para ateliê de costura, com carrossel de peças e seções de apresentação da marca.',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
] as const

function Icon({ children, size = 18 }: { children: React.ReactNode; size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">{children}</svg>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  const sections = [
    { id: 'sobre', label: 'Sobre' },
    { id: 'skills', label: 'Skills' },
    { id: 'formacao', label: 'Formação' },
    { id: 'experiencia', label: 'Experiência' },
    { id: 'projetos', label: 'Projetos' },
    { id: 'contato', label: 'Contato' },
  ]

  return (
    <>
      <div className="sky-hero">
        <CloudShader className="sky-hero__background" speed={0.65} count={6} cloudColor="#fffaf0" skyTopColor="#315f9b" skyBottomColor="#b6dcf4" />
        <img className="plane-wing" src="/assets/plane-wing.png" alt="" aria-hidden="true" />
        <div className="sky-hero__content">
      <header className="header">
        <div className="container header__inner">
          <span className="logo">Leo<span className="logo__accent">/&gt;</span></span>
          <nav className="nav">{sections.map((item) => <a key={item.id} href={`#${item.id}`} onClick={closeMenu}>{item.label}</a>)}</nav>
          <div className="header__actions"><a className="btn btn--primary" href="mailto:leosantosmelo07@gmail.com">Contato</a></div>
          <button className="menu-btn" aria-label="Abrir menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            <Icon size={22}><path d="M3 6h18M3 12h18M3 18h18" /></Icon>
          </button>
        </div>
        <nav className={`mobile-nav ${menuOpen ? 'is-open' : ''}`} hidden={!menuOpen}>
          {sections.map((item) => <a key={item.id} href={`#${item.id}`} onClick={closeMenu}>{item.label}</a>)}
        </nav>
      </header>

      <main id="top">
        <section className="hero container">
          <div className="hero__text">
            <p className="eyebrow">Olá, tudo bem? 👋</p>
            <h1 className="hero__title">Eu sou Leonardo Santos<br /><span className="hero__title-accent">desenvolvedor full-stack</span></h1>
            <p className="hero__desc">Desenvolvedor Full Stack focado na construção de aplicações escaláveis e APIs RESTful robustas com o ecossistema JavaScript/TypeScript (Node.js, NestJS, React e React Native). Combino Clean Code, arquitetura limpa e bancos de dados relacionais para resolver problemas reais de ponta a ponta com alta performance.</p>
            <div className="hero__meta">
              <span className="hero__meta-item"><Icon size={14}><path d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.3" /></Icon>Rio de Janeiro • Brasil</span>
              <span className="hero__meta-item hero__meta-item--status"><span className="status-dot" />Disponível para CLT · PJ · Remoto</span>
            </div>
            <div className="hero__links">
              <a href="https://github.com/LeonardoSantosBR" target="_blank" rel="noopener" className="icon-link" aria-label="GitHub"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.58 2 12.19c0 4.49 2.87 8.3 6.84 9.64.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.72-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.57 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05a9.36 9.36 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.19C22 6.58 17.52 2 12 2Z" /></svg></a>
              <a href="https://www.linkedin.com/in/leonardo-santos-71632521b/" target="_blank" rel="noopener" className="icon-link" aria-label="LinkedIn"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.94 8.5H3.56V20.4h3.38V8.5ZM5.25 3.1a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92ZM20.44 20.4h-3.37v-6.24c0-1.49-.03-3.4-2.07-3.4-2.08 0-2.4 1.62-2.4 3.3v6.34H9.24V8.5h3.24v1.63h.05c.45-.86 1.56-1.77 3.21-1.77 3.43 0 4.7 2.26 4.7 5.35v6.69Z" /></svg></a>
              <a href="mailto:leosantosmelo07@gmail.com" className="icon-link" aria-label="E-mail"><Icon><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></Icon></a>
            </div>
          </div>
          <div className="hero__photo"><div className="hero__photo-offset" aria-hidden="true" /><img src="/assets/foto-perfil.jpg" alt="Foto de Leonardo Santos" className="hero__photo-img" /></div>
        </section>

      </main>
        </div>
      </div>

      <main>
        <section id="sobre" className="section container">
          <div className="section__head"><span className="badge">Sobre</span><h2 className="section__title">Quem é Leonardo Santos?</h2></div>
          <div className="about"><div className="about__photo"><img src={hero2} alt="Leonardo Santos" className="about__photo-img" /></div>
            <div className="about__text">
              <p>Desenvolvedor de Software Full Stack com forte foco em arquitetura limpa, Clean Code e na entrega de soluções eficientes de ponta a ponta. Trago sólida experiência no ecossistema JavaScript e TypeScript, atuando tanto na construção de APIs RESTful robustas e escalables com Node.js e NestJS quanto no desenvolvimento de interfaces modernas e fluidas com React e React Native (Expo).</p>
              <p>Tenho experiência sólida com bancos de dados relacionais — PostgreSQL e MySQL — Prisma ORM e conteinerização com Docker. Sou formado em Ciência da Computação pela Estácio de Sá, e combino essa base técnica com foco em Clean Code, arquitetura limpa e boas práticas, sempre buscando entregar soluções eficientes que resolvem problemas reais de ponta a ponta.</p>
            </div>
          </div>
        </section>

        <CardSpotlight className="skills-spotlight" radius={180} color="#dbeafe"><section id="skills" className="section container skills-section"><div className="section__head"><span className="badge">Skills</span><h2 className="section__title">Tecnologias que uso no dia a dia</h2></div><div className="skills-grid">{skills.map(([name, icon]) => <div className="skill-card" key={name}><div className="skill-card__icon"><img src={icon} alt="" loading="lazy" /></div><span className="skill-card__name">{name}</span></div>)}</div></section></CardSpotlight>
        <section id="formacao" className="section container"><div className="section__head"><span className="badge">formação</span></div><div className="certs">{certificates.map((certificate) => <div className="cert-item" key={certificate.name}><div className="cert-item__school">{certificate.logo && <img src={certificate.logo} alt="Logo da Estácio de Sá" className="cert-item__logo" />}<div><div className="cert-item__name">{certificate.name}</div><div className="cert-item__org">{certificate.org}</div></div></div><span className="cert-item__year">{certificate.period}</span></div>)}</div></section>
        <section id="experiencia" className="section container"><div className="section__head"><span className="badge">experiência</span><h2 className="section__title">Trajetória profissional</h2></div><div className="timeline">{experiences.map((experience, index) => <details className="timeline-item" key={experience.org} open={index === 0}><summary className="timeline-item__summary"><div className="timeline-item__top"><span className="timeline-item__role">{experience.role}</span><span className="timeline-item__period">{experience.period}</span></div></summary><div className="timeline-item__content"><div className="timeline-item__org"><img src={experience.logo} alt="" className="timeline-item__org-logo" /><span>{experience.org}</span></div><div className="timeline-item__location">{experience.location}</div><ul className="timeline-item__list">{experience.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></div></details>)}</div></section>
        <section id="projetos" className="section container"><div className="section__head"><span className="badge">projetos</span><h2 className="section__title">Alguns projetos que venho construindo</h2></div><div className="projects">{projects.map((project) => <div className="project-card" key={project.title}><div className="project-card__visual"><span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)' }}>preview em breve</span></div><div className="project-card__body"><h3 className="project-card__title">{project.title}</h3><p className="project-card__desc">{project.desc}</p><div className="project-card__tags">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div></div></div>)}</div></section>
        <section id="contato" className="section container contact"><div className="contact__card"><span className="badge">contato</span><h2 className="section__title">Vamos conversar?</h2><p className="contact__desc">Estou disponível para oportunidades CLT, PJ ou remoto. Se tiver um projeto em mente ou quiser trocar uma ideia sobre tecnologia, é só chamar.</p><div className="contact__actions"><a href="mailto:leosantosmelo07@gmail.com" className="btn btn--primary">leosantosmelo07@gmail.com</a><a href="https://github.com/LeonardoSantosBR" target="_blank" rel="noopener" className="btn btn--ghost">GitHub</a></div></div></section>
      </main>
      <footer className="footer"><div className="container footer__inner"><span>Leonardo Santos © 2026</span><span>Construído com React, TypeScript e Tailwind CSS</span></div></footer>
    </>
  )
}

export default App
