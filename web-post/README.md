# API's  Publishes (Prova AXUR.com)

##Descrição

* :white_check_mark: Sumário de publicações
* :white_check_mark: Lista de publicações
* :white_check_mark: Filtro por autor
* :white_check_mark: Ordenar publicações
* :white_check_mark: Teste Jest
* :white_check_mark: WebPack

<img width="300" height="250" src="https://raw.githubusercontent.com/samantadearaujo/blog/master/__images__/app_fun.gif?token=ANYD2BDC7KU3XKLKY4F2PMC662WDU" />

:rocket: Tecnologia 
ReactJS - TypeScript 

:construction_worker: Dificuldade

Em 2015 a 2017, trabalhei no projeto da HP, com o AngularJS. Depois 
disso vim para Portugal, e até em então estou só trabalhando com o 
WindowsForm (apenas em BackEnd C#). 
E sinceramente já não aguento mais...Fiz um curso pela RokeaSet de uma semana e estou estudando a documentação do ReactJS. 
E nessa prova preferi aplicar o ReactJS / TypeScript, porque estou apaixonada com a biblioteca e cada dia estudando mais e mais. 
Enfim sei que preciso melhorar no conceito/uso do useEffect e do useState, mesmo sendo os conceitos mais básicos. 
Tentei aplicar o Design Pattern Factory com o (Models, Repositories
e Services), mas sei que precisa ser mais estruturado. 

E pela primeira fiz o uso Jest, para testes. Mesmo aplicando o teste apenas a uma função. 


:green_heart

Desafios, provas e testes foram feitos para medir o seu nível, 
e sinceramente é adoro. 

:card_file_box: Estrutura

interfaces - é usado para o repositorios.
models - é a unificação, para ser usado no services.
repositories - Neste modulo coloquei o get para api externa.
services -Já neste modulo é a união daos repositorios Posts e  Autores.
pages/home - Apresentação da tela

```
web-post
├─ TODO
├─ dist
│  ├─ bundle.min.js
│  └─ index.html
├─ jest.config.js
├─ package-lock.json
├─ package.json
├─ public
│  └─ index.html
├─ routes.tsx
├─ src
│  ├─ App.css
│  ├─ App.tsx
│  ├─ __tests__
│  │  └─ formatUnixtoDate.spec.ts
│  ├─ components
│  │  └─ formatUnixtoDate.tsx
│  ├─ consts
│  │  └─ api.tsx
│  ├─ index.html
│  ├─ index.tsx
│  ├─ interfaces
│  │  ├─ author.tsx
│  │  └─ post.tsx
│  ├─ models
│  │  └─ postAuthorModel.tsx
│  ├─ pages
│  │  └─ home
│  │     ├─ index.tsx
│  │     └─ styles.css
│  ├─ repositories
│  │  ├─ AuthorRespository.tsx
│  │  └─ PostRespository.tsx
│  └─ services
│     ├─ authorService.tsx
│     └─ postAuthorService.tsx
├─ tsconfig.json
└─ webpack.config.js

```