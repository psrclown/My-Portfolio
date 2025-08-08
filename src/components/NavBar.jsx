import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/images/AnshLogo.png";
import "bootstrap-icons/font/bootstrap-icons.css";

import navIcon1 from "../assets/images/nav-icon1.svg";
import navIcon2 from "../assets/images/nav-icon2.svg";
import navIcon3 from "../assets/images/nav-icon3.svg";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "Home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => setActiveLink("Home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "Skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => setActiveLink("Skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "Projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => setActiveLink("Projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/psrclown/">
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://www.instagram.com/anshsingh_psr/">
                <img src={navIcon3} alt="" />
              </a>
              <a href="https://linktr.ee/Psrclown">
                <img src={navIcon2} alt="" />
              </a>
            </div>
            <a href="/public/Ansh Resume.pdf">
              <button className="vvd">
                <span>
                  <i class="bi bi-download"></i> &nbsp; Resume
                </span>
              </button>
            </a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
