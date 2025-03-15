import './App.css';
import {useState} from "react"
import Buttons from "./Button.js";



function Buttons(name){
    document.getElementById("buttonfunction").onmouseover = function() {mouseOver()};
function mouseOver() {
  document.getElementById("buttonfunction").style.color = "gray";
}

document.getElementById("buttonfunction").onmouseout = function() {mouseOut()};
function mouseOut() {
  document.getElementById("buttonfunction").style.color = "black";
}
    return(
        <button id="buttonfunction"><b>{name}</b></button>
    )
}



export default Buttons