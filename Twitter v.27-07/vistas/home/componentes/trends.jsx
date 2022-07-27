import React from "react";

export function Trend({trending, info, name, foto, tweetCount}){
    return(
      <li className="trend">
      <p className="trending">{trending}</p>
      <p className="trendInfo">{info}</p>
      {foto
        ? <div className="cajaTrendFoto">
          <p className="trendName">{name}</p>
          <img className="trendFoto" src={foto} alt={name} />
        </div>
        : <p className="trendName">{name}</p>}
        <p className="tweetsCount">{tweetCount}</p>
    </li> 
    )
}