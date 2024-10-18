interface Search {
	Poster: string;
	Title: string;
	Type: string;
	Year: string;
	imdbID: string;
}

export const fetchMovies = async (
	value: string = "avengers",
): Promise<Search[]> => {
	const allMovies: Search[] = [];

	try {
		for (let page = 1; page <= 3; page++) {
			const response = await fetch(
				`https://www.omdbapi.com/?apikey=485e76ec&s=${value}&page=${page}`,
			);
			const data = await response.json();

			if (Array.isArray(data.Search)) {
				allMovies.push(...data.Search);
			}

			if (!data.Search || data.Search.length === 0) {
				break;
			}
		}

		return allMovies;
	} catch (error) {
		console.error("Failed to fetch movies", error);
		return [];
	}
};
