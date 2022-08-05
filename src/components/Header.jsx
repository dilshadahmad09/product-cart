import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Badge from "@mui/material/Badge";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Header = () => {
  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href='#home'>Add to Cart</Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link href='#home'>Home</Nav.Link>
        </Nav>
        <Badge badgeContent={4} color='success'>
          <i
            class='fa-solid fa-cart-shopping text-light'
            style={{ fontSize: 25, cursor: "pointer" }}
          ></i>
        </Badge>
      </Container>
    </Navbar>
  );
};

export default Header;
