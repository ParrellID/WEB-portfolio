import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Farrell Athar Ramadhan </span>
            from <span className="purple"> Bekasi, Indonesia</span>
            <br />I am a Beginner in Website Developer, But in NodeJS Developer Insha Allah I am Senior.
            <br />
            <br />
            Apart from Coding, Some Other Activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Learn Coding
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to Build Different Things and Make Yourself Thrive!!"{" "}
          </p>
          <footer className="blockquote-footer">FarrellID</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
