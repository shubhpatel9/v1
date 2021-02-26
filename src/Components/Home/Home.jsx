import React, {useState} from "react";
import data from "../../data.js";

import Left from "./../Left/Left.jsx";
import Right from "./../Right/Right.jsx";
// import SideNav from './../SideNav/SideNav.jsx'

import Welcome from './../Welcome/Welcome.jsx';


const Home = () => {

  const [active, setActive] = useState(false);

  const Slide = () => setActive(!active)

  return (
    <div className="home">
      <button style={data.navToggle.buttonStyle} className="navButton" style={{left: active ? '300px' : '0px'}} onClick={Slide}><i style={data.navToggle.iconStyle} className="fas fa-bars"></i></button>
      <Left active={active}/>
      <div className="containRest" style={{left: active ? '300px' : '0px'}}>
        <Welcome id={data.nav.navLinks[0].link}/>
        <Right />
      </div>
    </div>
  );
};

export default Home;
