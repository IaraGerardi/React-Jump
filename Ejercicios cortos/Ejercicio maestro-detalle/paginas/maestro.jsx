import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom"
export function IDs() {
    const [IDs, cambiarIDs] = useState([])

    const traerAPI = async () => {
        const elementos = await fetch('https://jsonplaceholder.typicode.com/users');
        const elementosJSON = await elementos.json();
        cambiarIDs(elementosJSON);
    }
    useEffect(() => {
        traerAPI()
    }, [])

    const traer = IDs.map((persona) =>
        <li key={persona.id}>
            <p>{persona.id}</p>
            <p>{persona.name}</p>
            <NavLink to={`/user/${persona.id}`}>
                <button>Ver mas</button>
            </NavLink>
        </li>)
        
    return (
        <>
            <ul>{traer}</ul>
        </>
    )
}