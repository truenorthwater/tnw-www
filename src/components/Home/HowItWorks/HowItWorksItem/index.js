import React from 'react';
import { Link } from 'gatsby';

import ArrowButton from "../../../ArrowButton";

const HowItWorksItem = ({
    subtitle = "",
    title = "",
    body = "",
    linkTo = ""
}) => ( 
    <div className="col large-4 t-cta-block">
        <h3 className="heading heading--small t-cta-block__heading">{subtitle}</h3>
        <p className="bodytext bodytext--large t-cta-block__largetext">{title}</p>
        <p className="bodytext t-cta-block__text">{body}</p>
        <ArrowButton url={linkTo} text="Learn More" className="c-arrow-button--primary" />
    </div>
)

export default HowItWorksItem;