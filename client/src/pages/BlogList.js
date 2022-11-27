import React, { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import BlogCard from '../components/BlogCard';
import SearchBar from '../components/SearchBar';

const BlogListPage = () => {
  const [blogPosts, setBlogPosts] = useState(null);

  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => {
        console.log(data.posts);
        setBlogPosts(data.posts);
      });
  }, []);

  return (
    <Container>
      {!blogPosts ? (
        <div>Carregando</div>
      ) : (
        <div>
          <section>
            <SearchBar />
          </section>
          <section>
            <h4>Exibindo todos os posts</h4>
            <div>
              {blogPosts.map((each) => (
                <BlogCard key={each.id} blogItem={each} />
              ))}
            </div>
          </section>
        </div>
      )}
    </Container>
  );
};

export default BlogListPage;
