import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import eComLogo from "../../assets/img/ecom.png";

class AllProjects extends Component {
    render() {
        return (
            <Fragment>

                <Container>

                    <Row className="text-center mt-5">

                        <Col lg={4} md={6} sm={12}>
                            <Card className="projectCard mb-3" >
                                <Card.Img variant="top" src={eComLogo} />
                                <Card.Body>
                                    <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                    <Card.Text className="projectCardTitleDes">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={4} md={6} sm={12}>
                            <Card className="projectCard mb-3" >
                                <Card.Img variant="top" src={eComLogo} />
                                <Card.Body>
                                    <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                    <Card.Text className="projectCardTitleDes">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={4} md={6} sm={12}>
                            <Card className="projectCard mb-3" >
                                <Card.Img variant="top" src={eComLogo} />
                                <Card.Body>
                                    <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                    <Card.Text className="projectCardTitleDes">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={4} md={6} sm={12}>
                            <Card className="projectCard mb-3" >
                                <Card.Img variant="top" src={eComLogo} />
                                <Card.Body>
                                    <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                    <Card.Text className="projectCardTitleDes">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>



                </Container>

            </Fragment>
        );
    }
}

export default AllProjects;