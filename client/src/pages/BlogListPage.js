import React, { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import BlogCard from '../components/BlogCard';
import SearchBar from '../components/SearchBar';

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




  // Exibe 'carregando' enquanto os posts estão sendo buscados no banco
  // Caso não haja posts, exibir mensagem de que 'Não há postagens disponíveis'
  return (
    <Container>
      {isFetching ? (
        <div>Carregando</div>
      ) : (
        <>
          <section>
            <SearchBar
              setBlogPosts={setBlogPosts}
              searchInput={searchInput}
              setSearchInput={setSearchInput}
            />
          </section>
          {blogPosts ? (
            <div>
              <section>
                <h4>
                  {blogPosts.length
                    ? 'Exibindo todos os posts'
                    : 'Não há postagens disponíveis'}{' '}
                </h4>
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
    </Container>
  );
};

export default BlogListPage;
