import { useTranslation } from "react-i18next";
import { learningSkills, skills } from "@/data/skills";
import aiLogo from "@/assets/ia-logo.png";

function SkillGrid({ items }: { items: readonly (readonly [string, string])[] }) {
  return (
    <div className="skills-grid">
      {items.map(([name, icon]) => (
        <div className="skill-card" key={name}>
          <div className="skill-card__icon">
            <img src={icon} alt="" loading="lazy" />
          </div>
          <span className="skill-card__name">{name}</span>
        </div>
      ))}
    </div>
  );
}

export function Skills() {
  const { t } = useTranslation();
  return (
    <div className="skills-spotlight">
      <section id="skills" className="section container skills-section">
        <div className="section__head">
          <span className="badge">{t("skills.label")}</span>
        </div>
        <div className="skills-columns">
          <div className="skills-column">
            <h2 className="skills-column__title">{t("skills.title")}</h2>
            <SkillGrid items={skills} />
          </div>
          <div className="skills-column skills-column--learning">
            <h3 className="skills-column__title">{t("skills.learningTitle")}</h3>
            <SkillGrid items={learningSkills} />
          </div>
        </div>

        <article className="ai-manifesto">
          <div className="ai-manifesto__visual" aria-hidden="true">
            <img src={aiLogo} alt="" />
          </div>
          <div className="ai-manifesto__content">
            <span className="badge">{t("skills.aiLabel")}</span>
            <h3 className="ai-manifesto__title">{t("skills.aiTitle")}</h3>
            <p>{t("skills.aiManifesto")}</p>
          </div>
        </article>
      </section>
    </div>
  );
}
