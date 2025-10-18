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

function calculateTip() {
  var subtotal = prompt("Please enter the subtotal of the bill: $");
  var percentTip = prompt("Please enter the percentage of tip you would like to give: $");
  var calculatedTip = subtotal * (percentTip / 100);
  var grandTotal = subtotal + calculatedTip;
  alert("With a subtotal of $" + subtotal + " and your desired tip percentage of " + percentTip + "%, your calculated tip is $" + calculatedTip + " with a grand total of $" + grandTotal);
};

calculateTip();
