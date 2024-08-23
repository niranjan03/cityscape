import React from 'react';
import SectionHeading from '../common/SectionHeading';
import { propertyThreeTypes } from '../data/HomeThreeData/HomeThreeData';
import PropertyTypeThreeItem from './items/PropertyTypeThreeItem';

const PropertyTypeThree = () => {
    return (
        <>
            <section className="property-type-three padding-t-120 padding-b-60">
                <div className="container container-two">

                    <SectionHeading
                        headingClass="style-left"  
                        subtitle="Characteristics of New Jyoti Decor Blinds"
                        subtitleClass="bg-white" 
                        title="" 
                        renderDesc={false}
                        desc=""
                        renderButton={false}
                        buttonClass="btn-main"
                        buttonText="View More"
                    />
                    
                    <div className="row gy-4">
                        {
                            propertyThreeTypes.map((propertyTypeItem, index) => {
                                return (
                                    <div className="col-xl-4 col-sm-6 col-xs-6" key={index}>
                                        <PropertyTypeThreeItem propertyTypeItem={propertyTypeItem} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>   
        </>
    );
};

export default PropertyTypeThree;