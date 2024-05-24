import { ThemeButton } from '../../Components/Button';
import { getAllProducts, getProductById } from '../../api/apiService';
import { Container } from './styles';
import { useEffect, useState } from 'react';

function App() {
	const [products, setProducts] = useState([]);
	const [product, setProduct] = useState(null);

	useEffect(() => {
		// Obter todos os produtos quando o componente é montado
		getAllProducts()
			.then((data) => setProducts(data))
			.catch((error) => console.error('Erro ao obter produtos:', error));

		// Obter um produto específico por ID (exemplo ID 1)
		getProductById(1)
			.then((data) => setProduct(data))
			.catch((error) => console.error('Erro ao obter o produto:', error));
	}, []);

	return (
		<Container>
			<div className='App'>
				<h1>Estudando sobre API</h1>
				<ThemeButton title={'Change Theme'} />
			</div>
			<div>
				<h2>Produtos</h2>
				<ul>
					{products.map((product) => (
						<li key={product.id}>{product.title}</li>
					))}
				</ul>

				<div>
					<h2>Produto Selecionado</h2>
					{product ? (
						<>
							<p>{product.title}</p>
							<p>{product.description}</p>
						</>
					) : (
						<p>Nenhum produto selecionado</p>
					)}
				</div>
			</div>
		</Container>
	);
}

export default App;
