import { useTranslation } from "react-i18next";
import { experiences } from "@/data/experiences";

export function Experience() {
  const { t } = useTranslation();
  return (
    <section id="experiencia" className="section container">
      <div className="section__head">
        <span className="badge">{t("experience.label")}</span>
        <h2 className="section__title">{t("experience.title")}</h2>
      </div>
      <div className="timeline">
        {experiences.map((experience, index) => (
          <details
            className="timeline-item"
            key={experience.org}
            open={index === 0}
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
          </details>
        ))}
      </div>
    </section>
  );
}
