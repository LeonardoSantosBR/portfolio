import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Icon } from '@/components/ui/Icon'

export function Header() {
  const { t, i18n } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)
  const language = i18n.language.startsWith('en') ? 'en' : 'pt-BR'
  const sections = [
    { id: 'sobre', label: t('nav.about') }, { id: 'skills', label: t('nav.skills') }, { id: 'formacao', label: t('nav.education') },
    { id: 'experiencia', label: t('nav.experience') }, { id: 'projetos', label: t('nav.projects') }, { id: 'contato', label: t('nav.contact') },
  ]
  const closeMenu = () => setMenuOpen(false)

  return <header className="header">
    <div className="container header__inner">
      <span className="logo">Leo<span className="logo__accent">/&gt;</span></span>
      <nav className="nav">{sections.map((item) => <a key={item.id} href={`#${item.id}`} onClick={closeMenu}>{item.label}</a>)}</nav>
      <button className="menu-btn" aria-label="Abrir menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><Icon size={22}><path d="M3 6h18M3 12h18M3 18h18" /></Icon></button>
      <button className="language-toggle" type="button" onClick={() => i18n.changeLanguage(language === 'en' ? 'pt-BR' : 'en')} aria-label="Change language">{language === 'en' ? 'EN' : 'PT'}</button>
    </div>
    <nav className={`mobile-nav ${menuOpen ? 'is-open' : ''}`} hidden={!menuOpen}>{sections.map((item) => <a key={item.id} href={`#${item.id}`} onClick={closeMenu}>{item.label}</a>)}</nav>
  </header>
}
