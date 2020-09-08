import React, {Component, Fragment} from 'react';
import {Container, Row, Col, Modal,Button } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import teamMember from "../../assets/img/team.png"

class Review extends Component {
    render() {
        var settings = {
            autoplay:true,
            autoplaySpeed: 6000,
            dots: true,
            infinite: true,
            speed: 6000,
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical:true,
            verticalSwiping:true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };


        return (
            <Fragment>

                <Container>

                    <div>
                        <h1 className="servicesTitle">Client Says</h1>
                    </div>

                    <Slider {...settings} className="text-center">
                        <div>
                            <Row>
                                <Col>
                                    <img className="clientImg" src={teamMember}/>
                                    <h1 className="videoTitle">Web Development</h1>
                                    <p className="videoDes">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, beatae dolor dolores dolorum esse officia soluta veritatis voluptas? Assumenda est facilis magnam perspiciatis quidem, rem tenetur ut voluptatibus? Animi, nulla.</p>
                                </Col>
                            </Row>
                        </div>

                        <div>
                            <Row>
                                <Col>
                                    <img className="clientImg" src={teamMember}/>
                                    <h1 className="videoTitle">Web Development</h1>
                                    <p className="videoDes">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, beatae dolor dolores dolorum esse officia soluta veritatis voluptas? Assumenda est facilis magnam perspiciatis quidem, rem tenetur ut voluptatibus? Animi, nulla.</p>
                                </Col>
                            </Row>
                        </div>

                        <div>
                            <Row>
                                <Col>
                                    <img className="clientImg" src={teamMember}/>
                                    <h1 className="videoTitle">Web Development</h1>
                                    <p className="videoDes">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, beatae dolor dolores dolorum esse officia soluta veritatis voluptas? Assumenda est facilis magnam perspiciatis quidem, rem tenetur ut voluptatibus? Animi, nulla.</p>
                                </Col>
                            </Row>
                        </div>
                    </Slider>

                </Container>

            </Fragment>
        );
    }
}

export default Review;