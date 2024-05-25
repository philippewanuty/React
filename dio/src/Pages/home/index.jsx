import { ThemeButton } from '../../Components/Button/ThemeButton';
import { getAllProducts, getProductById } from '../../api/apiService';
import { Container } from './styles';
import { useEffect, useState } from 'react';

function Home() {
	const [products, setProducts] = useState([]);
	const [product, setProduct] = useState(null);

	useEffect(() => {
		// Obter todos os produtos quando o componente é montado
		getAllProducts()
			.then((data) => setProducts(data))
			.catch((error) => console.error('Erro ao obter produtos:', error));

		// Obter um produto específico por ID (exemplo ID 1)
		getProductById(20)
			.then((data) => setProduct(data))
			.catch((error) => console.error('Erro ao obter o produto:', error));
	}, []);

	return (
		<Container>
			<div>
				<h1>Consumindo API</h1>
				<ThemeButton
					className='ThemeButton'
					title={'Change Theme'}
				/>
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
							<p> R$: {product.price}</p>
							<p>{product.category}</p>
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

export default Home;
