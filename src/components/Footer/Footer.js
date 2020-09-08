import React, {Component,Fragment} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faYoutube} from "@fortawesome/free-brands-svg-icons";

class Footer extends Component {
    render() {
        return (
            <Fragment>
                
                <Container fluid={true} className="footerCard text-center">

                    <Row>
                        <Col lg={3} md={6} sm={12} className="text-justify mb-5">
                            <h1 className="footerTitle">Follow Me</h1>
                            <a className="footerLink" href="#"><FontAwesomeIcon className="footerBtn" icon={faFacebook} />Facebook</a> <br/>
                            <a className="footerLink" href="#"><FontAwesomeIcon className="footerBtn" icon={faYoutube} />YouTube</a>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="text-justify mb-5">
                            <h1 className="footerTitle">Address</h1>
                            <span className="footerText">#Lorem ipsum dolor sit amet.</span> <br/>
                            <span className="footerText"><FontAwesomeIcon className="footerBtn" icon={faEnvelope} />abdulhadi.aust@gmail.com</span> <br/>
                            <span className="footerText"><FontAwesomeIcon className="footerBtn" icon={faPhone} />+8801916160796</span>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="text-justify mb-5">
                            <h1 className="footerTitle">Information</h1>
                            <a className="footerLink" href="#">About Me</a> <br/>
                            <a className="footerLink" href="#">My Resume</a> <br/>
                            <a className="footerLink"href="#">Contact Me</a>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="text-justify mb-5">
                            <h1 className="footerTitle">Legal</h1>
                            <a className="footerLink" href="#">Refund Policy</a> <br/>
                            <a className="footerLink" href="#">Term and Condition</a> <br/>
                            <a className="footerLink" href="#">Privacy Policy</a>
                        </Col>
                    </Row>
                </Container>

                <Container fluid={true} className="text-center bg-primary p-2">
                    <a className="footerCredit" href="#"> abdulhadi.xyz | &copy; 2019-2020 </a>
                </Container>

            </Fragment>
        );
    }
}

export default Footer;