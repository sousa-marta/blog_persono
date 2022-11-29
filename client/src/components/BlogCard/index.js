import React from 'react';

import {convert_to_ddmmyyyy} from '../../utils/convert_date';

import {Title, Subtitle, Card, Text} from './styles';
import { Tag } from "../../ui/Tag/styles";




const BlogCard = ({ blogItem }) => {

  return (
    <Card>
      <Title>{blogItem.title}</Title>
      <Subtitle>Por: {blogItem.author} - {convert_to_ddmmyyyy(blogItem.creation_date) }</Subtitle>
      <Text>{blogItem.description}</Text>
      <Tag>{blogItem.category}</Tag>
    </Card>
  );
};

export default BlogCard;
