import React, { useState, useEffect } from 'react';

import BlogCard from '../../components/BlogCard';
import SearchBar from '../../components/SearchBar';
import AddPostModal from '../../components/AddPostModal';
import Alert from '../../components/Alert';
import Loading from '../../components/Loading';

import { Feedback, Title, PlusIcon } from './styles';
import { Link } from '../../ui/Link/styles';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { postsServices } from '../../services/postsServices';

const BlogListPage = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [blogPosts, setBlogPosts] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [alertConfig, setAlertConfig] = useState({
    isOpened: false,
    isSuccess: true,
    message: '',
  });

  // Busca todos os posts ao iniciar página
  useEffect(() => {
    postsServices.getPostsList(
      (res) => {
        setBlogPosts(res.data.posts);
        setIsFetching(false);
      },
      (err) => console.log(err)
    );
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
            <p>
              Considere adicionar{' '}
              <Link
                onClick={() => {
                  setShowModal(true);
                }}
              >
                um novo post
              </Link>
            </p>
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
            <p>
              Considere adicionar{' '}
              <Link
                onClick={() => {
                  setShowModal(true);
                }}
              >
                um novo post
              </Link>
            </p>
          </Feedback>
        );
      }

      return <Feedback>Exibindo todos os posts</Feedback>;
    }
  };

  // Exibe spinner de carregamento enquanto os posts estão sendo buscados no banco
  return (
    <>
      {isFetching ? (
        <Loading />
      ) : (
        <Container>
          <Alert alertConfig={alertConfig} setAlertConfig={setAlertConfig} />
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
                <Row>
                  {blogPosts.map((each) => (
                    <Col lg="6" xxl="4" key={each.id}>
                      <BlogCard blogItem={each} />
                    </Col>
                  ))}
                </Row>
              </section>
            </div>
          ) : (
            <div>Não há postagens disponíveis. Adicione um novo post</div>
          )}

          <AddPostModal
            showModal={showModal}
            setShowModal={setShowModal}
            blogPosts={blogPosts}
            setBlogPosts={setBlogPosts}
            setAlertConfig={setAlertConfig}
          />
        </Container>
      )}
    </>
  );
};

export default BlogListPage;
