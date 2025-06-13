Projeto de Loja de Produtos
Este site é uma loja de produtos, dentro dele teremos o inicio, produtos e carrinho. Se divirta!.


🚀 Começando

Estas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.


Pré-requisitos

O que você precisa para instalar o software:



📦 Instalação

Um passo a passo que informa como ter um ambiente de desenvolvimento em execução.

Clone o repositório:



git clone https://github.com/seu-usuario/seu-repositorio.git

cd seu-repositorio

Instale o React com Vite e TypeScript:



npm create vite@latest ./ -- --template react-ts



npm install



🎨 Instalando e configurando o Tailwind CSS

Instale o Tailwind CSS e suas dependências:



npm install tailwindcss @tailwindcss/vite

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
  
  plugins: [tailwind()],
  
}

Adicione as diretivas do Tailwind no seu arquivo CSS principal (./src/index.css):


CSS


@import "tailwindcss"

✨ Instalando Bibliotecas Adicionais

Instale o Phosphor React para ícones:



npm install phosphor-react



Instale o React Router DOM para roteamento:



npm install react-router-dom



🏃‍♀️ Executando o projeto

Para iniciar o servidor de desenvolvimento, execute:


npm run dev


Abra http://localhost:5173 (ou a porta que seu terminal indicar) para visualizar em seu navegador.

🛠️ Construído com

React - A biblioteca para interfaces de usuário

Vite - Ferramenta de build

TypeScript - Superset de JavaScript

Tailwind CSS - Framework de CSS

Phosphor React - Biblioteca de ícones

React Router DOM - Roteamento para React

Fontes
