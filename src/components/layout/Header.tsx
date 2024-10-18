import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import MenuIcon from "@mui/icons-material/Menu";
import TextField from "@mui/material/TextField";
import "./Header.modular.scss";

// Define the NavItem interface
interface NavItem {
	path: string;
	label: string;
}

const getActiveLink = ({ isActive }: { isActive: boolean }) => ({
	color: isActive ? "white" : "lightgray",
	textDecoration: isActive ? "none" : "underline",
});

const Header: React.FC = () => {
	const [bar, setBar] = useState<boolean>(false);
	const [searchValue, setSearchValue] = useState<string>("");
	const menuRef = useRef<HTMLDivElement>(null);
	const overlayRef = useRef<HTMLDivElement>(null);

	const navigate = useNavigate();

	// Event handler for search input
	const handleOpenSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
	};

	// Submit search form and navigate to the movie search page with query parameter
	const handleSubmitSearch = (e: React.FormEvent) => {
		e.preventDefault();
		const trimed = searchValue.trim();
		if (trimed.length > 0) {
			navigate(`/movie?q=${trimed}`);
			
		}
	};

	const navItems: NavItem[] = [
		{ path: "/", label: "Home" },
		{ path: "/movie", label: "Movie" },
		{ path: "/contact", label: "Contact" },
	];

	const handleOpen = () => {
		setBar((prev) => !prev);
	};

	// GSAP Animation Effect for Menu Toggle
	useEffect(() => {
		const listItems = menuRef.current?.querySelectorAll("li");

		if (menuRef.current && overlayRef.current && listItems) {
			if (bar) {
				gsap.to(menuRef.current, {
					duration: 0.5,
					x: "0%",
					display: "flex",
				});

				gsap.to(overlayRef.current, {
					duration: 0.5,
					opacity: 0.5,
					display: "block",
				});

				gsap.from(listItems, {
					opacity: 0,
					x: 20,
					duration: 0.3,
					stagger: 0.3,
					ease: "power2.out",
				});
			} else {
				gsap.to(menuRef.current, {
					duration: 0.3,
					x: "100%", // Slide out of view
					display: "none",
				});

				gsap.to(overlayRef.current, {
					duration: 0.3,
					opacity: 0,
					display: "none",
				});
			}
		}
	}, [bar]);

	return (
		<>
			<nav className="flex w-full bg-gray-900 py-4 items-center ">
				<div className="flex items-center h-11 justify-between w-full px-2">
					<NavLink
						to="/"
						className="flex items-center h-full px-6 text-white font-bold"
					>
						<img
							src="/logo.png"
							alt="Logo"
							className="h-16 w-auto"
							style={{ mixBlendMode: "plus-lighter" }}
						/>
					</NavLink>

					{/* Search Bar */}
					<div className="flex justify-center items-center">
						<form onSubmit={handleSubmitSearch}>
							<TextField
								id="search"
								label="Search"
								variant="filled"
								value={searchValue}
								onChange={handleOpenSearch}
								sx={{
									width: "100%",
									"& .MuiFilledInput-root": {
										backgroundColor: "rgba(44, 44, 44, 0.4)",
										color: "white",
										borderRadius: "8px",
										boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
										backdropFilter: "blur(10px)",
										WebkitBackdropFilter: "blur(10px)",
										border: "1px solid rgba(255, 255, 255, 0.2)",
										"&:hover": {
											backgroundColor: "rgba(44, 44, 44, 0.6)",
										},
										"&.Mui-focused": {
											backgroundColor: "rgba(44, 44, 44, 0.6)",
											border: "2px solid white",
											boxShadow: "0 0 5px rgba(255, 255, 255, 0.5)",
											outline: "1px solid white",
										},
									},
									"& .MuiInputLabel-root": {
										color: "white", // White label text
									},
								}}
							/>
						</form>
					</div>

					<div className="flex sm:hidden">
						<MenuIcon onClick={handleOpen} />
					</div>
				</div>

				{/* Desktop Navigation */}
				<div className="sm:flex hidden">
					<ul className="flex justify-end space-x-6 w-full text-white font-bold px-6 py-4">
						{navItems.map((item) => (
							<li
								key={item.label}
								className="cursor-pointer hover:text-gray-300"
							>
								<NavLink to={item.path} style={getActiveLink}>
									{item.label}
								</NavLink>
							</li>
						))}
					</ul>
				</div>

				{/* Sidebar Mobile Menu */}
				<div ref={menuRef} className={`bar`}>
					<ul>
						{navItems.map((item) => (
							<li
								key={item.label}
								className="cursor-pointer hover:text-gray-300"
							>
								<NavLink
									to={item.path}
									onClick={handleOpen}
									style={getActiveLink}
								>
									{item.label}
								</NavLink>
							</li>
						))}
					</ul>
				</div>

				{/* Background Overlay */}
				<div ref={overlayRef} className="opacity" onClick={handleOpen}></div>
			</nav>
		</>
	);
};

export default Header;
