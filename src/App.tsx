// src/App.tsx
import {
	createBrowserRouter,
	RouterProvider,
	RouteObject,
} from "react-router-dom";
import "./style/style.scss";
import Home from "./pages/Home";
import Contact, { contactData } from "./pages/Contact";
import Movie from "./pages/Movie";
import AppLayout from "./components/layout/AppLayout";
import { Error } from "./pages/Error";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import MovieDetails from "./components/UI/MovieDetails";
import GetDetails from "./Api/GetDetails";
import { fetchMovies } from "./Api/GetApi";


// Use the RouteObject type from react-router-dom
const routes: RouteObject[] = [
	{
		path: "/",
		element: <AppLayout />,
		errorElement: <Error />,
		children: [
			{ path: "/", element: <Home /> },
			{
				path: "/movie",
				element: <Movie />,
				loader: async ({ request }) => (
					console.log(request),
					fetchMovies(new URL(request.url).searchParams.get("q") || "avengers")
				),
			},
			{
				path: "/movie/:movieID",
				element: <MovieDetails />,
				loader: GetDetails,
			},
			{ path: "/contact", element: <Contact />, action: contactData },
		],
	},
];

function App() {
	const router = createBrowserRouter(routes);

	return <RouterProvider router={router} />;
}

export default App;
