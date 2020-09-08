import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row, Card} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";

class Summary extends Component {
    render() {
        return (
            <Fragment>

                <Container fluid={true} className="summaryBannerImg summarySection">
                    <div className="summaryBannerOverlay">
                        <Row className="summaryCountSection">
                            <Col lg={4} md={3} sm={6}>
                                <div>
                                    <h1 className="countNumber">
                                        <CountUp start={0} end={100}>
                                            {({ countUpRef, start }) => (

                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <span ref={countUpRef} />
                                                </VisibilitySensor>

                                            )}
                                        </CountUp>
                                    </h1>
                                    <h4 className="countName">Total Projects</h4>
                                    <hr className="bg-white w-25"/>
                                </div>
                            </Col>

                            <Col lg={4} md={3} sm={6}>
                                <div>
                                    <h1 className="countNumber">
                                        <CountUp start={0} end={100}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <span ref={countUpRef} />
                                                </VisibilitySensor>

                                            )}
                                        </CountUp>
                                    </h1>
                                    <h4 className="countName">Total Clients</h4>
                                    <hr className="bg-white w-25"/>
                                </div>
                            </Col>

                            <Col lg={4} md={6} sm={12} >
                                <Card style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Title className="summaryCardTitle" >How i work</Card.Title>
                                        <Card.Text>
                                            <p className="summaryCardSubTitle"> <FontAwesomeIcon className="iconColor" icon={faCheckCircle} /> Requirement Gathering</p>
                                            <p className="summaryCardSubTitle"> <FontAwesomeIcon className="iconColor" icon={faCheckCircle} /> System Analysis</p>
                                            <p className="summaryCardSubTitle"> <FontAwesomeIcon className="iconColor" icon={faCheckCircle} /> Coding Testing</p>
                                            <p className="summaryCardSubTitle"> <FontAwesomeIcon className="iconColor" icon={faCheckCircle} /> Implementation</p>
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </div>

                </Container>

            </Fragment>
        );
    }
}

export default Summary;