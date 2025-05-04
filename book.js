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

let dialog = document.querySelector("dialog")

function showDialog() {
    document.getElementById('this-dialog').show()
}

function hideDialog() {
    document.getElementById("this-dialog").close()
}