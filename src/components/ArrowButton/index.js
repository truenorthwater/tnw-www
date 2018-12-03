import React from 'react';
import { Link } from 'gatsby';

import IconArrowRight from "../Icon/IconArrowRight";

const ArrowButton = ({ url = "", onClick, text = "", className = ""}) => (
    <Link to={url} className="c-arrow-button">
        {text}

        <IconArrowRight />
    </Link>
)

export default ArrowButton;
