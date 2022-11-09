import React, { useContext } from "react";
import "../stylesheets/NavigationBar.css";
import { Context } from "../../App";
import { useNavigate, useLocation } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const NavigationBar = () => {
  const { loggedInDetails, dispatch } = useContext(Context);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(loggedInDetails);
  const LogoutHandler = () => {
    localStorage.removeItem("UserName");
    navigate("/");
    dispatch({
      type: "UserLogout",
    });
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className={(loggedInDetails.userType) ? "navbar" : "navbar-hidden"}>
    <Container>
      <Navbar.Brand href="/home">Airport</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Nav.Link eventKey="home" href="/home">Home</Nav.Link>
          <Nav.Link eventKey="feedback" href="/feedback"> {(loggedInDetails.userType === "user") ? "Give Feedback" : "View Feedbacks"} </Nav.Link>
          <Nav.Link eventKey="about" href="/about"> About </Nav.Link>
          <Nav.Link eventKey="logout" href="" onClick={LogoutHandler}> Logout </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default NavigationBar;
