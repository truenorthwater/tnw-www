import React from "react";


const ProjectCard = ({ 
    thumbnail = '',
    title = '',
    subtitle = '',
    description = '',
    link = '' 
}) => {
    return (
        <article className="c-projectcard">
            <img src={thumbnail} className="c-projectcard__thumb" />
            <div className="c-projectcard__body">
                <h3 className="c-projectcard__title heading heading--small">{title}</h3>
                <h3 className="c-projectcard__subtitle bodytext bodytext--large">{subtitle}</h3>
                <p className="c-projectcard__description bodytext bodytext--flush">{description}</p>
            </div>
        </article>
    );
};

export default ProjectCard;