import React, {Component, Fragment} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import {BarChart, Bar, ResponsiveContainer, Tooltip, XAxis,YAxis,Legend, Cell,CartesianGrid } from "recharts";

class Analysis extends Component {

    constructor() {
        super();

        this.state={
            data: [
                { Technology: "Java", Skill:"80" },
                { Technology: "Bootstrap", Skill:"40" },
                { Technology: "React", Skill:"60" },
                { Technology: "MySQL", Skill:"70" },
                { Technology: "PHP", Skill:"80" },
                { Technology: "JavaScript", Skill:"90" },
                { Technology: "SASS", Skill:"75" }
            ]
        }
    }
    render() {
        return (
            <Fragment>
                <Container>

                    <div>
                        <h1 className="servicesTitle">Technology Used</h1>
                    </div>

                    <Row>
                        <Col className="barChart" lg={6} md={12} sm={12}>
                            <ResponsiveContainer>
                                <BarChart width={100} height={300} data={this.state.data}>
                                    <Tooltip/>
                                    <Bar dataKey='Skill' fill='#0073E6' label={{ position: 'top' }}/>
                                    <XAxis dataKey={'Technology'} />
                                </BarChart>
                            </ResponsiveContainer>
                        </Col>

                        <Col lg={6} md={12} sm={12}>
                            <p className="text-justify des">To build native android apps i use Java as well as kotline mainly. React JS is used for cross platform mobile application. I use MySQL database for relational database system. To build NoSQL application i use MongoDB. Firebase database system is used where it is necessary to provide realtime data flow facilities. <br/> <br/>

                                I always build dynamic application. Admin panel is the heart of such kinds of application. I always try to provide sufficient features in admin panel to dominate application. According to client demand I use PHP OOP, CodeIgniter and Laravel to build admin panel section. <br/> <br/>

                                Application security is a big deal for commercial application. I always ensure security portion of my application, moreover i build a security alert system, to notify admin when his system at risk. </p>
                        </Col>
                    </Row>

                </Container>
            </Fragment>
        );
    }
}

export default Analysis;