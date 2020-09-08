import React, {Component, Fragment} from 'react';
import {Col, Container, Row,Form,Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
class ContactSection extends Component {
    render() {
        return (
            <Fragment>

                <Container>

                    <Row className="mt-5">

                        <Col lg={6} md={6} sm={12}>
                            <h1 className="footerTitle">Quick Contact</h1>

                            <Form>
                                <Form.Group >
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" />

                                </Form.Group>

                                <Form.Group >
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control type="email" />
                                </Form.Group>

                                <Form.Group >
                                    <Form.Label>Your Message</Form.Label>
                                    <Form.Control as="textarea" rows="3" />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>

                        </Col>

                        <Col lg={6} md={6} sm={12}>
                            <h1 className="footerTitle">Address</h1>
                            <span className="footerText">#Lorem ipsum dolor sit amet.</span> <br/>
                            <span className="footerText"><FontAwesomeIcon className="footerBtn" icon={faEnvelope} />abdulhadi.aust@gmail.com</span> <br/>
                            <span className="footerText"><FontAwesomeIcon className="footerBtn" icon={faPhone} />+8801916160796</span>
                        </Col>

                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default ContactSection;