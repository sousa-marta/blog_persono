import React, { useState, useEffect } from 'react';

import { InputStyle } from './styles';

const SearchBar = ({ setBlogPosts, searchInput, setSearchInput }) => {
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    //Aguarde 700ms antes de fazer a busca no banco de dados
    const searchDatabase = setTimeout(() => {
      setIsFetching(true);

      fetch(`/getposts/?searchInput=${searchInput}`)
        .then((res) => res.json())
        .then((data) => {
          //Atualiza listagem de posts
          setBlogPosts(data.posts);
          setIsFetching(false);
        });
    }, 700);

    return () => clearTimeout(searchDatabase);
  }, [searchInput]);

  return (
    <InputStyle
      autoFocus
      type="text"
      autoComplete="off"
      className="live-search-field"
      placeholder="Buscar posts"
      onChange={(e) => setSearchInput(e.target.value)}
    />
  );
};

export default SearchBar;
