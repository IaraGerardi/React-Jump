import React from 'react';
import { useState } from 'react';
import { ComoTeLlamas } from '../como-te-llamas/como-te-llamas';
import '../index.css';

export function EjercicioDos() {
    const [ejDos, setEjDos] = useState(false);

    return(
        <>
            <div class="cajaEjercicio">
                <span className="barraLateral"></span>
                <h1 id='primerTitulo' onClick={() => { setEjDos(!ejDos) }}>Ejercicio Dos</h1>
                <span className="abrirCerrar">{ejDos ? '+' : '-'}</span>
            </div>
            {ejDos ? <ComoTeLlamas /> : null}
        </>
    );
}