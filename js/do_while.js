"use strict";
var allCones = Math.floor(Math.random() *50) + 50;
console.log(allCones + " Cones are left today.")


    do {
        var conesSold = Math.floor(Math.random() * 5) + 1;
        if(conesSold > allCones){
            console.log("I can't sell you " + conesSold + " I only have " + allCones + " left!")
        }else {
            console.log("I sold " + conesSold + " cones.")
            allCones = allCones - conesSold;
            console.log("I now have " + allCones + " left.")
        }
    } while (allCones > 0);
    if(allCones === 0) {
        console.log("Yay, I sold them all!");
    }



