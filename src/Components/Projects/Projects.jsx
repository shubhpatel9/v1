import React from 'react';

import './Projects.css';

import data from './../../data.js';
import SectionTitle from '../SectionTitle/SectionTitle';

const Projects = () => {

    const projectSymbol = (sy) => {
        return (
            <a style={sy.styles} target="_blank" rel='noreferrer' href={sy.link}>{sy.icon}</a>
        )
    }

    const ProjectGen = ({proj}) => {
        return (
            <div className="project">
                <div className="pad pad2 proj-symbols" style={{paddingTop: '0.3rem', background: proj.backgrounds.link}}>
                    {proj?.GithubLink ? projectSymbol({styles: proj.LinkStyles,link: proj.GithubLink, icon: <i class="fab fa-github"></i>}) : <></>}
                    {proj?.ImgLink ? projectSymbol({styles: proj.LinkStyles,link: proj.ImgLink, icon: <i class="far fa-image"></i>}) : <></>}
                </div>
                <h1 className="align-center pad" style={{...proj.TitleStyles, background: proj.backgrounds.title}}>{proj.title}</h1>
                <h4 className="pad3" style={{...proj.DescStyles, background: proj.backgrounds.desc}}>{proj.desc}</h4>
               <div className="pad tag-cont" style={{paddingBottom: '0.5rem', background: proj.backgrounds.tags}}>
                    {proj?.tags ? proj.tags.map((tag, i) => <p key={i} style={proj.TagsStyles}>{tag}</p> ) : <></>}
                </div>
            </div>
        )
    }

    return (
        <div className="projects-cont" id={data.nav.navLinks[3].link}>
            <SectionTitle title="Projects"/>
            <div className="project-cont">
                {data.projects.map((key, i) => {
                    return (
                        <>
                            <ProjectGen proj={key} key={i}/>
                            
                            {/* This line places Vertical Rule after every odd element */}
                            {i % 2 === 0 ?
                                <div key={i + 10} className="vert-cont">
                                    <div className="vertical-rule"></div>
                                </div>
                            :
                                <></>
                            }
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default Projects;