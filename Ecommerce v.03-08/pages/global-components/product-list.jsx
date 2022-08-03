import React from "react";
import { useState, useEffect } from "react"
import "./folder-css/product-card.css"
import { ProductCard } from "./product-card";

export function ProductsList() {
    const [productos, setProductos] = useState([]);
    const [limite, cambiarLimite] = useState(4);

    const fetchApi = async () => {
        const response = await fetch(`https://fakestoreapi.com/products?limit=${limite}`);
        const responseJSON = await response.json();
        setProductos(responseJSON);
    }

    useEffect(() => {
        fetchApi();
    }, [limite]);

    const cards = productos.map((product) =>
        <ProductCard product={product} />
    );

    return (
        <div className="products">
            {/* <h1>Mostrando {limiteProd} productos</h1> */}
            <ul className="productsList">{cards}</ul>
            {/* <p>{search}</p> */}
            {limite < 20 ?
                <button className="buttonLoadMore" onClick={() => cambiarLimite(limite + 4)}>Cargar mas productos</button>
                : null}
        </div>
    )
}