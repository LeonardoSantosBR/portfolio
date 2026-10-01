import { useTranslation } from "react-i18next";
import { motion, useReducedMotion } from "motion/react";
import { projects } from "@/data/projects";

export function Projects() {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();
  return (
    <section id="projetos" className="section container projects-section">
      <div className="section__head">
        <span className="badge">{t("projects.label")}</span>
        <h2 className="section__title">{t("projects.title")}</h2>
      </div>
      <div className="projects">
        {projects.map((project, index) => (
          <motion.details
            className="project-card"
            key={project.title}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.1 }}
          >
            <summary className="project-card__summary">
              <div className="project-card__visual">
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="project-card__body">
                <div className="project-card__title-row">
                  <h3 className="project-card__title">{project.title}</h3>
                  <span className={`project-card__status project-card__status--${project.status}`}>
                    {t(`projectStatuses.${project.status}`, {
                      defaultValue: { planning: "Planejamento", building: "Construindo", finished: "Finalizado" }[project.status],
                    })}
                  </span>
                </div>
                <div className="project-card__tags">
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="project-card__toggle">+</span>
              </div>
            </summary>
            <div className="project-card__details">
              <p className="project-card__desc">
                {t(`projectDescriptions.${project.descKey}`, {
                  defaultValue: project.desc,
                })}
              </p>
              <a
                className="project-card__link"
                href={project.link}
                target="_blank"
                rel="noopener"
              >
                {t("projects.github")}
              </a>
            </div>
          </motion.details>
        ))}
      </div>
      <a
        className="projects__all-link"
        href="https://github.com/LeonardoSantosBR?tab=repositories"
        target="_blank"
        rel="noopener"
      >
        {t("projects.all")}
      </a>
    </section>
  );
}
