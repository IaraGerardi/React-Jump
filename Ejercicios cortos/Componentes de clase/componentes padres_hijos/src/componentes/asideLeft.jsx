import React from "react";
import { ItemAsideLeft } from "./itemAsideLeft";

export class AsideLeft extends React.Component{
    render(){
        return(
            <div className="asideLeft">
            <div className="logoTwitter">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png" alt="logo twitter" />
            </div>
            <ul>
                <ItemAsideLeft 
                icono="https://cdn-icons-png.flaticon.com/512/845/845022.png" 
                nombre="home"/>
                <ItemAsideLeft 
                icono="https://w7.pngwing.com/pngs/277/340/png-transparent-hashtag-social-media-number-sign-computer-icons-social-media-angle-label-sticker.png" 
                nombre="explore"/>
                <ItemAsideLeft 
                icono="https://cdn-icons-png.flaticon.com/512/4305/4305480.png" 
                nombre="notificaciones"/>
            </ul>
            </div>
        );
    }
}