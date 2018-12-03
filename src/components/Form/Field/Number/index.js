import React from "react";

import Label from "../Label";

const Number = ({ 
    id= '',
    name = '',
    label = '', 
    value = '', 
    prefix = '',
    onChange = () => {} 
}) => {
    return (
        <label for={id} className="c-field c-field--number">
            {label && <Label value={label} />}
            <span className={"c-field__wrapper" + (prefix ? " c-field__wrapper--prefix" : "")}>
            {prefix && (
                <span className="c-field__prefix">{prefix}</span>
            )}
                <input 
                    type="number" 
                    id={id} 
                    name={name} 
                    value={value} 
                    className={"c-field__input" + (prefix ? " c-field__input--prefix" : "")} 
                    onChange={onChange}
                />     
            </span>
        </label>
    );
};

export default Number;