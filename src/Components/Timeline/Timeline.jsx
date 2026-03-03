import React, { useState } from "react";
import data from "../../data";
import "./Timeline.css";

export default function Timeline() {
  const [active, setActive] = useState(0);
  const job = data.experience[active];

  return (
    <div className="timeline">
      <div className="timeline-inner">
        <h2 className="section-label">
          <span className="section-num">02.</span>
          Experience
        </h2>

        {/* company tab strip */}
        <div className="tl-tabs" role="tablist" aria-label="Work experience">
          {data.experience.map((exp, i) => (
            <button
              key={i}
              className={`tl-tab${active === i ? " tl-tab--active" : ""}`}
              onClick={() => setActive(i)}
              role="tab"
              aria-selected={active === i}
              aria-controls={`tl-panel-${i}`}
              id={`tl-tab-${i}`}
            >
              <span className="tab-company">{exp.company}</span>
              <span className="tab-date">{exp.date}</span>
            </button>
          ))}
        </div>

        {/* job detail panel */}
        <div
          className="tl-panel"
          key={active}
          role="tabpanel"
          id={`tl-panel-${active}`}
          aria-labelledby={`tl-tab-${active}`}
        >
          <h3 className="job-title">{job.title}</h3>
          <p className="job-company">
            {job.company}&nbsp;·&nbsp;{job.location}
          </p>
          <p className="job-date">{job.date}</p>

          <ul className="job-bullets">
            {job.bullets.map((bullet, i) => (
              <li key={i} className="job-bullet">
                <span className="bullet-marker" aria-hidden="true">▹</span>
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
