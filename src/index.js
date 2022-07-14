import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Importo los componentes de los ejercicios
import { EjercicioUno } from './componentes/ejercicioUno';
import { EjercicioDos } from './componentes/ejercicioDos';
import { EjercicioTres } from './componentes/ejercicioTres';
import { EjercicioCuatro } from './componentes/ejercicioCuatro';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <EjercicioUno />
    <EjercicioDos />
    <EjercicioTres/>
    <EjercicioCuatro/>
  </>
);