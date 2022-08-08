import React from "react";
import { ProductCard } from "../global-components/product-card";
import { useState, useEffect } from "react"
// import "./folder-css/product-card.css"

// cambiar de lugar la importacion del css y rehacer la importacion de product card
export function ProductsPage() {
    const [productos, setProductos] = useState([]);
    const [limite, cambiarLimite] = useState(4);

    const fetchApi = async () => {
        const response = await fetch(`https://fakestoreapi.com/products?limit=${limite}`);
        const responseJSON = await response.json();
        setProductos(responseJSON);
    }

    useEffect(() => {
        fetchApi();
    });

    const cards = productos.map((product) =>
        <ProductCard product={product} location="productPage"/>
    );

    return (
        <div className="products">
            <ul className="productsList">{cards}</ul>
            {limite < 20 ?
                <button className="buttonLoadMore" onClick={() => cambiarLimite(limite + 4)}>
                    Cargar mas productos
                </button>
            : null}
        </div>
    )
}