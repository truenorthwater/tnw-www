import React from 'react';
import { Link } from 'gatsby';

import IconArrowRight from "../Icon/IconArrowRight";

const ArrowButton = ({ url = "", onClick, text = "", className = "", external = false}) => {
    if (!external) return (
        <Link to={url} className={["c-arrow-button", className].join(" ")}>
            {text}

            <IconArrowRight className="c-arrow-button__icon" />
        </Link>
    );

    if (external) return (
        <a href={url} className={["c-arrow-button", className].join(" ")}>
            {text}
            <IconArrowRight className="c-arrow-button__icon" />
        </a>
    )
}

export default ArrowButton;
