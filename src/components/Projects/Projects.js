import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/bus.png";
import editor from "../../Assets/Projects/shopping.png";
import chatify from "../../Assets/Projects/weather.png";
import bitsOfCode from "../../Assets/Projects/portfolio.png";
import praga from "../../Assets/Projects/praga.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Weather App"
              description="A real-time weather application that fetches and displays accurate weather data like temperature, humidity, and wind speed using the OpenWeatherMap API. Designed with a clean and responsive UI, allowing users to search any city and view live weather updates instantly.Using React,OpenWeather."
              ghLink="https://github.com/PRAGADEESH123ps/opeanweather"
              demoLink="https://opeanweather.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Portfolio"
              description="A modern, responsive personal portfolio built with React and Tailwind CSS,showcasing my projects,skills,and experience.Designed with smooth UI interactions,reusable components,and mobile-first responsiveness to create a professional online presence.Using React,TailwindCss"
              ghLink="https://github.com/PRAGADEESH123ps/portfolio"
              demoLink="https://portfolio-phi-seven-75.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Shopping-Cart"
              description="A modern e-commerce shopping cart built with React, Redux for state management, and styled using Tailwind CSS. Users can browse products,add/remove items from the cart,and view real-time cart updates with a responsive and seamless user experience.Using Readux,Fakeapi"
              ghLink="https://github.com/PRAGADEESH123ps/shopping-cart"
              demoLink="https://shopping-cart-ten-ivory.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Ticket App"
              description="A full-stack travel application developed using React and Django. Users can explore destinations, view travel packages, and book trips in real-time. The app features a secure booking system, dynamic data management, and a fully responsive with Tailwind CSS."
              ghLink="https://github.com/PRAGADEESH123ps/travel-app"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={praga}
              isBlog={false}
              title="Grocery store"
              description="A responsive grocery store web app built using React and Tailwind CSS.
Users can browse products, add items to their cart, and view dynamic pricing updates in real-time. The app features a clean UI, smooth navigation with React Router, and persistent cart management using localStorage."
              ghLink="https://github.com/PRAGADEESH123ps/travel-app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
