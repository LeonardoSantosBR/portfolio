import { useTranslation } from "react-i18next";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { skills } from "@/data/skills";

export function Skills() {
  const { t } = useTranslation();
  return (
    <CardSpotlight className="skills-spotlight" radius={180} color="#dbeafe">
      <section id="skills" className="section container skills-section">
        <div className="section__head">
          <span className="badge">{t("skills.label")}</span>
          <h2 className="section__title">{t("skills.title")}</h2>
        </div>
        <div className="skills-grid">
          {skills.map(([name, icon]) => (
            <div className="skill-card" key={name}>
              <div className="skill-card__icon">
                <img src={icon} alt="" loading="lazy" />
              </div>
              <span className="skill-card__name">{name}</span>
            </div>
          ))}
        </div>
      </section>
    </CardSpotlight>
  );
}
