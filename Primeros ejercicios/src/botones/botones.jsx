import React from 'react';
import { useState } from 'react';
import "../index.css"

export function Botones(abierto) {
    const [stateBoton, setStateBoton] = useState('0- Cero');

    return (
        <div className="centrar columna ejercicio" id='primerEjercicio'>
            <h3>{stateBoton}</h3>
            <div>
                <button onClick={() => { setStateBoton('1- Uno') }}>1</button>
                <button onClick={() => { setStateBoton('2- Dos') }}>2</button>
                <button onClick={() => { setStateBoton('3- Tres') }}>3</button>
            </div>
        </div>
    );
}

// style={{display: abierto ? block : none}}
// className={abierto ? 'invisible' : null}