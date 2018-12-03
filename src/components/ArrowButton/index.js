import React from 'react';
import { Link } from 'gatsby';

import IconArrowRight from "../Icon/IconArrowRight";

const ArrowButton = ({ url = "", onClick, text = "", className = ""}) => (
    <Link to={url} className={["c-arrow-button", className].join(" ")}>
        {text}

        <IconArrowRight className="c-arrow-button__icon" />
    </Link>
)

export default ArrowButton;
