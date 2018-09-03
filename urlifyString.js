//create a function that removes white spaces from a string and replaces them with the URL encoded value of %20

function urlifyString1(inputString, charToSwap, valueToSwap) {
  const inputValues = [];
  let lastSlice = 0;

  for (let charIndex = 0; charIndex < inputString.length + 1; charIndex++) {
    const char = inputString[charIndex];
    if (char === charToSwap || charIndex === inputString.length) {
      inputValues.push(inputString.slice(lastSlice, charIndex));
      lastSlice = charIndex + 1;
    }
  }

  const output = [];
  for (let swapIndex = 0; swapIndex < inputValues.length; swapIndex++) {
    const swapGroup = inputValues[swapIndex];
    output.push(swapGroup.join(""));

    if (swapIndex !== inputValues.length - 1) {
      output.push(valueToSwap);
    }
  }

  return output.join("");
}

//faster and removes extra white spaces at end
function urlifyString2(inputString, charToSwap, valueToSwap) {
  let outputString = "";
  let lastChar = "";

  for (let charIndex = 0; charIndex < inputString.length; charIndex++) {
    const char = inputString[charIndex];
    if (char !== charToSwap) {
      outputString += char;
      //remove extra white spaces
    } else if (lastChar !== charToSwap) {
      outputString += valueToSwap;
    }
    lastChar = char;
  }

  //remove last white space
  const lastChars = outputString.slice(-3);
  debugger;
  if (lastChars === valueToSwap) {
    outputString = outputString.slice(0, -3);
  }

  return outputString;
}

window.onload = e =>
  console.log(urlifyString2("Oh wow Look a String   ".split(""), " ", "%20"));
