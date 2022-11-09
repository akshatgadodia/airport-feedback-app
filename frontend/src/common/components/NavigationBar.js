import React, { useContext } from "react";
import "../stylesheets/NavigationBar.css";
import { Context } from "../../App";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LogoutIcon from "@mui/icons-material/Logout";

const NavigationBar = () => {
  const { loggedInDetails, dispatch } = useContext(Context);
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
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      className={loggedInDetails.userType ? "navbar" : "navbar-hidden"}
    >
      <Container>
        <Navbar.Brand href="/home">
          <div className="navbar-logo-div">
            <img src="Images/airline-logo.png" height={50} alt="" />
            <p>SKIT INTERNATIONAL AIRPORT</p>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link eventKey="home" href="/home">
              <p>HOME</p>
            </Nav.Link>
            <Nav.Link eventKey="feedback" href="/feedback">
              <p>FEEDBACK</p>
            </Nav.Link>
            <Nav.Link eventKey="about" href="/about">
              <p>ABOUT</p>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link eventKey="logout" href="" onClick={LogoutHandler}>
              <p>
                LOGOUT &nbsp; <LogoutIcon />
              </p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
