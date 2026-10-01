import { useTranslation } from "react-i18next";
import { motion, useReducedMotion } from "motion/react";
import { experiences } from "@/data/experiences";

export function Experience() {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();
  return (
    <section id="experiencia" className="section container">
      <div className="section__head">
        <span className="badge">{t("experience.label")}</span>
        <h2 className="section__title">{t("experience.title")}</h2>
      </div>
      <div className="timeline">
        {experiences.map((experience, index) => (
          <motion.details
            className="timeline-item"
            key={experience.org}
            open={index === 0}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.1 }}
          >
            <summary className="timeline-item__summary">
              <div className="timeline-item__top">
                <span className="timeline-item__role">
                  {t(`experience.${experience.roleKey}`, {
                    defaultValue: experience.role,
                  })}
                </span>
                <span className="timeline-item__period">
                  {t(`experiencePeriods.${experience.periodKey}`, {
                    defaultValue: experience.period,
                  })}
                </span>
              </div>
            </summary>
            <div className="timeline-item__content">
              <div className="timeline-item__org">
                <img
                  src={experience.logo}
                  alt=""
                  className="timeline-item__org-logo"
                />
                <span>{experience.org}</span>
              </div>
              <div className="timeline-item__location">
                {t(`experience.${experience.locationKey}`, {
                  defaultValue: experience.location,
                })}
              </div>
              <ul className="timeline-item__list">
                {experience.bulletKeys.map((key, bulletIndex) => (
                  <li key={key}>
                    {t(`experience.${key}`, {
                      defaultValue: experience.bullets[bulletIndex],
                    })}
                  </li>
                ))}
              </ul>
            </div>
          </motion.details>
        ))}
      </div>
    </section>
  );
}
