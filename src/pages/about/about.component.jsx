import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button'

import Profile from '../../assets/img/profile/WhatsApp Image 2020-03-03 at 11.30.58 PM.jpeg';

import './about.style.css';

const About = () => {
    return (
        <div id="about">
            <div className="about">
                <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
                <Container>
                    <Row className="pt-3 pb-5 align-items-center">
                        <Col xs={12} md={6}>
                        <Row className="justify-content-center mb-2 mr-2 ">
                            <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
                        </Row>
                        </Col>
                        <Col xs={12} md={6}>
                            <Row className=" align-items-start p-4 my-details rounded">
                                Hi there! My name is <strong>&nbsp;Samon</strong>
                                <br />I'm a passionate Full Stack Developer, born and brought up in Bangladesh. 
                                <br/>
                                I have successfully completed my Graduation in <strong>Computer Science and Engineering (CSE)</strong> from United International University .
                                <br />
                                I was a Software Engineer Intern at Shuttle Bangladesh.
                                <br/>
                                I'm a passionate learner who's always willing to learn and work across technologies and domains. I love to explore new technologies and 
                                leverage them to solve real-life problems. 
                                <br/>
                                Currently i'm working on some of my own projects.
                                <br />
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center flex-wrap">
                                
                                    <div>
                                        <a href="https://drive.google.com/file/d/1Z0Jema-Hv2qzetnOtuyTYHSO32d32VdH/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                        <Button className="m-2" variant="outline-success">
                                            Resume
                                        </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://linkedin.com/in/samsun-nahar-samon-06409a147/" target="_blank" rel="noopener noreferrer">
                                        <Button className="m-2" variant="outline-info">
                                            LinkedIn
                                        </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://github.com/samon03/" target="_blank" rel="noopener noreferrer">
                                        <Button className="m-2" variant="outline-dark">
                                            GitHub
                                        </Button>
                                        </a>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
       );
    };
    
 export default About;