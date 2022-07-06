import React from 'react';
import {PokeItem} from'./pokeitem';

export function PokeList ({ todos }){
    return (
        <ul>
            {
                !todos ? 'cargando...' : todos.map((todo, index) =>{
                    return (
                    <PokeItem key = {`id-${index}`} todo = {todo} index = {index}/>
                    );
                })
            }
        </ul>
    );
}

