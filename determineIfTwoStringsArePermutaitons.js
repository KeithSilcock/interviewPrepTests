//check if two strings are permutations of each other
//blank spaces are not characters
//capitals are not checked

function checkIfStringIsPermutaitonOfOther(string1, string2) {
  //store both strings in hashtable with counts of each letter
  const hash1 = {};
  const hash2 = {};
  for (let letterIndex = 0; letterIndex < string1.length; letterIndex++) {
    const letter = string1[letterIndex];
    if (hash1[letter]) {
      hash1[letter] += 1;
    } else {
      hash1[letter] = 1;
    }
  }

  for (let letterIndex = 0; letterIndex < string2.length; letterIndex++) {
    const letter = string2[letterIndex];
    if (hash2[letter]) {
      hash2[letter] += 1;
    } else {
      hash2[letter] = 1;
    }
  }

  //verify both match
  for (let letter in hash1) {
    if (hash1[letter] !== hash2[letter]) {
      return false;
    }
  }
  return true;
}

const string1 = "abcdefghij";
const string2 = "jihgfedcbb";

window.onload = e =>
  console.log(checkIfStringIsPermutaitonOfOther(string1, string2));
