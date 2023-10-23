// Define a function to reverse a string
function reverseString(str) {
  // initialize an empty string to store the reversed string
  let reversed = "";
  // use a for loop to iterate from the end of the string to the beginning
  for (let i = str.length - 1; i >= 0; i--) {
    // append each character to the reversed string
    reversed += str[i];
  }
  // return the reversed string
  return reversed;
}

// Get the input, button and output elements
var input = document.getElementById("input");
var button = document.getElementById("button");
var output = document.getElementById("output");

// Add a click event listener to the button
button.addEventListener("click", function() {
    // Get the value of the input
    var str = input.value;

    // Reverse the string using the built-in split, reverse and join methods
    var reversedStr = reverseString(str);

    // Display the reversed string in the output element
    output.textContent = reversedStr;
});


// Define a function that checks if a number is a palindrome
function checkPalindrome(num) {
  // Convert the number to a string
  var numStr = num.toString();

  // Reverse the string using the built-in split, reverse and join methods
  var reversedStr = reverseString(numStr);

  // Compare the original string with the reversed string
  return numStr === reversedStr;
}

// Get the input, button and output elements
var numInput = document.getElementById("num");
var checkButton = document.getElementById("check");
var output1 = document.getElementById("output1");

// Add a click event listener to the button
checkButton.addEventListener("click", function() {
  // Get the value of the input
  var num = numInput.value;

  // Check if the input is a valid number
  if (isNaN(num)) {
    output1.textContent = "Please enter a valid number";
    return;
  }

  // Check if the number is a palindrome using a function
  var isPalindrome = checkPalindrome(num);

  // Display the result in the output element
  if (isPalindrome) {
    output1.textContent = num + " is a palindrome";
    output1.style.color = "green";
  } else {
    output1.textContent = num + " is not a palindrome";
    output1.style.color = "red";
  }
});


// Get the input, button and output elements
var st = document.getElementById("subtotal");
var tipP = document.getElementById("tip");
var calculateButton = document.getElementById("calculate");
var output2 = document.getElementById("output2");

calculateButton.addEventListener("click", function () {

    //Get the value of inputs as numbers
    var subTotal = Number(st.value);
    var tipPercent = Number(tipP.value);

    // Calculate the tip as the given % of the subtotal
    var tip = tipPercent/100 * subTotal;
    var total = subTotal + tip;

    //Display the result in output element
    output2.textContent = total;
})
