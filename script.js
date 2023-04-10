let myLibrary = [];
let bookContainer = document.getElementById("book-container");
const submit = document.querySelector("#submit");
function Book(title, author, pages) {
  (this.Title = title), (this.Author = author), (this.Pages = pages)
}
submit.addEventListener('click', function () {
  let author = document.getElementById("author").value;
  let title = document.getElementById("title").value;
  let pages = document.getElementById("pages").value;
  let status = document.getElementById("status");
  if (status.checked == true)
    flag = "Read";
  else
    flag = "Unread";
  let theBook = new Book(title, author, pages);
  if (author != '' && title != '' && pages != '') {
    addBookToLibrary(theBook);
  }
  else
    alert("All fields are required to proceed");
});
function addBookToLibrary(theBook) {
  myLibrary.push(theBook);
  let newBook = document.createElement("div");
  for (let i in theBook) {
    let key = document.createElement("p");
    key.textContent = i + " : " + theBook[i];
    console.log(i);
    newBook.appendChild(key);
  }
  let readBtn = document.createElement("button");
  readBtn.textContent = flag;
  console.log(flag);
  if (flag == "Read")
    readBtn.className = "read-btn";
  else
    readBtn.className = "unread-btn";
  readBtn.addEventListener("click", () => {
    if (readBtn.className == "read-btn") {
      readBtn.classList.remove("read-btn");
      readBtn.classList.add("unread-btn");
      readBtn.textContent = "Unread";
    }
    else {
      readBtn.classList.remove("unread-btn");
      readBtn.classList.add("read-btn");
      readBtn.textContent = "Read";
    }
  });
  newBook.appendChild(readBtn);
  let deletebtn = document.createElement("button");
  deletebtn.textContent = "Delete";
  deletebtn.className = "delete-btn";
  newBook.appendChild(deletebtn);
  newBook.className = 'book';
  deletebtn.addEventListener("click", () => {
    bookContainer.removeChild(newBook);
  });
  bookContainer.appendChild(newBook);
}