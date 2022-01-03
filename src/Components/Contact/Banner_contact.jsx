import React from 'react'
import "../style.css";
import { Container, Row, Col, } from "react-bootstrap";
import { useEffect } from "react";
import AOS from "aos";


export  function Banner_contact() {
    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);
    return (
        <div className="banner">
           <Container>
               <Row>
                   <Col>
                  <div className="first_box">
                  <div className="banner_title">
                   <h5 class="title_one "  data-aos="fade-right">Hire Me <span></span></h5>
                   <p  data-aos="fade-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                   </div>
                  </div>
                   </Col>
               </Row>
           </Container>
           <div className="banner_bot">
               <img src="./images/45.svg" alt="" />
           </div>
        </div>
    )
}
