//Botão para seguir outros grupos, eventos ou empresas
//No futuro tem se colocar aqui foto de perfil e nome de grupos, eventos ou empresas

import React, { useState } from 'react';

//Esta função serve para seguir e deixar de seguir 
const FollowButtontwo = ({ username, isFollowing, toggleFollow }) => {
  return (
    <button className='tw-follow-button' onClick={() => toggleFollow(username)}>
      {isFollowing ? 'Deixar de seguir' : 'Seguir'}
    </button>
  );
};

//Exporta
export default FollowButtontwo;
