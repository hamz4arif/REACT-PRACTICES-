import { Link } from "react-router-dom";

export default function Header({counter}) {
  return (
    <header className="mb-3">
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              NexusBerry
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item active">
                  <Link className="nav-link" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="dropdown01"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Products
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="dropdown01">
                  <li>
                      <Link className="dropdown-item" to="/collection/all">
                        All
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/collection/mouse">
                        Mouse
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/collection/keyboard">
                        Keyboard
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/collection/webcam">
                        Webcam
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/cart">
                    Cart {counter}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/checkout">
                    Checkout
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </header>
  )
}
