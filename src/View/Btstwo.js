//Serve para lançar botões para a  main e outros para futuro
//Coluna lado direito
import React from "react";
import FollowButton from "./FollowButton";
import FollowButtontwo from "./FollowButtontwo";
import './Style.css';

export default function Btstwo() {
    return (
        <div className="right-column">
            <div className="right-column">
                <label>Quem seguir</label>
                <FollowButton />
                <FollowButton />
                <FollowButton />
                <label>O que seguir</label>
                <FollowButtontwo />
                <FollowButtontwo />
                <FollowButtontwo />
            </div>
        </div>
    );
}


