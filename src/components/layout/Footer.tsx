import { useTranslation } from 'react-i18next'

export function Footer() {
  const { t } = useTranslation()
  return <footer className="footer"><div className="container footer__inner"><span>Leonardo Santos © 2026</span><span>{t('footer')}</span></div></footer>
}
