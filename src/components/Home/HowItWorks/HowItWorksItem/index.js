import React from 'react';
import { Link } from 'gatsby';

import ArrowButton from "../../../ArrowButton";

const HowItWorksItem = ({
    image,
    subtitle = "",
    title = "",
    body = "",
    linkTo = ""
}) => ( 
    <div className="col large-4 t-cta-block">
        {image && (
        <div className="t-cta-block__image">
            {React.createElement(image)}
        </div>
        )}
        <div className="t-cta-block__content">
        <h3 className="heading heading--small t-cta-block__heading">{subtitle}</h3>
            <p className="bodytext bodytext--large t-cta-block__largetext">{title}</p>
            <p className="bodytext t-cta-block__text">{body}</p>
            {!!linkTo.length && <ArrowButton url={linkTo} text="Learn More" className="c-arrow-button--primary" />}
        </div>
    </div>
)

export default HowItWorksItem;
