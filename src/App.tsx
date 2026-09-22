import { useState } from 'react'
import './App.css'

import { useTranslation } from 'react-i18next'
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
    roleKey: 'codecampRole',
    org: 'CodeLeap',
    logo: '/assets/logo-codeleap.png',
    period: 'fev 2026 – jul 2026 · 6 meses',
    location: 'Londres e Região, Reino Unido · Remoto',
    locationKey: 'codecampLocation',
    bulletKeys: ['codecampBullet1', 'codecampBullet2', 'codecampBullet3'],
    bullets: [
      'Desenvolvimento e manutenção de sites e aplicativos performáticos utilizando React e React Native',
      'Uso de TanStack React Query para gerenciamento de estado assíncrono',
      'Aplicação de boas práticas de código e arquitetura',
    ],
  },
  {
    role: 'Desenvolvedor de Back-end júnior',
    roleKey: 'noviRole',
    org: 'Agência Novi',
    logo: '/assets/logo-novi.png',
    period: 'mar 2023 – jan 2026 · 2 anos e 11 meses',
    location: 'São Paulo, Brasil · Remoto',
    locationKey: 'noviLocation',
    bulletKeys: ['noviBullet1', 'noviBullet2', 'noviBullet3'],
    bullets: [
      'Criação e manutenção de APIs usando Node.js e NestJS, com foco em TypeScript e JavaScript',
      'Modelagem e implementação de regras de negócio',
      'Construção de integrações e serviços back-end',
    ],
  },
] as const

const projects = [
  {
    title: 'Curiosity',
    desc: 'Aplicação da NASA para explorar uma galeria espacial.', descKey: 'curiosity',
    tags: ['React Native', 'Tanstack React Query', 'Tailwind CSS'],
    link: 'https://github.com/LeonardoSantosBR/curiosity',
  },
  {
    title: 'Banking Transactions',
    desc: 'Projeto de transações bancárias desenvolvido com Java e Spring Boot.', descKey: 'banking',
    tags: ['Java 25', 'JWT' ,'Spring Boot'],
    link: 'https://github.com/LeonardoSantosBR/banking-transactions-java-spring-boot',
  },
  {
    title: 'BirdAI',
    desc: 'Interface de catálogo de aves para uma aplicação full-stack.', descKey: 'birdai',
    tags: ['React Native', 'NestJs', 'PostgreSql' ,'Supabase'],
    link: 'https://github.com/LeonardoSantosBR/birdai-ui',
  },
  {
    title: 'Test Corrections API',
    desc: 'API REST para criação de testes e geração de notas.', descKey: 'testCorrections',
    tags: ['NestJS','MySQL','Prisma','JWT', 'TypeScript'],
    link: 'https://github.com/LeonardoSantosBR/test-corrections-nestjs-prisma7',
  },
] as const

function Icon({ children, size = 18 }: { children: React.ReactNode; size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">{children}</svg>
}

function App() {
  const { t, i18n } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  const sections = [
    { id: 'sobre', label: t('nav.about') },
    { id: 'skills', label: t('nav.skills') },
    { id: 'formacao', label: t('nav.education') },
    { id: 'experiencia', label: t('nav.experience') },
    { id: 'projetos', label: t('nav.projects') },
    { id: 'contato', label: t('nav.contact') },
  ]
  const language = i18n.language.startsWith('en') ? 'en' : 'pt-BR'

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
          <button className="menu-btn" aria-label="Abrir menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            <Icon size={22}><path d="M3 6h18M3 12h18M3 18h18" /></Icon>
          </button>
          <button className="language-toggle" type="button" onClick={() => i18n.changeLanguage(language === 'en' ? 'pt-BR' : 'en')} aria-label="Change language">{language === 'en' ? 'EN' : 'PT'}</button>
        </div>
        <nav className={`mobile-nav ${menuOpen ? 'is-open' : ''}`} hidden={!menuOpen}>
          {sections.map((item) => <a key={item.id} href={`#${item.id}`} onClick={closeMenu}>{item.label}</a>)}
        </nav>
      </header>

      <main id="top">
        <section className="hero container">
          <div className="hero__text">
            <p className="eyebrow">{t('hero.greeting')}</p>
            <h1 className="hero__title">{t('hero.title')}<br /><span className="hero__title-accent">{t('hero.role')}</span></h1>
            <p className="hero__desc">{t('hero.description')}</p>
            <div className="hero__meta">
              <span className="hero__meta-item"><Icon size={14}><path d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.3" /></Icon>{t('hero.location')}</span>
              <span className="hero__meta-item hero__meta-item--status"><span className="status-dot" />{t('hero.availability')}</span>
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
          <div className="section__head"><span className="badge">{t('about.label')}</span><h2 className="section__title">{t('about.title')}</h2></div>
          <div className="about"><div className="about__photo"><img src={hero2} alt="Leonardo Santos" className="about__photo-img" /></div>
            <div className="about__text">
            <p>{t('about.paragraph1')}</p>
              <p>{t('about.paragraph2')}</p>
            </div>
          </div>
        </section>

        <CardSpotlight className="skills-spotlight" radius={180} color="#dbeafe"><section id="skills" className="section container skills-section"><div className="section__head"><span className="badge">{t('skills.label')}</span><h2 className="section__title">{t('skills.title')}</h2></div><div className="skills-grid">{skills.map(([name, icon]) => <div className="skill-card" key={name}><div className="skill-card__icon"><img src={icon} alt="" loading="lazy" /></div><span className="skill-card__name">{name}</span></div>)}</div></section></CardSpotlight>
        <section id="formacao" className="section container"><div className="section__head"><span className="badge">{t('education.label')}</span></div><div className="certs">{certificates.map((certificate) => <div className="cert-item" key={certificate.name}><div className="cert-item__school">{certificate.logo && <img src={certificate.logo} alt="Logo da Estácio de Sá" className="cert-item__logo" />}<div><div className="cert-item__name">{t('education.degree')}</div><div className="cert-item__org">{t('education.school')}</div></div></div><span className="cert-item__year">{t('education.period')}</span></div>)}</div></section>
        <section id="experiencia" className="section container"><div className="section__head"><span className="badge">{t('experience.label')}</span><h2 className="section__title">{t('experience.title')}</h2></div><div className="timeline">{experiences.map((experience, index) => <details className="timeline-item" key={experience.org} open={index === 0}><summary className="timeline-item__summary"><div className="timeline-item__top"><span className="timeline-item__role">{t(`experience.${experience.roleKey}`, { defaultValue: experience.role })}</span><span className="timeline-item__period">{experience.period}</span></div></summary><div className="timeline-item__content"><div className="timeline-item__org"><img src={experience.logo} alt="" className="timeline-item__org-logo" /><span>{experience.org}</span></div><div className="timeline-item__location">{t(`experience.${experience.locationKey}`, { defaultValue: experience.location })}</div><ul className="timeline-item__list">{experience.bulletKeys.map((key, bulletIndex) => <li key={key}>{t(`experience.${key}`, { defaultValue: experience.bullets[bulletIndex] })}</li>)}</ul></div></details>)}</div></section>
        <section id="projetos" className="section container projects-section"><div className="section__head"><span className="badge">{t('projects.label')}</span><h2 className="section__title">{t('projects.title')}</h2></div><div className="projects">{projects.map((project, index) => <details className="project-card" key={project.title} open={index === 0}><summary className="project-card__summary"><div className="project-card__visual"><span>{String(index + 1).padStart(2, '0')}</span></div><div className="project-card__body"><h3 className="project-card__title">{project.title}</h3><div className="project-card__tags">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div><span className="project-card__toggle">+</span></div></summary><div className="project-card__details"><p className="project-card__desc">{t(`projectDescriptions.${project.descKey}`, { defaultValue: project.desc })}</p><a className="project-card__link" href={project.link} target="_blank" rel="noopener">{t('projects.github')}</a></div></details>)}</div><a className="projects__all-link" href="https://github.com/LeonardoSantosBR?tab=repositories" target="_blank" rel="noopener">{t('projects.all')}</a></section>
        <section id="contato" className="section container contact"><div className="contact__card"><span className="badge">{t('contact.label')}</span><h2 className="section__title">{t('contact.title')}</h2><p className="contact__desc">{t('contact.description')}</p><div className="contact__actions"><a href="mailto:leosantosmelo07@gmail.com" className="btn btn--primary">leosantosmelo07@gmail.com</a><a href="https://www.linkedin.com/in/leonardo-santos-71632521b/" target="_blank" rel="noopener" className="btn btn--ghost">{t('contact.linkedin')}</a></div></div></section>
      </main>
      <footer className="footer"><div className="container footer__inner"><span>Leonardo Santos © 2026</span><span>{t('footer')}</span></div></footer>
    </>
  )
}

export default App
