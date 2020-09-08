import React, {Component, Fragment} from 'react';
import {Container,Row, Col} from "react-bootstrap";
import graphicsLogo from '../../assets/img/graphics.svg';
import webLogo from '../../assets/img/web.svg';
import mobileLogo from '../../assets/img/mobile.svg';


class Services extends Component {
    render() {
        return (
            <Fragment>

                <Container>

                    <div>
                        <h1 className="servicesTitle">My Services</h1>
                    </div>

                    <Row>

                        <Col lg={4} md={2} sm={1} >
                            <div className="servicesCard">
                                <img src={webLogo}/>
                                <h1 className="servicesName">Web Development</h1>
                                <p className="servicesDescription">I design and develop static and dynamic web sites as per your requirements as we believe, “web is world’s next home”.</p>
                            </div>
                        </Col>

                        <Col lg={4} md={2} sm={1} >
                            <div className="servicesCard">
                                <img src={mobileLogo}/>
                                <h1 className="servicesName">Mobile Development</h1>
                                <p className="servicesDescription">I build native and cross platfrom mobile app for your business and instiution as per as your requirements.</p>
                            </div>
                        </Col>

                        <Col lg={4} md={2} sm={1} >
                            <div className="servicesCard">
                                <img src={graphicsLogo}/>
                                <h1 className="servicesName">Graphics Design</h1>
                                <p className="servicesDescription">I desing modern user interface and other graphical components for your business and instiution.</p>
                            </div>
                        </Col>

                    </Row>

                </Container>
                
            </Fragment>
        );
    }
}

export default Services;