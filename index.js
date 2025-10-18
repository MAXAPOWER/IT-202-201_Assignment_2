function reverseString() {
  var userInput = prompt("Please enter a string: ");
  var reverseUserInput = userInput.split("").reverse().join("");
  alert("Your string, " + userInput + ", reversed is: " + reverseUserInput);
  document.getElementById("reverseString");
};

reverseString();

function testPalindrome() {
  var userInput = prompt("Please enter a 3-digit number: ");
  var testUserInput = userInput.split("").reverse().join("");
  if (userInput === testUserInput && userInput.length === 3) {
    alert("Your number, " + userInput + ", is a palindrome!");
    document.getElementById("testPalindrome");
  } else {
    alert("Your number, " + userInput + ", is not a palindrome.");
    document.getElementById("testPalindrome");
  };
};

testPalindrome();

function calculateTip() {
  var subtotal = prompt("Please enter the subtotal of the bill: $");
  var subtotalFloat = parseFloat(subtotal);
  var percentTip = prompt("Please enter the percentage of tip you would like to give: ");
  var percentTipFloat = parseFloat(percentTip);
  var calculatedTip = subtotalFloat * (percentTipFloat / 100);
  var grandTotal = subtotalFloat + calculatedTip;
  alert("With a subtotal of $" + subtotalFloat + " and your desired tip percentage of " + percentTipFloat + "%, your calculated tip is $" + calculatedTip + " with a grand total of $" + grandTotal);
  document.getElementById("calculateTip");
};

calculateTip();
