const apiConfig = {
	baseUrl: 'https://api.themoviedb.org/3/',
	apiKey: 'd53736a52bac930f0b3ff111f77bdf45',
	originalImage: (imgPath) =>
		`https://image.tmdb.org/t/p/original/${imgPath}`,
	w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default apiConfig
