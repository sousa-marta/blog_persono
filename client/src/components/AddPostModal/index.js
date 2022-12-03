import React from 'react';

import Modal from 'react-bootstrap/Modal';

import { useForm } from 'react-hook-form';

import { InputButton } from '../../ui/Button/styles';
import { Error } from '../../ui/Forms/styles';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import CloseButton from 'react-bootstrap/CloseButton';

import { postsServices } from '../../services/postsServices';

import { date_today } from '../../utils/date_today';

const AddPostModal = ({
  showModal,
  setShowModal,
  blogPosts,
  setBlogPosts,
  setAlertConfig,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleClose = () => setShowModal(false);

  const onSubmit = (data) => {
    postsServices.insertPost(
      data,
      (res) => {
        console.log('response:', res);

        setBlogPosts([
          {
            id: res.data,
            title: data.title,
            author: data.author,
            creation_date: date_today(),
            description: data.description,
            category: data.category,
          },
          ...blogPosts,
        ]);

        setAlertConfig({
          isOpened: true,
          isSuccess: true,
          message: 'Post adicionado com sucesso!',
        });

        //Limpa formulário caso sucesso
        reset();
      },
      (err) => {
        setAlertConfig({
          isOpened: true,
          isSuccess: false,
          message:
            'Ocorreu um erro ao tentar adicionar o post. Tente novamente mais tarde',
        });
        console.log('error catch', err);
      }
    );

    handleClose();
  };

  // Obs: o número máximo de caracteres e o mesmo máximo para coluna do banco
  return (
    <Modal show={showModal} onHide={handleClose} backdrop="static" size="md">
      <Modal.Header>
        <h3 className="mb-0">Adicionar novo post</h3>
        <span className="close" onClick={() => handleClose()}>
          <CloseButton variant="white" />
        </span>
      </Modal.Header>

      <Modal.Body>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FloatingLabel controlId="floatingInput" label="Título">
            <Form.Control
              placeholder="Título"
              type="text"
              {...register('title', {
                required: true,
                minLength: 2,
                maxLength: 200,
              })}
            />
          </FloatingLabel>
          {errors.title?.type === 'required' && (
            <Error>Esse campo é obrigatório</Error>
          )}
          {errors.title?.type === 'minLength' && (
            <Error>Deve ter ao menos 2 caracteres</Error>
          )}
          {errors.title?.type === 'maxLength' && (
            <Error>Deve ter no máximo 200 caracteres</Error>
          )}

          <FloatingLabel
            controlId="floatingInput"
            label="Nome do autor"
            className="mt-3"
          >
            <Form.Control
              placeholder="Autor"
              type="text"
              {...register('author', {
                required: true,
                minLength: 2,
                maxLength: 100,
              })}
            />
          </FloatingLabel>
          {errors.author?.type === 'required' && (
            <Error>Esse campo é obrigatório</Error>
          )}
          {errors.author?.type === 'minLength' && (
            <Error>Deve ter ao menos 2 caracteres</Error>
          )}
          {errors.author?.type === 'maxLength' && (
            <Error>Deve ter no máximo 100 caracteres</Error>
          )}

          <FloatingLabel
            controlId="floatingInput"
            label="Corpo da postagem"
            className="mt-3"
          >
            <Form.Control
              placeholder="Descrição"
              type="text"
              as="textarea"
              {...register('description', {
                required: true,
                minLength: 10,
                maxLength: 1000,
              })}
            />
          </FloatingLabel>
          {errors.description?.type === 'required' && (
            <Error>Esse campo é obrigatório</Error>
          )}
          {errors.description?.type === 'minLength' && (
            <Error>Deve ter ao menos 10 caracteres</Error>
          )}
          {errors.description?.type === 'maxLength' && (
            <Error>Deve ter no máximo 1000 caracteres</Error>
          )}

          <FloatingLabel
            controlId="floatingInput"
            label="Categoria"
            className="mt-3"
          >
            <Form.Control
              placeholder="Categoria"
              type="text"
              {...register('category', {
                required: true,
                minLength: 4,
                maxLength: 100,
              })}
            />
          </FloatingLabel>
          {errors.category?.type === 'required' && (
            <Error>Esse campo é obrigatório</Error>
          )}
          {errors.category?.type === 'minLength' && (
            <Error>Deve ter ao menos 4 caracteres</Error>
          )}
          {errors.category?.type === 'maxLength' && (
            <Error>Deve ter no máximo 100 caracteres</Error>
          )}

          <div className="d-flex justify-content-end my-2">
            <InputButton type="submit" value="SALVAR" />
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default AddPostModal;
