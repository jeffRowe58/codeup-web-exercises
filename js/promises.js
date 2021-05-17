'use strict';

var myData = [];
var date;
var userName;
$('#userInput').on('keyup', function(){
    userName = $('#userInput').val();
});
function getUserRepos(x) {
    fetch('https://api.github.com/users/'+ x + '/events', {headers: {'Authorization': GITHUB_API_TOKEN}})
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            myData = data;
            pullInfo();
        })
        .catch(function (error) {
            console.log("Request failed", error)
        });
}

function pullInfo(){
    var convert1 = (myData[0].created_at).split('T');
    var betterTime = convert1[1].split('');
    betterTime.pop();
    betterTime = betterTime.join('');
    date = convert1[0] + " " + betterTime + "Z";
    $('#userInput').val("");
    postDate();
}
function postDate(){
    document.getElementById('dateOfLast').innerHTML = userName +"'s last Push was on: " + date;
}

