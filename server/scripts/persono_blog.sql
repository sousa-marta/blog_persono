--
-- PostgreSQL database dump
--

-- Dumped from database version 15.1
-- Dumped by pg_dump version 15.1

-- Started on 2022-12-03 15:38:54

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 215 (class 1259 OID 16405)
-- Name: posts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.posts (
    id integer NOT NULL,
    title character(200) NOT NULL,
    author character(100) NOT NULL,
    creation_date date DEFAULT CURRENT_DATE,
    description character(1000) NOT NULL,
    category character(100) NOT NULL
);


ALTER TABLE public.posts OWNER TO postgres;

--
-- TOC entry 214 (class 1259 OID 16404)
-- Name: posts_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.posts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.posts_id_seq OWNER TO postgres;

--
-- TOC entry 3326 (class 0 OID 0)
-- Dependencies: 214
-- Name: posts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.posts_id_seq OWNED BY public.posts.id;


--
-- TOC entry 3173 (class 2604 OID 16408)
-- Name: posts id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.posts ALTER COLUMN id SET DEFAULT nextval('public.posts_id_seq'::regclass);


--
-- TOC entry 3320 (class 0 OID 16405)
-- Dependencies: 215
-- Data for Name: posts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.posts (id, title, author, creation_date, description, category) FROM stdin;
1	Crie uma rotina de banho para dormir                                                                                                                                                                    	Persono                                                                                             	2022-11-27	O banho é um ótimo companheiro para nos acordar pelas manhãs, sobretudo quando começamos o dia bem cedo. Mas ele também pode ser perfeito para encerrar o dia, nos preparando para dormir.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              	SONO E CIÊNCIA                                                                                      
2	Como dormir pouco causa inflamação no corpo                                                                                                                                                             	Persono                                                                                             	2022-11-27	A inflamação é uma palavara que causa receio porque assim que a escutamos fazemos a relação dela com algum problema de saúde.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           	SONO E CIÊNCIA                                                                                      
\.


--
-- TOC entry 3327 (class 0 OID 0)
-- Dependencies: 214
-- Name: posts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.posts_id_seq', 29, true);


--
-- TOC entry 3176 (class 2606 OID 16412)
-- Name: posts pk.posts; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT "pk.posts" PRIMARY KEY (id);


-- Completed on 2022-12-03 15:38:54

--
-- PostgreSQL database dump complete
--

