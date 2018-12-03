import React from "react";
import { Link } from 'gatsby';

import LogoMark from "../LogoMark";

const LogoFull = ({ className = '' }) => {
    return (
        <Link to="/" className={["c-logo", className].join(" ")}>
            <LogoMark className="c-logo__mark" />
            <span className="c-logo__word">True North Water</span>
        </Link>
    );
};

export default LogoFull;