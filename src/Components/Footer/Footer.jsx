import React from 'react';

import data from './../../data';

const Footer = () => {

    return (
        <div style={data.footer.mainStyle} className="footer">
            {/* <img src={data.footer.footerLogo} alt="shubh's logo" className="foot"/> */}
            <h2 style={data.footer.textStyle}>Designed by Shubh and created by Shubham using <a className="footerLink" rel="noreferrer" href="https://github.com/shubhpatel9/Portfolio/tree/drysol" target="_blank">React <i style={data.footer.iconStyle} className="fab fa-react"></i></a></h2>
        </div>
    )
}

export default Footer;