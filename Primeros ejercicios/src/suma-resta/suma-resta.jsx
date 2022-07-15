import React from 'react';
import { useState } from 'react';

export function SumaResta() {
    const [stateSuma, setStateSuma] = useState(0);
    const sumar = () => {
        setStateSuma(stateSuma + 1);
    }
    const restar = () => {
        setStateSuma(stateSuma - 1);
    }
    return (
        <header className='centrar ejercicio'>
            <button onClick={sumar}>Sumar</button>
            <h3>{stateSuma}</h3>
            <button onClick={restar}>Restar</button>
        </header>
    )
}