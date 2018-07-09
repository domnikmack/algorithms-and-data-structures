function shiftString(string, key) {
  let arrOfShiftedStr = [];
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < string.length; i++) {
    let currentChar = string[i];
    let newChar = getNewChar(currentChar, key, alphabet);
    arrOfShiftedStr.push(newChar);
  }
  return arrOfShiftedStr.join('');
}

function getNewChar(char, key, alphabet) {
  let currentAlphaIdx = alphabet.indexOf(char);
  let newAlphaIdx = (currentAlphaIdx + key) % 26;
  return alphabet[newAlphaIdx];
}

function shiftStringUnicode(string, key) {
  let arrOfShiftedStr = [];
  for (let i = 0; i < string.length; i++) {
    let currentChar = string[i];
    let newChar = getNewCharUni(currentChar, key);
    arrOfShiftedStr.push(newChar);
  }
  return arrOfShiftedStr.join('');
}

function getNewCharUni(char, key) {
  let currentCharCode = char.charCodeAt(0);
  let newCharCode = ((currentCharCode + key - 97) % 26) + 97;
  return String.fromCharCode(newCharCode);
}
