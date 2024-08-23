import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Breadcrumb from '../common/Breadcrumb';
import Cta from '../components/Cta';
import ProjectDetailsSection from '../components/ProjectDetailsSection';
import { useParams } from 'react-router-dom';
import PageTitle from '../common/PageTitle';
import OffCanvas  from '../common/OffCanvas';
import MobileMenu  from '../common/MobileMenu';

const ProjectDetails = () => {

    const {title} = useParams(); 

    return (
        <>
        <PageTitle title="New Jyoti Decor - Blinds" />
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
                pageName={title}
            />

            {/* Project Details Section */}
            <ProjectDetailsSection/>

            {/* Cta */}
            {/* <Cta ctaClass=""/> */}

            {/* Footer */}
            <Footer/>

        </main>   
        </>
    );
};

export default ProjectDetails;