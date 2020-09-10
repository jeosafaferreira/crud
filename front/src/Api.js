import axios from 'axios'

export const http = axios.create({
	//URL base da API
	baseURL: 'http://127.0.0.1:8000/api/dogs'
})

export default {
	// Retorna os dogs
	listar: () => {
		return http.get('/')
	},

	//Retorna os dados do personagem com o ID informado.
	// detalhes: (id) => {
	// 	return http.get("characters/" + id + "?&ts=1&apikey=354881e432048ec3f62f29ea96b26191&hash=9bd66969adbd6860df507b5cfff6de19")
	// },

	//Retorna os dados dos quadrinhos relacionados ao personagem cujo ID foi informado.
	//LIMITADO A 10 RESULTADOS.
	// detalhesQuadrinhos: (id) => {
	// 	return http.get("characters/" + id + "/comics?limit=10&ts=1&apikey=354881e432048ec3f62f29ea96b26191&hash=9bd66969adbd6860df507b5cfff6de19")
	// }
}