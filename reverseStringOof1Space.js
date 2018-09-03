// create a function that can reverse a string with O(1) space
// because javascript doesn't allow for string manipulation, I will be passing an array.
function reverseString(inputString) {
  for (
    let charIndex = 0;
    charIndex !== Math.floor(inputString.length / 2);
    charIndex++
  ) {
    const temp = inputString[charIndex];
    inputString[charIndex] = inputString[inputString.length - 1 - charIndex];
    inputString[inputString.length - 1 - charIndex] = temp;
  }

  return inputString;
}

//currently runs O(n) speed and O(1) space
// I am aware the split below takes up a space of O(n) but i am unaware of anyway
//that I can manipulate the data stored in the lower level array that is a string in javascript

window.onload = e => console.log(reverseString("123456789".split("")));
