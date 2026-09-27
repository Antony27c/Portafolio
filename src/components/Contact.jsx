import { useLanguage } from "../context/LanguageContext";
import Reveal from "./Reveal";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <Reveal as="section" id="contacto" className="section contact-block">
      <p className="contact-kicker">
        <span>05.</span> <em>{t("contact.eyebrow")}</em>
      </p>
      <h2>{t("contact.title")}</h2>
      <p>{t("contact.lead")}</p>
      <form className="contact-form" action="https://formspree.io/f/xjgplbrb" method="POST">
        <label htmlFor="name">{t("form.name")}</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder={t("form.namePh")}
          required
          minLength="3"
        />
        <label htmlFor="email">{t("form.email")}</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder={t("form.emailPh")}
          required
        />
        <label htmlFor="number">{t("form.phone")}</label>
        <input
          type="tel"
          id="number"
          name="telefono"
          placeholder={t("form.phonePh")}
          pattern="[0-9]{7,15}"
          required
        />
        <label htmlFor="residencia">{t("form.city")}</label>
        <input
          type="text"
          id="residencia"
          name="residencia"
          placeholder={t("form.cityPh")}
          required
          minLength="5"
        />
        <label htmlFor="motivo">{t("form.reason")}</label>
        <select id="motivo" name="motivo" required defaultValue="">
          <option value="">{t("form.reasonEmpty")}</option>
          <option value="consulta">{t("form.reasonGeneral")}</option>
          <option value="freelance">{t("form.reasonWork")}</option>
          <option value="otro">{t("form.reasonOther")}</option>
        </select>
        <label htmlFor="mensaje">{t("form.message")}</label>
        <textarea
          id="mensaje"
          name="mensaje"
          placeholder={t("form.messagePh")}
          required
          minLength="10"
        ></textarea>
        <label className="check-line">
          <input type="checkbox" name="Terminos" required />
          <span>{t("form.terms")}</span>
        </label>
        <button type="submit" className="btn-outline">
          {t("form.submit")}
        </button>
      </form>
    </Reveal>
  );
}
