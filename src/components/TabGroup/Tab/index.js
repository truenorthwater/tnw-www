import React from "react";


const Tab = ({ 
    classNames = { main: 'c-tab', active: 'c-tab--active', inactive: 'c-tab--inactive'}, 
    text = '', 
    targetId = '',
    id = '',
    active = false,
    onClick = () => {}
}) => {
    return (
        <button 
            className={[classNames.main, (active ? classNames.active : classNames.inactive)].join(" ")}
            onClick={onClick}
            role="tab"
            aria-controls={targetId}
            aria-selected={active ? "true" : "false"}
            id={id}
        >{text}</button>
    );
};

export default Tab;