import React from "react";
import { useState, useEffect } from "react"
import { useLocation, useParams, NavLink } from "react-router-dom"

export function ProductCard({ product }) {
  return (
    <li className="cardProducto" key={product.id.toString()}>
      <div className="contenedorImagen">
        <img src={product.image} className="imagenProducto" />
      </div>
      <div className="textoCard">
        <p><b>{product.title}</b> - (${product.price})</p>
      </div>
      <div className="botonesCard">
        <NavLink to={`/products/${product.id}`}>
          <button className="buttonDetalles">Detalles</button>
        </NavLink>
        <NavLink to="/cart">
          <span className="iconify" data-icon="akar-icons:cart" aria-label="cart"></span>
        </NavLink>
      </div>
    </li >)
}