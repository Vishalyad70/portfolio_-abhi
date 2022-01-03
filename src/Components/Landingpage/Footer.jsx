import React from 'react'
import '../style.css'
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import AOS from "aos";

export function Footer() {
    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);
    return (
        <div className="foot">
            <Container>
                <Row>
                    <Col>
                        <div class="together_box">
                            <div class="have" data-aos="fade-right">
                                <h5>Have a project?</h5>
                                <a class="homie" href="/"><span>LET’S MAKE SOMETHING TOGETHER!</span></a>
                            </div>
                            <div class="logo_box" data-aos="fade-left">
                                <img src="./images/foot_logo.svg" alt="" />
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div class="all_link">
                            <div class="quick_link">
                                <ul>
                                    <li class="circle ">
                                       <Link to="/">Home</Link>
                                    </li>
                                    <li class="circle" style={{ paddingLeft: "10px" }}>
                                        <a href="/Work">Work</a>
                                    </li>
                                    <li><a href="/Contact">Contact</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="add_res">
                                <span style={{ paddingRight: "10px" }}>
                                    <img src="./images/location.svg" alt="" /> Belmont Ave Plainview, NY 11803, New York</span>
                                <span>
                                    <img src="./images/call.svg" alt="" /> +23645647678</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="copy_right">
                <Container>
                    <Row>
                        <Col>
                            <div class="copy_left">
                                <div class="copy_op">
                                    <p >Copyright @2021 , abhipatodi.com</p>
                                </div><div class="social_icon">
                                    <a href=""><i class="fab fa-facebook-f"></i></a>
                                    <a href="https://www.linkedin.com/in/abhipatodi"><i class="fab fa-linkedin-in"></i></a>
                                    <a href="https://www.instagram.com/abhi_patodi/"><i class="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        </div>
    )
}
