import React from 'react';
import { useState } from 'react';

export function ComoTeLlamas() {
    const [state, setState] = useState({
        nombre: '',
        apellidos: [
            '',   // Materno
            ''    // Paterno
        ]
    });

    return (
        <div className="ejercicio">
            <div className="centrar">
                <input value={state.nombre} onChange={(e) => setState({ ...state, nombre: e.target.value })} placeholder='Nombre' />
                <input value={state.apellidos.length[0]} onChange={(e) => setState({ ...state, apellidos: [e.target.value, state.apellidos[1]] })} placeholder='Apellido Materno' />
                <input value={state.apellidos.length[1]} onChange={(e) => setState({ ...state, apellidos: [state.apellidos[0], e.target.value] })} placeholder='Apellido Paterno' />
            </div>
            <div className="centrar">
                <h2>Mi nombre es:</h2>
                <h4>{state.nombre} {state.apellidos[0]} {state.apellidos[1]} </h4>
            </div>

        </div>
    );
}