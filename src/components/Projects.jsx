import { Col, Row, Container, Tab, Nav } from "react-bootstrap";
import ProjectCards from "./ProjectCards";
import sharpImg2 from "../assets/images/color-sharp2.png";
import wanderlust from "../assets/images/wanderlust.png";
import weather from "../assets/images/weather.png";
import attendance from "../assets/images/attendance.png";
import spotify from "../assets/images/spotify.png";
import currency from "../assets/images/currency.png";
import tictac from "../assets/images/tictac.png";

export default function Projects() {
  const projects = [
    {
      title: "Wander Lust",
      description:
        "WanderLust is a platform for booking and renting short-term stays.",
      imgUrl: wanderlust,
      link: "https://wander-lust-gyaz.onrender.com/listings",
    },
    {
      title: "Spotify Clone",
      description:
        "A Spotify clone using only HTML and CSS visually replicates Spotify’s interface without any functional music playback.",
      imgUrl: spotify,
      link: "https://psrclown-spotify.netlify.app/",
    },
    {
      title: "Attendance Calculator",
      description:
        "An attendance counter calculates the number of lectures needed to reach a desired attendance percentage.",
      imgUrl: attendance,
      link: "https://attendancecounter-psrclown.netlify.app/",
    },
    {
      title: "Tic Tac Toe",
      description:
        "Tic Tac Toe is a simple grid-based game where two players try to get three marks in a row.",
      imgUrl: tictac,
      link: "https://crimson-rae-96.tiiny.site/",
    },
    {
      title: "Currency Exchange",
      description:
        "A currency exchange app shows conversion rates between different currencies.",
      imgUrl: currency,
      link: "https://currencyconverter-psrclown.netlify.app/",
    },
    {
      title: "Weather App",
      description: "A weather app shows current weather conditions.",
      imgUrl: weather,
      link: "https://weatherapp-psrclown.netlify.app/",
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Here are some of the projects I’ve built to apply and sharpen my
              full-stack development skills. Each project reflects my focus on
              performance, clean design, and practical problem-solving — whether
              it’s crafting responsive user interfaces or building scalable
              backend systems. From solo builds to collaborative apps, these
              projects showcase my journey through React, Node.js, MongoDB, and
              more.
            </p>
            <Tab.Container id="project-tabs" defaultActiveKey="first">
              <Row>
                {projects.map((project, index) => {
                  return (
                    <ProjectCards
                      key={index}
                      {...project}
                      link={project.link}
                    />
                  );
                })}
              </Row>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={sharpImg2} />
    </section>
  );
}
