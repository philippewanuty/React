import axios from 'axios';

const apiClient = axios.create({
	baseURL: 'https://fakestoreapi.com/products',
	timeout: 1000,
	headers: { 'Content-Type': 'application/son' },
});

export default apiClient;
