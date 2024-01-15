import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Books = ({ books, addBook, fetchBooks }) => {
  const navigate = useNavigate();

  useEffect(() => {}, [books]);

  const addMyBook = async (book) => {
    await addBook(book);
    navigate("/mybooks");
  };

  const renderedBooks = books.map((book) => {
    return (
      <tr key={book.id}>
        <th scope="row">{book.id}</th>
        <td>{book.name}</td>
        <td>{book.author}</td>
        <td>{book.price}</td>
        <td>
          <button
            className="btn btn-secondary btn-sm"
            onClick={() => addMyBook(book)}
          >
            Add to MyBook
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

export default Books;
