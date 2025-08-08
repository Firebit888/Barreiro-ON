import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import './ExpandB.css';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [], 
      message: '',
    };
  }

  handleDrop = (acceptedFiles) => {
    this.setState({ files: acceptedFiles });
  }

  handleTextChange = (e) => {
    this.setState({ message: e.target.value });
  }

  savePost = () => {
    this.setState({ files: [], message: '' });
    this.props.onAddPost({ message: this.state.message, files: this.state.files });
  }

  deleteFile = (index) => {
    const updatedFiles = [...this.state.files];
    updatedFiles.splice(index, 1);
    this.setState({ files: updatedFiles });
  }
  
  render() {
    return (
      <div>
        <h2 className='vinda'>O Barreiro está mais ON que nunca!</h2>
        
        {/* === ADICIONAR ESTE NOVO CONTAINER === */}
        <div className="post-input-container">
          <textarea
            className='rounded-textbox'
            value={this.state.message}
            onChange={this.handleTextChange}
            placeholder="Escreva sua postagem"
          />
          {/* O seu botão já está aqui, não é preciso mudar nada dentro dele */}
          <div className="expandable-button-container">
            <button className="main-button">P</button>
            <div className="sub-buttons">
              <button className='bt_post' onClick={this.savePost}>Publicar</button>
              <Dropzone onDrop={this.handleDrop}>
                {({ getRootProps, getInputProps }) => (
                  <div {...getRootProps()} className="dropzone-area">
                    <input {...getInputProps()} />
                    <button className='bt_insert'>Inserir Arquivo</button>
                  </div>
                )}
              </Dropzone>
            </div>
          </div>
        </div>
        {/* === FIM DO NOVO CONTAINER === */}

        {/* ... (O restante do seu código JSX, que lida com a exibição dos ficheiros, permanece igual) */}
        <ul>
          {this.state.files.map((file, index) => (
            <p key={index}>
              <span className='file-info'>
                <button className='delete-button' onClick={() => this.deleteFile(index)}>Excluir</button>
                <br />
                {file.type.startsWith('image/') && (
                  <img
                    src={URL.createObjectURL(file)}
                    alt="Imagem"
                    style={{ maxWidth: '70%', height: 'auto', display: 'block', margin: '10px auto' }}
                  />
                )}
                {file.type.startsWith('video/') && (
                  <video
                    controls
                    style={{ maxWidth: '70%', height: 'auto', display: 'block', margin: '10px auto' }}
                  >
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
              </span>
            </p>
          ))}
        </ul>
      </div>
    );
  }
}

export default Post;