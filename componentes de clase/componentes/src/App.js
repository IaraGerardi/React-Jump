import React from 'react';
import { Saludo } from './clase-5';
import { Parrafo } from './componenteDos_clase';
import { Boton } from './componenteTres_clase';

export class App extends React.Component {
    render() {
        return (
            <>
                <Saludo />
                <Parrafo />
                <Boton />
            </>
        )
    }
}