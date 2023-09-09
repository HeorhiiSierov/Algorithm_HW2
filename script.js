function generateNumber(n) {
  let sequence = [];
  let currentValue = 2;

  for (let i = 0; i < n; i++) {
    sequence.push(currentValue);
    sequence.push(0);
    currentValue = currentValue / (2 * i + 3);
  }

  return sequence;
}

const n = 8;
const result = generateSequence(n);

console.log(result);
