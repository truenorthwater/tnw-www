import React from "react";


const TabList = ({ 
    classNames = { main: ''},
    children
}) => {
    return (
        <nav 
            className={["c-tablist", classNames.main].join(" ")}
            role="tablist"
        >{children}</nav>
    );
};

export default TabList;