import React from "react"

export function ItemAsideLeft({ nombre, icono }) {
    return (<li className="itemAsideLeft">
        <i className={`${icono} iconoAsideLeft`}></i>
        <span>{nombre}</span>
    </li>);
}
