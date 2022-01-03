import React from 'react'
import "../style.css";
import { Container, Row, Col, } from "react-bootstrap";
import {Link} from "react-router-dom";


export  function Webapps() {
    return (
        <div className="showcase">
        <div className="pro_name">
        <Container>
    
    <Row>
        <Col lg={4} md={4}>
        <div className="last_box">
            <div className="produc_img">
                <img src="./images/NOON.jpg" alt="" />
            </div>
            <div className="details_box">
               <h5>Noon App</h5>
               
               <Link to="/" className="homie">View more <span></span> </Link>
               <div className="store_link">
                  <a href=""><i class="fab fa-apple"></i></a>
                  <a href=""><i class="fab fa-android"></i></a>
                </div>
            </div>
        </div>
        </Col>
        <Col lg={4} md={4}>
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
        <Col lg={4} md={4}>
        <div className="last_box">
            <div className="produc_img">
                <img src="./images/NOON.jpg" alt="" />
            </div>
            <div className="details_box">
               <h5>Noon App</h5>
               
               <Link to="/" className="homie">View more <span></span> </Link>
               <div className="store_link">
                  <a href=""><i class="fab fa-apple"></i></a>
                  <a href=""><i class="fab fa-android"></i></a>
                </div>
            </div>
        </div>
        </Col>
        
    </Row>
    <Row>
        <Col lg={4} md={4}>
        <div className="last_box">
            <div className="produc_img">
                <img src="./images/fauna.jpg" alt="" />
            </div>
            <div className="details_box">
               <h5>Fauna Mobile App</h5>
               
               <Link to="/" className="homie">View more <span></span> </Link>
               <div className="store_link">
                  <a href=""><i class="fab fa-apple"></i></a>
                  <a href=""><i class="fab fa-android"></i></a>
                </div>
            </div>
        </div>
        </Col>
        <Col lg={4} md={4}>
        <div className="last_box">
            <div className="produc_img">
                <img src="./images/coexist.jpg" alt="" />
            </div>
            <div className="details_box">
               <h5>Coexist App</h5>
               
               <Link to="/" className="homie">View more <span></span> </Link>
               <div className="store_link">
                  <a href=""><i class="fab fa-apple"></i></a>
                  <a href=""><i class="fab fa-android"></i></a>
                </div>
            </div>
        </div>
        </Col>
        <Col lg={4} md={4}>
        <div className="last_box">
            <div className="produc_img">
                <img src="./images/coexist.jpg" alt="" />
            </div>
            <div className="details_box">
               <h5>Coexist App</h5>
               
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
