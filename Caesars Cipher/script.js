/*
Caesars Cipher

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/

function rot13(str) {
  let encodedArr = [];
  for (let i = 0; i < str.length; i++) {
    encodedArr.push(str[i].charCodeAt(0));
  }
  let decodedArr = encodedArr.map((ch) => {
    if ((ch >= 65 && ch <= 77) || (ch >= 97 && ch <= 109)) return ch + 13;
    else if ((ch >= 78 && ch <= 90) || (ch >= 110 && ch <= 122)) return ch - 13;
    else return ch;
  });

  return String.fromCharCode(...decodedArr);
}
