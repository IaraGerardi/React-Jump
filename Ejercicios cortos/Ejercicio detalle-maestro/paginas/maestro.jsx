import React, { useEffect, useState } from 'react';

import { ItemMaestro } from './itemMaestro';

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
    <ItemMaestro  key={persona.id} persona={persona}/>)

    return (
        <>
            <ul className="usersList">{traer}</ul>
        </>
    )
}