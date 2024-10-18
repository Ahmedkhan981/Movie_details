// src/pages/Movie.tsx
import { useLoaderData } from "react-router-dom";
import Card from "./../components/UI/Card";

interface Search {
	Poster: string;
	Title: string;
	Type: string;
	Year: string;
	imdbID: string;
}

const Movie = () => {
	// Ensure the loader data is typed correctly
	const movieData = useLoaderData() as Search[];

	// Handle the case when movieData is empty or undefined
	if (!movieData || movieData.length === 0) {
		return <p>No movies found.</p>;
	}

	// Sort movies by year in descending order
	const sortedMovies = movieData.sort(
		(a, b) => Number(b.Year) - Number(a.Year),
	);

	return (
		<ul className="unorderlist">
			{sortedMovies.map((curMovie) => (
				<Card key={curMovie.imdbID} curMovie={curMovie} />
			))}
		</ul>
	);
};

export default Movie;
