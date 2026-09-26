import { useTranslation } from "react-i18next";
import me from "../../assets/my-person.png";

export function About() {
  const { t } = useTranslation();
  return (
    <section id="sobre" className="section container">
      <div className="section__head">
        <span className="badge">{t("about.label")}</span>
        <h2 className="section__title">{t("about.title")}</h2>
      </div>
      <div className="about">
        <div className="about__photo">
          <img src={me} alt="Leonardo Santos" className="about__photo-img" />
        </div>
        <div className="about__text">
          <p>{t("about.paragraph1")}</p>
          <p>{t("about.paragraph2")}</p>
        </div>
      </div>
    </section>
  );
}
