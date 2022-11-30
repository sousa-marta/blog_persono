import React from 'react';

import Modal from 'react-bootstrap/Modal';

import { useForm } from 'react-hook-form';

import { InputButton } from '../../ui/Button/styles';
import { Error } from '../../ui/Forms/styles';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const AddPostModal = ({ showModal, setShowModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleClose = () => setShowModal(false);
  const onSubmit = (data) => {
    console.log(data);

    //TODO: enviar para banco e tratar erro/acerto

    handleClose();
  };

  // Obs: o número máximo de caracteres e o mesmo máximo para coluna do banco
  return (
    <Modal show={showModal} onHide={handleClose} backdrop="static" size="md">
      <Modal.Header>
        <h3 className="mb-0">Adicionar novo post</h3>
        <span className='close' onClick={()=>handleClose()}>x</span>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FloatingLabel controlId="floatingInput" label="Título">
            <Form.Control
              placeholder="Título"
              {...register('title', {
                required: true,
                minLength: 2,
                maxLength: 200,
              })}
            />
          </FloatingLabel>
          {errors.title?.type ==='required' && <Error>Esse campo é obrigatório</Error>}
          {errors.title?.type ==='minLength' && <Error>Deve ter ao menos 2 caracteres</Error>}
          {errors.title?.type ==='maxLength' && <Error>Deve ter no máximo 200 caracteres</Error>}

          <FloatingLabel
            controlId="floatingInput"
            label="Autor"
            className="mt-3"
          >
            <Form.Control
              placeholder="Autor"
              {...register('author', {
                required: true,
                minLength: 2,
                maxLength: 100,
              })}
            />
          </FloatingLabel>
          {errors.author?.type ==='required' && <Error>Esse campo é obrigatório</Error>}
          {errors.author?.type ==='minLength' && <Error>Deve ter ao menos 2 caracteres</Error>}
          {errors.author?.type ==='maxLength' && <Error>Deve ter no máximo 100 caracteres</Error>}

          <FloatingLabel
            controlId="floatingInput"
            label="Descrição"
            className="mt-3"
          >
            <Form.Control
              placeholder="Descrição"
              as="textarea"
              {...register('description', {
                required: true,
                minLength: 10,
                maxLength: 1000,
              })}
            />
          </FloatingLabel>
          {errors.description?.type ==='required' && <Error>Esse campo é obrigatório</Error>}
          {errors.description?.type ==='minLength' && <Error>Deve ter ao menos 10 caracteres</Error>}
          {errors.description?.type ==='maxLength' && <Error>Deve ter no máximo 1000 caracteres</Error>}

          <FloatingLabel
            controlId="floatingInput"
            label="Categoria"
            className="mt-3"
          >
            <Form.Control
              placeholder="Categoria"
              {...register('category', {
                required: true,
                minLength: 4,
                maxLength: 100,
              })}
            />
          </FloatingLabel>
          {errors.category?.type ==='required' && <Error>Esse campo é obrigatório</Error>}
          {errors.category?.type ==='minLength' && <Error>Deve ter ao menos 4 caracteres</Error>}
          {errors.category?.type ==='maxLength' && <Error>Deve ter no máximo 100 caracteres</Error>}

          <div className="d-flex justify-content-end my-2">
            <InputButton type="submit" value="Salvar" />
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default AddPostModal;
