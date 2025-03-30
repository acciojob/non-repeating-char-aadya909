function firstNonRepeatedChar(text) {
  const charCount = {};
  
  for (const char of text) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  
  for (const char of text) {
    if (charCount[char] === 1) {
      return char;
    }
  }
  
  return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));
