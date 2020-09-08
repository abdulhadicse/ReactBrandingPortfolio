import React, {Component,Fragment} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import ServicesPage from "../pages/ServicesPage/ServicesPage";
import AboutPage from "../pages/AboutPage/AboutPage";
import AllCoursesPage from "../pages/AllCoursesPage/AllCoursesPage";
import AllProjectsPage from "../pages/AllProjectsPage/AllProjectsPage";
import ContactPage from "../pages/ContactPage/ContactPage";


class AppRouter extends Component {
    render() {
        return (
            <Fragment>

                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/services" component={ServicesPage}/>
                    <Route exact path="/courses" component={AllCoursesPage}/>
                    <Route exact path="/portfolio" component={AllProjectsPage}/>
                    <Route exact path="/contact" component={ContactPage}/>
                    <Route exact path="/about" component={AboutPage}/>
                </Switch>

            </Fragment>
        );
    }
}

export default AppRouter;