import React from 'react';
// import { useState, useEffect } from 'react';
import { CrudTableRow } from './CRUD-table-row';

export function CrudTable({data, deleteData, setDataToEdit }) {
    
    return (
        <>
            <h3>Tabla de datos</h3>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length === 0 
                    ? (<tr>
                        <td colSpan="3"> Sin datos </td>
                    </tr>)
                    : data.map(el =>
                    <CrudTableRow key={el.id} el={el}
                    deleteData={deleteData} setDataToEdit={setDataToEdit}/>)}
                </tbody>
            </table>
        </>
    )
}