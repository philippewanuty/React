# Passos para criar um projeto React

1 - Comece digitando o código de criação no terminal

`npx create-react-app nomedapasta`

2 - logo após entre na pasta `cd nomedapasta` e de o start no projeto `npm start`


3 - Realizar as limpezas necessárias (comentários, estilizações desnecessárias, configs desnecessárias)

*Exemplo após a limpeza:*

 **App.js**

```
function App() {
  return (
    <div className="App">
     Olá React
    </div>
  );
}

export default App;
```

**Index.js**

```
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```
**Index.html**

```
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