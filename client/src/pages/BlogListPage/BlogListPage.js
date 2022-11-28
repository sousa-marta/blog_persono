import React, { useState, useEffect } from 'react';

import BlogCard from '../../components/BlogCard';
import SearchBar from '../../components/SearchBar';

import { Feedback, StyledContainer, Title, PlusIcon } from './styles';

const BlogListPage = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [blogPosts, setBlogPosts] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [resultFromSearch, setResultFromSearch] = useState(false); //todo - para alterar mensagem - pegar

  // Busca todos os posts ao iniciar página
  useEffect(() => {
    fetch('/getposts')
      .then((res) => res.json())
      .then((data) => {
        setBlogPosts(data.posts);
        setIsFetching(false);
      });
  }, []);

  const onCreateClick = () => {
    alert('open modal');
  };


  const feedbackMessage = () => {
    //TODO
  };



  // Exibe 'carregando' enquanto os posts estão sendo buscados no banco
  // Caso não haja posts, exibir mensagem de que 'Não há postagens disponíveis'
  return (
    <StyledContainer>
      {isFetching ? (
        <div>Carregando</div>
      ) : (
        <>
          <section>
            <div className="d-flex justify-content-between align-items-center">
              <Title>Posts</Title>
              <PlusIcon onClick={() => onCreateClick()}>+</PlusIcon>
            </div>
            <SearchBar
              setBlogPosts={setBlogPosts}
              searchInput={searchInput}
              setSearchInput={setSearchInput}
            />
          </section>
          {blogPosts ? (
            <div>
              <section>
                <Feedback>
                  {blogPosts.length
                    ? 'Exibindo todos os posts'
                    : 'Não há postagens disponíveis'}{' '}
                </Feedback>
                <div>
                  {blogPosts.map((each) => (
                    <BlogCard key={each.id} blogItem={each} />
                  ))}
                </div>
              </section>
            </div>
          ) : (
            <div></div>
          )}
        </>
      )}
    </StyledContainer>
  );
};

export default BlogListPage;
