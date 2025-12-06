
// Problem 6:
// You are given an object representing a book with properties title (string), author (string), and publishedYear (number). Use type alias for declaring the object. Write a TypeScript function called isRecentBook that takes this book object as input and determines if the book was published in the last 5 years.

// Hints: Use getFullYear() method to extract the year to check the given year with current year.


// Sample Input :
// const book1: Book = {
//     title: "Sample Book",
//     author: "John Doe",
//     publishedYear: 2022
// };
// isRecentBook(book1);

// Sample Output: 
// true

type Book = {
    title: string;
    author: string;
    publishedYear: number;
}
const book1: Book = {
    title: "Sample Book",
    author: "John Doe",
    publishedYear: 2022
};

const isRecentBook = (book: Book):boolean => {
    const currentYear = new Date().getFullYear();
    return book.publishedYear >= currentYear - 5;
}

console.log(isRecentBook(book1));
