let getOptions = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
}
};
function getBooks(){
fetch("https://changeable-cyan-horesradish.glitch.me/books", getOptions)
    .then(resp => resp.json())
    .then(books => {
        let htmlStr = "";
        for(let book of books){
            htmlStr += `<h1>${book.title}</h1><p>by: ${book.author.firstName} ${book.author.lastName} ${book.id}</p>`;
        }
        $('#container').html(htmlStr);
    });
}
getBooks();
// fetch("https://changeable-cyan-horesradish.glitch.me/books/1")
// .then(resp => resp.json())
// .then(book => console.log(book));

// POST
// let newBook = {
//     'title': "Percy Jackson & The Lightening Thief",
//     'author': {
//         "firstName": "Rick",
//         "lastName": "Riordan"
//     }
// };
// let postOptions = {
//     method: 'POST',
//     headers: {
//         'Content-type': 'application/json',
//     },
//     body: JSON.stringify(newBook)
// }
// fetch("https://changeable-cyan-horesradish.glitch.me/books/", postOptions)
//     .then(resp => resp.json())
//     .then(book => console.log(book));


//Put
// let modifications = {
//     "title": "Percy Jackson & The Sea of Monsters",
//     "author": {
//         "firstName": "Rick",
//         "lastName": "Riordan"
//     }
//
//
// }
// let putOptions = {
//     method: 'PUT',
//     headers: {
//         'Content-type': 'application/json',
//     },
//     body: JSON.stringify(modifications)
// }
//
// fetch("https://changeable-cyan-horesradish.glitch.me/books/6", putOptions).then(getBooks);

//Patch

// let patchThis = {
//     "title": "Percy Jackson & The Titan's Curse"
// }
// let patchOptions = {
//     method: 'PATCH',
//     headers: {
//         'Content-type': 'application/json',
//     },
//     body: JSON.stringify(patchThis)
// }
//
// fetch("https://changeable-cyan-horesradish.glitch.me/books/8", patchOptions).then(getBooks);
//
// getBooks();

//Delete

let deleteOptions ={
    method: "DELETE",
    headers: {
        'Content-Type': 'application/json',
    }
};
// fetch(`https://changeable-cyan-horesradish.glitch.me/books/${book.id}`, deleteOptions).then(getBooks);

$("#uniqueBooks").click(() =>{
    let inputVal = $("#id-to-delete").val();
    fetch(`https://changeable-cyan-horesradish.glitch.me/books/${inputVal}`, deleteOptions).then(getBooks);
    $("#id-to-delete").val("");
})