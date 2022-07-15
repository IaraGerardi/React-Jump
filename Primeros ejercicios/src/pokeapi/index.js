import React from 'react';
import { useState } from "react";
// import { useEffect } from "react";
import { PokeList } from './componentes/pokelist';
import './pokeapi.css';

export function App() {
    // Defino un estado para ir cambiando la URL
    const [stateOffset, setStateOffset] = useState(0);
    const [todos, setTodos] = useState();
    const url = (`https://pokeapi.co/api/v2/pokemon/?limit=10&offset=${stateOffset}`);
    //            https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20

    // Llamo a la API
    const fetchApi = async () => {
        const response = await fetch(url);
        // console.log(response.status);
        const responseJSON = await response.json();
        // Guardo la API dentro del estado 'todos' 
        setTodos(responseJSON.results);
    }

    // Llamo a la funcion fetchApi para ejecutarla, habia incluido un useEffect en un principio pero lo comente, el useEffect se ejecuta una sola vez cuando la aplicacion carga, pero como uso un state para cambiar la cantidad de pokemons que muestra se chocan, ya que el estado se reinicia cuando la aplicacion se recarga.

    // useEffect(() => {
    fetchApi();
    // }, []);
    return (
        <>
            <div>
                {/* Funciones on click para sumar o restarle 20 al offset, y que cambie los que muestra*/}
                {stateOffset>=10 ? <button onClick={() => { setStateOffset(stateOffset - 10); }}>Anterior</button> : null}
                <button onClick={() => { setStateOffset(stateOffset + 10); }}>Siguiente</button>
                {/* Le paso la API('todos') y el stateOffset a la pokelist para usarlo dentro de componentes */}
                <PokeList todos={todos} stateOffset={stateOffset} />
            </div>
        </>
    )
}

export default App;







/*
function Boton ({funcionCambio, valor}){
    return(
        <button onChange={funcionCambio}>{valor}</button>
    );
}
*/
// <Boton funcionCambio={cambioEstado} valor='-20'/>
// <Boton funcionCambio={cambioEstado} valor='+20'/>

// Durante la creacion del componente se crean los atributos del mismo y hay que pasarlos por props, luego cuando incluis el componente en la app le asignas valores a esos atributos con una sintaxis como la que usarias para agregar atributos normales.
// Para una funcion que responda a un evento hay que escribir onEvento = {nombreVariable} en el componente, y nombreVariable={nombreFuncion} como atributo