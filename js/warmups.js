'use strict';

for(var i = 1; i <= 30; i ++){
    if(i % 3 === 0 && i % 5 === 0){
        document.getElementById('content').innerHTML += "FizzBuzz<br>";
    }else if(i % 5 === 0){
        document.getElementById('content').innerHTML += "Buzz<br>";

    }else if (i % 3 === 0){
        document.getElementById('content').innerHTML += "Fizz<br>";
    }else{
        document.getElementById('content').innerHTML += i + "<br>";
    }
}

 function seven(){
    return 7;
}

document.getElementById('content').innerHTML =  seven();