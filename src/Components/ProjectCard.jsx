/* eslint-disable react/prop-types */
import { useState } from 'react';

import githubLogoLarge from '../assets/githublogolarge.avif';
import githubLogoSmall from '../assets/githublogosmall.avif';

import playIconLarge from '../assets/playiconlarge.avif';
import playIconSmall from '../assets/playiconsmall.avif';

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
                    <a href={ props.githubLink } target="_blank" rel="noopener noreferrer"><img id='github-logo' 
                                                    src={ githubLogoLarge } 
                                                    alt='github logo'
                                                    srcSet={`
                                                        ${ githubLogoLarge } 2x,
                                                        ${ githubLogoSmall } 1x
                                                        `}/>
                                                    </a>
                    <a href={ props.liveDemoLink } target="_blank" rel="noopener noreferrer"><img id='play-icon' 
                                                        src={ playIconLarge } 
                                                        alt='live demo icon'
                                                        srcSet={`
                                                            ${ playIconLarge } 2x,
                                                            ${ playIconSmall } 1x
                                                            `}/>
                                                        </a>
                </div>
            </div>
            <div className="project-card-img">
                <picture>
                    <source media='(max-width: 475px)' srcSet={ props.smallProjectImage } />
                    <source media='(min-width: 476px)' srcSet={ props.largeProjectImage } />
                    <img src={ props.smallProjectImage } alt='project screenshot' />
                </picture> 
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