function reverseString() {
  var userInput = prompt("Please enter a string: ");
  var reverseUserInput = userInput.split("").reverse().join("");
  alert("Your string, " + userInput + ", reversed is: " + reverseUserInput);
};

reverseString();

function testPalindrome() {
  var userInput = prompt("Please enter a 3-digit number: ");
  var testUserInput = userInput.split("").reverse().join("");
  if (userInput === testUserInput && userInput.length === 3) {
    alert("Your number, " + userInput + ", is a palindrome!");
  } else {
    alert("Your number, " + userInput + ", is not a palindrome.");
  };
};

testPalindrome();

