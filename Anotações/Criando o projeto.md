# Passos para criar um projeto React

1 - Comece digitando o código de criação no terminal

`npx create-react-app nomedapasta`

2 - logo após entre na pasta `cd nomedapasta` e de o start no projeto `npm start`

3 - Realizar as limpezas necessárias (comentários, estilizações desnecessárias, configs desnecessárias)

_Exemplo após a limpeza:_

- Dentro da pasta `src` só deverá conter os arquivos `App.js` e `index.js`
- Dentro da parsta `public` só deverá conter o arquivo index.html

**App.js**

```javascript
function App() {
	return <div className="App">Olá React</div>;
}

export default App;
```

**Index.js**

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
```

**Index.html**

```javascript
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<meta
			name="viewport"
			content="width=device-width, initial-scale=1" />
		<link
			rel="manifest"
			href="%PUBLIC_URL%/manifest.json" />

		<title>Projeto Dio</title>
	</head>
	<body>
		<div id="root"></div>
	</body>
</html>
```

## Corpo do projeto

- Criação de components

  Cria-se uma pasta `Components` dentro do `src` e dentro desta pasta cria-se uma nova pasta referente a cada componente desejado.

## Pacotes

#### Estilização

- StyledComponents : `npm install styled-components`

## Estilização

criar arquivos `theme.js` e `global.js` dentro da pasta styles

Em `global.js` importar o global style de styled-components e fazer suas devidas estilizações globais

`User Snippets: GS`

```javascript
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 * {
   font-family: 'Roboto', sans-serif;
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 }

 body {
   background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
 }
`;
```

No arquivo `theme.js` fazer as exportação das cores globais.

`User Snippets(Theme Object Colors): TOC`

```Javascript
export default {
 COLORS: {

   BACKGROUND: '#141119',

   MINHA_COR_1: '',
   MINHA_COR_2: '',
   MINHA_COR_3: '',
 },
};
```

Quando for usar a cor nos arquivos de estilização realizar desta forma:

```Javascript
${({ theme }) => theme.COLORS.MINHACOR}
```

`Atalho: CRTL + SHIFT+1`

**Arquivo Main (renderização)**

No Arquivo `main`importar o `theme.js`, `GlobalStyles` e o `ThemeProvider`.

`User Snippets: IGS`

```Javascript
import theme from './styles/theme.js';
import GlobalStyles from './styles/global';
import { ThemeProvider } from 'styled-components';

```

Colocar as tags `ThemeProvider` e `Global Styles` Envolvendo o `App` ou arquivo de rotas `Routes` e colocar o `theme` como props do `ThemeProvider`

```Javascript
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyles />
				<Routes/>
		</ThemeProvider>
	</React.StrictMode>
);
```
