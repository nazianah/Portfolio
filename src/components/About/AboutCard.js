import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Jhakri Nazianah  </span>
            from <span className="purple"> Ally Lane Valley Des Pretres, Mauritius.</span>
            <br />
            I am currently looking for an internship and work opportunity.
            <br />
            I have completed bootcamp of full stack Javascript web developement @ Developers.institute Mauritius
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Success is not about being the best. It's about becoming your best self!"{" "}
          </p>
          <footer className="blockquote-footer">Nazianah</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
