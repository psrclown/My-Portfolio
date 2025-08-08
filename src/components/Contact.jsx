import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import contactImg from "../assets/images/contact-img.svg";
import { Container, Row, Col } from "react-bootstrap";

export default function Contact() {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttontext, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});
  const formRef = useRef();

  const onFormUpdate = (category, value) => {
    setFormDetails({ ...formDetails, [category]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStatus({ success: true, message: "Message sent successfully" });
          setFormDetails(formInitialDetails);
          setButtonText("Send");
        },
        (error) => {
          setStatus({
            success: false,
            message: "Something went wrong. Try again.",
          });
          setButtonText("Send");
        }
      );
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact us" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form ref={formRef} onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    name="firstName"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    name="lastName"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="you@example.com"
                    name="email"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="+91XXXXXXX"
                    name="phone"
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </Col>
                <Col>
                  <textarea
                    rows={6}
                    value={formDetails.message}
                    placeholder="Message"
                    name="message"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                  />
                  <button type="submit">
                    <span>{buttontext}</span>
                  </button>
                </Col>
                {status.message && (
                  <Col>
                    <p
                      className={
                        status.success === false ? "danger" : "success"
                      }
                    >
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
