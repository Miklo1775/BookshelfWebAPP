import { Book } from "./book.js";
import { bookData } from "./js/book-data.js";

class Bookshelf {
  constructor() {
    this.bookshelf = [];
  }

  render() {
    // this.createUlElement();
    // this.createBookshelfEl();
    // console.log(Object.values(this)[0].length);
    for (let i = 0; i < Object.values(this)[0].length; i++) {
      Object.values(this)[0][i].render();
    }
    this.bookBtnFunctionality();
  }
  //createBookshelfEl creates a list item for each book element
  createBookshelfEl() {
    const ul = document.querySelector("ul");
    return this.bookshelf.map((bookEl) => {
      const createBookshelfLi = document.createElement("li");
      createBookshelfLi.classList.add("book-element");
      ul.appendChild(createBookshelfLi);
      this.createBooklistButton(bookEl, createBookshelfLi);
      // this.createBookParagraphs(bookEl.author, createBookshelfLi);
      // this.createBookParagraphs(bookEl.subject, createBookshelfLi);
      // this.createBookParagraphs(bookEl.language, createBookshelfLi);
      // this.createBookParagraphs(bookEl.title, createBookshelfLi);
    });
  }

  //createULElement creates the unordered list to store all the books in the DOM
  createUlElement() {
    const body = document.querySelector("body");
    const ulCreate = document.createElement("ul");
    body.appendChild(ulCreate);
    const ulBookshelf = document.querySelector("ul");
    return ulBookshelf;
  }

  createBooklistButton(bookEl, appendItem) {
    const createBookBtn = document.createElement("button");
    createBookBtn.classList.add("book-btn");
    createBookBtn.innerHTML = `${bookEl.title}`;
    appendItem.appendChild(createBookBtn);
  }

  createBookParagraphs(bookEl, appendItem) {
    const li = document.querySelector("book-element");
    const createPElement = document.createElement("p");
    createPElement.innerHTML = `${bookEl}`;
    appendItem.appendChild(createPElement);
  }

  //////////////////////////////////////////////////////////////////////////
  bookBtnFunctionality() {
    const btns = document.querySelectorAll(".book-self-btn");
    console.log(btns);
    btns.forEach((btn) => {
      btn.addEventListener("click", (event) => {
        console.log(event);
      });
    });
  }

  //addBooks only adds 1 book
  //it is pushing a new class Book to this.bookshelf
  addBook(author, subject, language, title) {
    this.bookshelf.push(new Book(author, subject, language, title));
  }
  //addBooks will push MULTIPLE books using addBook function
  addBooks(dataObj) {
    return dataObj.map((dataEl) => {
      this.addBook(
        dataEl.author,
        dataEl.subject,
        dataEl.language,
        dataEl.title
      );
    });
  }
}

const newBookshelf = new Bookshelf();
newBookshelf.addBook("Miklo", "Fiction", "JS", "IDK");
newBookshelf.addBook("Miklo", "Fiction", "JS", "Maybe I Do Know");
newBookshelf.addBook("Miklo", "Fiction", "JS", "Maybe I Dont");
// newBookshelf.addBooks(bookData);
// newBookshelf.addBook("Miklo", "Fiction", "JS", "IDK");
// newBookshelf.addBook("Miklo", "Fiction", "JS", "IDK");
// newBookshelf.addBook("Miklo", "Fiction", "JS", "IDK");
// newBookshelf.addBook("Miklo", "Fiction", "JS", "IDK");
// newBookshelf.addBook("Miklo", "Fiction", "JS", "IDK");
newBookshelf.render();
// console.log(newBookshelf);
