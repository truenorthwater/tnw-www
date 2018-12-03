import React from "react";

const Label = ({ 
    value = '',
    className = ''
}) => {
    return (
        <span className={['field__label', className].join(' ')}>{value}</span>
    );
};

export default Label;