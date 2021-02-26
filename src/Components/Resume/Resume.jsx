import React from 'react';

import data from './../../data';

const Resume = () => {

    return (
        <div className="resume">
            <a className="resume-link" target="_blank" rel="noreferrer" href={data.resumeLink}>View Resume Online</a>
        </div>
    )
}

export default Resume;