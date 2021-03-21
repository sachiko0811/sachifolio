import React from 'react'
import { 
    FaReact,
    FaSass,
    FaHtml5,
    FaCss3,
    FaJs,
    FaWordpress,
    FaGitAlt,
    FaAdobe
 } from 'react-icons/fa';
// import { Container } from 'react-bootstrap'

const Skills = () => {
    return (
        <div className="skills-all">
            <FaReact className="skill-icon"/>
            <FaSass className="skill-icon"/>
            <FaHtml5 className="skill-icon"/>
            <FaCss3 className="skill-icon"/>
            <FaJs className="skill-icon"/>
            <FaWordpress className="skill-icon"/>
            <FaGitAlt className="skill-icon"/>
            <FaAdobe className="skill-icon"/>
        </div>
    )
}

export default Skills