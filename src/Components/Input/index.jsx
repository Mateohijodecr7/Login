import React from "react";

export const Input = ({
    type = 'Text',
    id = '',
    name = '',
    value = '',
    placeholder,
    onChange = () => { return }
}) => {
 return(
    <input
    id={id}
    value={value}
    name={name}
    onChange={onChange}
    placeholder={placeholder}
    type={type}/>
 )
}