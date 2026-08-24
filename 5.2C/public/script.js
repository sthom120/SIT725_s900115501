const getBooksButton = document.getElementById("get-books-btn");
const booksList = document.getElementById("books-list");
const bookDetails = document.getElementById("book-details");

getBooksButton.addEventListener("click", async () => {
    try {
        const response = await fetch("/api/books");
        const books = await response.json();

        booksList.innerHTML = "";
        bookDetails.innerHTML = "";

        books.forEach(book => {
            const bookElement = document.createElement("div");
            bookElement.classList.add("book-item");

            bookElement.textContent =
                `${book.title} ${book.price.$numberDecimal} AUD`;

            bookElement.addEventListener("click", () => {
                getBookDetails(book.id);
            });

            booksList.appendChild(bookElement);
        });

    } catch (error) {
        console.error("Error fetching books:", error);
    }
});

const getBookDetails = async (id) => {
    try {
        const response = await fetch(`/api/books/${id}`);
        const book = await response.json();

        bookDetails.innerHTML = `
            <h2>Book Details</h2>
            <p><strong>Title:</strong> ${book.title}</p>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Year:</strong> ${book.year}</p>
            <p><strong>Genre:</strong> ${book.genre}</p>
            <p><strong>Summary:</strong> ${book.summary}</p>
            <p><strong>Price (AUD):</strong> ${book.price.$numberDecimal}</p>
        `;

    } catch (error) {
        console.error("Error fetching book details:", error);
    }
};