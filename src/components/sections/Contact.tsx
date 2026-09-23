import { useTranslation } from "react-i18next";

export function Contact() {
  const { t } = useTranslation();
  return (
    <section id="contato" className="section container contact">
      <div className="contact__card">
        <span className="badge">{t("contact.label")}</span>
        <h2 className="section__title">{t("contact.title")}</h2>
        <p className="contact__desc">{t("contact.description")}</p>
        <div className="contact__actions">
          <a
            href="mailto:leosantosmelo07@gmail.com"
            className="btn btn--primary"
          >
            leosantosmelo07@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/leonardo-santos-71632521b/"
            target="_blank"
            rel="noopener"
            className="btn btn--ghost"
          >
            {t("contact.linkedin")}
          </a>
        </div>
      </div>
    </section>
  );
}
