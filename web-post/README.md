# API's  Publishes (Prova AXUR.com)

##Descrição

* :white_check_mark: Sumário de publicações
* :white_check_mark: Lista de publicações
* :white_check_mark: Filtro por autor
* :white_check_mark: Ordenar publicações
* :white_check_mark: Teste Jest

<img width="400" src="https://github.com/samantadearaujo/blog/blob/master/__images__/app_fun.gif" />

##Tecnologia
:rocket:ReactJS - TypeScript 

<h4>
:construction_worker:
Dificuldade:
</h4>
<p>
</p>

<h4>
:green_heart:
</h4>
<p>
</p>

##WebPack
:package:


#Test Jest
:see_no_evil:


<h4>
:card_file_box: Estrutura
</h4>
<p>
* interfaces - <i> é usado para o repositorios.</i>
* models - <i> é a unificação, para ser usado no services</i>
* repositories - <i> Neste modulo coloquei o get para api externa.</i>
* services - <i> Já neste modulo é a união daos repositorios Posts e  Autores</i>
* pages/home - <i> Apresentação da tela</>
</p>

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