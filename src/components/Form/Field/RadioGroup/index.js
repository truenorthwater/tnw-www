import React from "react";

import Label from "../Label";

const RadioGroup = ({ 
    id= '',
    name = '',
    label = '', 
    options = [], 
    value = '', 
    onChange = () => {} 
}) => {
    return (
        <span className="field field--radiogroup">
            {label && <Label value={label} />}
            <span className="field__wrapper field__wrapper--radiogroup">
                {options.map(option => (

                    <label key={option.id} className="radiooption" htmlFor={option.id}>
                        <input 
                            type="radio" 
                            id={option.id} 
                            name={name} 
                            value={option.value} 
                            className="radiooption__input"
                            checked={option.value === value} 
                            onChange={onChange}
                        />
                        <span className="radiooption__label">{option.label}</span>
                    </label>
                    
                ))}
            </span>
        </span>
    );
};

export default RadioGroup;