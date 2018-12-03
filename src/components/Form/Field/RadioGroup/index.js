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
        <span className="c-fieldgroup c-fieldgroup--radiogroup">
            {label && <Label value={label} />}
            <span className="c-fieldgroup__wrapper c-fieldgroup__wrapper--radiogroup">
                {options.map(option => (
                    <span className="c-fieldgroup__item">
                        <label key={option.id} className="c-radiooption" htmlFor={option.id}>
                            <input 
                                type="radio" 
                                id={option.id} 
                                name={name} 
                                value={option.value} 
                                className="c-radiooption__input"
                                checked={option.value === value} 
                                onChange={onChange}
                            />
                            <span className="c-radiooption__label">{option.label}</span>
                        </label>
                    </span>
                    
                ))}
            </span>
        </span>
    );
};

export default RadioGroup;