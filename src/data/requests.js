import axios from "axios";
import parsers from "./parsers";

async function usStats() {
	const request = await axios.get("https://api.covidtracking.com/v1/us/current.json");
	return parsers.usStats(request.data)
}

export default {
	usStats
};