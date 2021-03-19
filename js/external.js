"use strict";
//Intro
console.log("Hello from external Javascript");
//Part 1
alert("Welcome to my Website!");
// Part 2
var favcolor = prompt("What is your favorite color?");
alert(favcolor + " is a cool color Bro!");
//Part 3.1
var rented = confirm("Did you rent any movies?")
if(rented === true) {
    var moviePrice = 3;
    var lM = parseFloat(prompt("How many days have you had The Little Mermaid?"));
    var bB = parseFloat(prompt("How many days have you had Brother Bear?"));
    var herc = parseFloat(prompt("How many days have you had Hercules?"));
    var tot = (lM + bB + herc) * moviePrice;
    alert("You owe: $" + tot.toFixed(2));
}else {
    alert("You're boring!");
}
//Part 3.2
alert("Pay time!");
var google = 400;
var amazon = 380;
var facebook = 350;
var gP = parseFloat(prompt("How many hours did you work at Google?"));
var aP = parseFloat(prompt("How many hours did you work at Amazon?"));
var fP = parseFloat(prompt("How many hours did you work at Facebook?"));
var finalPay = ((gP * google) + (aP * amazon) + (fP * facebook))
alert("Your hard earned money totals: $" + finalPay.toFixed(2));
//Part 3.3
var studentEnroll = confirm("Class starts at 9AM, can you attend?");
if(studentEnroll === true){
    var classMax = 26;
    var classSize = 26;
    classSize = classSize + 1
}
if(classSize <= classMax && studentEnroll === true){
    alert("See you on the first day!");
}else {
    alert("Better luck next time.");
}
//Part 3.4
alert("Welcome to ShopCo!");
var permMem = confirm("Are you a Premium Member?");
var userP = parseFloat(prompt("How many items are you picking up?"));
var offerOn = true;
if((permMem === true || userP >= 2) && offerOn === true){
    alert("You qualify for today's Discount!");
}else{
    alert("No Discount for you!");
};