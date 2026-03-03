import React, { useState, useRef, useEffect, useCallback } from "react";
import { Switch, Route } from "react-router-dom";
import TopBar from "./Components/TopBar/TopBar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Timeline from "./Components/Timeline/Timeline";
import Projects from "./Components/Projects/Projects";
import FourOFour from "./Components/404/404.js";
import "./App.css";

const SECTION_COUNT = 4;

function Portfolio() {
  const [active, setActive] = useState(0);
  const containerRef = useRef(null);
  const sectionRefs = useRef([]);

  const navigateTo = useCallback((idx) => {
    const el = sectionRefs.current[idx];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
    }
  }, []);

  // sync dot indicator with scroll position
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const onScroll = () => {
      const idx = Math.round(container.scrollLeft / container.clientWidth);
      setActive(idx);
    };
    container.addEventListener("scroll", onScroll, { passive: true });
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  // arrow key navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight")
        navigateTo(Math.min(active + 1, SECTION_COUNT - 1));
      if (e.key === "ArrowLeft")
        navigateTo(Math.max(active - 1, 0));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, navigateTo]);

  const setRef = (i) => (el) => {
    sectionRefs.current[i] = el;
  };

  return (
    <div className="site">
      <TopBar active={active} total={SECTION_COUNT} onNavigate={navigateTo} />
      <div className="sections-container" ref={containerRef}>
        <section className="section" ref={setRef(0)}>
          <Hero onNavigate={navigateTo} />
        </section>
        <section className="section" ref={setRef(1)}>
          <About />
        </section>
        <section className="section" ref={setRef(2)}>
          <Timeline />
        </section>
        <section className="section" ref={setRef(3)}>
          <Projects />
        </section>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={Portfolio} />
      <Route component={FourOFour} />
    </Switch>
  );
}
