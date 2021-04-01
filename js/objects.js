(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    // var person = {
    //     firstName: "Jeff",
    //     lastName: "Rowe",
    // };
    // console.log(person.firstName);
    // console.log(person.lastName);
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    // var person = {
    //     firstName: "Jeff",
    //     lastName: "Rowe",
    //     sayHello: function () {
    //         return "Hello from " + person.firstName + " " + person.lastName;
    //     }
    // };
    // console.log(person.sayHello());
    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

        // var shoppers = [
        //     {name: 'Cameron', amount: 180},
        //     {name: 'Ryan', amount: 250},
        //     {name: 'George', amount: 320}
        // ];
        //
        // function discountApply(x) {
        //     var minSpend = 200;
        //     var discAmount = .12;
        //         x.forEach(function(duck) {
        //             if (duck.amount > minSpend) {
        //                 console.log(duck.name + " you spent $" + (duck.amount).toFixed(2) + " and earned a discount of $" + (duck.amount * discAmount).toFixed(2) + ". Your total owed is $" + (duck.amount - (duck.amount * discAmount)).toFixed(2));
        //             } else {
        //                 console.log(duck.name + " you spent $" + (duck.amount).toFixed(2) + ". Which brings you $" + ((duck.amount - minSpend) * -1).toFixed(2) + " short of a discount. The total you owe is $" + (duck.amount).toFixed(2));
        //             }
        //         })
        // }
        //
        // discountApply(shoppers);

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    var books = [
        {
            title: "It",
            author: {
                firstName: "Stephen",
                lastName: "King",
            }
        },
        {
            title: "The Good Husband",
            author: {
                firstName: "Dean",
                lastName: "Koontz",
            }
        },
        {
            title: "Bourne Identity",
            author: {
                firstName: "Robert",
                lastName: "Ludlum",
            }

        },
        {
            title: "Congo",
            author: {
                firstName: "Michael",
                lastName: "Crichton",
            }
        },
        {
            title: "The Firm",
            author: {
                firstName: "John",
                lastName: "Grisham",
            }
        },
    ];
console.log(books);

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    // for(var i = 0; i < books.length; i++) {
    //     console.log("Book # " + (i + 1) + "\n" + "Title: " + books[i].title + "\n" + "Author: " + books[i].author.firstName + " " + books[i].author.lastName);
    // }
        /**
         * Bonus:
         * - Create a function named `createBook` that accepts a title and author
         *   name and returns a book object with the properties described
         *   previously. Refactor your code that creates the books array to instead
         *   use your function.
         * - Create a function named `showBookInfo` that accepts a book object and
         *   outputs the information described above. Refactor your loop to use your
         *   `showBookInfo` function.
         */
        function createBook(title, author) {
            var authArray = author.split(' ');
            var authFirst = authArray[0].toString();
            var authLast = authArray[1].toString();
            var cBook = {};
            cBook.title = title;
            cBook.author = {};
            cBook.author.firstName = authFirst;
            cBook.author.lastName = authLast;
            return books.push(cBook);
        }

        createBook("My Story", "Jeff Rowe");

        function showBookInfo(x) {
            for (var i = 0; i < x.length; i++) {
                console.log("Book # " + (i + 1) + "\n" + "Title: " + x[i].title + "\n" + "Author: " + x[i].author.firstName + " " + x[i].author.lastName);
            }
        }
console.log(showBookInfo(books));

})();

