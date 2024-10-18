import React from "react";
import "./Contact.modular.scss";
import Button from "@mui/material/Button";
import { Form } from "react-router-dom";
export const contactData = async ({request}:{request:any})=>{
	try {
		const response = await request.formData();
		const data = Object.fromEntries(response);
		console.log(data);
		return response;
	} catch (error) {
		console.log((error as Error).message);
		
	}
}
const Contact: React.FC = () => {

	return (
		<>
			<h1 className={`text-white font-semibold text-3xl text-center underline`}>
				Contact US
			</h1>
			<p className={`text-center text-white  `}>
				get touch with us . We are always here to help you{" "}
			</p>
			<div className={`outlined w-full h-[100vh] flex items-center px-8 `}>
				<Form
					method={`POST`}
					action="/contact"
					className={`outlined flex flex-col items-start w-full h-[80%] justify-between`}
				>
					<label htmlFor="username" style={{ color: "whitesmoke",fontSize:"1.2rem" }}>
						Username
					</label>
					<input
						className={`outlined rounded-md px-2  h-10 w-96 `}
						type="text"
						id="username"
						name="username"
						required
						placeholder="Username"
					/>
					<label htmlFor="password" style={{ color: "whitesmoke",fontSize:"1.2rem" }}>
						Password
					</label>
					<input
						className={`outlined rounded-md px-2  h-10 w-96`}
						type="password"
						id="password"
						name="password"
						required
						placeholder="Password"
					/>
					<label htmlFor="email" style={{ color: "whitesmoke",fontSize:"1.2rem" }}>
						E- mail
					</label>
					<input
						className={`outlined rounded-md px-2  h-10 w-96`}
						type="email"
						id="email"
						name="email"
						required
						placeholder="E-mail"
					/>
					<label htmlFor="message" style={{ color: "whitesmoke",fontSize:"1.2rem" }}>
						{" "}
						Message
					</label>
					<textarea
						className={`outlined resize-none rounded-lg px-2 w-[80vw] h-[50vh] sm:w-[50vw] sm:h-[20vh] `}
						name="message"
						placeholder="Message"
					></textarea>
					<Button
						variant={`contained`}
						sx={{ margin: `5px`, color: "black", background: "white" }}
						className={`outlined text-black`}
						type="submit"
					>
						Submit
					</Button>
				</Form>
			</div>
		</>
	);
};
export default Contact;
