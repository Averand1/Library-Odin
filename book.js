const myLibrary = []

function Book(title, author, pages, read) {
    if (!new.target) {
        return "Use new before creating an object"
    }
    this.id = crypto.randomUUID();
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages}, ${this.read}`
    }
}

function addBookToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read)
    myLibrary.push(book)
}

addBookToLibrary("1984", "George Orwell", "312", "read")
addBookToLibrary("Seeing Like A State", "James C. Scott", "397", "Read  ")

function displayBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        const book = myLibrary[i]
        let main = document.getElementsByClassName("main")
        let books = document.getElementsByClassName("books")[0]
        let row = document.createElement("tr")
        let book_title = document.createElement("td")
        let book_author = document.createElement("td")
        let book_pages = document.createElement("td")
        let book_read = document.createElement("td")

        book_title.textContent = book.title
        book_author.textContent = book.author
        book_pages.textContent = book.pages
        book_read.textContent = book.read


        row.append(book_title, book_author, book_pages, book_read)
        books.appendChild(row)
    }
}

displayBooks()

