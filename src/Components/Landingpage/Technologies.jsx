import React from 'react'
import '../style.css';
import { Container, Row, Col } from "react-bootstrap";
import { useEffect } from "react";
import AOS from "aos";

export function Technologies() {
    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);
    return (
        <div className="techno" data-aos="fade-up">
            <Container>
                <Row>
                    <Col>
                        <div className="tech_slider">
                            <div className="slide">
                                <div className="slide_one">
                                    <img src="./images/techno/xd.svg" alt="" />
                                    <span className="tech_name">Adobe Xd</span>
                                </div>
                                <div className="slide_one">
                                    <img src="./images/techno/theory.svg" alt="" />
                                    <span className="tech_name">Deep learning
theory</span>
                                </div>
                                <div className="slide_one">
                                    <img src="./images/techno/sketch.svg" alt="" />
                                    <span className="tech_name">Sketch</span>
                                </div>
                                <div className="slide_one">
                                    <img src="./images/techno/react.svg" alt="" />
                                    <span className="tech_name">React js</span>
                                </div>
                                <div className="slide_one">
                                    <img src="./images/techno/python.svg" alt="" />
                                    <span className="tech_name">Python</span>
                                </div>
                                <div className="slide_one">
                                    <img src="./images/techno/photoshop.svg" alt="" />
                                    <span className="tech_name">Adobe Photoshop</span>
                                </div>
                                <div className="slide_one">
                                    <img src="./images/techno/pattern.svg" alt="" />
                                    <span className="tech_name">Pattern Recognition</span>
                                </div>
                                <div className="slide_one">
                                    <img src="./images/techno/neural.svg" alt="" />
                                    <span className="tech_name">Neural
Networks</span>
                                </div>
                                <div className="slide_one">
                                    <img src="./images/techno/network.svg" alt="" />
                                    <span className="tech_name">Capsule
Networks</span>
                                </div>
                                <div className="slide_one">
                                    <img src="./images/techno/illustrator.svg" alt="" />
                                    <span className="tech_name">Adobe Illustrator</span>
                                </div>
                                <div className="slide_one">
                                    <img src="./images/techno/html.svg" alt="" />
                                    <span className="tech_name">HTML5</span>
                                </div>
                                <div className="slide_one">
                                    <img src="./images/techno/data_learning.svg" alt="" />
                                    <span className="tech_name">Sketch</span>
                                </div>
                                <div className="slide_one">
                                    <img src="./images/techno/bootstrap.svg" alt="" />
                                    <span className="tech_name">Sketch</span>
                                </div>
                                <div className="slide_one">
                                    <img src="./images/techno/automated.svg" alt="" />
                                    <span className="tech_name">Sketch</span>
                                </div>
                                <div className="slide_one">
                                    <img src="./images/techno/Probabilistic.svg" alt="" />
                                    <span className="tech_name">Sketch</span>
                                </div>
                                <div className="slide_one">
                                    <img src="./images/techno/angular.svg" alt="" />
                                    <span className="tech_name">Sketch</span>
                                </div>
                                <div className="slide_one">
                                    <img src="./images/techno/analytics.svg" alt="" />
                                    <span className="tech_name">Sketch</span>
                                </div>
                                <div className="slide_one">
                                    <img src="./images/techno/js.svg" alt="" />
                                    <span className="tech_name">Sketch</span>
                                </div>
                                <div className="slide_one">
                                    <img src="./images/techno/nodejs.svg" alt="" />
                                    <span className="tech_name">Node js</span>
                                </div>
                                <div className="slide_one">
                                    <img src="./images/techno/natural.svg" alt="" />
                                    <span className="tech_name">Sketch</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}
