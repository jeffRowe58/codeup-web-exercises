"use strict";
var bigRandom = [];
for(var i = 0; i <= 9; i++) {
    bigRandom.push((Math.ceil(Math.random() * (200-20) + 1)));
}
var random = Math.ceil(Math.random() * (12-1) + 1);

// function showMultiplicationTable
// function showMultiplicationTable(x) {
//     for(var i = 1; i <= 12; i++) {
//         console.log(x + " multiplied by " + i + " equals: " + i * x);
//     }
// }
// showMultiplicationTable(random);

// function isEvenRandom
function isEvenRandom (x) {
    for (var i = 0; i < x.length; i++) {
        if (x[i] % 2 === 0) {
            console.log(x[i] + " is a even number.");
        } else {
            console.log(x[i] + " is not a even number.");
        }
    }
}
    isEvenRandom(bigRandom);

// for loop pyramid

// Step 1) Designate variable and define a function with the parameters being the number you want to reach
var makePyramid = function(steps) {
    // Step 2) create a empty variable that will hold your pyramid
    var pyramid = '';
    // Step 3) Create first forLoop that will use the parameter as a break point
    for(var step = 1; step <= steps; step++) {
        // Step 4) Create an addtional forLoop so you can concat later using first forLoop count as break point
        for(var i = 1; i <= step; i++) {
            // Step 5) Start assigning numbers to your empty variable and concat your first counter after converting to string
            pyramid = pyramid.concat(step.toString());
        }
        // Step 6) ensure each round of the first forLoop is placed on a new line '\n'
        pyramid = pyramid.concat('\n');
        }
    // Step 7) Console log so you can see your pretty work.
    console.log(pyramid);
    };
// Step 8) Call your function
makePyramid(9);