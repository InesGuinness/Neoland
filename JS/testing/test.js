const exams = [
	{ name: "Yuyu Cabeza Crack", score: 5 },
	{ name: "Maria Aranda Jimenez", score: 1 },
	{ name: "Cristóbal Martínez Lorenzo", score: 6 },
	{ name: "Mercedez Regrera Brito", score: 7 },
	{ name: "Pamela Anderson", score: 3 },
	{ name: "Enrique Perez Lijó", score: 6 },
	{ name: "Pedro Benitez Pacheco", score: 8 },
	{ name: "Ayumi Hamasaki", score: 4 },
	{ name: "Robert Kiyosaki", score: 2 },
	{ name: "Keanu Reeves", score: 10 },
];

const averageScore = exams.reduce(
	(accumulator, exam) => accumulator + exam.score / 10,
	0
);
console.log("🚀 ~ averageScore:", averageScore);
