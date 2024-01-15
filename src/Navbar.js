import React from "react";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary bg-dark"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Book Store
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/books">
                Available Books
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/mybooks" aria-disabled="true">
                My Books
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/register" aria-disabled="true">
                  New Book Register
                </a>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
