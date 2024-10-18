import React from "react";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import "./card.modular.scss";

interface CardProps {
	curMovie: {
		Poster: string;
		Title: string;
		Type: string;
		Year: string;
		imdbID: string;
	};
}

const Card: React.FC<CardProps> = ({ curMovie }) => {
	const { Poster, Title, Type, Year, imdbID } = curMovie;
	return (
		<li className="card">
			<img src={Poster} alt={Title} className="image" />
			<h3>{Title}</h3>
			<p><span className="text-blue-400">Year: </span>{Year}</p>
			<p><span className="text-blue-400">Type: </span>{Type}</p>
			<NavLink to={`/movie/${imdbID}`}>
				<Button variant="contained" color="success">
					More Details
				</Button>
			</NavLink>
		</li>
	);
};

export default Card;
