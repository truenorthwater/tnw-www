import React from "react";


const Tab = ({ 
    classNames = { main: 'c-tab', active: 'c-tab--active', inactive: 'c-tab--inactive'}, 
    text = '', 
    target = '',
    id = '',
    active = false,
    onClick = () => {}
}) => {
    return (
        <button 
            className={[classNames.main, (active ? classNames.active : classNames.inactive)].join(" ")}
            onClick={onClick}
            role="tab"
            aria-controls={target}
            aria-selected={active ? "true" : "false"}
            id={id}
        >{text}</button>
    );
};

export default Tab;