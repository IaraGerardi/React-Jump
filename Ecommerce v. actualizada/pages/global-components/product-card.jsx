import React from "react";
// import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"

export function ProductCard({ product, location }) {
  return (
    <li className={`cardProducto ${location}`} key={product.id.toString()}>
      <div className="contenedorImagen">
        <img src={product.image} className="imagenProducto" />
      </div>
      <div className="textoCard">
        <p><b>{product.title}</b> - (${product.price})</p>
      </div>
      <div className="botonesCard">
        <NavLink to={`/products/${product.id}`} className="detailsRedirect">
          <button className="buttonDetalles">Detalles</button>
        </NavLink>
        <NavLink to="/cart" className="cartRedirect">
          <span className="iconify" data-icon="akar-icons:cart" aria-label="cart"></span>
        </NavLink>
      </div>
    </li >)
}