/* eslint-disable react/prop-types */
import { useState } from 'react';

const ProjectCard = (props) => {

    const defaultDescription = props.defaultDescription;
    let [text, setText] = useState(`${defaultDescription}`);

    return (
            <div className="container project-card">
            <div className="project-card-header">
                <div className="project-title">
                    <h3>{props.title}</h3>
                </div>
                <div className="project-links">
                    <a href={ props.githubLink }><img id='github-logo' src={ props.github } alt='github logo'></img></a>
                    <a href={ props.liveDemoLink }><img id='play-icon' src={ props.liveDemo } alt='live demo icon'></img></a>
                </div>
            </div>
            <div className="project-card-img">
                <img src={ props.image } alt='project screenshot'></img>
            </div>
            <div className="project-card-right-side whiteBG">
                <div className="right-side-options">
                    <ul className="project-options">
                        {props.projectHead.map((x, index) => {
                            return (
                                <li onClick={() => setText(x.content)} key={index}>
                                    <p>{x.title}</p>
                                    <p className='project-card-arrow hide'>&rarr;</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="right-side-textbox">
                    <p id='cardText'>{text}</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;