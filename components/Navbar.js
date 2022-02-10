import React from "react";
import styles from "../styles/Navbar.module.css";
import homestyle from "../styles/Home.module.css";

const Navbar = () => {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-dark ${styles.navBg}`} >
        <div className="container-fluid">
          <a className={`${styles.brandName} ${homestyle.title} navbar-brand`} href="/">
            Next.js!
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
              <form className="d-flex  ">
                <input
                  className="form-control me-2 mx-4 h-4"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className={`btn btn-success ${styles.roundSearch}`} type="submit">
                <i class="bi bi-search" className={styles.searchIcon}></i>
                </button>
              </form>
              <li className="nav-item dropdown mx-3">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  contact
                </a>
              </li> */}
              {/* <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li> */}
              {/* <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li> */}
            </ul>
            <button className="btn btn-outline-secondary mx-2 " type="submit">
              Login
            </button>
            <button className="btn btn-outline-secondary" type="submit">
              SignIn
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
