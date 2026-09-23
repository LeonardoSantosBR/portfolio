import { useTranslation } from "react-i18next";
import estacioLogo from "@/assets/estacio-logo.jpg";

export function Education() {
  const { t } = useTranslation();
  return (
    <section id="formacao" className="section container">
      <div className="section__head">
        <span className="badge">{t("education.label")}</span>
      </div>
      <div className="certs">
        <div className="cert-item">
          <div className="cert-item__school">
            <img
              src={estacioLogo}
              alt="Logo da Estácio de Sá"
              className="cert-item__logo"
            />
            <div>
              <div className="cert-item__name">{t("education.degree")}</div>
              <div className="cert-item__org">{t("education.school")}</div>
            </div>
          </div>
          <span className="cert-item__year">{t("education.period")}</span>
        </div>
      </div>
    </section>
  );
}
