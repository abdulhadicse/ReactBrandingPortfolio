import React, {Component,Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";

class PageTop extends Component {
    render() {
        return (
            <Fragment>

                <Container fluid={true} className="topPageImg">
                    <div className="topPageOverlay">
                        <Row>
                            <Col>

                                <div className="topText">

                                    <h4 className="topSubTitle">{this.props.pagetitle}</h4>

                                </div>

                            </Col>
                        </Row>
                    </div>
                </Container>
                
            </Fragment>
        );
    }
}

export default PageTop;