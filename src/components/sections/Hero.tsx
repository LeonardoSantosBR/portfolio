import { useTranslation } from "react-i18next";
import { CloudShader } from "@/components/ui/cloud-shader";
import { Icon } from "@/components/ui/Icon";
import { Header } from "@/components/layout/Header";

export function Hero() {
  const { t } = useTranslation();
  return (
    <div className="sky-hero">
      <CloudShader
        className="sky-hero__background"
        speed={0.65}
        count={6}
        cloudColor="#fffaf0"
        skyTopColor="#315f9b"
        skyBottomColor="#b6dcf4"
      />
      <img
        className="plane-wing"
        src="/assets/plane-wing.png"
        alt=""
        aria-hidden="true"
      />
      <div className="sky-hero__content">
        <Header />
        <main id="top">
          <section className="hero container">
            <div className="hero__text">
              <p className="eyebrow">{t("hero.greeting")}</p>
              <h1 className="hero__title">
                {t("hero.title")}
                <br />
                <span className="hero__title-accent">{t("hero.role")}</span>
              </h1>
              <p className="hero__desc">{t("hero.description")}</p>
              <div className="hero__meta">
                <span className="hero__meta-item">
                  <Icon size={14}>
                    <path d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21Z" />
                    <circle cx="12" cy="9.5" r="2.3" />
                  </Icon>
                  {t("hero.location")}
                </span>
                <span className="hero__meta-item hero__meta-item--status">
                  <span className="status-dot" />
                  {t("hero.availability")}
                </span>
              </div>
              <div className="hero__links">
                <a
                  href="https://github.com/LeonardoSantosBR"
                  target="_blank"
                  rel="noopener"
                  className="icon-link"
                  aria-label="GitHub"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 2C6.48 2 2 6.58 2 12.19c0 4.49 2.87 8.3 6.84 9.64.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.72-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.57 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05a9.36 9.36 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.19C22 6.58 17.52 2 12 2Z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/leonardo-santos-71632521b/"
                  target="_blank"
                  rel="noopener"
                  className="icon-link"
                  aria-label="LinkedIn"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M6.94 8.5H3.56V20.4h3.38V8.5ZM5.25 3.1a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92ZM20.44 20.4h-3.37v-6.24c0-1.49-.03-3.4-2.07-3.4-2.08 0-2.4 1.62-2.4 3.3v6.34H9.24V8.5h3.24v1.63h.05c.45-.86 1.56-1.77 3.21-1.77 3.43 0 4.7 2.26 4.7 5.35v6.69Z" />
                  </svg>
                </a>
                <a
                  href="mailto:leosantosmelo07@gmail.com"
                  className="icon-link"
                  aria-label="E-mail"
                >
                  <Icon>
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m4 7 8 6 8-6" />
                  </Icon>
                </a>
              </div>
            </div>
            <div className="hero__photo">
              <div className="hero__photo-offset" aria-hidden="true" />
              <img
                src="/assets/foto-perfil.jpg"
                alt="Foto de Leonardo Santos"
                className="hero__photo-img"
              />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
