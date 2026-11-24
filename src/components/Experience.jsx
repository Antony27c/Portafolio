import { useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import Reveal from "./Reveal";
import { jobs } from "../data/experience";

export default function Experience() {
  const { t } = useLanguage();
  const [activeJob, setActiveJob] = useState(jobs[0].id);
  const tabRefs = useRef([]);

  const onKeyDown = (event) => {
    const index = jobs.findIndex((job) => job.id === activeJob);
    const moves = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
    let next;
    if (event.key in moves) next = (index + moves[event.key] + jobs.length) % jobs.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = jobs.length - 1;
    else return;
    event.preventDefault();
    setActiveJob(jobs[next].id);
    tabRefs.current[next]?.focus();
  };

  return (
    <Reveal as="section" id="experiencia" className="section">
      <h2 className="section-title">
        <span>02.</span> <em>{t("exp.title")}</em>
      </h2>
      <div className="jobs">
        <div className="jobs-tabs" role="tablist" aria-label={t("exp.title")} onKeyDown={onKeyDown}>
          {jobs.map((job, index) => {
            const active = job.id === activeJob;
            return (
              <button
                key={job.id}
                ref={(el) => (tabRefs.current[index] = el)}
                type="button"
                id={`tab-${job.id}`}
                className={`job-tab${active ? " is-active" : ""}`}
                role="tab"
                aria-selected={active}
                aria-controls={`panel-${job.id}`}
                tabIndex={active ? 0 : -1}
                onClick={() => setActiveJob(job.id)}
              >
                {job.tabKey ? t(job.tabKey) : job.tab}
              </button>
            );
          })}
        </div>
        <div className="jobs-panels">
          {jobs.map((job) => (
            <article
              key={job.id}
              id={`panel-${job.id}`}
              className="job-panel"
              role="tabpanel"
              aria-labelledby={`tab-${job.id}`}
              tabIndex={0}
              hidden={job.id !== activeJob}
            >
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
