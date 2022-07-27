import React, { useState } from "react"
import { useEffect } from "react"
export function Tweet({ linkFoto, tweet, likes, retweets, respuestas, foto }) {

  return (
    <div className="estructuraTweet">
      <div className="tweetSuperior">
        <img className="profilePicTweet" src={linkFoto} />
        <div className="textoTweet">
          <div className="informacionPerfil">
            <span class="username">Nombre usuario</span>
            <span class="arroba">@arrobausuario</span>
            <span class="tiempoTweet">3 min</span>
          </div>
          <div className="contenedorTweet">
            <p className="tweet">{tweet}</p>
          </div>
        </div>
      </div>
      <div className="interacciones">
        <span className="interaccion">
          <i className="fa-regular fa-comment-dots" />
        </span>
        <span className="interaccion">
          <i className="fa-solid fa-retweet" />
        </span>
        <span className="interaccion">
          <i className="fa-regular fa-heart" />
        </span>
        <span className="interaccion">
          <i className="fa-solid fa-ellipsis" />
        </span>
      </div>
    </div>
  )
}