import React from 'react';
import './Style.css';

const UserProfile = () => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <img
          src="https://placekitten.com/200/200" // Substitua pelo URL da sua imagem de perfil
          alt="Profile"
          className="profile-picture"
        />
        <h2 className="profile-name">Seu Nome</h2>
        <p className="profile-handle">@seuhandle</p>
      </div>
      <div className="profile-content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        {/* Adicione mais informações sobre o perfil aqui */}
      </div>
    </div>
  );
};

function UserProfileWrapper() {
  return (
    <div className="UserProfile">
      <UserProfile />
    </div>
  );
}

export default UserProfileWrapper;

