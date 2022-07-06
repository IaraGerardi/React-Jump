import React from 'react';
import { useState } from 'react';

export function Botones() {
    const [stateBoton, setStateBoton] = useState('0- Cero');

    return (
        <>
            <h3>{stateBoton}</h3>
            <button onClick={() => { setStateBoton('1- Uno') }}>1</button>
            <button onClick={() => { setStateBoton('2- Dos') }}>2</button>
            <button onClick={() => { setStateBoton('3- Tres') }}>3</button>
        </>
    );
}