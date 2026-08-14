const getBooks = async () => {
    try {
        const response = await fetch("/api/books");
        const books = await response.json();

        const booksList = document.getElementById("books-list");

        books.forEach(book => {
            const bookElement = document.createElement("div");
            bookElement.classList.add("book");

            bookElement.innerHTML = `
                <h2>${book.title}</h2>
                <p>by ${book.author}</p>
            `;

            booksList.appendChild(bookElement);
        });
    } catch (error) {
        console.error("Error fetching books:", error);
    }
};

getBooks();