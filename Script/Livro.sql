CREATE DATABASE Livraria;
GO
USE Livraria;
GO
CREATE TABLE [dbo].[Livro] (
    [Id]        INT           IDENTITY (1, 1) NOT NULL,
    [Titulo]    VARCHAR (200) NOT NULL,
    [Subtitulo] VARCHAR (200) NULL,
    [Edicao]    TINYINT       NOT NULL,
    [Ano]       INT           NOT NULL,
    [Paginas]   INT           NOT NULL,
    [Preco]     FLOAT (53)    NOT NULL,
    [Editora]   VARCHAR (200) NOT NULL,
    [Idioma]    TINYINT       NOT NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC)
);