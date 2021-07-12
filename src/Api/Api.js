import axios from "axios";

export const apiData = async (url) => {
	try{
	var completeUrl = "http://localhost:8080/api/" + url;
	const getData = await axios.get(completeUrl);
	return getData;
	}catch(error){
		console.log("server error")
	}
};

export const apiDataPost = async (url, data) => {
	try{
	var completeUrl = "http://localhost:8080/api/" + url;
	const getData = await axios.post(completeUrl, data);
	return getData;
	}catch(error){
		console.log("error",error)
		console.log("server error")
	}
};
