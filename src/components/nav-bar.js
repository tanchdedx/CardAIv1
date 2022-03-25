import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./logout-button";
import LoginButton from "./login-button";
import logo from "../assets/Card AI.png";

const MainNav = () => (
  <Nav className="mr-auto">
    <Nav.Link
      as={RouterNavLink}
      to="/"
      exact
      activeClassName="router-link-exact-active"
    >
      Home
    </Nav.Link>
    <Nav.Link
      as={RouterNavLink}
      to="/features"
      exact
      activeClassName="router-link-exact-active"
    >
      Features
    </Nav.Link>


    <Nav.Link
      as={RouterNavLink}
      to="/profile"
      exact
      activeClassName="router-link-exact-active"
    >
      Profile
    </Nav.Link>
    <Nav.Link
      as={RouterNavLink}
      to="/external-api"
      exact
      activeClassName="router-link-exact-active"
    >
      External API
    </Nav.Link>
    <Nav.Link
      as={RouterNavLink}
      to="/about-us"
      exact
      activeClassName="router-link-exact-active"
    >
      About Us
    </Nav.Link>

  </Nav>
);

const AuthNav = () => {
  const {isAuthenticated} = useAuth0();

  return(
    <Nav className="justify-content-end">
      {isAuthenticated ? <LogoutButton/> : <LoginButton />}

    </Nav>
  )

};

const NavBar = () => {
  return (
    <Navbar bg="light" expand="md">
      <Container>
      <Navbar.Brand href="/">
      <img className="mb-3 app-logo" src={logo} alt="React logo" width="80" />
</Navbar.Brand>

        <MainNav />
        <AuthNav />
      </Container>
    </Navbar>
  );
};

export default NavBar;
