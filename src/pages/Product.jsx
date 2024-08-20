import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Breadcrumb from '../common/Breadcrumb';
import Cta from '../components/Cta';
import ProjectSection from '../components/ProjectSection';
import PageTitle from '../common/PageTitle';

const Product = () => {
    return (
        <>
        <PageTitle title="New Jyoti Decor - Product" />

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
                pageTitle="Product"
                pageName="Product"
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