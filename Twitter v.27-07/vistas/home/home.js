import React from "react";
import "./home.css"
import { AsideLeft } from "./componentes/asideLeft";
import { Main } from "./componentes/main";
import { AsideRight } from "./componentes/asideRight";

export function Home() {
    return (
        <div id="home">
            <AsideLeft />
            <Main />
            <AsideRight />
        </div>
    );
}