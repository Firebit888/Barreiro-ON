import React, { useState } from 'react';
import './Style.css';

function Bt_procura() {
  const [isSearching, setIsSearching] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const toggleSearch = () => {
    setIsSearching(!isSearching);
  };

  const handleSearch = () => {
    // Faça o que for necessário com o valor da pesquisa (searchValue)
    console.log(`Você está procurando por: ${searchValue}`);
  };

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleEnterPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-container">
      {isSearching ? (
        <div className="search-box">
          <input
            type="text"
            placeholder="Digite sua pesquisa"
            value={searchValue}
            onChange={handleInputChange}
            onKeyPress={handleEnterPress}
          />
          <button className="search-button" onClick={handleSearch}>
            OK
          </button>
        </div>
      ) : (
        <button className="tw-button" onClick={toggleSearch}>
          Procurar
        </button>
      )}
    </div>
  );
}

export default Bt_procura;
