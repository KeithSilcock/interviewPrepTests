//accepts two strings. determine if one is contained in a permutation of the other.

function permutationDetector(string1, string2) {
  //smaller string
  let keyString = "";
  //larger string
  let permuationString = "";
  //compare lengths and find smallest
  if (string1.length >= string2.length) {
    keyString = string2;
    permuationString = string1;
  } else {
    keyString = string1;
    permuationString = string2;
  }

  const keyTable = {};
  for (let letterIndex in keyString) {
    keyTable[keyString[letterIndex]] = 1;
  }

  let countIndex = 0;
  //maybe -keyString.length                 vv
  while (countIndex < permuationString.length) {
    //slice out size of keystring and compare with hashtable
    const permSlice = permuationString.slice(
      countIndex,
      keyString.length + countIndex
    );
    for (let permIndex = 0; permIndex < permSlice.length; permIndex++) {
      if (!keyTable[permSlice[permIndex]]) {
        countIndex += permIndex + 1;
        break;
      }
      if (permIndex + 1 >= keyString.length) {
        return true;
      }
    }
  }
  return false;
}

const string1 = "abecwerabedasdfabc";
const string2 = "abr";
window.onload = e => console.log(permutationDetector(string1, string2));
