# React Hooks

## UseState

    O useState é um Hook do React que permite adicionar estado a componentes funcionais.
    Ele retorna um par: o valor do estado atual e uma função para atualizá-lo.
    É utilizado assim:

```Javascript
import { useState } from 'react'; //Importa a funcão do react

function MeuComponente() {

  const [contador, setContador] = useState(0); //Declaração

  return (
    <div>
      <p>Você clicou {contador} vezes</p>
      <button onClick={() => setContador(contador + 1)}>
        Clique aqui
      </button>
    </div>
  );
}
```

## UseEffect

O useEffect é um Hook do React que permite a execução de efeitos colaterais em componentes funcionais.
Ele aceita uma função que contém o efeito imperativo a ser executado.
Opcionalmente, pode aceitar um array de dependências que determina quando o efeito deve ser reexecutado.

Este Hook é comumente utilizado para operações como chamadas de API, manipulação de DOM
e assinaturas/subscrições, sendo executado após a renderização do componente.

Um ponto interessante é que o useEffect pode aceitar um array de dependências como seu segundo argumento.

Essas dependências são utilizadas para determinar quando o efeito deve ser reexecutado. Se qualquer uma das dependências no array mudar de valor entre renderizações, o efeito será acionado novamente. Se o array estiver vazio, o efeito será executado apenas uma vez após a montagem do componente.

```Javascript
useEffect(() => {
  // Código do efeito aqui
}, []); // array segundo argumento
```

**Aqui está um exemplo básico de uso do useEffect:**

```Javascript
import React, { useState, useEffect } from 'react';

function MeuComponente() {
  const [contador, setContador] = useState(0); // useState para o contador
  const [mensagem, setMensagem] = useState(''); // useState para a mensagem

  useEffect(() => {
    // Este efeito será executado sempre que o contador mudar
    if (contador > 0) {
      setMensagem(`Você clicou ${contador} vezes!`);
    } else {
      setMensagem('Comece a clicar!');
    }
  }, [contador]); // Dependência: será executado quando 'contador' mudar

  return (
    <div>
      <p>{mensagem}</p>
      <button onClick={() => setContador(contador + 1)}>Clique aqui</button>
    </div>
  );
}

export default MeuComponente;
```

### Explicação

- **useState**

  - `const [contador, setContador] = useState(0);`
    - Define uma variável de estado `contador` inicializada com `0`.
    - `setContador` é a função usada para atualizar o estado de `contador`.
  - `const [mensagem, setMensagem] = useState('');`
    - Define uma variável de estado `mensagem` inicializada como uma string vazia.
    - `setMensagem` é a função usada para atualizar o estado de `mensagem`.

- **useEffect**
  - `useEffect(() => { /* efeito */ }, [contador]);`
    - Este efeito será executado sempre que o valor de `contador` mudar.
  - Dentro do efeito:
    - Se `contador` for maior que `0`, a mensagem é atualizada para "Você clicou X vezes!".
    - Se `contador` for igual a `0`, a mensagem é "Comece a clicar!".

### Renderização

- O componente exibe a mensagem baseada no valor de `contador`.
- Ao clicar no botão, `setContador` incrementa o valor de `contador` em `1`.
- O efeito é acionado pelo incremento, atualizando a mensagem conforme a nova contagem.

### Uso do `useEffect`

- **O que faz:** `useEffect` é usado para realizar efeitos colaterais em componentes funcionais.
- **Quando é executado:** No exemplo, é executado sempre que o valor de `contador` muda, graças à lista de dependências `[contador]`.
- **Por que é útil:** Ele permite que você execute lógica adicional (como atualizar uma mensagem) sempre que determinados estados (dependências) mudam.

### Benefícios de `useEffect`

- Simplifica a execução de código que precisa ser executado após a renderização.
- Substitui métodos de ciclo de vida como `componentDidMount`, `componentDidUpdate` e `componentWillUnmount` das classes.
- Pode ser usado para adicionar lógica de inicialização e limpeza (se necessário) para melhor gerenciamento de recursos e comportamento do componente.

### Resumo

Este exemplo ilustra como `useState` e `useEffect` funcionam juntos para gerenciar estado e efeitos colaterais em componentes funcionais do React. `useState` gerencia o estado local, enquanto `useEffect` permite que você reaja às mudanças nesse estado de forma declarativa.

## UseContext

O useContext é um hook do React que permite consumir o contexto criado pelo React.createContext() de maneira mais fácil em componentes funcionais. O contexto é útil para compartilhar valores entre componentes sem a necessidade de passar explicitamente props em cada nível da árvore de componentes.

Aqui utilizamos o `useContext` para alternar a cor de um botão entre o modo claro (light mode) e o modo escuro (dark mode).

Usando o styled components devemos criar três arquivos:

1. `ThemeProvider.js`: Define o contexto e o provedor do tema.
2. `ThemeButton.js`: Define o componente do botão que usa o contexto.
3. `StyledButton.js`: Define o estilo do botão usando styled-components.

### 1. `ThemeProvider.js`

```javascript
// ThemeProvider.js
import{ useState, createContext } from 'react';

// Criar o contexto do tema
const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };
```

### 2. `ThemeButton.js`

```javascript
// ThemeButton.js
import { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';
import StyledButton from './StyledButton';

function ThemeButton() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <StyledButton isDarkMode={isDarkMode} onClick={toggleTheme}>
      Toggle Theme
    </StyledButton>
  );
}

export default ThemeButton;
```

### 3. `StyledButton.js`

```javascript
// StyledButton.js
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${({ isDarkMode }) => (isDarkMode ? 'black' : 'white')};
  color: ${({ isDarkMode }) => (isDarkMode ? 'white' : 'black')};
  border: 1px solid;
  padding: 10px 20px;
  cursor: pointer;
`;

export default StyledButton;
```

### 4. `App.js`

Para completar, vamos ajustar o `App.js` para usar esses componentes.

```javascript
// App.js
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from './ThemeProvider';
import ThemeButton from './ThemeButton';

function App() {
  return (
    <ThemeProvider>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <ThemeButton />
      </div>
    </ThemeProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
```



### Explicação

- **`ThemeProvider.js`**: Contém a lógica do contexto do tema e o provedor.
- **`ThemeButton.js`**: Componente que consome o contexto e usa o botão estilizado.
- **`StyledButton.js`**: Define o estilo do botão usando styled-components.
- **`App.js`**: Componente principal que usa `ThemeProvider` para envolver `ThemeButton`.


### Explicação

1. **Criação do Contexto de Tema:**

   - Criamos o contexto `ThemeContext` e um `ThemeProvider` que mantém o estado `isDarkMode` e a função `toggleTheme` para alternar entre os modos.

2. **Provider do Contexto:**

   - O `ThemeProvider` envolve os componentes filhos e fornece o valor do contexto (`isDarkMode` e `toggleTheme`).

3. **Consumo do Contexto:**

   - No `ThemeButton`, usamos `useContext` para acessar `isDarkMode` e `toggleTheme` do `ThemeContext`.
   - O estilo do botão muda com base no valor de `isDarkMode`, alternando entre cores claras e escuras.
   - Ao clicar no botão, `toggleTheme` é chamado para alternar o modo.

4. **Integração no App:**
   - O componente `App` envolve `ThemeButton` com `ThemeProvider` para que o contexto esteja disponível para `ThemeButton`.

Esse exemplo simples ilustra como usar `useContext` para gerenciar um tema de interface em um aplicativo React.
