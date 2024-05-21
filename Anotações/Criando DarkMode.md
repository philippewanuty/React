# Abilitando Darkmode no projeto

 1 - Crie o Arquivo `DarkModeProvider`

 2 - Envolva o `DarkModeProvider` nos componentes que deseja consumir o contexto

 3 - Chame `useDarkMode` dentro de componentes funcionais para acessar `isDarkMode` e `toggleDarkMode` diretamente.

 4 - Use os componentes como desejar para ativar o darkmode

Vamos a explicação do funcionamento de cada parte, incluindo os hooks utilizados e suas finalidades.

### Análise do Código

```javascript
import { createContext, useState, useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const toggleDarkMode = () => {
		setIsDarkMode((prevMode) => !prevMode);
	};

	return (
		<DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
			<ThemeProvider theme={isDarkMode ? theme.dark : theme.light}>{children}</ThemeProvider>
		</DarkModeContext.Provider>
	);
};

export const useDarkMode = () => useContext(DarkModeContext);
```

### Hooks Utilizados

1. **`useState`**:

   - **Finalidade**: O `useState` é um hook que permite adicionar o estado local ao componente funcional. Neste código, ele é utilizado para gerenciar o estado do modo escuro (`isDarkMode`).
   - **Como foi utilizado**:
     ```javascript
     const [isDarkMode, setIsDarkMode] = useState(false);
     ```
     Aqui, `isDarkMode` é uma variável de estado que indica se o modo escuro está ativado (`true`) ou não (`false`). `setIsDarkMode` é a função que permite atualizar esse estado.

2. **`createContext`**:

   - **Finalidade**: O `createContext` é usado para criar um objeto de contexto que pode ser compartilhado por toda a árvore de componentes, sem a necessidade de passar props manualmente em cada nível.
   - **Como foi utilizado**:
     ```javascript
     export const DarkModeContext = createContext();
     ```
     Isso cria um novo contexto chamado `DarkModeContext`.

3. **`useContext`**:
   - **Finalidade**: O `useContext` é um hook que permite acessar o valor de um contexto dentro de um componente funcional.
   - **Como foi utilizado**:
     ```javascript
     export const useDarkMode = () => useContext(DarkModeContext);
     ```
     Aqui, `useDarkMode` é um hook personalizado que facilita o acesso ao contexto `DarkModeContext`, fornecendo o estado `isDarkMode` e a função `toggleDarkMode`.

### Função e Componentes

1. **`DarkModeProvider`**:

   - **Finalidade**: Este é um componente de provedor que encapsula a lógica do modo escuro e fornece esse estado e a função de alternância (`toggleDarkMode`) para todos os componentes filhos que consomem o contexto `DarkModeContext`.
   - **Como foi utilizado**:
     ```javascript
     return (
     	<DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
     		<ThemeProvider theme={isDarkMode ? theme.dark : theme.light}>{children}</ThemeProvider>
     	</DarkModeContext.Provider>
     );
     ```
     O componente `DarkModeProvider` usa o `DarkModeContext.Provider` para fornecer o estado e a função de alternância aos componentes filhos. Ele também usa o `ThemeProvider` do `styled-components` para aplicar o tema apropriado (claro ou escuro) com base no estado `isDarkMode`.

2. **`toggleDarkMode`**:

   - **Finalidade**: Esta é uma função que alterna o valor de `isDarkMode` entre `true` e `false`.
   - **Como foi utilizado**:
     ```javascript
     const toggleDarkMode = () => {
     	setIsDarkMode((prevMode) => !prevMode);
     };
     ```
     Esta função usa `setIsDarkMode` para alternar o estado `isDarkMode`.

3. **`useDarkMode`**:
   - **Finalidade**: Este é um hook personalizado que facilita o acesso ao contexto `DarkModeContext`.
   - **Como foi utilizado**:
     ```javascript
     export const useDarkMode = () => useContext(DarkModeContext);
     ```
     Ele retorna o valor do contexto `DarkModeContext`, que inclui `isDarkMode` e `toggleDarkMode`.

### Diferença entre `useDarkMode` e `DarkModeProvider`


- **DarkModeProvider:** É um componente que gerencia e fornece o estado e as funções relacionadas ao tema escuro/claro para os componentes filhos. Ele deve envolver os componentes que precisam acessar o contexto de tema.

- **useDarkMode:** É um hook personalizado que facilita o acesso ao contexto de tema dentro de componentes funcionais. Ele é usado para obter `isDarkMode` e `toggleDarkMode` sem precisar usar `useContext` diretamente.

### Como Usar

1. **Envolver a aplicação com `DarkModeProvider`**:

   ```javascript
   import { DarkModeProvider } from './styles/DarkModeProvider';

   ReactDOM.createRoot(document.getElementById('root')).render(
   	<React.StrictMode>
   		<DarkModeProvider>
   			<App />
   		</DarkModeProvider>
   	</React.StrictMode>
   );
   ```

2. **Consumir o contexto em componentes filhos**:

   ```javascript
   import { useDarkMode } from './styles/DarkModeProvider';

   function SomeComponent() {
   	const { isDarkMode, toggleDarkMode } = useDarkMode();

   	return (
   		<div>
   			<button title={isDarkMode ? 'Modo Claro' : 'Modo Escuro'} onClick={toggleDarkMode}></button>
   		</div>
   	);
   }
   ```

Neste exemplo, o `DarkModeProvider` gerencia o estado global do modo escuro/claro e fornece esse estado a todos os componentes filhos, permitindo uma alternância fácil entre os temas claro e escuro.

## Importações

```javascript
import { createContext, useState, useContext } from 'react';
```

- **`createContext`**: Cria um objeto de contexto para compartilhar valores globalmente sem precisar passar props manualmente em cada nível.
- **`useState`**: Permite adicionar estado local a componentes funcionais.
- **`useContext`**: Permite acessar o valor de um contexto dentro de um componente funcional.

```javascript
import { ThemeProvider } from 'styled-components';
```

- **`ThemeProvider`**: Um componente de `styled-components` que permite aplicar um tema (conjunto de estilos) globalmente aos componentes filhos.

```javascript
import theme from './theme';
```

- **`theme`**: Um objeto que contém definições de tema (cores e outros estilos) para os modos claro e escuro. Este arquivo deve exportar os temas definidos.

## Forma de como deve ser o `theme`

```Javascript
const theme = {
  light: {
    COLORS: {
      BACKGROUND: '#FFFFFF',
      TEXT: '#333333',
      PRIMARY: '#007bff',
      // Adicione outras cores para o modo claro conforme necessário
    },
  },
  dark: {
    COLORS: {
      BACKGROUND: '#232129',
      TEXT: '#FFFFFF',
      PRIMARY: '#17a2b8',
      // Adicione outras cores para o modo escuro conforme necessário
    },
  },
};

export default theme;
```

## Forma de como acessar as cores

`${({ theme }) => theme.COLORS.NOME_DA_COR}`

caso não tenha a separação de temas voce deve usar o nome do tema antes da cor

`${({ theme }) => theme.light.COLORS.NOME_DA_COR}`
