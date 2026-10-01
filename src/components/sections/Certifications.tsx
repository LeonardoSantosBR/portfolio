import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Icon } from "@/components/ui/Icon";
import { certifications } from "@/data/certifications";

const FEATURED_COUNT = 3;

export function Certifications() {
  const { t } = useTranslation();
  const [showAll, setShowAll] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState<(typeof certifications)[number] | null>(null);
  const visibleItems = showAll ? certifications : certifications.slice(0, FEATURED_COUNT);

  useEffect(() => {
    if (!selectedCertificate) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedCertificate(null);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [selectedCertificate]);

  return (
    <section id="certificacoes" className="section container certifications-section">
      <div className="section__head">
        <span className="badge">{t("certifications.label")}</span>
        <h2 className="section__title">{t("certifications.title")}</h2>
      </div>
      <div className="certifications-grid">
        {visibleItems.map((certification) => (
          <article className="certification-card" key={certification.id}>
            <div className="certification-card__image">
              <img src={certification.logo} alt={t(`certifications.${certification.organizationKey}`)} />
            </div>
            <div className="certification-card__content">
              <span className="certification-card__status">{t("certifications.course")}</span>
              <h3>{t(`certifications.${certification.nameKey}`)}</h3>
              <p className={`certification-card__organization certification-card__organization--${certification.id}`}>
                {t(`certifications.${certification.organizationKey}`)}
              </p>
              <button className="cert-item__diploma" type="button" onClick={() => setSelectedCertificate(certification)}>
                <Icon size={15}><path d="M2.5 12.5 12 3l9.5 9.5" /><path d="M5 10v8.5h14V10M9 18.5v-5h6v5" /></Icon>
                {t("certifications.viewCertificate")}
              </button>
            </div>
          </article>
        ))}
      </div>
      {certifications.length > FEATURED_COUNT && (
        <div className="certifications-actions">
          <button
            className="certifications-toggle"
            type="button"
            onClick={() => setShowAll((current) => !current)}
            aria-expanded={showAll}
          >
            {showAll ? t("certifications.showLess") : t("certifications.showAll")}
          </button>
        </div>
      )}
      {selectedCertificate && (
        <div className="diploma-modal" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelectedCertificate(null); }}>
          <div className="diploma-modal__dialog" role="dialog" aria-modal="true" aria-label={t("certifications.viewCertificate")}>
            <button className="diploma-modal__close" type="button" onClick={() => setSelectedCertificate(null)} aria-label={t("certifications.closeCertificate")}>
              <Icon size={20}><path d="m6 6 12 12M18 6 6 18" /></Icon>
            </button>
            <img src={selectedCertificate.certificate} alt={t("certifications.certificateAlt", { name: t(`certifications.${selectedCertificate.nameKey}`) })} />
          </div>
        </div>
      )}
    </section>
  );
}
