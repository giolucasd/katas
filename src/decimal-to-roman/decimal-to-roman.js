/**
 * Transform decimal number into roman number.
 * Valid for numbers from 0 to 3999.
 * 
 * @param {number} decimal - Decimal number representation.
 * @return {string} The equivalent roman number representation.
 */
function decimalToRoman(decimal) {
  const translations = new Map([
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"]
  ]);

  let roman = "";

  for (const [divisor, symbol] of translations) {
    let multiplier = Math.floor(decimal / divisor);

    roman += symbol.repeat(multiplier);
    decimal %= divisor;
  }

  return roman;
}

export {
  decimalToRoman
};