import React from 'react';
import SectionHeading from '../common/SectionHeading';
import PropertyItem from './items/PropertyItem';
import { properties } from '../data/HomeOneData/HomeOneData';
import Button from '../common/Button';
import { Link } from 'react-router-dom';
import { projectItems } from '../data/OthersPageData/OthersPageData';


const Property = () => {
    const convertToSlug = (text) => {
        return text.toLowerCase().replace(/\s+/g, '-');
    };
    return (
        <>
            {/* ============================ property Start ==================== */}
            <section className="property bg-gray-100 padding-y-50">
                <div className="container container-two">

                    <SectionHeading 
                        headingClass="style-left flx-between align-items-end gap-3"  
                        subtitle="Customization Options"
                        subtitleClass="bg-white" 
                        title="We offer extensive customization options for our Blinds" 
                        renderDesc={false}
                        desc=""
                        renderButton={true}
                        buttonLink="/Blinds"
                        buttonClass="btn-main"
                        buttonText="View More"
                    />

                    <div className="row gy-4 property-item-wrapper">
                        {
                            projectItems.map((projectItem, projectItemIndex) => {

                                const {id, thumb, title, desc} = projectItem; 

                                // Generate dynamic URL based on the property title
                                const projectURL = `/Blinds/${encodeURIComponent(convertToSlug(title))}`;
                                
                                return (
                                    <div className={`col-md-4 col-sm-6 col-xs-6`} key={projectItemIndex}>
                                        <div className="project-page-thumb">
                                            <img src={thumb} alt="" className="cover-img"/>
                                            <div className="project-page-content">
                                                <h6 className="project-page-content__title">
                                                    <Link to={projectURL} state={{ id, title, thumb, desc }} className="link">{title}</Link>
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                            // properties.slice(0, 4).map((property, index) => {
                            //     return (
                            //         <div className="col-lg-4 col-sm-6" key={index}>
                            //             <PropertyItem 
                            //                 itemClass=""
                            //                 btnClass=""
                            //                 property={property}
                            //                 badgeText="Sales"
                            //                 badgeClass="property-item__badge"
                            //                 iconsClass=""
                            //                 btnRenderBottom={false}
                            //                 btnRenderRight={true}
                            //             />
                            //         </div> 
                            //     )
                            // })
                        }
                    </div>

                    <div className="text-center property__btn">
                        <Button 
                            btnLink="/Blinds" 
                            btnClass="btn-main" 
                            btnText="See More" 
                            spanClass="icon-right" 
                            iconClass="fas fa-arrow-right" 
                        />
                    </div>
                </div>
            </section>
            {/* ============================ property End ==================== */}   
        </>
    );
};

export default Property;
