import React from 'react';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { aboutCheckLists } from '../data/HomeThreeData/HomeThreeData';
import CountUp from 'react-countup';

import AboutThreeThumb from '../../public/assets/images/img/about-banner.png';

const AboutThree = () => {
    return (
        <>
            <section className="about-three bg-white padding-y-120">
                <div className="container container-two">
                    <div className="row gy-4">
                        <div className="col-lg-6">
                            <div className="about-three-thumb">
                                <div className="about-three-thumb__inner">
                                    <img src={AboutThreeThumb} alt=""/>
                                    <div className="project-content">
                                        <div className="project-content__inner">
                                            <h2 className="project-content__number">
                                                <CountUp end={parseInt(10)} duration={6} delay={0.2} />k                                            </h2>
                                            <span className="project-content__text font-12">Complete project</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content">

                                <SectionHeading
                                    headingClass="style-left"  
                                    subtitle="About Us"
                                    subtitleClass="bg-gray-100" 
                                    title="Crafted Blinds, Perfect SpacesCreating Custom Blinds to Transform Your Living Spaces" 
                                    renderDesc={true}
                                    desc="Whether you're looking for modern minimalism or timeless elegance, our custom-made options allow you to personalize your blinds to perfectly complement your home. At New Jyoti Decor, we’re committed to enhancing your living space with blinds that are as beautiful as they are practical."
                                    renderButton={false}
                                    buttonClass="btn-main"
                                    buttonText="View More"
                                />

                                <ul className="check-list style-two">
                                    {
                                        aboutCheckLists.map((aboutCheckList, index) => {
                                            return (
                                                <li className="check-list__item d-flex align-items-center" key={index}>
                                                    <span className="icon">{aboutCheckList.icon}</span>
                                                    <span className="text fw-semibold">{aboutCheckList.text}</span>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                                {/* <div className="about-button">
                                    <Button
                                        btnLink="/about" 
                                        btnClass="btn btn-outline-main bg-white" 
                                        btnText="Learn More" 
                                        spanClass="icon-right" 
                                        iconClass="fas fa-arrow-right" 
                                    />
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>   
        </>
    );
};

export default AboutThree;