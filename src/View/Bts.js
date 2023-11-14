//Serve para lançar botões para a  main e outros para futuro
//coluna lado esquerdo

import React,{useState} from "react";
import Bt_procura from "./Bt_procura";
import './Style.css';
import './Profile/Style.css';
import Profile from './Profile/Profile'; // Certifique-se de ajustar o caminho conforme necessário

function Bt_pfl() {
    return (
        <button className="tw-button">Perfil</button>
    );
}

function Bt_inicial() {
    return (
        <button className="tw-button">Página Inicial</button>
    );
}

function Bt_lives() {
    return (
        <button className="tw-button">Lives</button>
    );
}

function Bt_notes() {
    return (
        <button className="tw-button">Notificações</button>
    );
}

export default function Bts() {
    const [showProfile, setShowProfile] = useState(false);
  
    const toggleProfile = () => {
      setShowProfile((prevShowProfile) => !prevShowProfile);
    };
  
    return (
      <div className="left-column">
        <div>
          <button className="tw-button" onClick={toggleProfile}>
            {showProfile ? "Fechar Perfil" : "Perfil"}
          </button>
          <Bt_inicial />
          <Bt_procura />
          <Bt_notes />
        </div>
        <div>
          {showProfile && <Profile />}
        </div>
      </div>
    );
  }
