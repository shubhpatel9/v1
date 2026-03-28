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
  const activeRef = useRef(0);
  const containerRef = useRef(null);

  const navigateTo = useCallback((idx) => {
    const container = containerRef.current;
    if (container) {
      container.scrollTo({ left: idx * container.clientWidth, behavior: "smooth" });
    }
  }, []);

  // sync dot/nav indicator with scroll position
  // use scrollend for precision (modern browsers); debounced scroll as fallback (Safari)
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const sync = () => {
      const idx = Math.round(container.scrollLeft / container.clientWidth);
      activeRef.current = idx;
      setActive(idx);
    };

    const supportsScrollEnd = "onscrollend" in window;
    if (supportsScrollEnd) {
      container.addEventListener("scrollend", sync, { passive: true });
      return () => container.removeEventListener("scrollend", sync);
    } else {
      let t;
      const onScroll = () => {
        clearTimeout(t);
        t = setTimeout(sync, 80);
      };
      container.addEventListener("scroll", onScroll, { passive: true });
      return () => {
        container.removeEventListener("scroll", onScroll);
        clearTimeout(t);
      };
    }
  }, []);

  // arrow key navigation — reads activeRef to avoid stale closure
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight")
        navigateTo(Math.min(activeRef.current + 1, SECTION_COUNT - 1));
      if (e.key === "ArrowLeft")
        navigateTo(Math.max(activeRef.current - 1, 0));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [navigateTo]);

  return (
    <div className="site">
      <TopBar active={active} total={SECTION_COUNT} onNavigate={navigateTo} />
      <div className="sections-container" ref={containerRef}>
        <section className="section">
          <Hero onNavigate={navigateTo} />
        </section>
        <section className="section">
          <About />
        </section>
        <section className="section">
          <Timeline />
        </section>
        <section className="section">
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
