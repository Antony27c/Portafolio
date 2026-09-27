import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import Reveal from "./Reveal";
import { jobs } from "../data/experience";

export default function Experience() {
  const { t } = useLanguage();
  const [activeJob, setActiveJob] = useState(jobs[0].id);

  return (
    <Reveal as="section" id="experiencia" className="section">
      <h2 className="section-title">
        <span>02.</span> <em>{t("exp.title")}</em>
      </h2>
      <div className="jobs">
        <div className="jobs-tabs" role="tablist">
          {jobs.map((job) => (
            <button
              key={job.id}
              type="button"
              className={`job-tab${job.id === activeJob ? " is-active" : ""}`}
              role="tab"
              aria-selected={job.id === activeJob}
              onClick={() => setActiveJob(job.id)}
            >
              {job.tabKey ? t(job.tabKey) : job.tab}
            </button>
          ))}
        </div>
        <div className="jobs-panels">
          {jobs.map((job) => (
            <article key={job.id} className="job-panel" hidden={job.id !== activeJob}>
              <h3>{t(job.titleKey)}</h3>
              <p className="job-date">{job.dateKey ? t(job.dateKey) : job.date}</p>
              <ul>
                {job.pointKeys.map((key) => (
                  <li key={key}>{t(key)}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
