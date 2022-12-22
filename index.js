import { bookData } from "./js/book-data.js";

const body = document.querySelector("body");
//creating class Book
class Book {
  constructor(author, subject, language, title) {
    this.author = author;
    this.subject = subject;
    this.language = language;
    this.title = title;
  }
  //creating render method
  render(append) {
    const bookSubject = function () {
      let subjectStr = "";
      for (let i = 0; i < subject.length; i++) {
        if (subject.length === 1) {
          return (subjectStr += subject[i]);
        } else if (i < subject.length - 2) {
          subjectStr += subject[i] + ", ";
        } else if (i === subject.length - 1) {
          subjectStr += subject[i] + " ";
        }
      }
      return subjectStr;
    };
    const ul = document.querySelector("ul");
    const author = this.author;
    const subject = this.subject;
    const language = this.language;
    const title = this.title;
    // console.log("rendering");
    const listCreate = document.createElement("li");
    append.appendChild(listCreate);
    const li = document.querySelector("li");
    li.style.display = "flex";
    li.style.flexDirection = "column";
    li.style.alignItems = "center";
    li.style.listStyle = "none";
    const btnBook = document.createElement("button");
    btnBook.innerHTML = `<p style='color: red'>author: ${this.author}</p>
    <p>subject: ${bookSubject()}</p>
    <p>language: ${this.language}</p>
    <p style='color: blue'>title: ${this.title}`;
    li.appendChild(btnBook);
    btnBook.style.border = "1px solid black";
    btnBook.style.width = "50%";
    btnBook.addEventListener("click", function () {
      // const bookSubject = function () {
      //   let subjectStr = "";
      //   for (let i = 0; i < subject.length; i++) {
      //     subjectStr += subject[i] + ", ";
      //     if (i === subject.length - 1) {
      //       subjectStr += subject[i] + " ";
      //     }
      //   }
      //   return subjectStr;
      // };

      const modalContainer = document.createElement("div");
      body.appendChild(modalContainer);
      modalContainer.style.backgroundColor = "rgba(0,0,0,0.4)";
      body.style.height = "100vh";
      ul.style.marginTop = "0px";
      modalContainer.style.height = "100%";
      modalContainer.style.width = "100%";
      modalContainer.style.display = "flex";
      modalContainer.style.justifyContent = "center";
      modalContainer.style.alignItems = "center";
      const modal = document.createElement("div");
      modalContainer.appendChild(modal);
      modal.innerHTML = `<p style='color: red'>Author: ${author}</p><p>Subject: ${bookSubject()}</p><p>Language: ${language}</p><p style='color: blue'>Title: ${title}</p>`;
      modal.style.display = "flex";
      // modal.style.opacity = "0";
      modal.style.flexDirection = "column";
      modal.style.justifyContent = "center";
      // modal.style.alignItems = "center";
      // modal.style.border = "1px solid yellow";
      modal.style.backgroundColor = "white";
      modal.style.width = "75%";
      li.style.display = "none";
      li.style.listStyle = "none";
      const x = document.createElement("button");
      x.innerHTML = "EXIT";
      x.style.color = "black";
      modal.appendChild(x);
      x.addEventListener("click", function () {
        body.removeChild(modalContainer);
        li.style.display = "flex";
        li.style.flexDirection = "column";
        body.style.height = "100%";
      });
    });
  }
}

////////////////////////////////////////////////////////////////////////////
//creating class Bookshelf
class Bookshelf {
  constructor() {
    this.books = [];
  }
  //method to add just one book
  addBook(author, subject, language, title) {
    this.books.push(new Book([...author], subject, language, title));
  }
  //method to add many books
  addBooks(bookObj) {
    for (const {
      author: [...author],
      subject: [...subject],
      language,
      title,
    } of bookObj) {
      this.addBook([author], subject, language, title);
    }
  }

  render() {
    const body = document.querySelector("body");
    const addDiv = document.createElement("div");
    addDiv.classList.add("btnDiv");
    body.appendChild(addDiv);
    const btnDiv = document.querySelector(".btnDiv");
    btnDiv.style.width = "100%";
    btnDiv.style.height = "50px";
    btnDiv.style.backgroundColor = "blue";
    btnDiv.style.position = "fixed";
    btnDiv.style.top = "0";
    btnDiv.style.left = "0";

    //Adding book functionality
    const newBtn = document.createElement("button");
    newBtn.classList.add("add");
    btnDiv.appendChild(newBtn);
    const btnAdd = document.querySelector(".add");
    btnAdd.style.backgroundColor = "yellow";
    btnAdd.style.width = "100%";
    btnAdd.style.height = "100%";
    btnAdd.innerHTML = "Click to add a book!";
    btnAdd.addEventListener("click", function () {
      btnAdd.style.display = "none";
      //creating ele for btnAdd
      const addBookModalContainer = document.createElement("div");
      const addBookModal = document.createElement("div");
      /*******adding classes for created elements******/
      addBookModalContainer.classList.add("bookContainer");
      addBookModal.classList.add("book-modal");
      /*******appending el to appropriate parent*******/
      body.appendChild(addBookModalContainer);
      bookContainer.appendChild(addBookModal);
      /*******calling upon newly appended el***********/
      const bookContainer = document.querySelector(".bookContainer");
      const bookModal = document.querySelector(".book-modal");
      //styling el
      ul.style.display = "none";
    });

    //getting and styling body

    body.style.height = "100%";
    body.style.marginTop = "50px";

    body.style.display = "flex";
    body.style.flexDirection = "column";
    body.style.justifyContent = "center";
    body.style.alignItems = "center";
    //creating and styling UL
    const unordered = document.createElement("ul");
    body.appendChild(unordered);
    const ul = document.querySelector("ul");
    ul.style.backgroundColor = "green";
    // ul.style.height = "auto";
    // ul.style.width = "100%";
    ul.style.display = "flex";
    ul.style.flexFlow = "column nowrap";
    ul.style.justifyContent = "center";
    ul.style.alignItems = "center";
    // ul.style.marginTop = "15px";
    ul.style.listStyle = "none";
    for (const i of Object.values(this)[0]) {
      i.render(ul);
    }
  }
}
////////////////////////////////////////////////////////////////////////////
const newBookshelf = new Bookshelf();
// newBookshelf.addBooks(bookData);
newBookshelf.addBook(
  ["J.K. Rowling"],
  ["Fantasy Fiction"],
  "English",
  "Harry Potter"
);
newBookshelf.addBook(["Miklo"], ["fiction"], "english", "IDK");
newBookshelf.addBooks(bookData);
newBookshelf.render();
