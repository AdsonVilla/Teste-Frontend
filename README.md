# Teste-Frontend

O projeto trata de uma interface de um blog, o qual denominei ALKABlog, na qual seja possível observar os posts e, ao clicar em um post, seja exibido seus respectivos comentários.

## Tecnologias Utilizadas

- Vite: Utilizado para criação da estrutura de códigos de frameworks JavaScript
- React: Biblioteca JavaScript para criação de páginas dinâmicas e de fácil reutilização
- JavaScript
- TailwindCSS: Framework CSS bastante utilizado atualmente, sendo uma alternativa para estilizar as aplicações no próprio arquivo de desenvolvimento.
- npm: Utilizado para instalação de pacotes e dependências no projeto
- Visual Studio Code (VS Code): Ambiente de desenvolvimento

## Instruções de como rodar o projeto

- Para a instalação do vite e react, pelo terminal do VS Code:
```
$ npm create vite@latest teste-frontend -- --template react
```
- Obs: As flags "teste-frontend -- --template react" facilitam a criação do projeto já com o nome e o framework/biblioteca que será usada

- Instalação do npm, pelo terminal:
```
$ npm install
```
- Rodando o projeto, pelo terminal:
```
$ npm run dev
```
- Instalação do TailwindCSS e o plugin Postcss, pelo terminal:
```
$ npm install -D tailwindcss postcss autoprefixer
$ npx tailwindcss init -p
```

- No arquivo "tailwind.config.js" que foi criado, adicionar:
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx", "./index.html"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```
- Após isso, criei um diretório na pasta ./src chamado "styles" e criei dentro dele um arquivo "global.css". Nele foram adicionados os diretórios do Tailwind e, depois, foi importado no arquivo "App.jsx".
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
