import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_ACCENTURE from "../../assets/img/experience/shuttle.jpg";
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={L_ACCENTURE} alt="Shuttle logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Software Engineer (Intern)</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong>Technology:</strong> Node JS, HTML, CSS, JavaScript, Bootstrap, PHP(OOP), MY-SQL
                    <br />
                    <strong>Duration:</strong> January 2020 - May 2020
                    <br/>
                    <strong> Description </strong>
                    <br/>
                    <ul className="text-left">
                      <li>Done some frontend & backend work given by experienced engineers</li>
                      <li>Assisting team in verifying, developing projects.</li>
                      <li>Worked with Manager to know the flow of the new projects.
                      </li>
                      <li>Learned different technologies by paining with experienced engineers. 
                      </li>
                      <li>Made some Documentation for the new projects</li>
                      {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}
                    </ul>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;