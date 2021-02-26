import React, { useState } from 'react';

import {Collapse} from 'react-collapse';

import SectionTitle from  './../SectionTitle/SectionTitle.jsx';

import data from './../../data'

import './About.css'

const About = () => {

    const [seeMore, setSeeMore] = useState(false);

    const updateMore = () => setSeeMore(!seeMore)

    return (
        <div className="about">
            <SectionTitle title="About"/>
            <div className="about-content">
                <div className="about-text">
                    <h3 style={data.about.aboutTextStyle} dangerouslySetInnerHTML={{ __html: data.about.aboutText }}></h3>
                    <br />
                    {!seeMore ? <h3 className="seemore" style={data.about.seeMoreButtonStyle} onClick={updateMore}>See More <i className="fas fa-sort-down"></i></h3> : ''}
                    <Collapse isOpened={seeMore}>
                        <h3 className="seemoretext" style={data.about.seeMoreTextStyle} onClick={updateMore} dangerouslySetInnerHTML={{ __html: data.about.seemore }}></h3>
                    </Collapse>
                </div>
                <img className="about-pic" src={data.about.aboutPic} alt="shubh"/>
            </div>
        </div>
    )
}

export default About;