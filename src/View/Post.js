import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import './Style.css';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [], // Para armazenar os arquivos carregados
      message: '', // Para armazenar a mensagem da postagem
    };
  }

  handleDrop = (acceptedFiles) => {
    this.setState({ files: acceptedFiles });
  }

  handleTextChange = (e) => {
    this.setState({ message: e.target.value });
  }

  savePost = () => {
    // Implemente a lógica para salvar a postagem no servidor aqui
    // Envie this.state.files, this.state.message e outros dados da postagem para o servidor

    // Limpe o estado após salvar
    this.setState({ files: [], message: '' });

    // Chame a função de retorno para enviar a postagem ao componente pai
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
        <h2>O Barreiro está mais ON que nunca!</h2>
        <textarea
          className='rounded-textbox'
          value={this.state.message}
          onChange={this.handleTextChange}
          placeholder="Escreva sua postagem"
        />
        <Dropzone onDrop={this.handleDrop}>
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()} className="dropzone">
              <input {...getInputProps()} />
              <label className="custom-file-upload">
                <input type="file" />
                Inserir Arquivo
              </label>
            </div>
          )}
        </Dropzone>
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
                    // Remova a classe post-image
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
        <button className='bt_post' onClick={this.savePost}>Publicar</button>
      </div>
    );
  }
}

export default Post;
