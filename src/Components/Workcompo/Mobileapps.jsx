import React from 'react'
import "../style.css";
import { Container, Row, Col, } from "react-bootstrap";
import {Link} from "react-router-dom";

export  function Mobileapps() {
    return (
        <div className="showcase">
            <div className="pro_name">
                <Container>

                    <Row>
                        <Col lg={4} md={6}>
                            <div className="last_box">
                                <div className="produc_img">
                                    <img src="./images/fauna.jpg" alt="" />
                                </div>
                                <div className="details_box">
                                    <h5>Fauna App</h5>
                                  
                                    <Link to="/" className="homie">View more <span></span> </Link>
                                    <div className="store_link">
                  <a href=""><i class="fab fa-apple"></i></a>
                  <a href=""><i class="fab fa-android"></i></a>
                </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={6}>
                            <div className="last_box">
                                <div className="produc_img">
                                    <img src="./images/AFRIGRUB.jpg" alt="" />
                                </div>
                                <div className="details_box">
                                    <h5>Afrifrub App</h5>
                                  
                                    <Link to="/" className="homie">View more <span></span> </Link>
                                    <div className="store_link">
                  <a href=""><i class="fab fa-apple"></i></a>
                  <a href=""><i class="fab fa-android"></i></a>
                </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} md={3}>
                            <div className="last_box">
                                <div className="produc_img">
                                    <img src="./images/nfc.png" alt="" />
                                </div>
                                <div className="details_box">
                                    <h5>NFC App</h5>
                                  
                                    <Link to="/" className="homie">View more <span></span> </Link>
                                    <div className="store_link">
                  <a href=""><i class="fab fa-apple"></i></a>
                  <a href=""><i class="fab fa-android"></i></a>
                </div>
                                </div>
                            </div>
                        </Col>

                    </Row>
                       </Container>
            </div>

        </div>
    )
}
