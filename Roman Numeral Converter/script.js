/*
Roman Numeral Converter

Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.
*/

function convertToRoman(num) {
  let result = "";
  const romanNumerals = [
    { numeral: "M", value: 1000 },
    { numeral: "CM", value: 900 },
    { numeral: "D", value: 500 },
    { numeral: "CD", value: 400 },
    { numeral: "C", value: 100 },
    { numeral: "XC", value: 90 },
    { numeral: "L", value: 50 },
    { numeral: "XL", value: 40 },
    { numeral: "X", value: 10 },
    { numeral: "IX", value: 9 },
    { numeral: "V", value: 5 },
    { numeral: "IV", value: 4 },
    { numeral: "I", value: 1 },
  ];

  for (let i = 0; i < romanNumerals.length; i++) {
    while (num >= romanNumerals[i].value) {
      num -= romanNumerals[i].value;
      result += romanNumerals[i].numeral;
    }
  }

  return result;
}
