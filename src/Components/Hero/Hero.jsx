import React, { useState, useEffect } from "react";
import data from "../../data";
import "./Hero.css";

export default function Hero({ onNavigate }) {
  const taglines = data.taglines;
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState("typing"); // typing | pausing | erasing

  useEffect(() => {
    const target = taglines[idx];
    let timer;

    if (phase === "typing") {
      if (displayed.length < target.length) {
        timer = setTimeout(
          () => setDisplayed(target.slice(0, displayed.length + 1)),
          65
        );
      } else {
        timer = setTimeout(() => setPhase("pausing"), 1800);
      }
    } else if (phase === "pausing") {
      timer = setTimeout(() => setPhase("erasing"), 100);
    } else if (phase === "erasing") {
      if (displayed.length > 0) {
        timer = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 32);
      } else {
        setIdx((prev) => (prev + 1) % taglines.length);
        setPhase("typing");
      }
    }

    return () => clearTimeout(timer);
  }, [displayed, phase, idx, taglines]);

  return (
    <div className="hero">
      {/* subtle dot-grid background */}
      <div className="hero-grid" aria-hidden="true" />

      <div className="hero-content">
        <p className="hero-intro">Hi, my name is</p>

        <h1 className="hero-name">{data.name}.</h1>

        <div className="hero-tagline" aria-live="polite" aria-atomic="true">
          <span className="hero-tagline-text">{displayed}</span>
          <span className="hero-cursor" aria-hidden="true">|</span>
        </div>

        <p className="hero-desc">
          {data.title} at Aptiv — designing embedded systems, ADAS features,
          and firmware-over-the-air pipelines.
        </p>

        <div className="hero-ctas">
          <a
            className="btn btn--outline"
            href={data.resumeLink}
            target="_blank"
            rel="noreferrer"
          >
            Resume ↗
          </a>
          <a className="btn btn--solid" href={`mailto:${data.email}`}>
            Contact Me
          </a>
        </div>
      </div>

      <button
        className="hero-next"
        onClick={() => onNavigate(1)}
        aria-label="Go to About section"
      >
        About&nbsp;
        <i className="fas fa-arrow-right" aria-hidden="true"></i>
      </button>
    </div>
  );
}
