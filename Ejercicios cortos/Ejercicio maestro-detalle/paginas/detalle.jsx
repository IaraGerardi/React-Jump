import React, { useEffect, useState } from 'react';
import {NavLink, useParams} from "react-router-dom"
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

    let {id} = useParams();

    const pagsDetalles = users.map((persona) =>
        <li key={persona.id}>
            <p>{persona.id}</p>
            <p>{persona.name}</p>
            <p>{persona.username}</p>
            <p>{persona.email}</p>
        </li>)
    return (
        <>
            <ul>{pagsDetalles[id - 1]}</ul>
        </>
    )
}