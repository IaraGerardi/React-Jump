import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from "react-router-dom"
export function IDsDetalles() {
    const [users, cambiarUsers] = useState([])

    const traerAPI = async () => {
        const elementos = await fetch('https://jsonplaceholder.typicode.com/users');
        const elementosJSON = await elementos.json();
        cambiarUsers(elementosJSON);
    }
    useEffect(() => {
        traerAPI()
    }, [])

    let { id } = useParams();
    /*Creo un array nuevo en base a mapear el JSON de los usuarios para poder llamar solo a un indice 
    con el id de los params, y que sea dinamico*/
    const pagsDetalles = users.map((persona) =>
        <li className="itemDetalle" key={persona.id}>
            <p>{persona.id}</p>
            <p>{persona.name}</p>
            <p>{persona.username}</p>
            <p>{persona.email}</p>
        </li>)
    return (
        <div className="detalle">
            <NavLink to="/">
                <div className="contenedorIcono">
                    <span className="iconify" data-icon="ant-design:ant-design-outlined" />
                </div>
            </NavLink>
            <ul className="detallesLista">{pagsDetalles[id - 1]}</ul>
        </div>
    )
}