# O que é React

- O React é uma biblioteca JavaScript para criação de interfaces de usuário.
- Foi criado em 2011 pelo facebook

## Framewrok x Biblioteca

### Biblioteca

Um dos recurso mais ultilizados no mundo da programação, a idéia da biblioteca é compartilhar soluções por meio de funções ou métodos.

_Exemplos:_

      - Moment.js
      - Chart.js
      - Voca
      - mo.js
      - React

### Framework

O Framework nada mais é do que uma ferramenta para otimizar o ganho de tempo no seu projeto, vai te ajudar a ter como único objetivo focar em desenvolvimento, não em detalhes de configurações, tudo já vem configurado.

Todo framework tem um método e um padrão a ser seguido.

_Exemplos:_

    - Angular (Google)
    - Vuex
    - Ionic
    - Next
    - Express
    - LoopBack

## Componentes de Classes x Funcionais

Existia um modelo antigo de ComponentClass que caiu no desuso por ser muito verboso,
agora se uma abordagem mais prática

**Função nomeada:** _(nome especifico e entre chaves na importação)_

```javascript
import { MainPage } from "./MainPage";
```

```javascript
export function MainPage({}) {
	return (
		<>
			<Container></Container>
		</>
	);
}
```

é usado quando você deseja exportar várias coisas de um arquivo (como várias funções ou variáveis).

**Função tradicional:** _(usado qualquer nome na importação)_

```javascript
import MyCustomMainPage from "./MainPage";
```

```javascript
function MainPage({}) {
	return (
		<>
			<Container></Container>
		</>
	);
}

export default MainPage;
```

ou

```javascript
export default function MainPage({}) {
	return (
		<>
			<Container></Container>
		</>
	);
}
```

é mais comum quando você tem apenas um componente a ser exportado de um arquivo

## Components e props

**Desestruturação Direta nos Parâmetros da Função:**

```javascript
export function Button({ title, onClick, disabled }) {
	return (
		<>
			<button
				onClick={onClick}
				disabled={disabled}>
				{title}
			</button>
		</>
	);
}
```

Vantagens:

- É mais conciso e expressivo.
- Permite ver rapidamente quais propriedades o componente está usando.

Desvantagens:

- Se você tem muitas propriedades, a lista de parâmetros pode ficar longa e difícil de ler.

**Desestruturação dentro do Corpo da Função:**

```javascript
export function Button(props) {
	const { title, onClick, disabled } = props;

	return (
		<>
			<button
				onClick={onClick}
				disabled={disabled}>
				{title}
			</button>
		</>
	);
}
```

Vantagens:

- Pode ser mais legível se você tem muitas propriedades e a lista de parâmetros da função fica muito longa.
- Facilita a adição, remoção ou reordenação de propriedades, pois elas estão todas em um único lugar.

Desvantagens:

- Exige uma linha extra de código para desestruturar as propriedades.
- A desestruturação explícita das propriedades pode se tornar redundante ou desnecessária em alguns casos.

### Observaçãos sobre Components

- No react tudo é compontente que será renderizado, nada se escreve de novo tudo é reutilizado.
- Todo componente começa com letra maiúscula Ex: `<App/>`
- Componentes podem receber parâmetros `function App({nome})...` `...<App nome = "Philippe"/>`

## Observação CSS

### Estilização de componente já criado

A criação de uma `className` dentro de um componente permite que esse componente seja estilizado de forma específica quando ele é usado dentro de outros componentes. 

Usar `className` fornece uma maneira de aplicar estilos diretamente no componente filho sem modificar seu código de estilo interno. Isso é especialmente útil quando você está compondo e reutilizando componentes em uma aplicação maior.

### Benefícios de Usar `className`

1. **Modularidade**:
    - Componentes podem ser reutilizados em diferentes contextos com diferentes estilos, sem precisar duplicar o código de estilo ou criar componentes novos para cada variação.

2. **Manutenção Simplificada**:
    - Mantém a lógica de estilo centralizada. Se precisar mudar o estilo de um componente específico, você pode fazer isso diretamente no local onde ele é usado, sem precisar editar o componente original.

3. **Especificidade**:
    - Permite aplicar estilos com alta especificidade quando necessário, sem criar conflitos de CSS global.

### Exemplo com Explicação

Vamos examinar um exemplo concreto para entender melhor.

#### Componente Button

Primeiro, você cria um componente `Button` que recebe `className` como props e aplica essa classe ao elemento `<button>`.

```jsx
// Components/Button.js
import React from 'react';

const ThemeButton = ({ className, title }) => {
    return <button className={className}>{title}</button>;
};

export default ThemeButton;
```

#### Estilos no `styles.js`

Em `styles.js`, você define um estilo para a classe `.ThemeButton`.

```javascript
// styles.js
import styled from 'styled-components';

export const Container = styled.div`
   
    .ThemeButton {
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.light};
        padding: 10px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;

        &:hover {
            background-color: ${({ theme }) => theme.colors.dark};
        }
    }
`;
```

#### Uso no `App.jsx`

No componente `App`, você aplica a classe `ThemeButton` ao `ThemeButton` usando `className`.

```jsx
// App.jsx

import ThemeButton from '../../Components/Button';
import { Container } from './styles';

function App() {
  

    return (
        <Container>
            <div className="App">
                <h1>Estudando sobre API</h1>
                <ThemeButton className="ThemeButton" title="Change Theme" />
            </div>
        </Container>
    );
}

export default App;
```

### Como Funciona

1. **Passagem de `className`**:
    - No `App.jsx`, não precisa colocar o `className="ThemeButton"` se você ja o colocou ao componente `ThemeButton`, a menos que ele seja um props `className="{className}"`, daí no componente onde você chamou o button você pode dar o className que achar melhor e estiliza-lo dentro do style.

   
2. **Estilização Específica**:
    - No `styles.js`, a classe `.ThemeButton` é estilizada especificamente.
    - Quando o `ThemeButton` é renderizado dentro do `App`, ele recebe esses estilos.

3. **Flexibilidade e Reutilização**:
    - O mesmo `ThemeButton` pode ser usado em diferentes partes da aplicação com diferentes classes, permitindo estilos diferentes conforme necessário.
    - Sem `className`, seria necessário alterar o componente `ThemeButton` diretamente ou criar variações específicas para cada uso, o que não é escalável.



## Pseudoclasses Styled-Components

styled-components no React, o &amp; é usado para referenciar o próprio elemento que está sendo estilizado.

```Javascript
 &:hover {
    background-color: #e0e0e0;
```
