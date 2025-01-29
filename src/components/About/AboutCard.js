import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">YASH SRIVASTAVA </span>
            from <span className="purple"> PUNE, India.</span>
            <br />
            I am currently a CSE Computer Science Enginneer in SRM Kattankulathur.
            <br />
            I Am In 3rd year 2nd semester as of now learning my way into industries and jobs 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring 
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I don't have dreams, I have goals"{" "}
          </p>
          <footer className="blockquote-footer">YASH</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
