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
    hasMovieAdaptation: true,
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

//Destructuring
/*
const book = getBook(3);

//Destructuring objects

//-------------old fashion way-------------------------//
// const title = book.title;
//const author =book.author;

//------------------>  läd automatisch den author und den title aus dem book object mit der gegebenen id  <------------------//
const { author, title, pages, publicationDate, genres, hasMovieAdaptation } =
  book; //--alle variablen festgelegt
console.log(author, title);

//destructuring arrays old way

// const priorityGenre = genres[0];
//const secobdaryGenres = genres[1]

//destructuring arrays better way

const [priorityGenre, secondaryGenre, ...otherGenres] = genres; //...otherGenres packt alle restlcihen Genres in ein array called rest operator.
console.log(priorityGenre, secondaryGenre, otherGenres);

//spread operator on arrays

const addNewGenre = [...genres, "fiction"]; //...genres entpackt alles im array
console.log(addNewGenre);

//spread operator erlaubt uns neue propertis hinzuzufügen und außerdem existierende zu updaten

//add new propertis to an object with spread operator

const updatedBook = {
  ...book,
  moviePuplicationDate:
    // adding a new property
    "1001-12-19",
  //overwrite an existing property
  pages: 25,
}; //update dienge die im object sind weil die letzte änderung alles überschreibt
updatedBook;

// `` Template literals to write execute functions arrays objects etc... write with ``
const summary = `Die Serie ${title} basiert auf dem ${pages} Seiten langem buch vom Auhor ${author}. Das Buch wurde ${
  publicationDate.split("-")[0]
} veröffentlicht.`;
console.log(summary);

// Terneries instead of if/else statements

const worthToRead =
  pages > 1000
    ? "Boah zu viele Seiten man.." //if
    : "Jawoll das ist ein Buch für mich"; // else

console.log(worthToRead);

//arrow functions

const getYear = (str) => str.split("-")[0]; // <-------arrow function one liner
console.log(getYear(publicationDate));

//  and operator &&&&&

//falsy ist folgendes: 0, ''. null, undefind
console.log("valentin" && "some string"); // true = zweiteres
console.log(0 && "some string"); // false = ersteres

// or operator |||||
console.log(true || "some string");
console.log(false || "some string");

const spanishTranslation = book.translations.spanish || "its not translated";
spanishTranslation;

// the or operator kann keine falsy sachen wiedergeben deswegen gibt es den

// ?? operator

//const count = book.reviews.librarything.reviewsCount ?? "no data"; // wenn diese 0 wäre würde es trotzdem angezeigt werden beim || operator allerdings nicht
//count;

// optional Chaining

function getTotalReviewCount(books) {
  const goodreads = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0; // das ? heißt optional chaning. Das heißt falls es undefind ist wird es nicht berücksichtigt
  return goodreads + librarything;
}
console.log(getTotalReviewCount());

*/

/*
const books = getBooks();

// The Array map Method
// little example
const x = [1, 2, 3, 4, 5].map((el) => el * 2);
console.log(x);
books;

const titles = books.map((book) => book.title); // map( geht durch jeden titel von dem object und packt diese in ein neues array)
console.log(titles);

const author = books.map((book) => book.author);
console.log(author);

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
}));
essentialData;

//The Array filter Method

const longBooksWhithMovie = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation); // dadurch wird mit jedes Buch angezeigt das mehr als 500 Seiten hat
longBooksWhithMovie;

const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.author);
adventureBooks;

// reduce Method (most Powerful array Method)

const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0);
pagesAllBooks;

// the sort Method // eine Method die das aktuella array verändert

const arr = [1, 7, 6, 9, 5];
const sorted = arr.slice().sort((a, b) => a - b); // da man bei react nicht will das das aktuelle array verändert wird kopieren wir das array mit slice();
sorted;
arr;

// Bücher nach Anzahl der Seiten sortiert wenig nach viele
const sortedBookByPages = books.slice().sort((a, b) => a.pages - b.pages);
sortedBookByPages;

// Working with immutable Arrays // We want to add elements, delete elements and update elements of an array without changing the original one

// 1) Add book object to an array

const newBook = {
  id: 6,
  title: "Das einzige Buch das du über Finanzen lesen solltest.",
  author: "Max Krause",
};

const bookAfterAdd = [...books, newBook];
bookAfterAdd;

// 2 Delete a book object from array

const booksAfterDelete = bookAfterAdd.filter((book) => book.id !== 3);
booksAfterDelete;

// 3 update book object in the array

const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 1 } : book
);
booksAfterUpdate;
*/

//fetch("https://jsonplaceholder.typicode.com/todos") // sobald alles geladen ist wandelt es das emfangene in json um und solbald alles umgewandelt ist wird console ausgeführt
//  .then((res) => res.json())
//  .then((newData) => console.log(newData));

// async and await

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
  return data;
}

getTodos();
