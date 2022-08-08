import React, {useEffect, useState} from "react";
import { ProductCard } from "../../../global-components/product-card";
import "./nuevosProductos.css"
export function NuevosProductos() {
    const [productos, setProductos] = useState([]);

    const fetchApi = async () => {
        const response = await fetch(`https://fakestoreapi.com/products?limit=6`);
        const responseJSON = await response.json();
        setProductos(responseJSON);
    }

    useEffect(() => {
        fetchApi();
    });

    const nuevosProd = productos.map((product) =>
        <ProductCard product={product} location="landingNewProducts"/>
    );
    return (
      <div className="landingPageProductos">
        <h3>Nuevos productos:</h3>
       <ul className="nuevosProductos">{nuevosProd}</ul>
      </div>
    )
  }