import React from 'react'
import "../style.css";
import { Container, Row, Col, } from "react-bootstrap";
import { useEffect } from "react";
import AOS from "aos";

export  function Banner() {
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
                   <h5 class="title_one "  data-aos="fade-right">Work <span></span></h5>
                   <p  data-aos="fade-left">This is a new change </p>
                   </div>
                  </div>
                   </Col>
               </Row>
           </Container>
           <div className="banner_bot">
               <img src="./images/banner_grey.svg" alt="" />
           </div>
        </div>
    )
}
