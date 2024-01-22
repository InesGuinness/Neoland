const pilots = [
	{ id: 10, name: "Poe Dameron", years: 14 },
	{ id: 2, name: "Temmin 'Snap' Wexley", years: 30 },
	{ id: 41, name: "Tallissan Lintra", years: 16 },
	{ id: 99, name: "Ello Asty", years: 22 },
];

const mostExpPilot = pilots.reduce((oldest, pilot) => {
	//  checking if the oldest object has a years property. If it does, it uses that value; otherwise, it defaults to 0.
	// followed by, compares the years of the current oldest pilot with the years of the current pilot.
	return (oldest.years || 0) > pilot.years ? oldest : pilot;
}, {});
console.log("🚀 ~ mostExpPilot ~ mostExpPilot:", mostExpPilot);
