/**
 * Transforms roman number into summable representation.
 * Valid for numbers from I to MMMCMXCIX.
 * 
 * @param {string} roman - Roman number representation.
 * @return {string} The equivalent representation using roman characters.
 */
function romanToSummable(roman) {
  let withoutPriorI = roman.replace("IV", "IIII").replace("IX", "VIIII");

  let withoutPriorX = withoutPriorI
    .replace("XL", "XXXX")
    .replace("XC", "LXXXX");

  let withoutPriorC = withoutPriorX
    .replace("CD", "CCCC")
    .replace("CM", "DCCCC");

  return withoutPriorC;
}

/**
 * Transform roman number into decimal number.
 * Valid for numbers from I to MMMCMXCIX.
 * 
 * @param {string} roman - Roman number representation.
 * @return {number} The equivalent decimal number representation.
 */
function romanToDecimal(roman) {
  const translations = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
  };

  let decimal = 0;
  let summableRoman = romanToSummable(roman);

  for (let i = 0; i < summableRoman.length; i++) {
    decimal += translations[summableRoman[i]];
  }

  return decimal;
}

export {
  romanToDecimal,
  romanToSummable
};