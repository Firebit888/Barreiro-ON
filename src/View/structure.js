import React from "react";
import Bts from "./Bts";
import Rodape from "./Rodape";
import Postas from "./Postas";
import Btstwo from "./Btstwo";
import './Style.css';

function Struct () {
    return(
        <body>
            <header>
                <h1 className="barreiro-on">Barreiro ON</h1>
            </header>
            <div><Bts /></div>
            <div><Postas /></div>
            <div><Btstwo /></div>
            <footer><Rodape /></footer>
        </body>
    );
}

export default function structure (){
    return(
        <Struct />
    );
}