/**
 * You can assume that `n` is an integer.
 * @param {number} n
 * @returns {number} the sum of all integers from 1 to n, inclusive
 * @returns `0` if n is 0 or negative
 */
export function sumToN(n) {
  if (typeof n !== "number") return NaN;

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

/**
 * @param {number} n
 * @returns {number} the product of all integers from 1 to n, inclusive
 * @returns `NaN` if n is not a number
 * @returns `undefined` if n is negative
 * @returns `1` if n is 0
 */
export function factorial(n) {
  if (typeof n !== "number") return NaN;
  if (n < 0) return undefined;
  if (n === 0) return 1;
  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }
  return factorial;
  // TODO
}

/**
 * @param {number} n
 * @returns {number[]} an array of integers from 1 to n, inclusive
 * @returns `null` if n is not a number
 * @returns `[]` if n is 0 or negative
 */
export function buildNArray(n) {
  if (typeof n !== "number") return null;
  if (n <= 0) return [];
  const result = [];
  for (let i = 1; i <= n; i++) {
    result.push(i);
  }
  return result;
  // TODO
}

/**
 * @param {string[]} strings
 * @returns {string} the longest string in `strings`
 */
export function getLongestString(strings) {
  let max = "";
  for (const string of strings) {
    if (string.length > max.length) {
      max = string;
    }
  }
  return max;
}
// TODO

/**
 * @param {boolean[]} attendance - `true` means a student is present, `false` means a student is absent
 * @returns {number} the number of students present
 */
export function countPresent(attendance) {
  let number = 0;
  for (const s of attendance) {
    if (s === true) {
      number += 1;
    }
    if (s === false) {
      number += 0;
    }
  }
  return number;
  // TODO
}

/**
 * In DNA strings, the symbols `A` and `T` are complements of each other,
 * and the symbols `C` and `G` are complements of each other.
 * A complementary strand is a string formed by the complement
 * of each nucleobase in the original string.
 *
 * @param {string} dna - a string of the symbols `A`, `T`, `C`, or `G`
 * @returns {string} the complementary DNA strand
 * @returns `null` if `dna` is not a string
 */
export function complementDNA(dna) {
  if (typeof dna !== "string") return null;
  let complementAT = "";
  let complementCG = "";
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === "A") {
      complementAT = complementAT + "T";
    }
    if (dna[i] === "T") {
      complementAT = complementAT + "A";
    }
    if (dna[i] === "C") {
      complementCG = complementCG + "G";
    }
    if (dna[i] === "G") {
      complementCG = complementCG + "C";
    }
  }
  return complementAT + complementCG;
}
// TODO
