import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import "./footer.style.css";

const FooterPanel = () => {
  return (
    <div className="py-2 text-center footer-style" id="contact">
      <Row>
          <Col className="d-flex justify-content-center flex-wrap">
            <div className="m-2">
              <a href="mailto:samon3123@gmail.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-danger" title="samon3123@gmail.com">
                  <i className="fas fa-envelope-square"></i>
                </Button>
              </a>
            </div>

            <div className="m-2">
              <a href="https://github.com/samon03/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-light" title="My other projects">
                  <i className="fab fa-github-square"></i>
                </Button>
              </a>
            </div>

            <div className="m-2">
              <a href="https://linkedin.com/in/samsun-nahar-samon-06409a147/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-primary" title="Visit my LinkenIn">
                  <i className="fab fa-linkedin"></i> 
                </Button>
              </a>
            </div>
          
          </Col>
        </Row>
        <hr/>
      <div>© Samsun Nahar Samon &nbsp; {new Date().getFullYear()}</div>
    </div>
  );
};

export default FooterPanel;
