# O que é uma API

Uma API (Interface de Programação de Aplicações) é um conjunto de regras e definições que permite que diferentes sistemas de software se comuniquem entre si. As APIs facilitam a interação entre aplicações, fornecendo métodos padronizados para solicitar e trocar dados.

Aqui estão alguns pontos-chave sobre APIs:

1. **Interface Definida**: As APIs especificam como os componentes de software devem interagir. Elas definem as funções e procedimentos que podem ser usados, os parâmetros que podem ser passados, e os tipos de retorno esperados.

2. **Abstração**: As APIs fornecem uma camada de abstração que esconde a complexidade dos sistemas subjacentes. Isso permite que os desenvolvedores utilizem funcionalidades complexas sem precisar entender todos os detalhes de implementação.

3. **Reutilização**: As APIs promovem a reutilização de código e funcionalidade. Uma vez que uma API é desenvolvida, ela pode ser usada por múltiplas aplicações ou componentes.

4. **Interoperabilidade**: As APIs permitem que diferentes sistemas, muitas vezes desenvolvidos em diferentes linguagens de programação e plataformas, trabalhem juntos.

Por exemplo, uma API de serviço de clima pode fornecer métodos para obter a previsão do tempo atual para uma localização específica. Um desenvolvedor pode integrar essa API em seu aplicativo sem precisar criar um sistema de previsão do tempo do zero.

Se precisar de mais detalhes ou tiver uma pergunta específica sobre APIs, sinta-se à vontade para perguntar.

## O que é Axios

Axios é uma biblioteca baseada em JavaScript que permite fazer requisições HTTP a partir de navegadores e servidores Node.js. É amplamente utilizada para interagir com APIs, especialmente em aplicações web e móveis. Axios simplifica o processo de envio e recebimento de dados, oferecendo uma interface intuitiva e recursos avançados.

Aqui estão algumas características principais do Axios:

1. **Suporte a Promises**: Axios utiliza Promises, facilitando o gerenciamento de requisições assíncronas e tornando o código mais legível e fácil de manter.

2. **Interceptores**: Permite interceptar e modificar requisições ou respostas antes que elas sejam processadas. Isso é útil para adicionar cabeçalhos de autenticação, fazer logging, ou tratar erros de maneira centralizada.

3. **Transformação de Dados**: Antes de serem enviados ou após serem recebidos, os dados podem ser transformados conforme necessário.

4. **Cancelamento de Requisições**: Axios oferece uma maneira de cancelar requisições em andamento, o que pode ser útil em situações onde o usuário muda de página ou quando uma requisição já não é mais relevante.

5. **Compatibilidade com JSON**: Axios manipula automaticamente dados JSON, simplificando a comunicação com APIs RESTful que utilizam este formato.

6. **Suporte a Cookies**: Em navegadores, Axios automaticamente lida com cookies, facilitando a manutenção de sessões de usuário.


### Usando na prática
Para usaro Axios primeiro instalamos as suas dependencias `npm install axios`

Quando você está trabalhando com React, geralmente você usará o sistema de módulos ES6 para importar e exportar suas dependências e componentes. Para exportar a instância do Axios e suas funções de requisição em um ambiente React, você pode seguir estes passos:

### 1. Criar um arquivo para a configuração do Axios
Crie um arquivo `apiClient.js` onde você configurará a instância do Axios.

```javascript
// apiClient.js

import axios from 'axios';

// Cria uma instância do Axios com a URL base
const apiClient = axios.create({
  baseURL: 'https://fakestoreapi.com/products',
  timeout: 1000, // Tempo limite de 1 segundo (ajuste conforme necessário)
  headers: {'Content-Type': 'application/json'}
});

export default apiClient;
```

### 2. Criar um arquivo para as funções de requisição
Crie um arquivo `apiService.js` onde você definirá e exportará suas funções de requisição.

```javascript
// apiService.js

import apiClient from './apiClient';

// Função para obter todos os produtos
export const getAllProducts = async () => {
  try {
    const response = await apiClient.get('/');
    return response.data;
  } catch (error) {
    console.error('Erro ao obter produtos:', error);
    throw error;
  }
};

// Função para obter um produto por ID
export const getProductById = async (id) => {
  try {
    const response = await apiClient.get(`/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao obter o produto com ID ${id}:`, error);
    throw error;
  }
};
```

### 3. Usar as funções de requisição em um componente React
Agora, você pode importar e usar essas funções em seus componentes React. Aqui está um exemplo de como fazer isso em um componente funcional:

```javascript
// App.js

import React, { useEffect, useState } from 'react';
import { getAllProducts, getProductById } from './apiService';

const App = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Obter todos os produtos quando o componente é montado
    getAllProducts()
      .then(data => setProducts(data))
      .catch(error => console.error('Erro ao obter produtos:', error));

    // Obter um produto específico por ID (exemplo ID 1)
    getProductById(1)
      .then(data => setProduct(data))
      .catch(error => console.error('Erro ao obter o produto:', error));
  }, []);

  return (
    <div>
      <h1>Produtos</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>

      {product && (
        <div>
          <h2>Produto Selecionado</h2>
          <p>{product.title}</p>
          <p>{product.description}</p>
        </div>
      )}
    </div>
  );
};

export default App;
```

### Resumo

1. **Configuração do Axios**: Crie `apiClient.js` e exporte a instância configurada do Axios.
2. **Funções de Requisição**: Crie `apiService.js` e exporte funções que utilizam a instância do Axios para fazer requisições.
3. **Componente React**: Importe e use essas funções em seus componentes React, gerenciando o estado e os efeitos colaterais conforme necessário.

Com esta abordagem, seu código fica bem modularizado e organizado, facilitando a manutenção e a escalabilidade da aplicação. Se precisar de mais ajuda, estou à disposição.