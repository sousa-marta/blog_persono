import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const BlogCard = ({ blogItem }) => {

  return (
    <Card className="mb-3">
      <Card.Title>{blogItem.title}</Card.Title>
      <small>Por: {blogItem.author} - {blogItem.date }</small>
      <Card.Text>{blogItem.description}</Card.Text>
      <Button>{blogItem.category}</Button>
    </Card>
  );
};

export default BlogCard;
