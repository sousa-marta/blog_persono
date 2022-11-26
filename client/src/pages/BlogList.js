import React, { useEffect } from 'react';
import FakeData from '../utils/FakeData';

import Container from 'react-bootstrap/Container';
import BlogCard from '../components/BlogCard';
import SearchBar from '../components/SearchBar';

const BlogListPage = () => {

  return (
    <Container>
      <section>
        <SearchBar />
      </section>
      <section>
        <h4>Exibindo todos os posts</h4>
        <div>
          {FakeData.map((each) => (
            <BlogCard key={each.id} blogItem={each} />
          ))}
        </div>
      </section>
    </Container>
  );
};

export default BlogListPage;
