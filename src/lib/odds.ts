const lines = 16
const slots = lines + 1
const multipliers = [
  110, 41, 10, 5, 3, 1.5, 1, 0.5, 0.3, 0.5, 1, 1.5, 3, 5, 10, 41, 110
]

// Calculate the binomial coefficients
const binomialCoefficients = (n: number, k: number): number => {
  if (k === 0 || k === n) return 1
  return binomialCoefficients(n - 1, k - 1) + binomialCoefficients(n - 1, k)
}

// Calculate the probabilities for each slot
const probabilities = Array(slots)
  .fill(0)
  .map((_, i) => binomialCoefficients(lines, i) / 2 ** lines)

// Calculate the expected value
const expectedValue = multipliers.reduce(
  (acc, multiplier, i) => acc + multiplier * probabilities[i],
  0
)

console.log('Probabilities:', probabilities)
console.log('Expected Value:', expectedValue)
