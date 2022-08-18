import React from 'react';
import './App.css';
import { useState } from 'react';
import { CrudForm } from './componentes/CRUD-form';
import { CrudTable } from './componentes/CRUD-table';

const dbFalsa = [
  {
    id: 1,
    product: "Salt - Seasoned",
    stock: 38,
    price: "$19.69"
  }, {
    id: 2,
    product: "Peppercorns - Pink",
    stock: 79,
    price: "$9.99"
  }, {
    id: 3,
    product: "Mushroom - Chanterelle Frozen",
    stock: 30,
    price: "$25.86"
  }
]

export function App() {
  const [id, siguienteID] = useState(5);
  const [db, setDb] = useState(dbFalsa);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    data.id = id;
    setDb([...db, data]);
    siguienteID(id + 1);
  }
  const updateData = (data) => {
    let newData = db.map(el => el.id === data.id ? data : el);
    setDb(newData);
  }
  const deleteData = (id) => {
    let isDelete = window.confirm(`¿Quiere borrar el registro con el id ${id}?`);
    if (isDelete) {
      let newData = db.filter(el => el.id !== id);
      setDb(newData);
    }
    else {
      return;
    }
  }

  return (
    <>
      <div id="cajaPrincipal">
        <CrudForm
          createData={createData} updateData={updateData}
          dataToEdit={dataToEdit} setDataToEdit={setDataToEdit} />
        <CrudTable
          data={db}
          deleteData={deleteData} setDataToEdit={setDataToEdit} />
      </div>
    </>
  )
}