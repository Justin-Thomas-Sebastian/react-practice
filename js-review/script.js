const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    test: "yogabba",
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: false,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}
/*
const book = getBook(2);
const { id, author, title, genres } = book;

// genres[0] is primary, genres[1] is secondary, other is the remaining genres
const [primary, secondary, ...other] = genres;

// Adding a new genre to the genres array using the spread operator
const newGenres = [...genres, "epic"];

// Updating an exising object using the spread operator
const updatedBook = {
  ...book,
  moviePublicationDate: "2001-12-05", // Adding a new property
  pages: 12234, // Overwriting an existing property
};

console.log(updatedBook);

// function getYear(date) {
//   return date.split("-")[0];
// }

const getYear = (str) => str.split("-")[0];

console.log(getYear(updatedBook.moviePublicationDate));

function getTotalReviewCount(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount;
  return goodreads + librarything;
}

const books = getBooks();

const book1ReviewCount = getTotalReviewCount(getBook(1));
console.log(book1ReviewCount);

const book2ReviewCount = getTotalReviewCount(getBook(2));
console.log(book2ReviewCount);

// Map
const x = [1, 2, 3, 4, 5].map((el) => el * 2);
console.log(x);

const titles = books.map((book) => book.title);
console.log(titles);

const essential = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount(book),
}));

console.log(essential);

// Filter
const longBooks = books.filter((book) => book.pages > 500);
console.log(longBooks);

const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => `title: ${book.title}`);
console.log(adventureBooks);

// Reduce
const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0);
console.log(pagesAllBooks);

// Sort
const nums = [4, 3, 123, 6];
// const sorted = nums.sort((a, b) => a - b);  // mutates original array
const sorted = nums.slice().sort((a, b) => a - b);
console.log(sorted);
console.log(nums);

const sortedBypages = books.slice().sort((a, b) => a.pages - b.pages);
console.log(sortedBypages);

// Add book object to array
const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J.K. Rowling",
};

const booksAfterAdd = [...books, newBook];
console.log(booksAfterAdd);

// Delete Book object from array
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
console.log(booksAfterDelete);

// Update book object in the array
const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 1 } : book
);
console.log(booksAfterUpdate);
*/

// Promises review
// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// console.log("Justin"); // Gets printed to the console first, before the fetch finishes

// Async/Await review
async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
  return data;
}

const todos = getTodos();
console.log(todos); //Will only log promise object, not the data
console.log("Justin"); // Gets printed to the console first, before the fetch finishes
