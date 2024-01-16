const numbers = [1, 2, 3, 5, 45, 37, 58];

const sumAll = (param) => {
  let sum = 0;
  for (const number of numbers) {
    sum += number;
  }
  return sum;
};

const resultIteration3 = sumAll(numbers);
console.log(`Resultado de la iteración 3: ${resultIteration3}`);
