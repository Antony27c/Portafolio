import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { EMAIL, socials } from "../data/social";
import Icon from "./Icon";
import Reveal from "./Reveal";

const FORM_URL = "https://formspree.io/f/xjgplbrb";
const MAX_MESSAGE = 1000;
const reasons = [
  { value: "freelance", key: "form.reasonWork" },
  { value: "consulta", key: "form.reasonGeneral" },
  { value: "otro", key: "form.reasonOther" },
];
const linkedin = socials.find((s) => s.icon === "linkedin");

export default function Contact() {
  const { t } = useLanguage();
  const [status, setStatus] = useState("idle");
  const [copied, setCopied] = useState(false);
  const [length, setLength] = useState(0);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(FORM_URL, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(res.statusText);
      form.reset();
      setLength(0);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <Reveal as="section" id="contacto" className="section contact-block">
      <div className="contact-head">
        <p className="contact-kicker">
          <span>04.</span> <em>{t("contact.eyebrow")}</em>
        </p>
        <h2>{t("contact.title")}</h2>
        <p>{t("contact.lead")}</p>
      </div>
      <div className="contact-layout">
        <aside className="contact-aside">
          <p className="availability">
            <span className="pulse" aria-hidden="true"></span>
            {t("contact.available")}
          </p>
          <h3>{t("contact.asideTitle")}</h3>
          <p>{t("contact.asideText")}</p>
          <ul className="contact-info">
            <li>
              <span className="info-icon"><Icon name="mail" /></span>
              <div>
                <small>Email</small>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </div>
              <button
                type="button"
                className="copy-btn"
                onClick={copyEmail}
                aria-label={t("contact.copy")}
                title={t("contact.copy")}
              >
                <Icon name={copied ? "check" : "copy"} />
              </button>
            </li>
            <li>
              <span className="info-icon"><Icon name="linkedin" /></span>
              <div>
                <small>LinkedIn</small>
                <a href={linkedin.href} target="_blank" rel="noopener noreferrer">
                  antonio-chocobar
                </a>
              </div>
            </li>
            <li>
              <span className="info-icon"><Icon name="pin" /></span>
              <div>
                <small>{t("contact.locationLabel")}</small>
                <span>{t("contact.location")}</span>
              </div>
            </li>
          </ul>
          <p className="copy-feedback" role="status" aria-live="polite">
            {copied && t("contact.copied")}
          </p>
        </aside>

        <form className="contact-form" action={FORM_URL} method="POST" onSubmit={onSubmit}>
          <div className="form-row">
            <div className="field">
              <label htmlFor="name">{t("form.name")}</label>
              <div className="input-wrap">
                <Icon name="user" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder={t("form.namePh")}
                  autoComplete="name"
                  required
                  minLength="3"
                />
              </div>
            </div>
            <div className="field">
              <label htmlFor="email">{t("form.email")}</label>
              <div className="input-wrap">
                <Icon name="mail" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder={t("form.emailPh")}
                  autoComplete="email"
                  required
                />
              </div>
            </div>
          </div>

          <fieldset className="field reason-group">
            <legend>{t("form.reason")}</legend>
            <div className="reason-pills">
              {reasons.map((reason, index) => (
                <label key={reason.value} className="pill">
                  <input
                    type="radio"
                    name="motivo"
                    value={reason.value}
                    defaultChecked={index === 0}
                  />
                  <span>{t(reason.key)}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <div className="field">
            <label htmlFor="mensaje">{t("form.message")}</label>
            <div className="input-wrap is-textarea">
              <Icon name="message" />
              <textarea
                id="mensaje"
                name="mensaje"
                placeholder={t("form.messagePh")}
                required
                minLength="10"
                maxLength={MAX_MESSAGE}
                onChange={(e) => setLength(e.target.value.length)}
              ></textarea>
            </div>
            <span className="char-count">{length}/{MAX_MESSAGE}</span>
          </div>

          <button type="submit" className="btn-solid submit-btn" disabled={status === "sending"}>
            {status === "sending" ? (
              <span className="spinner" aria-hidden="true"></span>
            ) : (
              <Icon name="send" />
            )}
            {t(status === "sending" ? "form.sending" : "form.submit")}
          </button>
          <p className={`form-status is-${status}`} role="status" aria-live="polite">
            {status === "sent" && <><Icon name="check" /> {t("form.sent")}</>}
            {status === "error" && t("form.error")}
          </p>
        </form>
      </div>
    </Reveal>
  );
}
