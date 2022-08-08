import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export function ItemMaestro({ persona }) {
    /*Agregue un estado y eventos onMouseOver/onMouseLeave para que el ver mas solo se muestre cuando 
    el mouse esta sobre el usuario*/
    const [itemActive, setItemActive] = useState(false);

    return (
        <li className="userBox"
            onMouseOver={() => setItemActive(true)}
            onMouseLeave={() => setItemActive(false)}>
            <div className={itemActive ? "Act" : "inAct"} >
            <span className="iconify" data-icon="ant-design:ant-design-outlined"/>
            </div>
            <p className="infoUsuario"><b className="nombreUsuario">{persona.name}</b></p>
            {itemActive ?
                <NavLink to={`/user/${persona.id}`}>
                    <button className="botonUsuario"
                    // alerta antes de redireccionar a home en caso de que el usuario sea el cuatro
                        onClick={() => persona.id == 4 ? alert("el usuario no existe") : null}>
                        Ver mas
                    </button>
                </NavLink>
                : null}
        </li>
    )
}