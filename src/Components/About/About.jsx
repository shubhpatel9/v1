import React, { useState } from "react";
import data from "../../data";
import "./About.css";

export default function About() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="about">
      <div className="about-inner">
        <div className="about-text">
          <h2 className="section-label">
            <span className="section-num">01.</span>
            About Me
          </h2>

          <p className="about-bio">{data.bio}</p>

          {expanded && (
            <p className="about-bio about-bio--ext">{data.extendedBio}</p>
          )}

          <button
            className="about-toggle"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
          >
            {expanded ? "Show less ↑" : "Read more ↓"}
          </button>

          <div className="about-facts" aria-label="Quick facts">
            {data.facts.map((fact, i) => (
              <span key={i} className="fact-pill">
                {fact}
              </span>
            ))}
          </div>
        </div>

        <div className="about-photo-col">
          <div className="about-photo-frame">
            <img
              src={data.aboutPhoto}
              alt="Shubh Patel"
              className="about-photo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
