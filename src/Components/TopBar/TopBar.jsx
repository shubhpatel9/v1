import React from "react";
import data from "../../data";
import "./TopBar.css";

const NAV_LABELS = ["Welcome", "About", "Experience", "Projects"];

export default function TopBar({ active, onNavigate }) {
  return (
    <header className="topbar">
      <button
        className="topbar-name"
        onClick={() => onNavigate(0)}
        aria-label="Scroll to top"
      >
        {data.name}
      </button>

      <nav className="topbar-right" aria-label="Main navigation">
        <div className="topbar-icons">
          <a
            href={data.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
          >
            <i className="fab fa-github" aria-hidden="true"></i>
          </a>
          <a
            href={data.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
          >
            <i className="fab fa-linkedin" aria-hidden="true"></i>
          </a>
          <a href={`mailto:${data.email}`} aria-label="Send email">
            <i className="far fa-envelope" aria-hidden="true"></i>
          </a>
        </div>

        <div className="topbar-divider" aria-hidden="true" />

        <div className="topbar-nav" role="tablist" aria-label="Section navigation">
          {NAV_LABELS.map((label, i) => (
            <button
              key={i}
              className={`nav-link${active === i ? " nav-link--active" : ""}`}
              onClick={() => onNavigate(i)}
              role="tab"
              aria-selected={active === i}
              aria-label={`Go to ${label}`}
            >
              {label}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}
