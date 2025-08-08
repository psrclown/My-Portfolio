import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/images/Ansh logo.png";
import navIcon1 from "../assets/images/nav-icon1.svg";
import navIcon2 from "../assets/images/nav-icon2.svg";
import navIcon3 from "../assets/images/nav-icon3.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col sm={6}>
            <img src={logo} alt="logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
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
            <p>&copy; 2025 | All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
