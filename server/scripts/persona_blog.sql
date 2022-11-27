-- CREATE DATABASE persona_blog 
--CREATE TABLE posts (
--    id int IDENTITY(1, 1) PRIMARY KEY,
--    title nvarchar(200) NOT NULL,
--    author nvarchar(100) NOT NULL,
--    creation_date date NOT NULL,
--    description nvarchar(1000) NULL,
--    category nvarchar(100) NULL
-- );

-- Table: public.posts

-- DROP TABLE IF EXISTS public.posts;

CREATE TABLE IF NOT EXISTS public.posts
(
    id integer NOT NULL DEFAULT nextval('posts_id_seq'::regclass),
    title character(200) COLLATE pg_catalog."default" NOT NULL,
    author character(100) COLLATE pg_catalog."default" NOT NULL,
    creation_date date,
    description character(1000) COLLATE pg_catalog."default" NOT NULL,
    category character(100) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "pk.posts" PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.posts
    OWNER to postgres;

    

-- POSTGRES
INSERT INTO
   public.posts(
      title,
      author,
      creation_date,
      description,
      category
   )
VALUES
   (
      'Crie uma rotina de banho para dormir',
      'Persono',
      '2022-11-27',
      'O banho é um ótimo companheiro para nos acordar pelas manhãs, sobretudo quando começamos o dia bem cedo. Mas ele também pode ser perfeito para encerrar o dia, nos preparando para dormir.',
      'SONO E CIÊNCIA'
   );

   INSERT INTO
   public.posts(
      title,
      author,
      creation_date,
      description,
      category
   )
VALUES
   (
      'Como dormir pouco causa inflamação no corpo',
      'Persono',
      '2022-11-27',
      'A inflamação é uma palavara que causa receio porque assim que a escutamos fazemos a relação dela com algum problema de saúde.',
      'SONO E CIÊNCIA'
   );