import React, { useState } from "react";
import data from "../../data";
import "./Projects.css";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? data.projects : data.projects.slice(0, 6);

  return (
    <div className="projects">
      <div className="projects-inner">
        <h2 className="section-label">
          <span className="section-num">03.</span>
          Projects
        </h2>

        <div className="proj-grid">
          {visible.map((proj, i) => (
            <article className="proj-card" key={i}>
              <div className="proj-card-top">
                <i className="far fa-folder-open proj-icon" aria-hidden="true"></i>
                <div className="proj-links">
                  {proj.github && (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${proj.title} on GitHub`}
                    >
                      <i className="fab fa-github" aria-hidden="true"></i>
                    </a>
                  )}
                  {proj.link && (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View ${proj.title}`}
                    >
                      <i className="fas fa-external-link-alt" aria-hidden="true"></i>
                    </a>
                  )}
                </div>
              </div>

              <h3 className="proj-title">{proj.title}</h3>
              <p className="proj-desc">{proj.shortDesc}</p>

              <footer className="proj-tags">
                {proj.tags.map((tag, j) => (
                  <span key={j} className="proj-tag">
                    {tag}
                  </span>
                ))}
              </footer>
            </article>
          ))}
        </div>

        {data.projects.length > 6 && (
          <button
            className="show-more"
            onClick={() => setShowAll((v) => !v)}
          >
            {showAll
              ? "Show less ↑"
              : `Show all ${data.projects.length} projects ↓`}
          </button>
        )}

        <footer className="site-footer">
          <p>
            Designed &amp; built by{" "}
            <a href={data.github} target="_blank" rel="noreferrer">
              Shubh Patel
            </a>{" "}
            · Built with React
          </p>
        </footer>
      </div>
    </div>
  );
}
