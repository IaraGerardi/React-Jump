import React, { useEffect, useState } from "react";

export function Prueba() {
    const [productos, setProductos] = useState([]);

    const obtenerDatos = async () => {
        const datos = await fetch(`https://api.mercadolibre.com/sites/MLA/categories`);
        const productosAPI = await datos.json();
        setProductos(productosAPI);
    }

    useEffect(() => {
        obtenerDatos();
    }, []);

    return (
        <>
            <h1>probanding</h1>
            <ul>
                {productos.map(items => (
                    <li key={items.id}>
                        {items.name}
                    </li>
                ))
                }
            </ul>
            <h2>{productos.title}</h2>
        </>
    )
}