import React from "react";
import { ItemAsideLeft } from "./itemAsideLeft";

// Aside left es el componente que contiene un aside de la vista home, tiene el logo de twitter y llama varias veces al componente ItemAsideLeft pasandole el icono y un nombre.

export function AsideLeft() {
    return (
        <div id="asideLeft" className="seccion">
            <div className="logo">
                <i className="fa-brands fa-twitter logoTwitter"/>
            </div>
            <ul className="listaIconos">
                <ItemAsideLeft
                    icono="fa-solid fa-house-user"
                    nombre="home" />
                <ItemAsideLeft
                    icono="fa-solid fa-hashtag"
                    nombre="explore" />
                <ItemAsideLeft
                    icono="fa-solid fa-bell"
                    nombre="notificaciones" />
                <ItemAsideLeft
                    icono="fa-solid fa-envelope"
                    nombre="mensajes" />
                <ItemAsideLeft
                    icono="fa-solid fa-bookmark"
                    nombre="bookmarks" />
                <ItemAsideLeft
                    icono="fa-solid fa-list"
                    nombre="lists" />
                <ItemAsideLeft
                    icono="fa-solid fa-user"
                    nombre="profile" />
                <ItemAsideLeft
                    icono="fa-solid fa-ellipsis"
                    nombre="more" />
            </ul>
        </div>
    );
}