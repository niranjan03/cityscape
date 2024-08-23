import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Breadcrumb from '../common/Breadcrumb';
import Cta from '../components/Cta';
import ContactTop from '../components/ContactTop';
import ContactUsSection from '../components/ContactUsSection';
import PageTitle from '../common/PageTitle';
import OffCanvas from '../common/OffCanvas';
import MobileMenu from '../common/MobileMenu';

const Contact = () => {
    return (
        <>
        <PageTitle title="Contact Us - New Jyoti Decor" />
        <OffCanvas/>
        <MobileMenu/>

        <main className="body-bg">
            
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
                pageTitle="Contact Us"
                pageName="Contact Us"
            />

            {/* Contact Top */}
            <ContactTop/>

            <div className="contact-map address-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1883.5684838210047!2d72.859518644475!3d19.232861582477526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1723623631405!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            {/* Contact Us Section */}
            <ContactUsSection/>

            {/* Cta */}
            {/* <Cta ctaClass=""/> */}

            {/* Footer */}
            <Footer/>

        </main>   
        </>
    );
};

export default Contact;