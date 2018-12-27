import React from "react";
import { Link } from 'gatsby';

import LogoMark from "../LogoMark";

const LogoFull = ({ classNames = { logo: '', mark: '', word: ''} }) => {
    return (
        <Link to="/" className={["c-logo", classNames.logo].join(" ")}>
            <LogoMark className={["c-logo__mark", classNames.mark].join(" ")} />
            <span className={["c-logo__word", classNames.word].join(" ")}>True North Water</span>
        </Link>
    );
};

export default LogoFull;