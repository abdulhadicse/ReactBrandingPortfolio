import React, {Component,Fragment} from 'react';
import TopNavigation from "../../components/TopNavigation/TopNavigation";
import TopBanner from "../../components/TopBanner/TopBanner";
import Services from "../../components/Services/Services";
import Analysis from "../../components/Analysis/Analysis";
import Summary from "../../components/Summary/Summary";
import RecentProjects from "../../components/Recent Projects/RecentProjects";
import Courses from "../../components/Courses/Courses";
import Video from "../../components/Video/Video";
import Review from "../../components/Review/Review";
import Footer from "../../components/Footer/Footer";

class HomePage extends Component {
    render() {
        return (
            <Fragment>

                <TopNavigation title="Home"/>
                <TopBanner/>
                <Services/>
                <Analysis/>
                <Summary/>
                <RecentProjects/>
                <Courses/>
                <Video/>
                <Review/>
                <Footer/>

            </Fragment>
        );
    }
}

export default HomePage;