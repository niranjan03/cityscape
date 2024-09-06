import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Breadcrumb from '../common/Breadcrumb';
import Cta from '../components/Cta';
import ProjectSection from '../components/ProjectSection';
import PageTitle from '../common/PageTitle';
import OffCanvas  from '../common/OffCanvas';
import MobileMenu  from '../common/MobileMenu';
import { Helmet } from 'react-helmet';

const Product = () => {
    return (
        <>
        <Helmet>
                <title>Blinds and Shades: Custom Solutions for Your Home</title>
                <meta name="description" content="Find the perfect blinds or shades to match your home's decor and lifestyle. Choose from Venetian, vertical, Roman, roller, and chick blinds in a variety of styles, materials, and colors." />
                <link rel="canonical" href="https://newjyotidecor.com/Blinds" />
        </Helmet>
        <PageTitle title="Blinds - New Jyoti Decor" />
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
                pageTitle="Blinds"
                pageName="Blinds"
            />

            {/* Project Section */}
            <ProjectSection/>     

            {/* Cta */}
            {/* <Cta ctaClass=""/> */}

            {/* Footer */}
            <Footer/>

        </main>   
        </>
    );
};

export default Product;