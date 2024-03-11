//task
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

//solutin

function pigIt(str) {
    return str
      .split(" ")
      .map(function (str) {
        if (isSpecialCharacter(str)) {
          return str;
        } else {
          return str.substring(1) + str[0] + "ay";
        }
      })
      .join(" ")
      .trim();
  }
  
  function isSpecialCharacter(str) {
    var specialCharacters = "!@#$%^&*()_+-=[]{}|;':\"<>,.?/\\";
    return specialCharacters.includes(str);
  }