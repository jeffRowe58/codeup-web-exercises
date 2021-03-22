"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

//function analyzeColor(x){
//    if(x === "blue") {
//        return x + " is my favorite color."
//    }else if (x === "red") {
//        return x + " colored sports cars get pulled over the most."
//    }else if(x === "green") {
//        return x + " is the color of the almighty dollar."
//    }else {
//        return x + ", is that really even a color?"
 //   }
//}
//console.log(analyzeColor("blue"))
//console.log(analyzeColor("red"))
//console.log(analyzeColor("green"))
//console.log(analyzeColor("yellow"))

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
// function analyzeColor(x){
//     if(x === "blue") {
//         return x + " is my favorite color."
//     }else if (x === "red") {
//         return x + " colored sports cars get pulled over the most."
//     }else if(x === "green") {
//         return x + " is the color of the almighty dollar."
//     }else {
//         return x + ", is that really even a color?"
//     }
// }
// console.log(analyzeColor(randomColor));
/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
// switch(randomColor) {
//     case "blue":
//         console.log(randomColor + " is alright I guess");
//         break;
//     case "green":
//         console.log(randomColor + " still reminds me of money.");
//         break;
//     case "yellow":
//         console.log("What there is a " + randomColor  + " bird is the house?");
//         break;
//     default:
//         console.log(randomColor + " is boring!");
//         break;
// };
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
// var userIn = prompt("What's your favorite color?").toLowerCase();
//
// function analyzeColor(x){
//     if(x === "blue") {
//         return alert(x + " is my favorite color.");
//     }else if (x === "red") {
//        return alert(x + " colored sports cars get pulled over the most.")
//     }else if(x === "green") {
//        return alert(x + " is the color of the almighty dollar.")
//     }else {
//        return alert(x + ", is that really even a color?")
//     }
// }
// analyzeColor(userIn)
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

// function calculateTotal(q,b) {
//     if (q === 0) {
//         return b - (b * 0);
//     } else if (q === 1) {
//         return b - (b * .10);
//     } else if (q === 2) {
//         return b - (b * .25);
//     } else if (q === 3) {
//         return b - (b * .35);
//     } else if (q === 4) {
//         return b - (b * .50);
//     } else if (q === 5) {
//         return b - (b * 1);
//     } else {
//         return "No numbers"
//     }
// }
//
// console.log(calculateTotal(2,50));



/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
//  var luckyNumber = Math.floor(Math.random() * 6);
//  var tBill = parseFloat(prompt("How much was your total bill?"));
// function calculateTotal(q,b) {
//     if (q === 0) {
//         return b - (b * 0);
//     } else if (q === 1) {
//         return b - (b * .10);
//     } else if (q === 2) {
//         return b - (b * .25);
//     } else if (q === 3) {
//         return b - (b * .35);
//     } else if (q === 4) {
//         return b - (b * .50);
//     } else if (q === 5) {
//         return b - (b * 1);
//     } else {
//         return "No numbers"
//     }
// }
//
// alert("Your total bill today was: $" + tBill + ". Your Lucky Number today was: " + luckyNumber + ". Congratulations your new total is $" + calculateTotal(luckyNumber,tBill).toFixed(2) + "!")

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
        var userChoice = confirm("Would you like to enter a number today?");
        if (userChoice === true) {
            var num = parseFloat(prompt("Enter a number please."))
            while (isNaN(num) === true){
                num = parseFloat(prompt("Please enter a number?"))
            }
            if (isNaN(num) === false) {
             if (num % 2 === 0) {
                 alert("Your number: " + num + " is Even.");
             } else {
                 alert("Your number: " + num + " is Odd.");
             }
             if (num >= 0) {
                 alert("Your number: " + num + " is a Positive Number.");
             } else {
                 alert("Your number: " + num + " is a Negative Number. :( ");
             }
                 alert("Your number: " + num + " + 100 = " + (num + 100));
         }else {
             alert("That isn't a number. Try again.")
         }

        }else {
            alert("You're a boring person!")
}


