import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Breadcrumb from '../common/Breadcrumb';
import Cta from '../components/Cta';
import AboutThree from '../components/AboutThree';
import PropertyTypeThree from '../components/PropertyTypeThree';
import Team from '../components/Team';
import PageTitle from '../common/PageTitle';
import MessageThree from '../components/MessageThree';
import MobileMenu from '../common/MobileMenu';
import OffCanvas from '../common/OffCanvas';


const AboutUs = () => {
    return (
        <>
            <PageTitle title="About Us - New Jyoti Decor" />
            <OffCanvas/>
            <MobileMenu/>

            {/* Header */}
            <Header 
                headerClass="" 
                logoBlack={true}
                logoWhite={false}
                headerMenusClass=""
                btnClass="btn btn-main  d-lg-block d-none"
                btnLink="/add-new-listing"
                btnText="Add Listing"
                spanClass="icon-right" 
                showHeaderBtn={false}
                showOffCanvasBtn={true}
                offCanvasBtnClass=""
                showContactNumber={true}
            />

            {/* BreadCrumb */}
            <Breadcrumb 
                pageTitle="About Us"
                pageName="About Us"
            />

            <AboutThree/>    

            {/* <Team/> */}

            <PropertyTypeThree/> 
            <MessageThree/>

            {/* Cta */}
             <Cta ctaClass=""/> 

            {/* Footer */}
            <Footer/>
        </>
    );
};

export default AboutUs;