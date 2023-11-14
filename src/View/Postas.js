import React, { Component } from 'react';
import Post from './Post';
import './Style.css'; // Importe o arquivo de estilo

class Postas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [], // Armazenar as postagens aqui
    };
  }

  // Método para adicionar uma nova postagem
  addPost = (newPost) => {
    this.setState((prevState) => ({
      posts: [newPost, ...prevState.posts], // Adicione a nova postagem no início
    }));
  }

  render() {
    return (
      <div>
        <div className="center-column">
          {/* Componente para criar uma nova postagem */}
          <Post onAddPost={this.addPost} />

          {/* Lista de postagens (invertida) */}
          <ul>
            {this.state.posts.map((post, index) => (
              <p key={index}>
                <div>{post.message}</div>
                {/* Renderiza os arquivos */}
                {post.files.map((file, fileIndex) => (
                  <div key={fileIndex} className="file-info">
                    <br />
                    {file.type.startsWith('image/') && (
                      <img src={URL.createObjectURL(file)} alt="Imagem" style={{ maxWidth: '70%' }} />
                    )}
                    {file.type.startsWith('video/') && (
                      <video controls style={{ maxWidth: '70%' }}>
                        <source src={URL.createObjectURL(file)} type={file.type} />
                        Seu navegador não suporta a exibição deste vídeo.
                      </video>
                    )}
                    {file.name.endsWith('.pdf') && (
                      <a href={URL.createObjectURL(file)} target="_blank" rel="noopener noreferrer">
                        Visualizar PDF
                      </a>
                    )}
                    {file.name.endsWith('.docx') && (
                      <a href={URL.createObjectURL(file)} target="_blank" rel="noopener noreferrer">
                        Visualizar documento Word
                      </a>
                    )}
                    {file.name.endsWith('.xlsx') && (
                      <a href={URL.createObjectURL(file)} target="_blank" rel="noopener noreferrer">
                        Visualizar documento Excel
                      </a>
                    )}
                  </div>
                ))}
              </p>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Postas;

