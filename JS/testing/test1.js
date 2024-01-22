const numbers = [1, 2, 3, 5, 45, 37, 58];

const sumAll = numbers.reduce(
	(accumulator, currentvalue) => accumulator + currentvalue
);
console.log("🚀 ~ sumAll:", sumAll);
