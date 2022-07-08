import React from 'react';
import {PokeItem} from'./pokeitem';

// Traigo stateOffset al componente de la pokelist y lo agrego como atributo al pokeitem
export function PokeList ({ todos, stateOffset }){
    return (
        <ul>
            {
                // recorro los objetos de la API y por cada uno creo un nuevo pokeitem
                !todos ? 'cargando...' : todos.map((todo, index) =>{
                    return (
                    <PokeItem key = {`id-${index}`} todo = {todo} index = {index} stateOffset = {stateOffset}/>
                    );
                })
            }
        </ul>
    );
}