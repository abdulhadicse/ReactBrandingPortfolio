import React, {Component, Fragment} from 'react';
import {Container, Row, Col, Button} from "react-bootstrap";
import courseImg from '../../assets/img/course.png';

class Courses extends Component {
    render() {
        return (
            <Fragment>

                <Container>

                    <div>
                        <h1 className="servicesTitle">Our Courses</h1>
                    </div>

                    <Row>

                        <Col lg={6} md={6} sm={12}>

                            <Row className="mb-3">
                                <Col lg={6} md={6} sm={12}>
                                    <img className="courseImg" src={courseImg} />
                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                    <h1 className="courseTitle">Web Development</h1>
                                    <p className="courseDescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam eveniet ipsa iure laborum maxime mollitia nesciunt.</p>
                                    <a className="courseBtn" href="#">Details</a>
                                </Col>

                            </Row>

                        </Col>

                        <Col lg={6} md={6} sm={12}>
                            <Row className="mb-3">
                                <Col lg={6} md={6} sm={12}>
                                    <img className="courseImg" src={courseImg} />
                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                    <h1 className="courseTitle">Web Development</h1>
                                    <p className="courseDescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam eveniet ipsa iure laborum maxime mollitia.</p>
                                    <a className="courseBtn" href="#">Details</a>
                                </Col>

                            </Row>
                        </Col>

                        <Col lg={6} md={6} sm={12}>

                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="courseImg" src={courseImg} />
                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                    <h1 className="courseTitle">Web Development</h1>
                                    <p className="courseDescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam eveniet ipsa iure laborum maxime mollitia .</p>
                                    <a className="courseBtn" href="#">Details</a>
                                </Col>

                            </Row>

                        </Col>

                        <Col lg={6} md={6} sm={12}>
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="courseImg" src={courseImg} />
                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                    <h1 className="courseTitle">Web Development</h1>
                                    <p className="courseDescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam eveniet ipsa iure laborum maxime mollitia.</p>
                                    <a className="courseBtn" href="#">Details</a>
                                </Col>

                            </Row>
                        </Col>



                    </Row>



                </Container>
                
            </Fragment>
        );
    }
}

export default Courses;