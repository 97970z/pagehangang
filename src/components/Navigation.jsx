// components/Navigation.jsx
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src="/path-to-logo.png"
            alt="한강조합 로고"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/about">
              소개
            </Nav.Link>
            <Nav.Link as={Link} to="/support">
              후원
            </Nav.Link>
            <Nav.Link as={Link} to="/participate">
              참여
            </Nav.Link>
            <Nav.Link as={Link} to="/resources">
              자료실
            </Nav.Link>
            <Nav.Link as={Link} to="/DigitalStreamMap">
              SHOP
            </Nav.Link>
          </Nav>
          <Nav>
            <Button variant="outline-primary" className="me-2">
              로그인
            </Button>
            <Button variant="primary">후원하기</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
