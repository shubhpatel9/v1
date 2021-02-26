import React from 'react';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import SectionTitle from './../SectionTitle/SectionTitle.jsx';

import data from './../../data';



import {Timeline, TimelineItem, CircularProgress} from 'material-timeline';

const TimeL = () => {

    return (
        <div className="timeline__" style={{zIndex: '2'}} id={data.nav.navLinks[2].link}>
            <SectionTitle title="Timeline"/>
            <VerticalTimeline>
                {data.timelineItems.map((items, i) => 
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={items.textColor}
                        contentArrowStyle={items.arrowColor}
                        date={items.date}
                        iconStyle={items.iconColor}
                        icon={items.icon}
                    >
                        <h3 className="vertical-timeline-element-title">{items.title}</h3>
                        <h4 className="vertical-timeline-element-subtitle">{items.location}</h4>
                        <p>{items.text}</p>
                    </VerticalTimelineElement>
                )}
                </VerticalTimeline>
        </div>
    )
}

export default TimeL;