import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

function Header(props) {
  return (
    <div className="block-header">
      <div className="block-menu">
        <Navbar className="block-nav" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">
              <img width="165px" src="/assets/images/logo_1.png" alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0 block-list-menu"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#home">TRANG CHỦ</Nav.Link>
                <Nav.Link href="#product">SẢN PHẨM</Nav.Link>
                <Nav.Link href="#partner">ĐỐI TÁC</Nav.Link>
                <Nav.Link href="#contact">LIÊN HỆ</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}

export default Header;
