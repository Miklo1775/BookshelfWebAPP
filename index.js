import { bookData } from "./js/book-data.js";

const body = document.querySelector("body");
//creating class Book
class Book {
  constructor(author, subject, language, title) {
    this.author = author;
    this.subject = subject;
    this.language = language;
    this.title = title;
    this.comments = [];
  }
  //creating render method
  render(append) {
    const that = this;
    //bookSubject function fixes the subject string to add spacing and commas in appropriate location
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
    //btnBook is the what the user sees on the home/main webpage
    //When clicked on, it will display the book and its relevant contents
    btnBook.addEventListener("click", function () {
      const navigation = document.querySelector(".navbar");
      navigation.style.display = "none";
      let btn = document.querySelector(".add");
      btn.style.display = "none";

      const modalContainer = document.createElement("div");
      body.appendChild(modalContainer);
      modalContainer.style.backgroundColor = "transparent";
      body.style.height = "100vh";
      ul.style.marginTop = "0px";
      modalContainer.style.display = "flex";
      modalContainer.style.flexDirection = "column";
      modalContainer.style.height = "100%";
      modalContainer.style.width = "100%";
      modalContainer.style.display = "flex";
      modalContainer.style.justifyContent = "center";
      modalContainer.style.alignItems = "center";

      const modal = document.createElement("div");
      modalContainer.appendChild(modal);
      //the text to be displayed whenever a book is clicked on
      modal.innerHTML = `<p style='color: #eefe27'>Author: ${author}</p><p style='color: #eefe27'>Subject: ${bookSubject()}</p><p style='color: #eefe27'>Language: ${language}</p><p style='color: #eefe27'>Title: ${title}</p>`;
      modal.style.display = "flex";
      // modal.style.opacity = "0";
      modal.style.flexDirection = "column";
      modal.style.justifyContent = "center";
      modal.style.alignItems = "center";
      // modal.style.alignItems = "center";
      // modal.style.border = "1px solid yellow";
      modal.style.backgroundColor = "transparent";
      modal.style.width = "75%";
      li.style.display = "none";
      li.style.listStyle = "none";
      // li.style.backgroundColor = "white";
      // the x button is the Exit button so the user can exit the relevant book screen.
      //This returns them back to the main page
      const x = document.createElement("button");
      x.innerHTML = "EXIT";
      x.style.color = "black";
      modal.appendChild(x);
      //The exit button also essentially resets everything so that the main page can be viewed and rerendered

      x.addEventListener("click", function () {
        body.removeChild(modalContainer);
        li.style.display = "flex";
        li.style.flexDirection = "column";
        body.style.height = "100%";
        btn.style.display = "flex";
        btn.style.justifyContent = "center";
        btn.style.alignItems = "center";
        navigation.style.display = "flex";
      });

      //The createCommentBtn allows the user to access the name and comment box so that they can send a comment to the respective book
      const createCommentBtn = document.createElement("button");
      createCommentBtn.classList.add("comment-btn");
      createCommentBtn.innerHTML = "Add a Comment";
      modal.appendChild(createCommentBtn);
      const commentButton = document.querySelector(".comment-btn");
      commentButton.addEventListener("click", function () {
        commentButton.style.display = "none";
        const createCommentDiv = document.createElement("div");
        createCommentDiv.classList.add("comment-div");
        createCommentDiv.style.height = "75px";
        createCommentDiv.style.width = "50%";
        createCommentDiv.style.backgroundColor = "transparent";

        modal.appendChild(createCommentDiv);
        const createNameInput = document.createElement("input");
        createNameInput.setAttribute("placeholder", "Name");
        createNameInput.classList.add("user-name");
        createCommentDiv.appendChild(createNameInput);

        //createCommentInput creates the comment box that the user can comment in.
        //the max length of 280 characters is set by the maxlength attribute
        const createCommentInput = document.createElement("textarea");
        createCommentInput.setAttribute("row", "4");
        createCommentInput.setAttribute("maxlength", "280");
        createCommentInput.setAttribute("placeholder", "Add your comment");
        createCommentInput.classList.add("comment-input");
        createCommentDiv.appendChild(createCommentInput);
        const commentInput = document.querySelector(".comment-input");
        commentInput.style.height = "100%";
        commentInput.style.width = "100%";
        const createCommentSend = document.createElement("button");
        //send btn
        createCommentSend.innerHTML = "Send";
        // createCommentSend.style.backgroundColor = "white";
        modal.appendChild(createCommentSend);
        //When the user clicks on the send button, it pushes the comment to the
        //books own comment array and appends it to the comment box below.

        createCommentSend.addEventListener("click", function () {
          modalContainer.removeChild(createCommentBox);
          const userName = document.querySelector(".user-name").value;
          commentButton.style.display = "flex";
          commentInput.style.display = "none";
          let textValue = commentInput.value;
          that.comments.push(`${userName} says: ${textValue}`);
          console.log(that.comments);
          const createPara = document.createElement("p");
          createPara.innerHTML = `<b>${userName}</b> says: ${textValue}`;
          createCommentBox.appendChild(createPara);
          createCommentDiv.style.display = "none";
          createCommentSend.style.display = "none";
          modal.removeChild(createCommentSend);
          modal.removeChild(createCommentDiv);
          modalContainer.appendChild(createCommentBox);
        });
      });
      const createCommentBox = document.createElement("div");
      modalContainer.appendChild(createCommentBox);
      createCommentBox.classList.add("comment-div");
      createCommentBox.style.backgroundColor = "transparent";
      createCommentBox.style.display = "flex";
      createCommentBox.style.flexDirection = "column";
      createCommentBox.innerHTML = "Comments: ";
      const commentP = document.createElement("p");
      createCommentBox.appendChild(commentP);
      //the for...of loop below attempts to loop through the books comment array and reoutput it to the screen when the user exit and clicks on the same book
      for (const i of that.comments) {
        const createPara = document.createElement("p");
        createPara.innerHTML = i;
        console.log(that.comments);
        createCommentBox.appendChild(createPara);
      }
    });
  }
}

////////////////////////////////////////////////////////////////////////////
//creating class Bookshelf
class Bookshelf {
  constructor() {
    this.books = [];
  }
  //method to add just one book to the bookshelf
  addBook(author, subject, language, title) {
    this.books.unshift(new Book([...author], subject, language, title));
  }
  //method to add many books via an object
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

  //The render method in short creates the elements of the webpage. The bookshelf calls upon on the books own render function so that it can be displayed on the screen.
  render() {
    const nestThis = this;
    const body = document.querySelector("body");

    //Creating the nav element that will hold the click to add book button, about link, and contact us link
    const addNav = document.createElement("nav");
    addNav.classList.add("navbar");
    body.appendChild(addNav);
    const navEl = document.querySelector(".navbar");
    navEl.style.width = "100%";
    navEl.style.height = "50px";
    // btnDiv.style.backgroundColor = "rgba(0,0,0,0.4)";
    navEl.style.position = "fixed";
    navEl.style.top = "0";
    navEl.style.left = "0";

    //setting up the nav components
    //2 divs: 1 for the add book button, the other for the about and contact links
    //createAddDiv is for the add book button
    const createAddDiv = document.createElement("div");
    createAddDiv.classList.add("add-book-div");
    navEl.appendChild(createAddDiv);
    //createInfoDiv is for the about and contact button
    const createInfoDiv = document.createElement("div");
    createInfoDiv.classList.add("info-div");
    navEl.appendChild(createInfoDiv);
    const createAboutButton = document.createElement("a");
    createAboutButton.classList.add("about-btn");
    createAboutButton.innerHTML = "ABOUT";
    createAboutButton.setAttribute("href", "/About/about.html");
    createAboutButton.style.color = "black";
    createInfoDiv.appendChild(createAboutButton);
    const createContactBtn = document.createElement("a");
    createContactBtn.innerHTML = "CONTACT";
    createContactBtn.style.color = "black";
    createContactBtn.setAttribute("href", "/Contact/contact.html");
    createInfoDiv.appendChild(createContactBtn);

    //the below lines set up the add book button functionality
    const addBtn = document.createElement("button");
    addBtn.classList.add("add");
    createAddDiv.appendChild(addBtn);
    const btnAdd = document.querySelector(".add");
    btnAdd.style.backgroundColor = "transparent";
    btnAdd.style.width = "100%";
    btnAdd.style.height = "100%";
    btnAdd.style.color = "black";
    btnAdd.innerHTML = "Click to add a book!";
    btnAdd.addEventListener("click", function () {
      body.removeChild(navEl);
      const addBookModalContainer = document.createElement("div");
      const addBookModal = document.createElement("div");
      // const addModalHeading = document.createElement("div");
      const createInputAuthor = document.createElement("input");
      const createInputSubject = document.createElement("input");
      const createInputLang = document.createElement("input");
      const createInputTitle = document.createElement("input");
      const randoBtn = document.createElement("button");
      randoBtn.classList.add("add-book");
      createInputAuthor.type = "text";
      // createInputAuthor.setAttribute("maxlength", "5");
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
      // navEl.style.display = "none";
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
      //this is getting the add-book button from the randobutton
      const addBookButton = document.querySelector(".add-book");
      /////////////////////////////////////////
      addBookButton.innerHTML = "Click to add your book!";
      addBookButton.style.backgroundColor = "transparent";
      addBookButton.style.height = "20px";
      addBookButton.style.width = "100%";
      addBookButton.style.display = "flex";
      addBookButton.style.justifyContent = "center";
      //the addBookButton takes the users input and does a few things:
      //creates a button for the new book
      //adds the book to the bookshelf using add book method
      //and removes itself and rerenders the main page for the user with the updated book list
      addBookButton.addEventListener("click", function () {
        const newListAdd = document.createElement("button");
        newListAdd.classList.add("user-add");
        ul.appendChild(newListAdd);
        let newList = document.querySelector(".user-add");
        //the only reason the values are stored inside a variable is because I initially was going to render all of the books contents onto the main page but then decided to just create a "modal" dynamically whenever a book is called on
        let authorText = iAuthor.value;
        let subjectText = iSubject.value;
        let langText = iLang.value;
        let titleText = iTitle.value;
        nestThis.addBook([authorText], [subjectText], langText, titleText);
        console.log(nestThis);
        body.style.height = "100%";
        body.style.marginTop = "50px";
        ul.style.display = "flex";
        navEl.style.display = "flex";
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

    ul.style.display = "flex";
    ul.style.flexFlow = "column nowrap";
    ul.style.justifyContent = "center";
    ul.style.alignItems = "center";
    ul.style.listStyle = "none";
    //the for...of loop below targets each individual book inside the bookshelf and calls upon the render function of each book
    for (const i of Object.values(this)[0]) {
      i.render(ul);
      console.log(i);
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

//I tried my best to comment as much as I can. I will do my best in the future to organize my code and attempt to make lasagna out of this spaghetti.
