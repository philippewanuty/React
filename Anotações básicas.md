# O que é React

  - O React é uma biblioteca JavaScript para criação de interfaces de usuário.
  - Foi criado em 2011 pelo facebook

  ## Framewrok x Biblioteca

  ### Biblioteca
  
  Um dos recurso mais ultilizados no mundo da programação, a idéia da biblioteca é compartilhar soluções por meio de funções ou métodos.

  *Exemplos:*

      - Moment.js
      - Chart.js
      - Voca
      - mo.js
      - React

### Framework

O Framework nada mais é do que uma ferramenta para otimizar o ganho de tempo no seu projeto, vai te ajudar a ter como único objetivo focar em desenvolvimento, não em detalhes de configurações, tudo já vem configurado.

Todo framework tem um método e um padrão a ser seguido.

*Exemplos:*

    - Angular (Google)
    - Vuex
    - Ionic
    - Next
    - Express
    - LoopBack

## Componentes de Classes x Funcionais   

Existia um modelo antigo de ComponentClass que caiu no desuso por ser muito verboso,
agora se uma abordagem mais prática

**Função nomeada:** *(nome especifico e entre chaves na importação)*

```
import { MainPage } from './MainPage';
```

``` 
export function MainPage({}) {
  return (
    <>
      <Container>

      </Container>
    </>
  );
};
```
é usado quando você deseja exportar várias coisas de um arquivo (como várias funções ou variáveis).

**Função tradicional:** *(usado qualquer nome na importação)*

```
import MyCustomMainPage from './MainPage';
```
```
function MainPage({}) {
  return (
    <>
      <Container>

      </Container>
    </>
  );
};

export default MainPage ;
```
ou
```
export default function MainPage({}) {
  return (
    <>
      <Container>

      </Container>
    </>
  );
};
```
é mais comum quando você tem apenas um componente a ser exportado de um arquivo


## Components e props


**Desestruturação Direta nos Parâmetros da Função:**

```javascript
export function Button({ title, onClick, disabled }) {
  return (
    <>
      <button onClick={onClick} disabled={disabled}>{title}</button>
    </>
  );
};
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
      <button onClick={onClick} disabled={disabled}>{title}</button>
    </>
  );
};
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

## Ciclo de vida de um componente

  1-  Construtor => iniciar construção antes do componente ser mostrato.
  
