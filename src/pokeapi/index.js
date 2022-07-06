import React from 'react';
import { useState } from "react";
import { useEffect } from "react";
import { PokeList} from './componentes/pokelist';
import './pokeapi.css';

export function App (){
    // Traigo la url de la API y defino el estado
    const [stateCant, setStateCant] = useState(4);
    const [todos, setTodos ] = useState();
    const url = (`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${stateCant}`);

    // Llamo a la API
    const fetchApi = async() =>{
        const response = await fetch(url);
        console.log(response.status);
        const responseJSON = await response.json();
        setTodos (responseJSON.results);
    }

    // Definir efecto
    useEffect(()=>{
        fetchApi();
    }, []);

    return (
        <>        
        <main>
            <button onClick={()=> setStateCant(stateCant - 20)}>-20</button>
            <button onClick={()=> setStateCant(stateCant + 20)}>+20</button>
            <PokeList todos = {todos}/>
        </main>
        </>
    )
}

export default App;