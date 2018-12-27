import React from "react";


const Tabpanel = ({ 
    classNames = { main: 'c-tabpanel', active: 'c-tabpanel--active', inactive: 'c-tabpanel--inactive'},
    tabId = '', 
    id = '',
    children, 
    active = false
}) => {
    return (
        <div 
            className={[classNames.main, (active ? classNames.active : classNames.inactive)].join(" ")}
            aria-controls={target}
            aria-labelledby={tabId}
            aria-hidden={!active ? "true" : "false"}
            role="tabpanel"
            id={id}
        >{children}</div>
    );
};

export default Tabpanel;