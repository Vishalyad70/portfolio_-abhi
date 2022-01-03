import React from 'react';
import './style.css';
import {Container, Row, Col} from "react-bootstrap";
import { Link } from 'react-router-dom';

export const Errorpage=()=>{
    return(
        <div className="error_page">
            <Container>
                <Row>
                    <Col  lg={6} md={12}>
                    <div className="img_404">
                        <img src="./images/404.svg" alt="" />
                    </div>
                    </Col>
                    <Col lg={6} md={12}>
                   
                    <div className="not_found">
                   <div className="text_2">
                   <h1 className="first">
                        404 
                    </h1>
                    <h4>Something went</h4>
                    <h1 className="wrong">Wrong</h1>
                   </div>
                   <div className="hire_me">
                   <Link exact to="/" className="d-block snd_btn"><span>Back to Home page</span></Link>
                   </div>

                    </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}