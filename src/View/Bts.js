import React, { useState, useEffect } from "react";
import Bt_procura from "./Bt_procura";
import './Style.css';
import './Profile/Style.css';
import Profile from './Profile/Profile';

function Bt_pfl() {
    return (
        <button className="tw-button">Perfil</button>
    );
}

function Bt_inicial() {
    const [isTop, setIsTop] = useState(true);

    useEffect(() => {
        // Adiciona um listener para verificar a posição de rolagem ao montar o componente
        const handleScroll = () => {
            setIsTop(window.scrollY === 0);
        };
        window.addEventListener("scroll", handleScroll);

        // Remove o listener ao desmontar o componente
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleClick = () => {
        if (isTop) {
            // Se estiver no topo, faz refresh na página
            window.location.reload();
        } else {
            // Caso contrário, rola para o topo
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <button className="tw-button" onClick={handleClick}>
            Página Inicial
        </button>
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
