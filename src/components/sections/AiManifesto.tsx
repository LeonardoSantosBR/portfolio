import { useTranslation } from "react-i18next";
import aiLogo from "@/assets/ia-logo.png";

export function AiManifesto() {
  const { t } = useTranslation();

  return (
    <section className="ai-manifesto" aria-labelledby="ai-manifesto-title">
      <div className="ai-manifesto__visual" aria-hidden="true">
        <img src={aiLogo} alt="" />
      </div>
      <div className="ai-manifesto__content">
        <span className="badge">{t("skills.aiLabel")}</span>
        <h2 id="ai-manifesto-title" className="ai-manifesto__title">
          {t("skills.aiTitle")}
        </h2>
        <p>{t("skills.aiManifesto")}</p>
      </div>
    </section>
  );
}
