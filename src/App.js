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
  const [mybooks, setMyBooks] = useState([]);

  const fetchMyBooks = async () => {
    const response = await axios.get("http://localhost:8080/book/mybooks");
    setMyBooks(response.data);
  };

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

  const deleteMyBook = async (book) => {
    try {
      await axios.delete(`http://localhost:8080/book/${book.id}`);

      fetchMyBooks();
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  useEffect(() => {
    fetchBooks();
    fetchMyBooks();
  }, []);

  return (
    <div>
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/books"
            element={<Books books={books} addBook={addBook} />}
          />
          <Route
            path="/mybooks"
            element={<MyBooks books={mybooks} deleteMyBook={deleteMyBook} />}
          />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
