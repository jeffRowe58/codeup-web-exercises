"use strict";
var bigRandom = [];
for(var i = 0; i <= 9; i++) {
    bigRandom.push((Math.ceil(Math.random() * (200-20) + 1)));
}
var random = Math.ceil(Math.random() * (12-1) + 1);

//function showMultiplicationTable
function showMultiplicationTable(x) {
    for(var i = 1; i <= 12; i++) {
        console.log(x + " multiplied by " + i + " equals: " + i * x);
    }
}
showMultiplicationTable(random);

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
var makePyramid = function(steps) {
    var pyramid = '';
    for(var s = 1; s <= steps; s++) {
        for(var i = 1; i <= s; i++) {
            pyramid = pyramid.concat(s.toString());
        }
        pyramid = pyramid.concat('\n');
        }
    console.log(pyramid);
    };
makePyramid(9);

// for loop console.log
(function() {
    for (var i = 0; i < 20; i++) {
        var num = 100
        console.log(num - (5 * i));
    }
})();

    // pyramid simple

    // for (let i = 1; i <= 9; ++i) {
    // console.log(i.toString().repeat(i));
//};


