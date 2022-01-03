import React from 'react'
import "../style.css";
import { Container, Row, Col, Form} from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import AOS from "aos";
export function Hire_form() {
    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);
    return (
        <div className="hire_me">
            <Container>
                <Row>
                    <Col>
                        <div className="upper_head"  data-aos="fade-up">
                            <span>Lets Talk</span>
                            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h5>
                        </div>
                        <div className="form_hire"  data-aos="fade-up">
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                 
                                    <Form.Control className="form_control" type="email" placeholder="What’s your Full Name?" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                 
                                 <Form.Control className="form_control" type="email" placeholder="What’s your Email?" />
                             </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                   
                                    <Form.Control className="form_control mb-5" as="textarea" rows={4} placeholder="Tell me about your project" />
                                </Form.Group>
                            </Form>
                            <Link className="snd_btn"><span>Send</span></Link>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}
