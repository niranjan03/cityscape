import React from 'react';

import Header from '../common/Header';
import Footer from '../common/Footer';
import MobileMenu from '../common/MobileMenu';
import OffCanvas from '../common/OffCanvas';
import BannerThree from '../components/BannerThree';
import AboutThree from '../components/AboutThree';
import PropertyTypeThree from '../components/PropertyTypeThree';
import PropertyTwo from '../components/PropertyTwo';
import MessageThree from '../components/MessageThree';
import Newsletter from '../components/Newsletter';
import TestimonialThree from '../components/TestimonialThree';
import CounterThree from '../components/CounterThree';
import Faq from '../components/Faq';
import BlogThree from '../components/BlogThree';
import PageTitle from '../common/PageTitle';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Property from '../components/Property';
import { Helmet } from 'react-helmet';

const HomeOne = () => {
    return (
        <>
        <Helmet>
            <title>New Jyoti Decor: Your Trusted Source for Custom Blinds and Shades</title>
            <meta name="description" content="Discover a wide range of high-quality blinds and shades to elevate your home's style and functionality. Explore our collection of Venetian, vertical, Roman, roller, and chick blinds today." />
            <link rel="canonical" href="https://newjyotidecor.com" />
        </Helmet>
        
        <PageTitle title="Home - New Jyoti Decor" />
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

                {/* Banner Three */}
                <BannerThree/>

                {/* About Three */}
                <About/>

                {/* Property Type Three */}
                {/* <PropertyTypeThree/> */}

                {/* Property Two */}
                <Property/>
                {/* <PropertyTwo/> */}

                {/* Portofolio  */}
                <Portfolio/>

                {/* Message Three */}
                <MessageThree/>

                {/* Testimonial Three */}
                {/* <TestimonialThree/> */}

                

                {/* Counter Three */}
                {/* <CounterThree/> */}

                {/* Faq */}
                {/* <Faq/> */}

                {/* Blog Three */}
                {/* <BlogThree/> */}

                {/* Footer */}
                <Footer/>
                
            </main>   
        </>
    );
};

export default HomeOne;