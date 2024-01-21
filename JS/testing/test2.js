const users = [
	{ id: 1, name: "Abel" },
	{ id: 2, name: "Julia" },
	{ id: 3, name: "Pedro" },
	{ id: 4, name: "Amanda" },
];

const modifiedUsers = [];

for (const user of users) {
	if (user.name.includes("A")) {
		modifiedUsers.push({
			...user,
			name: user.name.replace(user.name, "Anacleto"),
		});
	} else {
		modifiedUsers.push(user);
	}
}

console.log("Modified Users:", modifiedUsers);
