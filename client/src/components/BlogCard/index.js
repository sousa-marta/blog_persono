import React from 'react';

import {Title, Subtitle, Card, Text} from './styles';
import { Tag } from "../../ui/Tag/styles";


const BlogCard = ({ blogItem }) => {

  return (
    <Card>
      <Title>{blogItem.title}</Title>
      <Subtitle>Por: {blogItem.author} - {blogItem.creation_date }</Subtitle>
      <Text>{blogItem.description}</Text>
      <Tag>{blogItem.category}</Tag>
    </Card>
  );
};

export default BlogCard;
