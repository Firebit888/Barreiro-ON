//Botão para seguir outros utilizadores
//No futuro tem se colocar aqui foto de perfil e nome do utilizador

import React, { useState } from 'react';

//Esta função serve para seguir e deixar de seguir outros utilizadores
const FollowButton = ({ username, isFollowing, toggleFollow }) => {
  return (
    <button className='tw-follow-button' onClick={() => toggleFollow(username)}>
      {isFollowing ? 'Deixar de seguir' : 'Seguir'}
    </button>
  );
};

//Exporta
export default FollowButton;
