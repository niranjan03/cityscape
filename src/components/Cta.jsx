import React from 'react';
import CtaThumb from '../../public/assets/images/thumbs/cta-img.png';
import NewsletterForm from '../common/NewsletterForm';

const Cta = (props) => {
    return (
        <section className={`cta padding-b-120 ${props.ctaClass}`}>
            <div className="container container-two">
                <div className="cta-box flx-between gap-2">
                    <div className="cta-content">
                        <h2 className="cta-content__title">Still Confused? <span className="text-gradient">Talk to an Expert</span> </h2>
                        <p className="cta-content__desc"><span >Call/Whatapp no:- <a href="tel:++919833270303" className="text-gradient">9833270303</a></span>
                        <br /> <span >Email :- <a href="mailto:vidyrathipathak@gmail.com" className="text-gradient">vidyrathipathak@gmail.com</a></span></p>

                        {/* <NewsletterForm formClass="max-w-unset" inputClass="bg-danger" iconClass="text-gradient"/> */}
                        
                    </div>
                    <div className="cta-content__thumb d-xl-block d-none">
                        <img src={CtaThumb} alt="Cta Image"/>
                    </div>
                </div>
            </div>
        </section>   
    );
};

export default Cta;