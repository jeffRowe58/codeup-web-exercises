'use strict';

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const languageArray = users.filter( language => (language.languages.length >= 3) ? language : "");


const emails = users.map(eaddress => eaddress.email);


const yearsAverage = users.reduce((a , b) =>
     a + b.yearsOfExperience / users.length, 0);

const emailLength = users.reduce((a, b)=>
    a.length > b.email.length ? a : b.email, []);
console.log(emailLength);

const instructors = users.reduce((a, b, index, array) => {
    if(index === array.length - 1){
        a += b.name + '.'
    }else {
        a += b.name + ', ';
    }
         return a;
},'Your instructors names are: ');


// const uniqueLanguage = users.reduce((a, b, index) =>
//    a.includes(b.languages) ? a : [...a, b.languages[index]], "");
// console.log(uniqueLanguage);