import React from "react";
import "../style.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Technologies } from '../Landingpage/Technologies';
import { useEffect } from "react";
import AOS from "aos";


export function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div className="pro_name">
      <Technologies />

      <Container>
        <Row>
          <Col>
            <h5 className="title_one" data-aos="fade-up">
              Development Laboratory <span></span>
            </h5>
            <p className="mb-5" data-aos="fade-up">Development Laboratory is a collection of my  projects and experiments. As Developer I always take some time to upgrade my skills and build new creative development  concepts. </p>
          </Col>
        </Row>
        <Row>
          <Col lg={6} md={6}>
            <div className="last_box" data-aos="fade-up">
              <div className="produc_img">
                <img src="./images/shuttercorp.jpg" alt="" />
              </div>
              <div className="details_box">
                <h5>Shutterturf</h5>

                <Link to="/" className="homie">View more <span></span> </Link>
                <div className="store_link">
                  <a href=""><i class="fab fa-apple"></i></a>
                  <a href=""><i class="fab fa-android"></i></a>
                </div>
              </div>

            </div>
          </Col>
          <Col lg={6} md={6}>
            <div className="last_box" data-aos="fade-up">
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

        </Row>
        <Row>
          <Col lg={6} md={6}>
            <div className="last_box" data-aos="fade-up" >
              <div className="produc_img">
                <img src="./images/upclip.jpg" alt="" />
              </div>
              <div className="details_box">
                <h5>Upclip App</h5>

                <Link to="/" className="homie">View more <span></span> </Link>
                <div className="store_link">
                  <a href=""><i class="fab fa-apple"></i></a>
                  <a href=""><i class="fab fa-android"></i></a>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6} md={6}>
            <div className="last_box" data-aos="fade-up">
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


        </Row>
        <Row><Col>
          <div className="text-center mt-5">
            <Link to="/Work" className="homie" style={{ fontSize: '18px' }}>View All <span></span> </Link>
          </div>
        </Col></Row>

      </Container>
    </div>
  );
}
