import React from 'react'
import '../style.css';
import { useEffect } from "react";
import AOS from "aos";
import { Container, Row, Col, Carousel } from "react-bootstrap";
export function Review() {
    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);
    return (
        <div className="reviews">
            <Container>
                <Row>
                    <Col>
                        <h5 class="title_one mb-5" data-aos="fade-up">Reviews <span></span></h5>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="commnet">
                        <Carousel interval="2000">
                            <Carousel.Item>
                                <div class="comment_name" data-aos="fade-up">
                                    <div class="client">
                                      <img src="./images/user.png" alt="" />
                                    </div>
                                    <div class="right_box">
                                        <div class="comment"><span class="fa fas fa-quote-left"></span>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim morbi scelerisque mollis enim mi, duis congue nibh euismod. Eu maecenas phasel</p></div>
                                        <div class="client_name">
                                            <h5>Angelia</h5><p>CEO, MMF</p>
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div class="comment_name" data-aos="fade-up">
                                    <div class="client">
                                      <img src="./images/user.png" alt="" />
                                    </div>
                                    <div class="right_box">
                                        <div class="comment"><span class="fa fas fa-quote-left"></span>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim morbi scelerisque mollis enim mi, duis congue nibh euismod. Eu maecenas phasel</p></div>
                                        <div class="client_name">
                                            <h5>Angelia</h5><p>CEO, MMF</p>
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div class="comment_name" data-aos="fade-up">
                                    <div class="client">
                                      <img src="./images/user.png" alt="" />
                                    </div>
                                    <div class="right_box">
                                        <div class="comment"><span class="fa fas fa-quote-left"></span>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim morbi scelerisque mollis enim mi, duis congue nibh euismod. Eu maecenas phasel</p></div>
                                        <div class="client_name">
                                            <h5>Angelia</h5><p>CEO, MMF</p>
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div class="comment_name" data-aos="fade-up">
                                    <div class="client">
                                      <img src="./images/user.png" alt="" />
                                    </div>
                                    <div class="right_box">
                                        <div class="comment"><span class="fa fas fa-quote-left"></span>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim morbi scelerisque mollis enim mi, duis congue nibh euismod. Eu maecenas phasel</p></div>
                                        <div class="client_name">
                                            <h5>Angelia</h5><p>CEO, MMF</p>
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>
                         
                        </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>


        </div>
    )
}
