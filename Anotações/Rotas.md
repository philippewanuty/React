## Routes

Para criar uma rota voce deve criar dois arquivos <code>app.routes.jsx</code> e o <code>index.jsx</code>

**No App.routs.jsx:**

importar o Routes e Route do react-router-dom

<code>import { Routes, Route } from 'react-router-dom';</code>

Dentro do arquivo de rotas fazer as devidas importações, colocar a tag **Routes** para em seguida definir cada rota com a tag **Route** nos paths importados.

```Javascript
import { Routes, Route } from 'react-router-dom';

import { Home } from '../Pages/Home';

<Routes>
	<Route
		path="/"
		element={<Home />}
	/>
</Routes>
```

**No index.jsx:**


Importar o **BrowserRouter** do RRD, Importar o **App.Routes** da pasta
e colocar a funcao das rotas dentro do BrowserRouter.

```Javascript

import { BrowserRouter } from 'react-router-dom';

	export function Routes() {
return (
<>
	<BrowserRouter>
		<AppRoutes />
	</BrowserRouter>
</>
);
}
```

## Implementando no Main

Substituir o App por **Routes** (index da pasta routes) e fazer a sua devida importação


      
```Javascript
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyles/>
			<Routes/>
		</ThemeProvider>
	</React.StrictMode>
);
```


## Usando rota

Para usar as rotas como um link em um componente voce deve importar o Link do React Router Dom 

<code>`import { Link } from 'react-router-dom';`</code>

E usar a tag <code> `<Link to="/rota">Seu Link</Link>` </code>

para a navegação.
