import { useEffect, useState } from "react";
import axios from "axios";

const MyBooks = () => {
  const handleDelete = async (book) => {
    try {
      await axios.delete(`http://localhost:8080/book/${book.id}`);
      fetchBooks();
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:8080/book");
    setBooks(response.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  if (books.length === 0) {
    return (
      <div className="container my-2">
        <strong className="text-warning-emphasis fs-1">
          Please add your favourite books to display here
        </strong>
      </div>
    );
  }

  const renderedBooks = books.map((book) => {
    return (
      <tr key={book.id}>
        <th scope="row">{book.book.id}</th>
        <td>{book.book.name}</td>
        <td>{book.book.author}</td>
        <td>{book.book.price}</td>
        <td>
          <button
            className="btn btn-secondary btn-sm"
            onClick={() => handleDelete(book)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div className="container my-2">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name of the Book</th>
            <th scope="col">Author</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>{renderedBooks}</tbody>
      </table>
    </div>
  );
};

export default MyBooks;
