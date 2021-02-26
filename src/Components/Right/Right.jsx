import React from "react";

import About from './../About/About.jsx';
import Resume from './../Resume/Resume.jsx';
import TimeL from './../Timeline/Timeline.jsx';
import Projects from './../Projects/Projects.jsx';
import Footer from './../Footer/Footer.jsx';

import data from './../../data.js';

import './Right.css'

const Right = () => {
  return (
    <div className="right">
      <About id="About"/>
      <TimeL />
      <Projects />
      <Footer />
    </div>
  );
};

export default Right;
