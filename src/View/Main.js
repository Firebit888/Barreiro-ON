import React from "react";
import Bts from "./Bts";
import Rodape from "./Rodape";
import Postas from "./Postas";
import Btstwo from "./Btstwo";
import './Style.css';

export default function Main() {
  return (
    <div>
      <h1 className="barreiro-on">Barreiro ON</h1>
      <Bts className="left-column" />
      <Btstwo className="right-column" />
      <Postas className="center-column" />
      <Rodape/>
    </div>
  );
}
