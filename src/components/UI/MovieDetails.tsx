import React from "react";
import { useLoaderData } from "react-router-dom";
import "./MovieDetails.modular.scss";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";

type MovieDetailed = {
	Actors: string;
	Director: string;
	Genre: string;
	Language: string;
	Plot: string;
	Poster: string;
	Released: string;
	Title: string;
	Runtime: string;
	Writer: string;
	imdbRating: string;
};

const MovieDetails: React.FC = () => {
	const details = useLoaderData() as MovieDetailed | null; // Allow null type

	if (!details) {
		return <h2 className="text-white">Movie not found or loading...</h2>; // Show a message if details is null
	}

	const { Poster, Title, imdbRating, Runtime } = details;
	const imdbRatingNumber = imdbRating ? parseFloat(imdbRating) / 2 : 0;
	const excludedKeys = new Set([
		"Poster",
		"Rated",
		"Released",
		"Writer",
		"Director",
		"Awards",
		"Metascore",
		"imdbRating",
		"imdbVotes",
		"imdbID",
		"Type",
		"DVD",
		"BoxOffice",
		"Production",
		"Website",
		"Response",
		"Title",
		"Ratings",
		"Runtime",
	]);

	const movieInfoEntries = Object.entries(details).filter(
		([key, value]) => !excludedKeys.has(key) && value,
	);
	const runtime = Number(Runtime.replace("min", ""));
	const horsetime = Math.floor(runtime / 60);
	const time =
		horsetime > 0 ? `${horsetime}hr ${runtime % 60}min` : `${runtime}min`;

	return (
		<>
			<h1 className="text-white text-2xl font-bold underline">{Title}</h1>
			<div className="Parent my-2 md:flex-row sm:flex-row">
				<div className="child-1 px-1 img">
					<img src={Poster} alt={Title} className="rounded-xl img" />
				</div>
				<div className="child-2 px-1">
					<div className="para">
						<div className="text-gray-700 font-semibold underline">
							Runtime:
						</div>
						<p>{time}</p>
					</div>
					{movieInfoEntries.map(([key, value]) => (
						<div className="para" key={key}>
							<div className="text-gray-700 font-semibold underline">
								{key}:
							</div>
							<p>{value}</p>
						</div>
					))}
					<div className="para">
						<Typography component="legend" className="double-underline ">
							Rating
						</Typography>
						<Stack spacing={1}>
							<Rating
								name="imdb-rating-small"
								value={imdbRatingNumber}
								precision={0.1}
								readOnly
								icon={<StarIcon />}
								emptyIcon={<StarBorderIcon className={`text-gray-600`} />}
							/>
						</Stack>
					</div>
				</div>
			</div>
		</>
	);
};

export default MovieDetails;
