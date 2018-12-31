import React from "react";
import ArrowButton from "../ArrowButton";

const ProjectCard = ({ 
    thumbnail = '',
    title = '',
    subtitle = '',
    description = '',
    link = '',
    linkText = 'Learn More',
    external = false
}) => {
    return (
        <article className="c-projectcard">
            <img src={thumbnail} className="c-projectcard__thumb" />
            <div className="c-projectcard__body">
                <h3 className="c-projectcard__title heading heading--small">{title}</h3>
                <h3 className="c-projectcard__subtitle bodytext bodytext--large">{subtitle}</h3>
                <p className="c-projectcard__description bodytext bodytext--flush">{description}</p>
                {!!link.length && <ArrowButton url={link} text={linkText} external={external} />}
            </div>
        </article>
    );
};

export default ProjectCard;