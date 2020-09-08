import React, {Component,Fragment} from 'react';
import {Container, Row, Col, Modal,Button } from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlayCircle} from "@fortawesome/free-solid-svg-icons";
import "video-react/dist/video-react.css";
import { Player, BigPlayButton } from 'video-react';
import courseImg from '../../assets/img/course.png';


class Video extends Component {

    constructor() {
        super();

        this.state={
            show: false
        }
    }

    modalShow=()=>{
        this.setState({show: true});
    }
    modalHide=()=>{
        this.setState({show: false});
    }

    render() {
        return (
            <Fragment>

                <Container>

                    <Row>

                        <Col className="videoCard" lg={12} md={12} sm={12}>

                            <div>
                                <p className="videoTitle">How it work</p>
                                <p className="videoDes">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet commodi deleniti eveniet explicabo fugiat laboriosam libero molestiae nihil, recusandae saepe. Ad architecto at deserunt dignissimos dolor dolores error exercitationem expedita, hic, inventore ipsa molestiae non odio quis quod rerum ullam?</p>
                                <p><FontAwesomeIcon onClick={this.modalShow} className="videoBtn" icon={faPlayCircle} /></p>
                            </div>

                            <div>
                                <Modal size="lg" show={this.state.show} onHide={this.modalHide}>

                                    <Modal.Body>
                                        <Player poster={courseImg} src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                                            <BigPlayButton position="center" />
                                        </Player>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="primary" onClick={this.modalHide}>
                                            Close
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>

                        </Col>

                    </Row>

                </Container>
                
            </Fragment>
        );
    }
}

export default Video;