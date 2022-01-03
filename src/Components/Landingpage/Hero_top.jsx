import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";

export function Hero_top() {
    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);
    return (
        <div className="hero_top">
            <Container>
                <Row>
                    <Col md={6} lg={6}>
                        <div className="left_intro"  data-aos="fade-up">
                            <span className="d-block vish">Hello ,I’m Abhi Patodi an app developer from India </span>
                            <h5>Put your creativity on the development highway. </h5>
                            <Link exact className="homie" to="/Contact"> <span> Lets Work Together</span> </Link>
                            <span></span>
                        </div>
                    </Col>

                    <Col md={6} lg={6}>
                        <div className="right_intro"  data-aos="fade-left">
                            <img src="./images/abhi.png" alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>


        </div>
    )
}
