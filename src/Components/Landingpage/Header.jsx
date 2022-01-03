import React from "react";
import "../style.css";
import "../responsive.css";
import { Container, Navbar, Nav } from "react-bootstrap";

import { NavLink } from "react-router-dom";
export function Header() {
 
  return (
    <div className="header">
      <Navbar collapseOnSelect expand="lg"  >
        <Container>
          <Navbar.Brand to="/"><img src="./images/animation_500_ksud4yk1.gif" alt="" /></Navbar.Brand>
         
          <Navbar.Toggle aria-controls="responsive-navbar-nav">
            <span className="navbar-toggler-icon mt-1" ></span>
            <span  className="navbar-toggler-icon " ></span>
            <span  className="navbar-toggler-icon " ></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
         
            <Nav className="">
              <NavLink exact  className="nav-link" to="/">Home</NavLink>
              <NavLink exact className="nav-link" to="/Work">Work</NavLink>
              <NavLink exact  className="nav-link" to="/Contact">Contact</NavLink>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}










































































