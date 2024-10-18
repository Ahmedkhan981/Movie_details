import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./SwiperSlider.scss";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { Autoplay, Navigation } from "swiper/modules";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";

const SwiperSlider: React.FC = () => {
	return (
		<>
			<Swiper
				slidesPerView={1}
				spaceBetween={0}
				loop={true}
				navigation={{
					nextEl: ".custom-next", // Custom next button class
					prevEl: ".custom-prev", // Custom prev button class
				}}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				modules={[Navigation, Autoplay]}
				className="mySwiper"
				speed={600}
				style={{
					transition: "transform 0.3s ease-in-out",
					height: "100vh",
					width: "100%",
				}}
			>
				{[
					{
						id: "tt4154756",
						img: "https://i0.wp.com/highschool.latimes.com/wp-content/uploads/2018/06/share-1.jpg?fit=1200%2C630&ssl=1",
					},
					{
						id: "tt5090568",
						img: "https://thefutureoftheforce.com/wp-content/uploads/2023/04/Roll-Out-The-Transformers-Rise-of-the-Beasts-Global-Tour-Kicks-Off.jpg",
					},
					{
						id: "tt5884052",
						img: "https://i0.wp.com/cyberpunkmatrix.com/wp-content/uploads/2019/06/pokemon-detective-pikachu.jpg?resize=0%2C199&ssl=1",
					},
					{
						id: "tt1630029",
						img: "https://amitabasu.com/wp-content/uploads/2022/12/way-of-water.jpeg?w=1500",
					},
					{
						id: "tt2975590",
						img: "https://wallpapers.com/images/hd/batman-v-superman-dawn-of-justice-dark-poster-issdeg7i8rlg1h5r.jpg",
					},
				].map((slide) => (
					<SwiperSlide key={slide.id} className="bg-slate-300 text-black">
						<NavLink to={`/movie/${slide.id}`}>
							<img
								className="Sliderimage"
								src={slide.img}
								alt={`slide ${slide.id}`}
							/>
						</NavLink>
					</SwiperSlide>
				))}

				<Button
					variant="text"
					sx={{
						position: "absolute",
						top: "50%",
						left: "3vw",
						transform: "translateY(-50%)",
						zIndex: 10,
						backgroundColor: "transparent",
						color: "#fff",
						display: { xs: "none", sm: "block", md: "block" },
						"&:hover": {
							backgroundColor: "rgba(0, 0, 0, 0.5)",
						},
					}}
					className="custom-prev"
				>
					<ArrowBackIosRoundedIcon fontSize="large" />
				</Button>

				<Button
					variant="text"
					sx={{
						position: "absolute",
						top: "50%",
						right: "3vw",
						transform: "translateY(-50%)",
						zIndex: 10,
						backgroundColor: "transparent",
						color: "#fff",
						display: { xs: "none", sm: "block", md: "block" },
						"&:hover": {
							backgroundColor: "rgba(0, 0, 0, 0.8)",
						},
					}}
					className="custom-next"
				>
					<ArrowForwardIosRoundedIcon fontSize="large" />
				</Button>
			</Swiper>
		</>
	);
};

export default SwiperSlider;
