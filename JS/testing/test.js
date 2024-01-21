const streamers = [
	{ name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
	{ name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
	{ name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
	{ name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const filtersByLetterU = streamers.filter((streamer) => {
	// if (streamer.name.includes("u")) {
		return { ...streamer.name.includes("u") };
	}
});
console.log("🚀 ~ filtersByLetterU:", filtersByLetterU);
