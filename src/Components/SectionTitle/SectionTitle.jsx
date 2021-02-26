import React from 'react';
import data from '../../data';

const SectionTitle = ({title}) => {

    return <h2 className="sectionTitle" style={data.sectionTitle.style}>{title}</h2>
}

export default SectionTitle;