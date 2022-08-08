import React from "react";
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export function ProductDetail() {
    const [productos, setProductos] = useState([]);

    const fetchApi = async () => {
        const response = await fetch(`https://fakestoreapi.com/products`);
        const responseJSON = await response.json();
        setProductos(responseJSON);
    }

    useEffect(() => {
        fetchApi();
    }, []);

    let { id } = useParams();
    console.log(id);
    //  let {search} = useLocation();
    //  console.log(search);

    //  let query = new URLSearchParams(search);
    //  console.log(query);
    //  let limiteProd = query.get("limit");
    //  console.log(limiteProd);

    const pages = productos.map((product) =>
        <li className="productDetailPage" key={product.id.toString()}>
            <div className="detallesProducto">
                <div className="contenedorImagen">
                    <img className="imagenPage" src={product.image} alt={product.title} />
                </div>
                <div className="textoPage">
                    <p><b>{product.title}</b> - (${product.price})</p>
                    <p className="categoriaPage">{product.category}</p>
                    <p className="descPage">{product.description}</p>
                </div>
            </div>
        </li >
    )
    return (
        <>
            <ul>{pages[id - 1]}</ul>
        </>
    )
}