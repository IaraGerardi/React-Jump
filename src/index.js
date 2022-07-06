import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Importo los componentes de los ejercicios
import {Botones} from './botones/botones'
import {ComoTeLlamas} from './como-te-llamas/como-te-llamas';
import App from './pokeapi/index'
import { SumaResta } from './suma-resta/suma-resta';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <AppB /> */}
    <h1>Ejercicio Uno:</h1>
    <Botones/>
    <h1>Ejercicio Dos:</h1>
    <ComoTeLlamas/>
    <h1>Ejercicio Tres:</h1>
    <App/>
    <h1>Ejercicio Cuatro:</h1>
    <SumaResta/>
  </>
);

