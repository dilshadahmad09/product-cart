import React,{useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Badge from "@mui/material/Badge";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import './style.css'
import { useSelector, useDispatch } from "react-redux";
const Header = () => {
      const [anchorEl, setAnchorEl] = useState(null);
      const open = Boolean(anchorEl);

      const getData = useSelector((state) => state.cartReducer);
      

      console.log("dils", getData);

      const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
      const handleClose = () => {
        setAnchorEl(null);
      };
      
  return (
    <Navbar bg='dark' variant='dark' style={{ height: "60px" }}>
      <Container>
        <NavLink to='/' className='text-decoration-none text-light mx-3'>
          Add to Cart
        </NavLink>
        <Nav className='me-auto'>
          <NavLink to='/' className='text-decoration-none text-light'>
            Home
          </NavLink>
        </Nav>
        <Badge
          badgeContent={4}
          color='success'
          id='demo-positioned-button'
          aria-controls={open ? "demo-positioned-menu" : undefined}
          aria-haspopup='true'
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <i
            class='fa-solid fa-cart-shopping text-light'
            style={{ fontSize: 25, cursor: "pointer" }}
          ></i>
        </Badge>
      </Container>
      <Menu
        id='demo-positioned-menu'
        aria-labelledby='demo-positioned-button'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <div
          className='card_details d-flex justify-content-center align-items-center'
          style={{ width: "24rem", padding: 10, position: "relative" }}
        >
          <i
            className='fas fa-close smallclose'
            style={{
              position: "absolute",
              right: 20,
              top: 2,
              fontSize: 23,
              cursor: "pointer",
            }}
            onClick={handleClose}
          ></i>
          <p style={{ fontSize: 22 }}>Your Cart is Empty!</p>
          <img
            className='emptycart_img'
            style={{ width: "5rem", padding: 10 }}
            src='https://www.pngkey.com/png/detail/231-2317260_an-empty-shopping-cart-viewed-from-the-side.png'
            alt=''
          />
        </div>
      </Menu>
    </Navbar>
  );
};

export default Header;
