import React from "react";

export function Input({nombre, type}) {
    return (
        <div className="input">
        <label for={`${nombre}`} >{nombre}</label>
        <input name={nombre} type={`${type}`} placeholder={`${nombre}`}/>
        </div>
    )
}