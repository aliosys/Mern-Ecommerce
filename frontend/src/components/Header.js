import React from 'react';
import {Route, Routes, Link, NavLink} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
// import {div} from 'react-router-bootstrap';
import {Navbar, Nav, Container, NavDropdown, Image} from 'react-bootstrap';
import SearchBox from './SearchBox';
import {logout} from '../actions/userActions';

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const {userInfo} = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header>
      <Navbar
        className="position-relative"
        bg="dark"
        variant="dark"
        expand="lg"
        collapseOnSelect>
        <Container>
          <Link to="/">
            <Navbar.Brand>
              <Image src="/images/mpf-logo.png" alt="MPF LOGO" width={120} />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Routes>
              <Route render={({history}) => <SearchBox history={history} />} />
            </Routes>
            <Nav className="ml-auto">
              <Nav.Link as={NavLink} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={NavLink} to="/shop">
                Shop
              </Nav.Link>
              <Nav.Link as={NavLink} to="/blog">
                Blogs
              </Nav.Link>
              <Nav.Link as={NavLink} to="/cart">
                <i className="fas fa-shopping-cart"></i> Cart
              </Nav.Link>

              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <Nav.Link>
                    <NavDropdown.Item as={NavLink} to="/profile">
                      Profile
                    </NavDropdown.Item>
                  </Nav.Link>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Nav.Link as={NavLink} to="/login">
                  <i className="fas fa-user"></i> Sign In
                </Nav.Link>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title="Admin" id="adminmenu">
                  <Nav.Link>
                    <NavDropdown.Item as={NavLink} to="/admin/userlist">
                      Users
                    </NavDropdown.Item>
                  </Nav.Link>
                  <Nav.Link>
                    <NavDropdown.Item as={NavLink} to="/admin/productlist">
                      Products
                    </NavDropdown.Item>
                  </Nav.Link>
                  <Nav.Link>
                    <NavDropdown.Item as={NavLink} to="/admin/bloglist">
                      Blogs
                    </NavDropdown.Item>
                  </Nav.Link>
                  <NavLink>
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
