import React from 'react';
import './App.css';
import { IDs } from './paginas/maestro';
import { IDsDetalles } from './paginas/detalle';
import { Routes, Route, Navigate } from 'react-router-dom';
export function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<IDs/>}/>
      <Route path="/user/:id" element={<IDsDetalles/>}/>
      <Route path="/user/4" element={<Navigate to="/"/>}/>
      {/* Navigate to para que la info del usuario 4 no sea accesible */}
    </Routes>
    </>
  )
}