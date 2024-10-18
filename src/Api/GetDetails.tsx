interface Params {
	movieID?: string;
}

const GetDetails = async <T extends Params>({ params }: { params: T }) => {
	const { movieID } = params
	try {
		const response = await fetch(
			`https://www.omdbapi.com/?i=${movieID}&apikey=485e76ec`,
		);
		const data = await response.json();
		return data;
	} catch (error) {;
		return null;
	}
};

export default GetDetails;
