<h1 align="center">
  Desafio técnico – BIA - BackEnd
  <br>
</h1>

<p align="center">
    <a alt="TypeScript">
        <img src="https://img.shields.io/badge/npm-v6+-red.svg" />
    </a>
    <a alt="NodeJs">
        <img src="https://img.shields.io/badge/NodeJs-v12+-greenlight.svg" />
    </a>
    <a alt="TypeScript">
        <img src="https://img.shields.io/badge/TypeScript-v3.9-blue.svg" />
    </a>
    <a alt="Flyway">
        <img src="https://img.shields.io/badge/TypeORM-v0.3-brown.svg">
    </a>
        <a alt="Jest">
        <img src="https://img.shields.io/badge/Jest-brown.svg">
    </a>
    <a alt="Swagger-UI">
        <img src="https://img.shields.io/badge/SwaggerUI-v4-green.svg">
    </a>
    <a alt="MongoDB">
        <img src="https://img.shields.io/badge/MongoDB-v3.7-greendark.svg">
    </a>
    <a alt="ExpressJs">
        <img src="https://img.shields.io/badge/ExpressJs-v4.17-greendark.svg">
    </a>
    <a alt="SocketIO">
        <img src="https://img.shields.io/badge/SocketIO-v4-bluedark.svg" />
    </a>
</p>

## Índice

1. [Descrição do desafio](#Descrição-desafio)
2. [Tecnologias](#Tecnologias)
3. [Design Patterns e Metodologias](#Design-patterns)
4. [Metodologias](#Metodologias)
5. [Instruções de uso](#Instruções-de-uso)
6. [Documentação REST](#Documentação-REST)

## Descrição do desafio

<img src="./.github/images/challenge.png" alt="challenge"></a>

## Tecnologias

Principais ferramentas e tecnologias utilizadas no projeto:

- **npm** - Gerenciador de dependências
- **TypeScript** - Linguagem de programação
- **NodeJS** - Interpretador JavaScript/TypeScript
- **ExpressJS** - Framework para API em NodeJS
- **MongoDB** - Banco de dados não relacional
- **TypeORM** - ORM para Typescript
- **SocketIO** - Protocolo de comunicação em tempo real
- **Jest** - Framework para testes
- **Docker** - Framework de conteinerização
- **Swagger** - Documentação de API
- **Yup** - Biblioteca de validação de esquemas
- **ESLint** - Ferramenta de padronização de códigos
- **Prettier** - Formatador de códigos

## Design Patterns e Metodologias

Principais ferramentas e tecnologias utilizadas no projeto:

- **Clean Architecture**
- **SOLID**
- **Factory**
- **Dependency Injection**
- **Keep It Simple, Silly (KISS)**

## Instruções de uso

**1. Clonar repositório**

**2. Build e start usando docker**

- Serão criados dois containers, mongo-db e bia-challenge

```bash
docker-compose build
docker-compose up -d
```

**3. Start usando npm**

- Necessário uma conexão com o MongoDB, configurar no .env do projeto antes de executar

<img src="./.github/images/dbconfig.png" alt="dbconfig"></a>

```bash
npm install
npm start
```

Aplicação estará disponível em <http://localhost:4000>.

## Documentação REST

**Os recursos REST da api estão documentados com Swagger, disponíveis uma vez que o projeto estiver rodando: [http://localhost:4000/api/docs/](http://localhost:4000/api/docs/)**

<img src="./.github/images/swagger.png" alt="swagger"></a>

**Exemplo de requisições**

- Na pasta raiz do projeto existe um arquivo de importação para o Insomnia com exemplo de todas as requisições (Insomnia_bia-challenge)

## Contribuidores

[Lucas Tavares](https://www.linkedin.com/in/lucas-tavares-a25323116/)
