'use strict';

var myData = [];
var date;
var userName;
$('#userInput').on('keyup', function(){
    userName = $('#userInput').val();
});
function getUserRepos(x) {
    fetch('https://api.github.com/users/'+ x + '/events', {headers: {'Authorization': GITHUB_API_TOKEN}})
        .then(resp => resp.json())
        .then(data => {
            myData = data;
            pullInfo()
        })
        .catch(error =>
            console.log("Request failed", error)
        );
}

function pullInfo(){
    date = new Date(myData[0].created_at).toLocaleDateString("en-US").split(/:| /);
    $('#userInput').val("");
    postDate();
}
function postDate(){
    document.getElementById('dateOfLast').innerHTML = userName +"'s last Push was on: " + date;
}

const wait = ms => {
    return new Promise(resolve => {
        setTimeout(() =>{
            resolve();
        }, ms);
    })
}
wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));