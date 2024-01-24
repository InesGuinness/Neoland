const streamers = [
	{ name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
	{ name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
	{ name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
	{ name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

// streamers.js

const toFilterStreamers = (streamers, text) => {
	return streamers.filter((streamer) =>
		streamer.name.toLowerCase().includes(text.toLowerCase())
	);
};

// Other functions or code

document.addEventListener("DOMContentLoaded", function () {
	const filterInput = document.getElementById("filterInput");
	const filteredResultsElement = document.getElementById("filteredResults");

	filterInput.addEventListener("input", function () {
		const filterText = this.value.trim();
		const filteredStreamers = toFilterStreamers(streamers, filterText);

		// Clear previous content
		filteredResultsElement.innerHTML = "";

		filteredStreamers.forEach((streamer) => {
			const li = document.createElement("li");
			li.textContent = `Name: ${streamer.name}, Age: ${streamer.age}, Game: ${streamer.gameMorePlayed}`;
			filteredResultsElement.appendChild(li);
		});
	});

	// Add other event listeners or functions as needed
});
