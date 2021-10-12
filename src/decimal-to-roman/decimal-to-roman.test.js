import {
  decimalToRoman
} from './decimal-to-roman.js';

describe('decimalToRoman', () => {
  test('should convert decimals from 1 to 5 to romans representation', () => {
    const examples = {
      1: "I",
      2: "II",
      3: "III",
      4: "IV",
      5: "V"
    }
    for (const [decimal, roman] of Object.entries(examples)) {
      expect(decimalToRoman(decimal)).toBe(roman);
    }
  });

  test('should convert decimals from 5 to 10 to romans representation', () => {
    const examples = {
      6: "VI",
      9: "IX",
      10: "X"
    }
    for (const [decimal, roman] of Object.entries(examples)) {
      expect(decimalToRoman(decimal)).toBe(roman);
    }
  });

  test('should convert decimals from 10 to 50 to romans representation', () => {
    const examples = {
      20: "XX",
      40: "XL",
      50: "L"
    }
    for (const [decimal, roman] of Object.entries(examples)) {
      expect(decimalToRoman(decimal)).toBe(roman);
    }
  });

  test('should convert decimals from 50 to 100 to romans representation', () => {
    const examples = {
      60: "LX",
      90: "XC",
      100: "C"
    }
    for (const [decimal, roman] of Object.entries(examples)) {
      expect(decimalToRoman(decimal)).toBe(roman);
    }
  });

  test('should convert decimals from 100 to 500 to romans representation', () => {
    const examples = {
      200: "CC",
      400: "CD",
      500: "D"
    }
    for (const [decimal, roman] of Object.entries(examples)) {
      expect(decimalToRoman(decimal)).toBe(roman);
    }
  });

  test('should convert decimals from 500 to 1000 to romans representation', () => {
    const examples = {
      600: "DC",
      900: "CM",
      1000: "M"
    }
    for (const [decimal, roman] of Object.entries(examples)) {
      expect(decimalToRoman(decimal)).toBe(roman);
    }
  });

  test('should convert decimals from 1000 to 3999 to romans representation', () => {
    const examples = {
      2000: "MM",
      3999: "MMMCMXCIX"
    }
    for (const [decimal, roman] of Object.entries(examples)) {
      expect(decimalToRoman(decimal)).toBe(roman);
    }
  });

})