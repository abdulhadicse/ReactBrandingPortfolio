import React, {Component,Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import courseImg from "../../assets/img/course.png";

class AllCourses extends Component {
    render() {
        return (
            <Fragment>

                <Container className="mt-5">

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

                            <Row className="mb-3">
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

                        

                    </Row>



                </Container>
                
            </Fragment>
        );
    }
}

export default AllCourses;