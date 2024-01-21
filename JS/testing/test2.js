const cities = [
	{ isVisited: true, name: "Tokyo" },
	{ isVisited: false, name: "Madagascar" },
	{ isVisited: true, name: "Amsterdam" },
	{ isVisited: false, name: "Seul" },
];

const modifiedCities = cities.map((city) => {
	// check if property isVisited is true
	if (city.isVisited == true)
		// return a copy of the object with updated name
		return {
			...city,
			name: `${city.name} visited`,
		};
});
console.log("🚀 ~ modifiedCities ~ modifiedCities:", modifiedCities);
