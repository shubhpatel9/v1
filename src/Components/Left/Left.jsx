import React, { useEffect, useState } from "react";
import {Animated} from "react-animated-css";

import data from './../../data';

import { Link } from 'react-scroll';

import "./Left.css";


const Left = (props) => {


  return (
    <div className="left" style={{left: props.active ? '0px' : '-300px'}}>
      <div className="profilepic-cont">
        <div className="pic">
          <img alt="Shubh Patel profile picture" className="pic-cont" src={data.nav.navPic}></img>
        </div>
        <Animated animationIn="fadeInLeft" animationOut="slideOutLeft" animationInDuration={1000} animationOutDuration={500} isVisible={props.active}>
          <h2 className="name">{data.nav.name}</h2>
        </Animated>
      </div>
      <Animated animationIn="fadeInLeft" animationOut="slideOutLeft" animationInDuration={600} animationOutDuration={500} isVisible={props.active}>
        <div className="navlinks-cont">
          {data.nav.navLinks.map((d, i) => {
            return (
              <Link style={{...data.nav.linkStyle}} activeClass="active" to={d.link} spy={true} smooth={true} duration={1000} key={i} className="navlinks" href={d.link} aria-label={`Navigate to ${d.alias} section`}>
                {d.alias}
              </Link>
            )
          
          } 
        )}
        </div>
      </Animated>

      <div className="icon-cont">
        {data.nav.icons.map((d, i) => <a key={i} onClick={d.onClick} target='_blank' rel="noreferrer" href={d.url} aria-label={d.label}><div style={{color: d.iconColor}} className="icons">{d.symbol}</div></a>)}
      </div>
    </div>
  );
};

export default Left;
