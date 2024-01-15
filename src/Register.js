import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = ({ fetchBooks }) => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState(0);

  const navigate = useNavigate();

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const params = {
      name: name,
      author: author,
      price: price,
    };
    await axios.post("http://localhost:8080/api", params);
    fetchBooks();
    navigate("/books");
  };

  return (
    <div className="container my-2">
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label class="form-label">Name</label>
          <input class="form-control" value={name} onChange={handleName} />
        </div>
        <div class="mb-3">
          <label class="form-label">Author</label>
          <input class="form-control" value={author} onChange={handleAuthor} />
        </div>

        <div class="mb-3">
          <label class="form-label">Price</label>
          <input
            class="form-control"
            type="number"
            value={price}
            onChange={handlePrice}
          />
        </div>

        <button type="submit" class="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
