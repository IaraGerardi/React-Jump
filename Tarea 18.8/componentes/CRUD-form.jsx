import React from 'react';
import { useState, useEffect } from 'react';

/*formInicial manipula la informacion de los inputs, se reinicia cada vez que los datos se borran o son enviados a la base de datos ficticia que tiene app.js*/

const formInicial = {
    id: null,
    product: "",
    // description: null,
    stock: "",
    price: ""
}

export function CrudForm({ createData, updateData, dataToEdit, setDataToEdit }) {
    const [form, setForm] = useState(formInicial)


    useEffect(() => {
        dataToEdit ? setForm(dataToEdit) : setForm(formInicial);
    }, [dataToEdit]);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.product || !form.stock || !form.price) {
            alert("datos incompletos");
            return;
        }

        if (form.id === null) {
            createData(form);
        } else {
            updateData(form);
        }

        handleReset();
    }

    const handleReset = (e) => {
        setForm(formInicial);
        setDataToEdit(null);
    }

    return (
        <div>
            <h3>{dataToEdit ? "Editar" : "Agregar"}</h3>
            <form onSubmit={handleSubmit} id="form">
                <input type="text" name="product" placeholder="Producto" className="inputForm"
                    onChange={handleChange} value={form.product} />
                <input type="text" name="stock" placeholder="Stock" className="inputForm"
                    onChange={handleChange} value={form.stock} />
                <input type="text" name="price" placeholder="Precio" className="inputForm"
                    onChange={handleChange} value={form.price} />
                <div className="botones">
                    <input type="submit" value="Send" />
                    <input type="reset" value="Reset" onClick={handleReset} />
                </div>
            </form>
        </div>
    )
}