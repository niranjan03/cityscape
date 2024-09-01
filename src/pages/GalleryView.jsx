import React from 'react';

import Header from '../common/Header';
import MobileMenu from '../common/MobileMenu';
import OffCanvas from '../common/OffCanvas';
import Breadcrumb from '../common/Breadcrumb';
import BannerTwo from '../components/BannerTwo';
import Service from '../components/Service';
import AboutTwo from '../components/AboutTwo';
import FloorPlan from '../components/FloorPlan';
import CounterTwo from '../components/CounterTwo';
import Gallery from '../components/Gallery';
import Apartment from '../components/Apartment';
import MessageTwo from '../components/MessageTwo';
import BlogTwo from '../components/BlogTwo';
import Footer from '../common/Footer';
import PageTitle from '../common/PageTitle';
import VideoPopup from '../components/VideoPopup';
import Video from '../components/Video';
import NewVideo from '../../public/assets/video/video1.mp4'


const GalleryView = () => {
    return (
        <>
        
        <PageTitle title="Gallery - New Jyoti Decor" />
            
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

                <Breadcrumb
                    pageTitle="Gallery"
                    pageName="Gallery"
                />

                {/* About Two */}
                {/* <AboutTwo/> */}

                {/* Gallery */}
                <Gallery/>

                {/* <Video src={NewVideo} width="640" height="360" controls/>
               

                <VideoPopup/> */}

                {/* Footer */}
                <Footer/>
                
            </main>   
        </>
    );
};

export default GalleryView;