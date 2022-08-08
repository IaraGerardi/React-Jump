import React from "react";
import "./landing-components/carrousel/carrousel.css";
import { Carrousel } from "./landing-components/carrousel/carrousel";
import { NuevosProductos } from "./landing-components/listaProductos/nuevosProductos";

export function LandingPage() {
    return (
      <div>
        <Carrousel/>
        <NuevosProductos/>
      </div>
    )
  }