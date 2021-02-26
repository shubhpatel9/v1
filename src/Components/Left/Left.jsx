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
          <img alt="shubh's lucious body" className="pic-cont" src={data.nav.navPic}></img>
        </div>
        <Animated animationIn="fadeInLeft" animationOut="slideOutLeft" animationInDuration={1000} animationOutDuration={500} isVisible={props.active}>
          <h2 className="name">{data.nav.name}</h2>
        </Animated>
      </div>
      <Animated animationIn="fadeInLeft" animationOut="slideOutLeft" animationInDuration={600} animationOutDuration={500} isVisible={props.active}>
        <div className="navlinks-cont">
          {data.nav.navLinks.map((d, i) => {
            console.log(d.link, d.alias)
            return (
              <Link style={{...data.nav.linkStyle}} activeClass="active" to={d.link} spy={true} smooth={true} duration={1000} key={i} className="navlinks" href={d.link}>
                {d.alias}
              </Link>
            )
          
          } 
        )}
        </div>
      </Animated>

      <div className="icon-cont">
        {data.nav.icons.map((data, i) => <a key={i} onClick={data.onClick} target='_blank' rel="noreferrer" href={data.url}><div style={{color: data.iconColor}}className="icons">{data.symbol}</div></a>)}
      </div>
    </div>
  );
};

export default Left;
