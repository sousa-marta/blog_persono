import React, { useState, useEffect } from 'react';

import BlogCard from '../../components/BlogCard';
import SearchBar from '../../components/SearchBar';
import AddPostModal from '../../components/AddPostModal';

import { Feedback, StyledContainer, Title, PlusIcon } from './styles';

import { postsServices } from '../../services/postsServices';

const BlogListPage = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [blogPosts, setBlogPosts] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [showModal, setShowModal] = useState(false);

  // Busca todos os posts ao iniciar página
  useEffect(() => {
    postsServices.getPostsList(
      (res) => {
        // if (res.data.success) {
          setBlogPosts(res.data.posts);
          setIsFetching(false);
        // }
      },
      (err) => console.log(err)
    );
    // fetch('/getposts')
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setBlogPosts(data.posts);
    //     setIsFetching(false);
    //   });
  }, []);

  // Reenderiza mensagem de feedback para o usuário
  const FeedbackMessage = () => {
    const postsCount = blogPosts.length;

    //Feedbacks da pesquisa
    if (searchInput) {
      if (postsCount === 0) {
        return (
          <Feedback>
            <p>Não foram encontrado posts para essa busca</p>
            <p>Considere adicionar um novo post</p>
          </Feedback>
        );
      } else if (postsCount === 1)
        return (
          <Feedback>
            Exibindo 1 post para: <strong>{searchInput}</strong>
          </Feedback>
        );
      else
        return (
          <Feedback>
            Exibindo {postsCount} posts para: <strong>{searchInput}</strong>
          </Feedback>
        );
    } else {
      if (postsCount === 0) {
        return (
          <Feedback>
            <p>Não foram encontrado posts para essa busca</p>
            <p>Considere adicionar um novo post</p>
          </Feedback>
        );
      }

      return <Feedback>Exibindo todos os posts</Feedback>;
    }
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
              <PlusIcon onClick={() => setShowModal(true)}>+</PlusIcon>
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
                <FeedbackMessage />
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

          <AddPostModal showModal={showModal} setShowModal={setShowModal} />
        </>
      )}
    </StyledContainer>
  );
};

export default BlogListPage;
