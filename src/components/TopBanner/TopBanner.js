import React, {Component, Fragment} from 'react';
import {Container,Row,Col,Button} from "react-bootstrap";




class TopBanner extends Component {
    render() {
        return (
            <Fragment>

                <Container fluid={true} className="topBannerImg">
                    <div className="topBannerOverlay">
                        <Row>
                            <Col>

                                <div className="topText">
                                    <h1 className="topTitle">Software Engineer</h1>
                                    <h4 className="topSubTitle">Web & App Developer</h4>
                                    <Button variant="primary">Read More</Button>
                                </div>

                            </Col>
                        </Row>
                    </div>

                </Container>
                
            </Fragment>
        );
    }
}

export default TopBanner;