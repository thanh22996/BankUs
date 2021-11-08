/* eslint-disable @next/next/link-passhref */
import React, { useState } from "react";
import Link from "next/link";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

function Header(props) {
  const [stateActive, setStateActive] = useState("home");
  const handleActive = (active) => {
    setStateActive(active);
  };
  return (
    <div className="block-header">
      <div className="block-menu">
        <Navbar className="block-nav" expand="lg">
          <Container fluid>
            <Navbar.Brand href="/">
              <img
                width="165px"
                src="/assets/images/home/logo_bankus.png"
                alt="logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0 block-list-menu"
                style={{ maxHeight: "100px" }}
                navbarScroll
                defaultActiveKey="/"
              >
                <Link href="/">
                  <span
                    className={stateActive === "home" && "active"}
                    onClick={() => handleActive("home")}
                  >
                    TRANG CHỦ
                  </span>
                </Link>
                <Link href="/products">
                  <span
                    className={stateActive === "products" && "active"}
                    onClick={() => handleActive("products")}
                  >
                    SẢN PHẨM
                  </span>
                </Link>
                <Link href="/partner">
                  <span
                    className={stateActive === "partner" && "active"}
                    onClick={(e) => handleActive("partner")}
                  >
                    ĐỐI TÁC
                  </span>
                </Link>
                <Link href="/contact">
                  <span
                    className={stateActive === "contact" && "active"}
                    onClick={(e) => handleActive("contact")}
                  >
                    LIÊN HỆ
                  </span>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}

export default Header;
