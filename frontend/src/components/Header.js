import React, { useEffect, useState } from "react";
import { Route, Routes, Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, Container, NavDropdown, Image } from "react-bootstrap";
import SearchBox from "./SearchBox";
import { logout } from "../actions/userActions";
import "./Header.css";

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };
  // sticky header
  const [small, setSmall] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => setSmall(window.pageYOffset > 100);
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <header className={`header ${small ? "small js-header-sticky" : ""}`}>
      <section className="top-navbar">
        <Container>
          <div className="d-flex justify-content-between flex-wrap">
            <p className="mb-0">
              {" "}
              <span className="icon icon-phone">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  aria-hidden="true"
                  class="w-6 h-6 text-gray-800 dark:text-white"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m18.4 14.8-1.2-1.3a1.7 1.7 0 0 0-2.4 0l-.7.7a1.7 1.7 0 0 1-2.4 0l-1.9-1.9a1.7 1.7 0 0 1 0-2.4l.7-.6a1.7 1.7 0 0 0 0-2.5L9.2 5.6a1.6 1.6 0 0 0-2.4 0c-3.2 3.2-1.7 6.9 1.5 10 3.2 3.3 7 4.8 10.1 1.6a1.6 1.6 0 0 0 0-2.4Z"
                  />
                </svg>
              </span>{" "}
              for queries contact{" "}
              <a href="tel:+918789505162">+91 878-950-5162</a>
            </p>
            <p className="mb-0">
              <span className="icon icon-email">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  aria-hidden="true"
                  class="w-6 h-6 text-gray-800 dark:text-white"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-width="2"
                    d="m3.5 5.5 7.9 6c.4.3.8.3 1.2 0l7.9-6M4 19h16c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1H4a1 1 0 0 0-1 1v12c0 .6.4 1 1 1Z"
                  />
                </svg>
              </span>{" "}
              <a href="mailto:mpfsiwan@gmail.com">mpfsiwan@gmail.com</a>
            </p>
          </div>
        </Container>
      </section>

      <Navbar className="header-navbar py-1" expand="lg" collapseOnSelect>
        <Container>
          <Link to="/">
            <div className="logo-wrapper">
              <Image src="/images/mpf-logo.png" alt="MPF LOGO" width={120} />
            </div>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Routes>
              <Route
                render={({ history }) => <SearchBox history={history} />}
              />
            </Routes>
            <Nav className="ml-auto">
              <Nav.Link className="text-primary" as={NavLink} to="/about">
                About
              </Nav.Link>
              <Nav.Link className="text-primary" as={NavLink} to="/shop">
                Shop
              </Nav.Link>
              <Nav.Link className="text-primary" as={NavLink} to="/blog">
                Blogs
              </Nav.Link>
              <Nav.Link className="text-primary" as={NavLink} to="/cart">
                <i className="fas fa-shopping-cart"></i> Cart
              </Nav.Link>

              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <Nav.Link className="text-primary">
                    <NavDropdown.Item as={NavLink} to="/profile">
                      Profile
                    </NavDropdown.Item>
                  </Nav.Link>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Nav.Link className="text-primary" as={NavLink} to="/login">
                  <i className="fas fa-user"></i> Sign In
                </Nav.Link>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title="Admin" id="adminmenu">
                  <Nav.Link className="text-primary">
                    <NavDropdown.Item as={NavLink} to="/admin/userlist">
                      Users
                    </NavDropdown.Item>
                  </Nav.Link>
                  <Nav.Link className="text-primary">
                    <NavDropdown.Item as={NavLink} to="/admin/productlist">
                      Products
                    </NavDropdown.Item>
                  </Nav.Link>
                  <Nav.Link className="text-primary">
                    <NavDropdown.Item as={NavLink} to="/admin/bloglist">
                      Blogs
                    </NavDropdown.Item>
                  </Nav.Link>
                  <NavLink className="text-primary">
                    <NavDropdown.Item as={NavLink} to="/admin/orderlist">
                      Orders
                    </NavDropdown.Item>
                  </NavLink>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
