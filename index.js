function reverseString() {
  var userInput = prompt("Please enter a string: ");
  var reverseUserInput = userInput.split("").reverse.join("");
  alert("Your string, " + userInput + ", reversed is: " + reverseUserInput);
};

reverseString();
