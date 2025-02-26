import React from "react";
import "./Hero.css";
import { color, motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { Container, Row, Col } from "react-bootstrap"; // Import Container, Row, and Col from Bootstrap
import About from "../About/About";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import { Typewriter } from "react-simple-typewriter";
const Hero = () => {
  const handleType = (count) => {
    // access word count number

  };

  const handleDone = () => {

  };

  return (
    <section className="hero-wrapper">
      {/* Additional wrapper for background gradient */}
      <div className="white-gradient"></div>

      <Container>
        <Row className="hero-container align-items-center justify-content-center">
          {/* left side */}
          <Col md={6} className="hero-left">
            {/* Content for hero-left */}
            <div className="hero-title">
              <div className="orange" />

              <motion.h1
                initial={{ y: "2rem", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 2, type: "spring" }}
                className="hero-heading"
              >
                Hello{" "}
                <FontAwesomeIcon
                  icon={faFaceSmile}
                  bounce
                  size="lg"
                  style={{ color: "#ffd43b" }}
                />{" "}
                I'm Aditya
                <br />
                <span className="gradient-text">
                  <Typewriter
                    words={[
                      "Software Engineer",
                      "Full Stack Developer",
                      "Tech Enthusiast",
                      "Application Developer",
                    ]}
                    loop={50}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                    onLoopDone={handleDone}
                    onType={handleType}
                  />
                </span>
              </motion.h1>
              {/*  <div className="hero-description">
              <span className='secondaryText'>Find a property that suits you very easily</span>
              <span className='secondaryText'>Forget all difficulties in finding a residence for you</span>
            </div> */}
            </div>
          </Col>

          {/* right side */}
          <Col md={6} className="hero-right">
            {/* Render the About component */}
            <About />
          </Col>
        </Row>
      </Container>
      
    </section>
  );
};

export default Hero;
