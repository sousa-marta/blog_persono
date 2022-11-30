import React, { useState, useEffect } from 'react';

import { Button } from '../../ui/Button/styles';
import { SearchBarStyle } from './styles';
import { InputStyle } from '../../ui/Forms/styles';

const SearchBar = ({ setBlogPosts, searchInput, setSearchInput }) => {
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    //Aguarde 300ms antes de fazer a busca no banco de dados
    // const searchDatabase = setTimeout(() => {
    setIsFetching(true);

    fetch(`/getposts/?searchInput=${searchInput}`)
      .then((res) => res.json())
      .then((data) => {
        //Atualiza listagem de posts
        setBlogPosts(data.posts);
        setIsFetching(false);
      });
    // }, 300);
    // return () => clearTimeout(searchDatabase);
  }, [searchInput]);

  return (
    <SearchBarStyle>
      <InputStyle
        autoFocus
        type="text"
        autoComplete="off"
        className="live-search-field"
        placeholder="Buscar posts"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      {searchInput && (
        <Button className="tag-right" onClick={() => setSearchInput('')}>
          Limpar
        </Button>
      )}
    </SearchBarStyle>
  );
};

export default SearchBar;
