import { useTranslation } from "react-i18next";
import { motion, useReducedMotion } from "motion/react";
import me from "../../assets/my-person.png";

export function About() {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();
  return (
    <section id="sobre" className="section container">
      <div className="section__head">
        <span className="badge">{t("about.label")}</span>
        <h2 className="section__title">{t("about.title")}</h2>
      </div>
      <div className="about">
        <motion.div
          className="about__photo"
          initial={shouldReduceMotion ? false : { opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <img src={me} alt="Leonardo Santos" className="about__photo-img" />
        </motion.div>
        <motion.div
          className="about__text"
          initial={shouldReduceMotion ? false : { opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.12 }}
        >
          <p>{t("about.paragraph1")}</p>
          <p>{t("about.paragraph2")}</p>
        </motion.div>
      </div>
    </section>
  );
}
