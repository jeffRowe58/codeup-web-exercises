"use strict";
var count = 0;
var userNum = parseInt(prompt("Pick a odd number between 1 & 50"));
    while (userNum % 2 === 0 || isNaN(userNum) === true || userNum > 49 || userNum < 1) {
        count = count + 1
        if(count > 5){
            alert("You can't follow instructions huh?")
            break;
        }
        userNum = parseInt(prompt("Pick a odd number between 1 & 50"));
        console.log("You picked the number " + userNum)
    }
    if(userNum % 2 === 0 || isNaN(userNum) === true || userNum > 49 || userNum < 1){
        console.log('User failed to provide correct number.')
    }else {
        for (var i = 0; i <= 50; i++) {
            if (i % 2 !== 0) {
                if (i === userNum) {
                    console.log("Yikes, skipping the number " + userNum);
                    continue;
                }
                console.log(i);
            }
        }
    }