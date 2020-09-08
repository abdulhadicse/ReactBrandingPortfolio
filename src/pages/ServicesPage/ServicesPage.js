import React, {Component,Fragment} from 'react';
import TopNavigation from "../../components/TopNavigation/TopNavigation";
import Services from "../../components/Services/Services";
import ContactSection from "../../components/ContactSection/ContactSection";
import PageTop from "../../components/PageTop/PageTop";
import Footer from "../../components/Footer/Footer";

class ServicesPage extends Component {
    render() {
        return (
            <Fragment>

                <TopNavigation title="Service"/>
                <PageTop pagetitle="Services"/>
                <Services/>
                <ContactSection/>
                <Footer/>

            </Fragment>
        );
    }
}

export default ServicesPage;