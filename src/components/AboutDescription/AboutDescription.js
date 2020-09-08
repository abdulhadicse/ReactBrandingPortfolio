import React, {Component,Fragment} from 'react';
import {Container, Row, Col} from "react-bootstrap";

class AboutDescription extends Component {
    render() {
        return (
            <Fragment>

                <Container className="mt-5">
                    <Row>
                        <Col>
                            <h1 className="aboutTitle"> Who i AM</h1>
                            <hr/>
                            <p className="aboutDes">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, atque cumque, ducimus ex excepturi exercitationem fugiat illum ipsam obcaecati quae qui reiciendis soluta suscipit unde voluptatem! Aut eveniet nobis officiis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci aliquam amet autem explicabo ipsum neque nisi quae quia voluptatibus. </p>

                            <h1 className="aboutTitle"> My Mission</h1>
                            <hr/>
                            <p className="aboutDes">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, atque cumque, ducimus ex excepturi exercitationem fugiat illum ipsam obcaecati quae qui reiciendis soluta suscipit unde voluptatem! Aut eveniet nobis officiis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis distinctio minima molestiae natus officia similique sint temporibus? Accusamus beatae ducimus eveniet iusto laborum omnis optio quam voluptatem. Accusantium, perspiciatis quis. </p>

                            <h1 className="aboutTitle"> My Vision</h1>
                            <hr/>
                            <p className="aboutDes">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, atque cumque, ducimus ex excepturi exercitationem fugiat illum ipsam obcaecati quae qui reiciendis soluta suscipit unde voluptatem! Aut eveniet nobis officiis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta quod vel voluptates? Ab, accusamus commodi cum ea error, facilis harum, in ipsum magnam molestias obcaecati placeat quaerat saepe tempora. </p>

                        </Col>
                    </Row>
                </Container>
                
            </Fragment>
        );
    }
}

export default AboutDescription;