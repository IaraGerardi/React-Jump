import './App.css';
import { Input } from './componentes/input_comun';

export function Formulario() {
  return (
    <form>
      <Input nombre="Nombre" type="text"/>
      <Input nombre="Apellido" type="text"/>
      <Input nombre="Usuario" type="text"/>
      <Input nombre="Contraseña" type="password"/>
      <Input nombre="Repetir contraseña" type="password"/>
      <Input nombre="Email" type="email"/>
      <Input nombre="Fecha de nacimiento" type="date"/>
      <Input nombre="teminosCondiciones" type="checkbox"/>
      <div className="botones">
      <button>Borrar</button>
      <button type="submit">Enviar</button>
      </div>
    </form>
  )
}