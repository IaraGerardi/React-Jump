import React from 'react';

export function PokeItem({todo, index}){
    return(
        <li>
            <img src={`http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index +1}.png`} alt="" />
            <p>{index+1}- {todo.name}</p>
        </li>
    )
}