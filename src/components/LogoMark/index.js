import React from "react";


const LogoMark = ({ className = '', width = 66, height = 78 }) => {
    return (
        <svg className={className} width={width} height={height} viewBox="0 0 66 78">
            <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <path className="drop" d="M53.9966335,46 C54.6347714,47.1766935 55,48.5428514 55,50 C55,54.418278 51.6421356,58 47.5,58 C43.3578644,58 40,54.418278 40,50 C40,48.5428514 40.3652286,47.1766935 41.0033665,46 L41,46 L47.09375,33 L54,46 L53.9966335,46 Z" fill="#6E87FE"></path>
                <polygon className="leaf" fill="#6E87FE" points="42.8813559 0 27.2881356 26.52 0 26.52 17.1525424 56.16 4.6779661 78 39.7627119 78 39.7627119 72.54 14.0338983 72.54 23.3898305 56.16 9.3559322 31.98 30.4067797 31.98 46 5.46"></polygon>
                <polygon className="leaf" fill="#6E87FE" points="47.3731343 8 31.8507463 34.35 14 34.35 26.4179104 56.05 18.6567164 70 39.6119403 70 39.6119403 64.575 27.9701493 64.575 32.6268657 56.05 23.3134328 39.775 34.9552239 39.775 47.3731343 18.85 59.7910448 40.55 59.0149254 40.55 66 40.55"></polygon>
                <rect className="leaf" fill="#6E87FE" x="42" y="64.6" width="9" height="5.4"></rect>
                <rect className="leaf" fill="#6E87FE" x="42" y="72.6" width="9" height="5.4"></rect>
            </g>
        </svg>
    );
};

export default LogoMark;