import axios from "axios";

export const apiData = async (url) => {
	var completeUrl = "http://localhost:8080/api/" + url;
	const getData = await axios.get(completeUrl);
	return getData;
};
