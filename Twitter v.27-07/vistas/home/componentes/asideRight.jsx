import React, { useState } from "react";

import { Trend } from "./trends";
export function AsideRight() {
  return (
    <div id="asideRight" className="seccion">
      <div className="buscador">
        <input type="search" className="buscadorInput"/>
        <span class="iconify" data-icon="carbon:explore" />
      </div>
      <div>
        <div className="tituloTrend">
          <p>Trends for you</p>
          <i className="fa-solid fa-gear" />
        </div>
        <div>
          <Trend
            trending= "worldwide"
            info = "trend info"
            name= "titulo 1"
            tweetCount= "125k"
            extraInfo = "extraInfo"/>
           <Trend
            trending= "worldwide"
        info= "trend info"
        name= "titulo 2"
        foto= "https://images.unsplash.com/photo-1658086351750-1ec43149a713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
        tweetCount= "125k"
        extraInfo= "extraInfo"/>
            <Trend
            trending= "worldwide"
            info = "trend info"
            name= "titulo 3"
            tweetCount= "125k"
            extraInfo = "extraInfo"/>
            <Trend
            trending= "worldwide"
        info= "trend info"
        name= "titulo 4"
        foto= "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=410&q=80"
        tweetCount= "125k"
        extraInfo= "extraInfo"/>
        </div>
      </div>
    </div>
  )
}