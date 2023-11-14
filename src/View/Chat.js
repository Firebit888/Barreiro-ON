import React from 'react';
import './Style.css';

const ChatButton = () => {
  const openChat = () => {
    // Implemente a lógica para abrir a janela de chat aqui
    // Pode ser uma janela de chat em tempo real ou um formulário de contato.
  };

  return (
    <button className="chat-button" onClick={openChat}>
      <i className="fa fa-comment"></i> Chat
    </button>
  );
};

export default ChatButton;
