import "./App.css";
import Books from "./Books";
import Home from "./Home";
import MyBooks from "./MyBooks";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Register";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:8080/api");
    setBooks(response.data);
  };

  const addBook = async (book) => {
    const params = {
      book: book,
    };
    await axios.post("http://localhost:8080/book", params);
    fetchBooks();
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/books"
            element={
              <Books books={books} addBook={addBook} fetchBooks={fetchBooks} />
            }
          />
          <Route path="/mybooks" element={<MyBooks />} />
          <Route
            path="/register"
            element={<Register fetchBooks={fetchBooks} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
