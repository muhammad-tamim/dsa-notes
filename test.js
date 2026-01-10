const books = [
    { id: "b-101", title: "Cracking the Coding Interview", author: "Gayle" },
    { id: "b-102", title: "Clean Code", author: "Robert C. Martin" },
    { id: "b-103", title: "Introduction to Algorithms", author: "Cormen" },
    { id: "b-104", title: "Design Patterns", author: "Erich." }
];

const foundPost = books.find((book) => book.id === 'b-104')
console.log(foundPost)

