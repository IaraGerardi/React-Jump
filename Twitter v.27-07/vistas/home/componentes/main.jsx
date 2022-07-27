import React from "react";
import { Tweet } from "./tweet";

// El main es, hasta ahora, la parte mas compleja de la aplicacion, tiene un div que es la parte en la que se crea un tweet, incluye la foto de perfil, un input para escribir el tweet, (quiero incluir la posibilidad de agregar una foto) y un input tipo submit para enviar el tweet, luego tendra una funcion que mande el tweet y la foto como props al componente Tweet que es llamado dos veces mas abajo.
// El componente Tweet recibe el texto del tweet, una cantidad de respuestas, retweets y likes, y un booleano para saber si renderizar o no una foto. Ahora la foto esta definida en el componente pero quiero pasarla como prop.

export function Main() {
  return (
    <div id="main" className="seccion">
      <div className="cabeceraMain">
        <h3>Home</h3>
        <span className="iconify" data-icon="fluent:sparkle-16-regular"></span>
      </div>
      <div className="twittear">
        <img className="profilePicTweet" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="foto de perfil" />
        <form>
          <textarea name="area" className="twittearInput" cols="30" rows="10" maxLength="280"/>
          <div className="tuitearInferior">
          <div className="iconosTuitear">
            <span className="iconify iconTuitear" data-icon="akar-icons:image" />
            <span className="iconify iconTuitear" data-icon="fluent:gif-16-regular" />
            <span className="iconify iconTuitear" data-icon="bx:poll" />
            <span className="iconify iconTuitear" data-icon="bi:emoji-smile" />
          </div>
          <button className="botonTwittear" type="submit">TWEET</button>
          </div>
        </form>
      </div>
      <Tweet linkFoto="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" tweet="tweet" respuestas="0" retweets="1" likes="2" foto={false} />
      <Tweet linkFoto="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" tweet="tweet" respuestas="0" retweets="1" likes="2" foto={true} />
    </div>
  )
}
