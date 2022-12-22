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
  render(object) {
    for (const book of object) {
      //adding commas and space between book subjects
      const bookSubject = function () {
        let subjectStr = "";
        for (let i = 0; i < book.subject.length; i++) {
          subjectStr = subjectStr + book.subject[i] + ", ";
          if (i === book.subject.length - 1) {
            subjectStr = subjectStr + book.subject[i] + " ";
          }
        }
        return subjectStr;
      };
      bookSubject();
      ////////////////////////////////////
      const btnItem = document.createElement("button");
      btnItem.innerHTML = `Title ${book.title}`;
      createList.appendChild(btnItem);
      btnItem.style.marginBottom = "5px";
      btnItem.style.width = "50%";
      btnItem.addEventListener("click", function () {
        body.style.height = "100vh";
        const modalContainer = document.createElement("div");
        body.appendChild(modalContainer);
        modalContainer.style.backgroundColor = "rgba(0,0,0,0.4)";

        modalContainer.style.height = "100%";
        modalContainer.style.display = "flex";
        modalContainer.style.justifyContent = "center";
        modalContainer.style.alignItems = "center";
        const modal = document.createElement("div");
        modalContainer.appendChild(modal);
        modal.innerHTML = `<p style='color: red'>Author: ${
          book.author
        }</p><p>Subject: ${bookSubject()}</p><p>Language: ${
          book.language
        }</p><p style='color: blue'>Title: ${book.title}</p>`;
        modal.style.display = "flex";
        // modal.style.opacity = "0";
        modal.style.flexDirection = "column";
        modal.style.justifyContent = "center";
        // modal.style.alignItems = "center";
        modal.style.border = "1px solid yellow";
        modal.style.backgroundColor = "white";
        modal.style.width = "50%";
        list.style.display = "none";
        const x = document.createElement("button");
        x.innerHTML = "EXIT";
        x.style.color = "black";
        modal.appendChild(x);
        x.addEventListener("click", function () {
          body.removeChild(modalContainer);
          list.style.display = "flex";
          list.style.flexDirection = "column";
        });
      });
    }
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
    this.books.push(new Book([...author], [...subject], language, title));
  }
  //method to add many books
  addBooks(bookObj) {
    for (const {
      author: [...author],
      subject: [...subject],
      language,
      title,
    } of bookObj) {
      this.addBook(author, subject, language, title);
    }
  }

  render() {
    // alert("Click a book to find out more information!");
    const createList = document.createElement("ul");
    body.appendChild(createList);
    const list = document.querySelector("ul");
    //STYLING UNORDERED LIST EL
    list.style.display = "flex";
    list.style.flexDirection = "column";
    list.style.justifyContent = "center";
    list.style.alignItems = "center";
    list.style.backgroundColor = "blue";
    Object.values(this)[0][1].render(Object.values(this));

    // for (const book of Object.values(this)[0]) {
    //   //adding commas and space between book subjects
    //   const bookSubject = function () {
    //     let subjectStr = "";
    //     for (let i = 0; i < book.subject.length; i++) {
    //       subjectStr = subjectStr + book.subject[i] + ", ";
    //       if (i === book.subject.length - 1) {
    //         subjectStr = subjectStr + book.subject[i] + " ";
    //       }
    //     }
    //     return subjectStr;
    //   };
    //   bookSubject();
    //   ////////////////////////////////////
    //   const btnItem = document.createElement("button");
    //   btnItem.innerHTML = `Title ${book.title}`;
    //   createList.appendChild(btnItem);
    //   btnItem.style.marginBottom = "5px";
    //   btnItem.style.width = "50%";
    //   btnItem.addEventListener("click", function () {
    //     body.style.height = "100vh";
    //     const modalContainer = document.createElement("div");
    //     body.appendChild(modalContainer);
    //     modalContainer.style.backgroundColor = "rgba(0,0,0,0.4)";

    //     modalContainer.style.height = "100%";
    //     modalContainer.style.display = "flex";
    //     modalContainer.style.justifyContent = "center";
    //     modalContainer.style.alignItems = "center";
    //     const modal = document.createElement("div");
    //     modalContainer.appendChild(modal);
    //     modal.innerHTML = `<p style='color: red'>Author: ${
    //       book.author
    //     }</p><p>Subject: ${bookSubject()}</p><p>Language: ${
    //       book.language
    //     }</p><p style='color: blue'>Title: ${book.title}</p>`;
    //     modal.style.display = "flex";
    //     // modal.style.opacity = "0";
    //     modal.style.flexDirection = "column";
    //     modal.style.justifyContent = "center";
    //     // modal.style.alignItems = "center";
    //     modal.style.border = "1px solid yellow";
    //     modal.style.backgroundColor = "white";
    //     modal.style.width = "50%";
    //     list.style.display = "none";
    //     const x = document.createElement("button");
    //     x.innerHTML = "EXIT";
    //     x.style.color = "black";
    //     modal.appendChild(x);
    //     x.addEventListener("click", function () {
    //       body.removeChild(modalContainer);
    //       list.style.display = "flex";
    //       list.style.flexDirection = "column";
    //     });
    //   });
    //}
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
newBookshelf.addBooks(bookData);
newBookshelf.render("");
const newBook = new Book(["Miklo"], "fantasy fiction", "english", "idk");

// for (const i of Object.values(newBookshelf)[0]) {
//   console.log(i.render());
// }
