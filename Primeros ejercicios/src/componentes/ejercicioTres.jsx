import React from 'react';
import { useState } from 'react';
import App from '../pokeapi/index';
import '../index.css';

export function EjercicioTres() {
    const [ejTres, setEjTres] = useState(false);
    return (
        <>
            <div class="cajaEjercicio">
                <span className="barraLateral"></span>
                <h1 id='primerTitulo'>Ejercicio Tres</h1>
                <span className="abrirCerrar" onClick={() => { setEjTres(!ejTres) }}>{ejTres ? '+' : '-'}</span>
            </div>
            {ejTres ? <App /> : null}
        </>
    )
}