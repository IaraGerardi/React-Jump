import React from 'react';
import { useState } from 'react';
import { Botones } from '../botones/botones'
import '../index.css';

export function EjercicioUno() {
    const [ejUno, setEjUno] = useState(false);

    return (
        <>
            <div class="cajaEjercicio">
                <span className="barraLateral"></span>
                <h1 id='primerTitulo'>Ejercicio Uno</h1>
                <span className="abrirCerrar" onClick={() => { setEjUno(!ejUno) }}>{ejUno ? '+' : '-'}</span>
            </div>
            {ejUno ? <Botones /> : null}
        </>
    );


}