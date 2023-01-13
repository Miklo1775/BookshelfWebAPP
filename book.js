import { bookData } from "./js/book-data.js";

// const body = document.querySelector("body");
const ul = document.querySelector("ul");
export class Book {
  constructor(author, subject, language, title) {
    this.author = author;
    this.subject = subject;
    this.language = language;
    this.title = title;
  }

  render() {
    this.createListElements();
    // this.bookFunctionality();
  }

  createListElements() {
    //createBookList creates the individual HTML list item for each book
    const createBookListItem = document.createElement("li");
    ul.appendChild(createBookListItem);
    this.createSelfBookBtn(createBookListItem);

    //the createParagraphEl function creates and appends the proper
    //p element to the list for each book
    //first argument is what it wants to append, 2nd argument is what it is
    //appending to

    // this.createParagraphEl(this.author, createBookListItem);
    // this.createParagraphEl(this.subject, createBookListItem);
    // this.createParagraphEl(this.language, createBookListItem);
    // this.createParagraphEl(this.title, createBookListItem);
  }

  createSelfBookBtn(appendItem) {
    const createSelfBtn = document.createElement("button");
    createSelfBtn.classList.add("book-self-btn");
    createSelfBtn.innerHTML = `${this.title}`;
    appendItem.appendChild(createSelfBtn);
    const bookbtn = document.querySelector(".book-self-btn");
    // console.log(bookbtn);
  }

  createParagraphEl(el, appendItem) {
    const createParaItems = document.createElement("p");
    createParaItems.innerHTML = `${el}`;
    return appendItem.appendChild(createParaItems);
  }

  bookFunctionality() {
    const btn = document.querySelector(".book-self-btn");
    btn.innerHTML = `${this.title}`;
    btn.addEventListener("click", function () {
      console.log("clicked");
    });
  }

  testFunction() {
    console.log("You reached me!");
  }
}

// const newBook = new Book("Miklo", "Fiction", "JS", "IDK");
// console.log(newBook);
// newBook.render();
