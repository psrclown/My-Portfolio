import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import nodeImg from "../assets/images/pngwing.com.png";
import vs from "../assets/images/vs.png";
import boot from "../assets/images/bootstrap.png";
import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import js from "../assets/images/js.png";
import reactJs from "../assets/images/react.png";
import express from "../assets/images/express.png";
import mysql from "../assets/images/mysql.png";
import mongo from "../assets/images/mongo.png";
import github from "../assets/images/github.png";
import java from "../assets/images/java.png";
import tailwind from "../assets/images/tailwind.png";

import s65 from "../assets/images/65.png";
import s70 from "../assets/images/70.png";
import s75 from "../assets/images/75.png";
import s85 from "../assets/images/85.png";
import s95 from "../assets/images/95.png";
import s90 from "../assets/images/90.png";
import s80 from "../assets/images/80.png";

import colorSharp from "../assets/images/color-sharp.png";

export default function Skills() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    largeDesktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                Here are the core technologies and tools I’ve worked with
                throughout my web development journey. From front-end frameworks
                to backend logic and everything in between, these skills
                represent my ability to build complete, responsive, and scalable
                web applications.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={s90} alt="" />
                  <h5>
                    <img src={html} className="icon" />
                    &nbsp; HTML
                  </h5>
                </div>
                <div className="item">
                  <img src={s85} alt="" />
                  <h5>
                    <img src={css} className="icon" />
                    &nbsp; CSS
                  </h5>
                </div>
                <div className="item">
                  <img src={s80} alt="" />
                  <h5>
                    <img src={js} className="icon" />
                    &nbsp; JavaSript
                  </h5>
                </div>
                <div className="item">
                  <img src={s85} alt="" />
                  <h5>
                    <img src={reactJs} className="icon" />
                    &nbsp; React JS
                  </h5>
                </div>
                <div className="item">
                  <img src={s80} alt="" />
                  <h5>
                    <img src={express} className="icon" />
                    &nbsp; Express
                  </h5>
                </div>

                <div className="item">
                  <img src={s70} alt="" />
                  <h5>
                    <img src={mongo} className="icon" />
                    &nbsp; Mongo DB
                  </h5>
                </div>
                <div className="item">
                  <img src={s65} alt="" />
                  <h5>
                    <img src={mysql} className="icon" /> &nbsp; MySQL
                  </h5>
                </div>
              </Carousel>
              <br />
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={s70} alt="" />
                  <h5>
                    <img src={nodeImg} className="icon" />
                    &nbsp; NodeJS
                  </h5>
                </div>
                <div className="item">
                  <img src={s70} alt="" />
                  <h5>
                    <img src={tailwind} className="icon width" />
                    &nbsp; Tailwind CSS
                  </h5>
                </div>
                <div className="item">
                  <img src={s65} alt="" />
                  <h5>
                    <img src={boot} className="icon" />
                    &nbsp; Bootstrap
                  </h5>
                </div>
                <div className="item">
                  <img src={s65} alt="" />
                  <h5>
                    <img src={java} className="icon" />
                    &nbsp; Java
                  </h5>
                </div>
                <div className="item">
                  <img src={s95} alt="" />
                  <h5>
                    <img src={github} className="icon" />
                    &nbsp; GitHub
                  </h5>
                </div>
                <div className="item">
                  <img src={s90} alt="" />
                  <h5>
                    <img src={vs} className="icon" /> &nbsp; VS Code
                  </h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp} className="background-image-left" />
    </section>
  );
}
