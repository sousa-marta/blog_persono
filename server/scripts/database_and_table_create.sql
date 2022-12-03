CREATE DATABASE persono_blog


CREATE TABLE public.posts (
    id integer NOT NULL,
    title character(200) NOT NULL,
    author character(100) NOT NULL,
    creation_date date DEFAULT CURRENT_DATE,
    description character(1000) NOT NULL,
    category character(100) NOT NULL
);