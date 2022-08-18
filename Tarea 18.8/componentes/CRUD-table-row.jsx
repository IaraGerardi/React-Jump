import React from 'react';
// import { useState, useEffect } from 'react';

export function CrudTableRow({el, deleteData, setDataToEdit}) {

    let {id, product, price, stock} = el;

    return (
        <tr>
            <td>{id}</td>
            <td>{product}</td>
            <td>{price}</td>
            <td>{stock}</td>
            <td>
                <button onClick={()=> setDataToEdit(el)}>Editar</button>
                <button onClick={()=> deleteData(id)}>Eliminar</button>
            </td>
        </tr>
    )
}