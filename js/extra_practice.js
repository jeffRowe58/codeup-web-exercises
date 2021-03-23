//Random number generator
var random = (Math.random() * (100 - 1) + 1).toFixed(0);
var smallRandom = (Math.random() * (11-1) + 1).toFixed(0);

//1. Function is odd
function isOdd(x){
    if(x % 2 === 1){
        return true;
    }else {
        return false;
    }
}
console.log("The random number is odd: " + isOdd(random))
console.log("The random number is: " + random )

//2. Function is even
function isEven(x){
    if(x % 2 === 0){
        return true;
    }else {
        return false;
    }
}
console.log("The random number is even: " + isEven(random))
console.log("The random number is: " + random )

//3. Function identity
function identity(x){
    return x;
}
console.log(identity("me"))

//4. Function is five
function isFive(x){
    if(x === 5) {
        console.log("Yup " + x + " is five.");
    }else {
        console.log("Nope " + x + " isn't five")
    }
}
isFive(9);

//5. Function add 5
function addFive(x){
    return parseInt(x + 5)
}
console.log(random + " + 5 is: " + addFive(parseInt(random)))

//6. Function multiple of five
function isMultipleOfFive(x){
    if(x % 5 === 0){
        console.log(x + " is a multiple of five")
    }else {
        console.log(x + " is not a multiple of five.")
    }
}
isMultipleOfFive(random)

//7. Function is three
function isThree(x){
    if(x == 3){
        console.log(x + " is three!")
    }else {
        console.log(x + " is definitely not three!")
    }
}
isThree(parseInt(Math.random() * (4-1) +1).toFixed(0))

//8. Function is multiple of three
function isMultipleOfThree(x){
    if(x % 3 === 0){
        console.log(x + " is a multiple of three.")
    }else {
        console.log(x + " is not a multiple of three.")
    }
}
isMultipleOfThree(random)

//9. Function is multiple of five and three
function isMulitpleOfThreeAndFive(x){
    if(x % 5 === 0 && x % 3 ===0){
        console.log(x + " is an amazing number. It is a multiple of three and five!");
    }else {
        console.log("Boo the number " + x + " it doesn't like 3 and 5!")
    }
}
isMulitpleOfThreeAndFive(random);

//10. Function is multiple of target
function isMultipleOf(target, n) {
    if (target % n === 0) {
        console.log("A miricle just happened " + target + " is a multiple of " + n + "!")
    } else {
        console.log("Well I could have told you that " + target + " and " + n + " didn't get along!")
    }
}
    isMultipleOf(random, smallRandom);

//11. Function is true
function isTrue(x){
    return x === true;
}
console.log(isTrue(true));

//12. Function is false
function isFalse(x){
    return x === false;
}
console.log(isFalse(false))

//13. Function is truthy
function isTruthy (x){
    if(x == true){
        return console.log(x + " is a truthy.")
    }else {
        return console.log(x + " is not a truthy.")
    }
}
isTruthy(1);

//14. Function is falsy
function isFalsy(x){
    if(x == false){
        return console.log(x + " is a falsy.");
    }else {
        return console.log(x + " is not a falsy");
    }
}
isFalsy(0);

//15. Function is vowel
var alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var randomChar = alpha[Math.floor(Math.random() * alpha.length)];
function isVowel(x) {
    var vow = ["a", "e", "i", "o", "u"];
    for (var i = 0; i < vow.length; i++) {
        if (vow[i] === x) {
            return console.log(x + " is a vowel");
        }
    }
    if(x !== vow[i]){
        return console.log(x + " is not a vowel.");
    }
}
isVowel(randomChar.toLowerCase());

//15. Function is a Consonant
function isConsonant(x){
    var vowel = ['a','e','i', 'o', 'u'];
    for(var i = 0; i < vowel.length; i++){
        if(x === vowel[i]) {
            return console.log(x + " is not a consonant.");
        }
    }
    if(x !== vowel[i]){
        return console.log(x + " is a consonant.");
    }
}
isConsonant(randomChar.toLowerCase());

//16. Function is capital
function isCapital(x){
    if(x === x.toUpperCase()){
        return console.log(x + " is a capital letter.")
    }else {
        return console.log(x + " is not a capital letter.")
    }
}
isCapital(randomChar);

//17. Funciton is lower case
function isLowerCase(x){
    if(x === x.toLowerCase()){
        return console.log(x + " is lower case.")
    }else {
        return console.log(x + " is not in lower case.")
    }
}
isLowerCase(randomChar);

//18. Function has lower case
function hasLowerCase(x){
    for(var i = 0; i < x.length; i++){
        if(x[i] === x[i].toLowerCase()){
            return console.log("String contains a lower case letter.")
        }
    }
    for(var s = 0; s < x.length; s++){
        if(x[s] !== x[s].toLowerCase()){
            return console.log("String doesn't contain a lower case letter.")
        }
    }
}
hasLowerCase("HHHHHH");
hasLowerCase("HHHHaHHHHH");

//19.