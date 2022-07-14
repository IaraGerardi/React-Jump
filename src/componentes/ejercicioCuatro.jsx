import React from 'react';
import { useState } from 'react';
import { SumaResta } from '../suma-resta/suma-resta';
import '../index.css';

export function EjercicioCuatro() {
    const [ejCuatro, setEjCuatro] = useState(false);
    return (
        <>
            <div class="cajaEjercicio">
                <span className="barraLateral"></span>
                <h1 id='primerTitulo' onClick={() => { setEjCuatro(!ejCuatro) }}>Ejercicio Cuatro</h1>
                <span className="abrirCerrar">{ejCuatro ? '+' : '-'}</span>
            </div>
            {ejCuatro ? <SumaResta /> : null}
        </>
    )

}