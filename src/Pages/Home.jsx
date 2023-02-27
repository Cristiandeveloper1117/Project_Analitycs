import React from "react";
import NavBar from "../Components/navbar/NavBar";
// import "../Styles/home.css"

export default function Home () {
// JAVASCRIPT PARA QUE EL MENU CUANDO HACEMOS SCROLL HACIA ABAJO DESAPARESCA Y HACIA ARRIBA APARECE
let ubicacionPrincipal  = window.pageYOffset;
window.onscroll = function() {
    let Desplazamiento_Actual = window.pageYOffset;
    if(ubicacionPrincipal >= Desplazamiento_Actual){
        document.getElementById('navbar').style.top = '0';
    }
    else{
        document.getElementById('navbar').style.top = '-200px';
    }
    ubicacionPrincipal = Desplazamiento_Actual;
};
  return (
    <div className="layout-one">
       <header className="header-css">
        <nav id="navbar">
            <div className="navegacion">
                {/* <NavbarOne/> */}
                <NavBar/>
                
            </div>
        </nav>
    </header>

    
    </div>
  );
};
