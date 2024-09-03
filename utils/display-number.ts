export default function displayNumber(num: number): string {
  if (isNaN(num)) return 'NaN';
  if (!isFinite(num)) return num > 0 ? 'Infinity' : '-Infinity';
  const absNum = Math.abs(num);

  const SCIENTIFIC_LIMIT = 1e6; // 1,000,000
  const SMALL_LIMIT = 1e-6;     // 0.000001
  const MAX_DIGITS = 10;        // Maximum significant digits allowed

  if (absNum >= SCIENTIFIC_LIMIT || absNum > 0 && absNum < SMALL_LIMIT) {
    return num.toExponential(5); // Use 5 significant figures in scientific notation
  }
  let numStr = num.toString();
  if (numStr.includes('.') && numStr.length > MAX_DIGITS) {
    const [integerPart, fractionalPart] = numStr.split('.');
    let totalDigits = integerPart.length + fractionalPart.length;
    if (totalDigits > MAX_DIGITS) {
      const digitsToKeep = MAX_DIGITS - integerPart.length;
      numStr = num.toFixed(digitsToKeep);
    }
  }
  if (num % 1 === 0) {
    return num.toFixed(0);
  }
  return numStr;
}