import React from "react";
import "./cart.css"
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
export function Cart() {
  const [productos, setProductos] = useState([]);

  const fetchApi = async () => {
    const response = await fetch(`https://fakestoreapi.com/products?limit=3`);
    const responseJSON = await response.json();
    setProductos(responseJSON);
  }

  useEffect(() => {
    fetchApi();
  }, []);

  const compras = productos.map((product) =>
    <li className="itemCompra" key={product.id}>
      <div className="contenedorImagen">
        <img src={product.image} className="imagenCompra" />
      </div>
      <div className="textoCompra">
        <p><b>{product.title}</b> - (${product.price})</p>
      </div>
    </li>
  );
  return (
    <div className="compras">
      <ul className="itemsCompras">{compras}</ul>
      <div className="menuCompras">
        <div className="menuSuperior">
          <img src="https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="foto ejemplo" />
          <p className="">Carla esposito</p>
        </div>
        <hr />
        <p className="precioTitulo">PRECIO TOTAL</p>
        <p className="precioTotal">$188,25</p>
        <NavLink to="/products">
          <button>Seguir comprando</button>
        </NavLink>
        <button>Comprar</button>
      </div>
    </div>
  )
}