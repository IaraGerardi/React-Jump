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
                <h1 id='primerTitulo' onClick={() => { setEjTres(!ejTres) }}>Ejercicio Tres</h1>
                <span className="abrirCerrar">{ejTres ? '+' : '-'}</span>
            </div>
            {ejTres ? <App /> : null}
        </>
    )
}