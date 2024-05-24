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
