import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar, Col, Row } from "react-bootstrap";

import "./footer.css";

const Footer = () => {

  return (
    <>
      <Col className="footer-container">
        
        <p className="footerText">Made By</p>
        <Navbar className="justify-content-center footerText">
          <Nav>
            <Nav.Item>
              <Nav.Link target="_blank" href="https://github.com/Sagar-Mondal">
                Sagar Mondal
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link target="_blank" href="https://github.com/Rishima15">
                Rishima Chowdhury
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link target="_blank" href="https://github.com/Spandan1132">
              Spandan Bhowmick
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link target="_blank" href="https://github.com/aritra-2003">
              Aritra Ganai
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link target="_blank" href="https://github.com/Sreyashidey">
              Sreyashi Dey
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar>
      </Col>
    </>
  );
};

export default Footer;

