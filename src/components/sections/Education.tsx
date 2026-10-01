import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, useReducedMotion } from "motion/react";
import estacioLogo from "@/assets/estacio-logo.jpg";
import diploma from "@/assets/diploma.png";
import { Icon } from "@/components/ui/Icon";

export function Education() {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();
  const [diplomaOpen, setDiplomaOpen] = useState(false);
  useEffect(() => {
    if (!diplomaOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setDiplomaOpen(false); };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [diplomaOpen]);

  return (
    <>
    <section id="formacao" className="section container">
      <div className="section__head">
        <span className="badge">{t("education.label")}</span>
      </div>
      <div className="certs">
        <motion.div
          className="cert-item"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div className="cert-item__school">
            <img
              src={estacioLogo}
              alt="Logo da Estácio de Sá"
              className="cert-item__logo"
            />
            <div>
              <div className="cert-item__name">{t("education.degree")}</div>
              <div className="cert-item__org">{t("education.school")}</div>
              <button className="cert-item__diploma" type="button" onClick={() => setDiplomaOpen(true)}>
                <Icon size={15}><path d="M2.5 12.5 12 3l9.5 9.5" /><path d="M5 10v8.5h14V10M9 18.5v-5h6v5" /></Icon>
                {t("education.viewDiploma")}
              </button>
            </div>
          </div>
          <span className="cert-item__year">{t("education.period")}</span>
        </motion.div>
      </div>
    </section>
    {diplomaOpen && <div className="diploma-modal" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setDiplomaOpen(false); }}>
      <div className="diploma-modal__dialog" role="dialog" aria-modal="true" aria-label={t("education.viewDiploma")}>
        <button className="diploma-modal__close" type="button" onClick={() => setDiplomaOpen(false)} aria-label={t("education.closeDiploma")}>
          <Icon size={20}><path d="m6 6 12 12M18 6 6 18" /></Icon>
        </button>
        <img src={diploma} alt={t("education.diplomaAlt")} />
      </div>
    </div>}
    </>
  );
}
