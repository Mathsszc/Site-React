Projeto de Loja de Produtos
Este site é uma loja de produtos, dentro dele teremos o inicio, produtos e carrinho. Se divirta!.

🚀 Começando
Estas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

Pré-requisitos
O que você precisa para instalar o software:

Node.js
npm ou yarn
📦 Instalação
Um passo a passo que informa como ter um ambiente de desenvolvimento em execução.

Clone o repositório:

Bash

git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
Instale o React com Vite e TypeScript:

Bash

npm create vite@latest ./ -- --template react-ts
ou

Bash

yarn create vite ./ --template react-ts
Instale as dependências do projeto:

Bash

npm install
ou

Bash

yarn install
🎨 Instalando e configurando o Tailwind CSS
Instale o Tailwind CSS e suas dependências:

Bash

npm install -D tailwindcss postcss autoprefixer
ou

Bash

yarn add -D tailwindcss postcss autoprefixer
Crie os arquivos de configuração do Tailwind CSS:

Bash

npx tailwindcss init -p
Configure os caminhos dos seus arquivos no tailwind.config.js:

JavaScript

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
Adicione as diretivas do Tailwind no seu arquivo CSS principal (./src/index.css):

CSS

@tailwind base;
@tailwind components;
@tailwind utilities;
✨ Instalando Bibliotecas Adicionais
Instale o Phosphor React para ícones:

Bash

npm install phosphor-react
ou

Bash

yarn add phosphor-react
Instale o React Router DOM para roteamento:

Bash

npm install react-router-dom
ou

Bash

yarn add react-router-dom
🏃‍♀️ Executando o projeto
Para iniciar o servidor de desenvolvimento, execute:

Bash

npm run dev
ou

Bash

yarn dev
Abra http://localhost:5173 (ou a porta que seu terminal indicar) para visualizar em seu navegador.

🛠️ Construído com
React - A biblioteca para interfaces de usuário
Vite - Ferramenta de build
TypeScript - Superset de JavaScript
Tailwind CSS - Framework de CSS
Phosphor React - Biblioteca de ícones
React Router DOM - Roteamento para React

Fontes
