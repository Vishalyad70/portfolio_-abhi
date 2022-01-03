import React from 'react'
import "../style.css";
import { Container, Row, Col,Tab, Tabs } from "react-bootstrap";
import { Projectslist } from './Projectslist';
import { Mobileapps } from './Mobileapps';
import { Webapps } from './Webapps';
import { Demo } from './Demo';


export  function List_pro() {
    return (
        <div className="portfolio">
            <Container>
                <Row>
                    <Col>

                        <Tabs defaultActiveKey="All" id="uncontrolled-tab-example" className="mb-3">
                            <Tab eventKey="All" title="All">
                            <Projectslist />
                            </Tab>
                            <Tab eventKey="Mobile" title="Mobile Apps">
                            <Mobileapps />
                            </Tab>
                            <Tab eventKey="Web" title="Web Apps" >
                            <Webapps />
                            </Tab>
                            <Tab eventKey="Demo" title="Demo" >
                            <Demo />
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>


        </div>
    )
}
