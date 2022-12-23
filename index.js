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
    btnBook.innerHTML = `
    <p style='color: blue'>Title: ${this.title}`;
    li.appendChild(btnBook);
    btnBook.style.border = "1px solid gray";
    btnBook.style.width = "50%";
    btnBook.addEventListener("click", function () {
      let btn = document.querySelector(".add");
      btn.style.display = "none";

      const modalContainer = document.createElement("div");
      body.appendChild(modalContainer);
      modalContainer.style.backgroundColor = "transparent";
      body.style.height = "100vh";
      ul.style.marginTop = "0px";
      modalContainer.style.height = "100%";
      modalContainer.style.width = "100%";
      modalContainer.style.display = "flex";
      modalContainer.style.justifyContent = "center";
      modalContainer.style.alignItems = "center";
      const modal = document.createElement("div");
      modalContainer.appendChild(modal);
      modal.innerHTML = `<p style='color: #eefe27'>Author: ${author}</p><p style='color: #eefe27'>Subject: ${bookSubject()}</p><p style='color: #eefe27'>Language: ${language}</p><p style='color: #eefe27'>Title: ${title}</p>`;
      modal.style.display = "flex";
      // modal.style.opacity = "0";
      modal.style.flexDirection = "column";
      modal.style.justifyContent = "center";
      // modal.style.alignItems = "center";
      // modal.style.border = "1px solid yellow";
      modal.style.backgroundColor = "transparent";
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
        btn.style.display = "flex";
        btn.style.justifyContent = "center";
        btn.style.alignItems = "center";
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
    this.books.unshift(new Book([...author], subject, language, title));
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
    const nestThis = this;
    const body = document.querySelector("body");
    const addDiv = document.createElement("div");
    addDiv.classList.add("btnDiv");
    body.appendChild(addDiv);
    const btnDiv = document.querySelector(".btnDiv");
    btnDiv.style.width = "100%";
    btnDiv.style.height = "50px";
    // btnDiv.style.backgroundColor = "rgba(0,0,0,0.4)";
    btnDiv.style.position = "fixed";
    btnDiv.style.top = "0";
    btnDiv.style.left = "0";

    //Adding book functionality
    const newBtn = document.createElement("button");
    newBtn.classList.add("add");
    btnDiv.appendChild(newBtn);
    const btnAdd = document.querySelector(".add");
    btnAdd.style.backgroundColor = "#eefe27";
    btnAdd.style.width = "100%";
    btnAdd.style.height = "100%";
    btnAdd.style.color = "black";
    btnAdd.innerHTML = "Click to add a book!";
    btnAdd.addEventListener("click", function () {
      btnDiv.removeChild(btnAdd);
      //creating ele for btnAdd
      const addBookModalContainer = document.createElement("div");
      const addBookModal = document.createElement("div");
      const addModalHeading = document.createElement("div");
      const createInputAuthor = document.createElement("input");
      const createInputSubject = document.createElement("input");
      const createInputLang = document.createElement("input");
      const createInputTitle = document.createElement("input");
      const randoBtn = document.createElement("button");
      randoBtn.classList.add("add-book");
      createInputAuthor.type = "text";
      createInputSubject.type = "text";
      createInputLang.type = "text";
      createInputTitle.type = "text";
      createInputAuthor.id = "author";
      createInputSubject.id = "subject";
      createInputLang.id = "lang";
      createInputTitle.id = "title";

      ////////////////////////////////////////////////////
      addBookModalContainer.classList.add("book-container");
      addBookModal.classList.add("book-modal");
      /*******appending el to appropriate parent*******/
      body.appendChild(addBookModalContainer);
      const bookContainer = document.querySelector(".book-container");
      bookContainer.appendChild(addBookModal);
      /*******calling upon newly appended el***********/

      const bookModal = document.querySelector(".book-modal");
      //styling el
      body.style.height = "100vh";
      body.style.marginTop = "0";
      ul.style.display = "none";
      btnDiv.style.display = "none";
      btnAdd.style.display = "none";
      bookContainer.style.backgroundImage =
        "conic-gradient(#eefe27, black 40%, black)";
      bookContainer.style.height = "100%";
      bookContainer.style.width = "100%";
      bookContainer.style.display = "flex";
      bookContainer.style.justifyContent = "center";
      bookContainer.style.alignItems = "center";
      bookModal.style.height = "50%";
      bookModal.style.width = "50%";
      bookModal.style.backgroundColor = "transparent";
      bookModal.style.display = "flex";
      bookModal.style.flexDirection = "column";
      bookModal.style.justifyContent = "space-between";
      bookModal.style.alignItems = "center";
      bookModal.style.paddingTop = "50px";

      /////////////////////////////////////////
      bookModal.appendChild(createInputAuthor);
      bookModal.appendChild(createInputSubject);
      bookModal.appendChild(createInputLang);
      bookModal.appendChild(createInputTitle);
      bookModal.appendChild(randoBtn);
      /////////////////////////////////////////
      const iAuthor = document.getElementById("author");
      iAuthor.placeholder = "Author";
      const iSubject = document.getElementById("subject");
      iSubject.placeholder = "Subject";
      const iLang = document.getElementById("lang");
      iLang.placeholder = "Language";
      const iTitle = document.getElementById("title");
      iTitle.placeholder = "Title";
      const addBookButton = document.querySelector(".add-book");
      /////////////////////////////////////////
      addBookButton.innerHTML = "Click to add your book!";
      addBookButton.style.backgroundColor = "transparent";
      addBookButton.style.height = "20px";
      addBookButton.style.width = "100%";
      addBookButton.style.display = "flex";
      addBookButton.style.justifyContent = "center";
      addBookButton.addEventListener("click", function () {
        const newListAdd = document.createElement("button");
        newListAdd.classList.add("user-add");
        ul.appendChild(newListAdd);
        let newList = document.querySelector(".user-add");
        let authorText = iAuthor.value;
        let subjectText = iSubject.value;
        let langText = iLang.value;
        let titleText = iTitle.value;
        newList.innerHTML = `<p style='color: red'>Author: ${authorText}</p><p>Subject: ${subjectText}</p><p>Language: ${langText}</p><p style='color: blue'>Title: ${titleText}</p>`;
        nestThis.addBook([authorText], [subjectText], langText, titleText);
        console.log(nestThis);
        body.style.height = "100%";
        body.style.marginTop = "50px";
        ul.style.display = "flex";
        btnDiv.style.display = "flex";
        btnAdd.style.display = "flex";
        bookModal.removeChild(addBookButton);
        bookContainer.removeChild(bookModal);
        body.removeChild(bookContainer);
        body.removeChild(ul);
        btnAdd.style.display = "flex";
        nestThis.render();
      });
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
    ul.style.backgroundColor = "black";
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
newBookshelf.addBook(
  ["J.K. Rowling"],
  ["Fantasy Fiction"],
  "English",
  "Harry Potter"
);
newBookshelf.addBook(["Miklo"], ["fiction"], "english", "IDK");
newBookshelf.addBooks(bookData);
newBookshelf.render();
