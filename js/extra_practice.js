"use strict";

//Random number generator
// var random = (Math.random() * (100 - 1) + 1).toFixed(0);
// var smallRandom = (Math.random() * (11-1) + 1).toFixed(0);
// var Mystring = "This is a string, for sure."
//
// //1. Function is odd
// function isOdd(x){
//     return x % 2 === 1;
// }
// console.log("The random number is odd: " + isOdd(random))
// console.log("The random number is: " + random )
//
// //2. Function is even
// function isEven(x){
//     return x % 2 === 0;
// }
// console.log("The random number is even: " + isEven(random))
// console.log("The random number is: " + random )
//
// //3. Function identity
// function identity(x){
//     return x;
// }
// console.log(identity("me"))
//
// //4. Function is five
// function isFive(x){
//     if(x === 5) {
//         console.log("Yup " + x + " is five.");
//     }else {
//         console.log("Nope " + x + " isn't five")
//     }
// }
// isFive(9);
//
// //5. Function add 5
// function addFive(x){
//     return parseInt(x + 5)
// }
// console.log(random + " + 5 is: " + addFive(parseInt(random)))
//
// //6. Function multiple of five
// function isMultipleOfFive(x){
//     if(x % 5 === 0){
//         console.log(x + " is a multiple of five")
//     }else {
//         console.log(x + " is not a multiple of five.")
//     }
// }
// isMultipleOfFive(random)
//
// //7. Function is three
// function isThree(x){
//     if(x === 3){
//         console.log(x + " is three!")
//     }else {
//         console.log(x + " is definitely not three!")
//     }
// }
// isThree(parseInt(Math.random() * (4-1) +1).toFixed(0))
//
// //8. Function is multiple of three
// function isMultipleOfThree(x){
//     if(x % 3 === 0){
//         console.log(x + " is a multiple of three.")
//     }else {
//         console.log(x + " is not a multiple of three.")
//     }
// }
// isMultipleOfThree(random)
//
// //9. Function is multiple of five and three
// function isMultipleOfThreeAndFive(x){
//     if(x % 5 === 0 && x % 3 ===0){
//         console.log(x + " is an amazing number. It is a multiple of three and five!");
//     }else {
//         console.log("Boo the number " + x + " it doesn't like 3 and 5!")
//     }
// }
// isMultipleOfThreeAndFive(random);
//
// //10. Function is multiple of target
// function isMultipleOf(target, n) {
//     if (target % n === 0) {
//         console.log("A miracle just happened " + target + " is a multiple of " + n + "!")
//     } else {
//         console.log("Well I could have told you that " + target + " and " + n + " didn't get along!")
//     }
// }
//     isMultipleOf(random, smallRandom);
//
// //11. Function is true
// function isTrue(x){
//     return x === true;
// }
// console.log(isTrue(true));
//
// //12. Function is false
// function isFalse(x){
//     return x === false;
// }
// console.log(isFalse(false))
//
// //13. Function is truthy
// function isTruthy (x){
//     if(x == true){
//         return console.log(x + " is a truthy.")
//     }else {
//         return console.log(x + " is not a truthy.")
//     }
// }
// isTruthy(1);
//
// //14. Function is falsy
// function isFalsy(x){
//     if(x == false){
//         return console.log(x + " is a falsy.");
//     }else {
//         return console.log(x + " is not a falsy");
//     }
// }
// isFalsy(0);
//
// //15. Function is vowel
// var alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var randomChar = alpha[Math.floor(Math.random() * alpha.length)];
// function isVowel(x) {
//     var vow = ("aeiou");
//         if (vow.includes(x)) {
//             return console.log(x + " is a vowel");
//         }else {
//             return console.log(x + " is not a vowel.")
//         }
//     }
//
// isVowel(randomChar.toLowerCase());
//
// //16. Function is a Consonant
// function isConsonant(x){
//     var vow = ("aeiou");
//     if (vow.includes(x)) {
//         return console.log(x + " is not a consonant.");
//     }else {
//         return console.log(x + " is a consonant.")
//     }
// }
// isConsonant(randomChar.toLowerCase());
//
// //17. Function is capital
// function isCapital(x){
//     if(x === x.toUpperCase()){
//         return console.log(x + " is a capital letter.")
//     }else {
//         return console.log(x + " is not a capital letter.")
//     }
// }
// isCapital(randomChar);
//
// //18. Function is lower case
// function isLowerCase(x){
//     if(x === x.toLowerCase()){
//         return console.log(x + " is lower case.")
//     }else {
//         return console.log(x + " is not in lower case.")
//     }
// }
// isLowerCase(randomChar);
//
// //19. Function has lower case
// function hasLowerCase(x) {
//     if(x.match(/[a-z]/g)){
//         return console.log("We found one.")
//     }else
//         return console.log("None here");
// }
// hasLowerCase("HHHvHHHH");
//
// //20. Function is space
// function isSpace(x){
//     if(x === " ") {
//         return console.log("Yup it's a space!")
//     }else {
//         return console.log("Nope it's not.")
//     }
// }
// isSpace(Mystring[smallRandom]);
//
// //21. Function is zero
// function isZero(x){
//     if(x === 0){
//         return console.log("Hey, " + x + " is a zero!");
//     }else {
//         return console.log("Nice try " + x + " you're no zero!")
//     }
// }
// isZero(0);
// isZero(3);
//
// //22. Function not zero
// function notZero(x) {
//         if(x === 0){
//             return console.log("true")
//         }else {
//             return console.log("false")
//         }
// }
// notZero(0);
// notZero(10);
//
// //23. Function lowercase string
// function lowerCase(x){
//     return console.log("Magic! I have turned " + x + " to " + x.toLowerCase());
// }
// lowerCase(Mystring);
//
// //24. Function double
// function double(n){
//     return n * 2;
// }
// console.log(smallRandom + " doubled is " + double(smallRandom));
//
// //25. Function triple
// function triple(n){
//     return n * 3;
// }
// console.log(smallRandom + " tripled is " + triple(smallRandom));
//
// //26. Function quadruple
// function quadruple(n) {
//     return n * 4;
// }
// console.log(smallRandom + " quadrupled is " + quadruple(smallRandom));
//
// //27. Function half
// function half(n){
//     return n - (n * .5);
// }
// console.log(random + " divided in half is " + half(random));
//
// //28. Function subtract
// function subtract(x,y){
//     return x - y;
// }
// console.log(random + " minus " + smallRandom + " is equal to " + subtract(random,smallRandom));
//
// //29. Function multiply
// function multiply(x,y){
//     return x * y;
// }
// console.log(random + " multiplied by " + smallRandom + " equals " + multiply(random,smallRandom))
//
// //30. Function divide
// function divide(x,y){
//     return x / y;
// }
// console.log(random + " divided by " + smallRandom + " equals " + divide(random,smallRandom).toFixed(2))
//
// //31. Function remainder
// function remainder(x,y){
//     return (x % y);
// }
// console.log("The remainder of " + random + " & " + smallRandom + " is: " + remainder(random,smallRandom));
//
// //31. Function modulo
// function modulo(x,y){
//     return (x % y);
// }
// console.log("The remainder of " + random + " & " + smallRandom + " is: " + modulo(random,smallRandom));
//
// //32. Function cube
// function cube(n){
//     return n * n * n;
// }
// console.log(smallRandom + " cubed is " + cube(smallRandom));
//
// //33. Function square root
// function squareRoot(n){
//     return Math.sqrt(n).toFixed(2);
// }
// console.log("The square root of " + random + " is " + squareRoot(random));
//
// //34. Function cubeRoot
// function cubeRoot(n){
//     return Math.cbrt(n).toFixed(1);
// }
// console.log (cubeRoot(random));
//
// //35. Function invertSign
// function invertSign(x) {
//     return x * -1;
// }
// console.log(random + " inverted is " + invertSign(random));
//
// //36. function degreesToRadian
// function degreesToRadian(x){
//     return x * (Math.PI/180);
// }
// console.log(degreesToRadian(45));
//
// //37. function radianToDegrees
// function radianToDegrees(x){
//     return x * (180/Math.PI);
// }
// console.log(radianToDegrees(2));
//
// //38. function isBlank
// function isBlank(x){
//     if(/\s/.test(x)) {
//         return "The parameter passed is a blank space."
//     }else {
//         return "The parameter is a character."
//     }
// }
// console.log(isBlank(" "));
//
// //39. function trim
// function trim(x) {
//     return x.trim();
// }
// console.log(trim(" This is a test and only a test. "));
//
// //40. function areEqual
// function areEqual(x,y) {
//     return (x == y) ? true : false;
// }
// console.log(areEqual(19,10))
//
// //41. function areIdentical
// function areIdentical(x,y) {
//     return (x === y) ? true : false;
// }
// console.log(areIdentical(8,8));
//
// //42. function not, returns reverse boolean
// function not(x) {
//     if(typeof(x) === "boolean") {
//         return x + " reversed is " + !x;
//     }else {
//         return x + " is not a boolean value.";
//     }
// }
// console.log(not(true));
//
// //43. function notNot
// function notNot(x) {
//     if(typeof(x) === 'boolean') {
//         return x + " is not Not " + !!x;
//     }else {
//         return x + " is not a boolean."
//     }
// }
// console.log(notNot(true));
//
// //44. function and
// function and(x,y){
//         var xS = x.toString();
//         var yS = y.toString();
//     console.log(xS + " && " + xS + " = " + (x && x));
//     console.log(yS + " && " + yS + " = " + (y && y));
//     console.log(xS + " && " + yS + " = " + (x && y));
//     console.log(yS + " && " + xS + " = " + (y && x));
// }
// and(true, false);
//
// //45. function or
// function or(x, y) {
//     console.log(x + " || " + x + " = " + (x || x));
//     console.log(x + " || " + y + " = " + (x || y));
//     console.log(y + " || " + x + " = " + (y || x));
//     console.log(y + " || " + y + " = " + (y || y));
// }
// or(true, false)
//
// //46. function reverseSting
// function reverseString(x) {
//     var rev = x.split('').reverse().join('').toLowerCase();
//     return rev;
// }
// console.log(reverseString("Austriala"));
//
// //47. function absoluteValue
// function absoluteValue(x) {
// var aV = Math.abs(x);
// return aV;
// }
// console.log(absoluteValue(-10000.25));

//function rollDice
var dice1 = (Math.floor(Math.random() * (7 - 1) + 1));
var dice2 = (Math.floor(Math.random() * (7 - 1) + 1));
function rollDice(x,y){
    console.log(x,y);
}
rollDice(dice1,dice2);

function willLoginUser (x) {
    var mName = "The Dude";
    var mPassword = "superSecret";
    var aPassword = "coolSS";
    var ageReq = 18;
    var userName = prompt("Please enter a user name.");
    if(userName === mName){
        var userPass = prompt("Please enter password.")
        if(mPassword === userPass){
            var userAge = prompt("Please enter your age.");
            if(userAge >= ageReq){
                confirm("You will be logged in shortly.");
            }else {
                confirm("Sorry you are not old enough to play here.");
            }
        }else if(userPass === aPassword) {
            confirm("You will be logged in shortly.");
        }else {
            alert("You entered a wrong password");
        }
    }else {
        confirm("Your username doesn't match");
    }
}
var x = confirm("Would you like to login?");
if(x === true){
    willLoginUser(x);
}else {
    alert("You are missing out.");
}