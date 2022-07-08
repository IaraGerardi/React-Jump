import React from 'react';

// La imagen que se carga depende del numero que esta entre "pokemon/" y ".png"
// Asi que traigo de nuevo el stateOffset para usarlo dentro del pokeitem, para que defina el numero inicial 
// como este componente se renderiza dentro de un map, cada vez que renderiza un componente suma uno, y el indice siempre empieza desde 0 asi que agrego un "+ 1" para que la imagen coincida con el nombre
export function PokeItem({todo, index, stateOffset}){
    return(
        <li>
            <img src={`http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${stateOffset + index + 1}.png`} alt="" />
            <p>{stateOffset + index + 1}- {todo.name}</p>
        </li>
    )
}