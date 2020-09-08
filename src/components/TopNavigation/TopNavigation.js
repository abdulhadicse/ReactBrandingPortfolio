import React, {Component, Fragment} from 'react';
import {Navbar, Nav} from "react-bootstrap";
import navLogo from '../../assets/img/navlogo.svg';
import navLogoScroll from '../../assets/img/navlogoScroll.svg';
import '../../assets/bootstrap/bootstrap.min.css';
import '../../assets/css/custom.css';
import {NavLink} from "react-router-dom";

class TopNavigation extends Component {

    constructor() {
        super();

        this.state={
            navTitle: "navTitle",
            navLogo: [navLogo],
            navBg: "navBackground",
            navbarItem: "navItem",
            navVariant: "dark"
        }
    }

    onScroll=()=>{

        if(window.scrollY>100){
            this.setState({navVariant: "light",navTitle: "navTitleScroll",navLogo: [navLogoScroll],navBg: "navBackgroundScroll" ,navbarItem: "navItemScroll"});

        }
        else if(window.scrollY<100){
            this.setState({navVariant: "dark",navTitle: "navTitle", navLogo: [navLogo], navBg: "navBackground", navbarItem: "navItem"});
        }
    }

    componentDidMount() {
        window.addEventListener("scroll", this.onScroll);
    }

    render() {
        return (
            <Fragment>
                <title>{this.props.title}</title>
                <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant={this.state.navVariant} className={this.state.navBg}>
                    <Navbar.Brand className={this.state.navTitle} > <img src={this.state.navLogo}/> Abdul Hadi</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Nav>
                        <Nav.Link> <NavLink id="navLinkBtn" className={this.state.navbarItem} to="/" exact activeStyle={{color:'#00a8ee'}}>HOME</NavLink> </Nav.Link>
                        <Nav.Link> <NavLink id="navLinkBtn" className={this.state.navbarItem} to="/services" exact activeStyle={{color:'#00a8ee'}}>SERVICES</NavLink> </Nav.Link>
                        <Nav.Link> <NavLink id="navLinkBtn" className={this.state.navbarItem} to="/courses" exact activeStyle={{color:'#00a8ee'}}>COURSES</NavLink> </Nav.Link>
                        <Nav.Link> <NavLink id="navLinkBtn" className={this.state.navbarItem} to="/portfolio" exact activeStyle={{color:'#00a8ee'}}>PORTFOLIO</NavLink> </Nav.Link>
                        <Nav.Link> <NavLink id="navLinkBtn" className={this.state.navbarItem} to="/contact" exact activeStyle={{color:'#00a8ee'}}>CONTACT</NavLink> </Nav.Link>
                        <Nav.Link> <NavLink id="navLinkBtn" className={this.state.navbarItem} to="/about" exact activeStyle={{color:'#00a8ee'}}>ABOUT</NavLink> </Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                
            </Fragment>
        );
    }
}

export default TopNavigation;