import React from 'react'
import Form from 'react-bootstrap/Form';

const SearchBar = () => {
  return (
    <Form.Group className="mb-3">
        <Form.Control placeholder="Buscar posts" />
      </Form.Group>
  )
}

export default SearchBar