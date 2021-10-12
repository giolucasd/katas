import {
  romanToDecimal,
  romanToSummable
} from './roman-to-decimal.js';

describe('romanToSummable', () => {
  test('should replace IV with IIII', () => {
    expect(romanToSummable("dirtIVdirt")).toBe("dirtIIIIdirt");
  });

  test('should replace IX with VIIII', () => {
    expect(romanToSummable("dirtIXdirt")).toBe("dirtVIIIIdirt");
  });

  test('should replace XL with XXXX', () => {
    expect(romanToSummable("dirtXLdirt")).toBe("dirtXXXXdirt");
  });

  test('should replace XC with LXXXX', () => {
    expect(romanToSummable("dirtXCdirt")).toBe("dirtLXXXXdirt");
  });

  test('should replace CD with CCCC', () => {
    expect(romanToSummable("dirtCDdirt")).toBe("dirtCCCCdirt");
  });

  test('should replace CM with DCCCC', () => {
    expect(romanToSummable("dirtCMdirt")).toBe("dirtDCCCCdirt");
  });
})

describe('romanToDecimal', () => {
  test('should convert romans from I to V to decimal representation', () => {
    const examples = {
      "I": 1,
      "II": 2,
      "III": 3,
      "IV": 4,
      "V": 5
    }
    for (const [roman, decimal] of Object.entries(examples)) {
      expect(romanToDecimal(roman)).toBe(decimal);
    }
  });

  test('should convert romans from V to X to decimal representation', () => {
    const examples = {
      "VI": 6,
      "IX": 9,
      "X": 10
    }
    for (const [roman, decimal] of Object.entries(examples)) {
      expect(romanToDecimal(roman)).toBe(decimal);
    }
  });

  test('should convert romans from X to L to decimal representation', () => {
    const examples = {
      "XX": 20,
      "XL": 40,
      "L": 50
    }
    for (const [roman, decimal] of Object.entries(examples)) {
      expect(romanToDecimal(roman)).toBe(decimal);
    }
  });

  test('should convert romans from L to C to decimal representation', () => {
    const examples = {
      "LX": 60,
      "XC": 90,
      "C": 100
    }
    for (const [roman, decimal] of Object.entries(examples)) {
      expect(romanToDecimal(roman)).toBe(decimal);
    }
  });

  test('should convert romans from C to D to decimal representation', () => {
    const examples = {
      "CC": 200,
      "CD": 400,
      "D": 500
    }
    for (const [roman, decimal] of Object.entries(examples)) {
      expect(romanToDecimal(roman)).toBe(decimal);
    }
  });

  test('should convert romans from D to M to decimal representation', () => {
    const examples = {
      "DC": 600,
      "CM": 900,
      "M": 1000
    }
    for (const [roman, decimal] of Object.entries(examples)) {
      expect(romanToDecimal(roman)).toBe(decimal);
    }
  });

  test('should convert romans from M to MMMCMXCIX to decimal representation', () => {
    const examples = {
      "MM": 2000,
      "MMMCMXCIX": 3999
    }
    for (const [roman, decimal] of Object.entries(examples)) {
      expect(romanToDecimal(roman)).toBe(decimal);
    }
  });
})