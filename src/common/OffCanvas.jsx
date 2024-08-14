import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import LogoWhite from './LogoWhite';
import { OffCanvasContext } from '../contextApi/OffCanvasContext';
import { ScrollHideContext } from '../contextApi/ScrollHideContext';
import { offCanvasInfos } from '../data/CommonData/CommonData';
import SearchBox from './SearchBox';
import SocialList from './SocialList';

const OffCanvas = () => {

    const { offCanvas, handleOffCanvasClose } = useContext(OffCanvasContext);  
    
    const { handleScrollHideLgClose } = useContext(ScrollHideContext); 
    
    return (
        <>
            <div className={`side-overlay ${offCanvas ? 'show' : '' }`} onClick={()=> {handleOffCanvasClose(); handleScrollHideLgClose(); }}></div>

            {/* ==================== Right Offcanvas Start Here ==================== */}
            <div className={`common-offcanvas d-lg-block d-none ${offCanvas ? 'active' : '' }`} >
                <div className="flx-between">
                    <LogoWhite/>
                    <button type="button" className="close-button d-flex position-relative top-0 end-0" onClick={()=> {handleOffCanvasClose(); handleScrollHideLgClose();}}> 
                        <i className="las la-times"></i> 
                    </button>
                </div>

                {/* <SearchBox/> */}

                <ul className="address-list mt-5">
                    {
                        offCanvasInfos.map((offCanvasInfo, index) => {
                            return (
                                <li className="address-list__item flx-align flex-nowrap" key={index}>
                                    <span className="address-list__icon"> { offCanvasInfo.icon } </span>
                                    <div className="address-list__content">
                                        {
                                            Array.isArray(offCanvasInfo.link) ? (
                                                offCanvasInfo.link.map((link, linkIndex) => (
                                                    <Link to={`${link}${offCanvasInfo.text[linkIndex]}`} className="address-list__text" key={linkIndex}>
                                                        {offCanvasInfo.text[linkIndex]}
                                                    </Link>
                                                ))
                                            ) : (
                                                <p className="address-list__text">{offCanvasInfo.text}</p>
                                            )
                                        }
                                    </div>
                                </li>
                            );
                        })
                    }
                </ul>

                <div className="google-map mt-5">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1883.5684838210047!2d72.859518644475!3d19.232861582477526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1723623631405!5m2!1sen!2sin" loading="lazy" className="w-100 h-100"></iframe>
                </div>

                <SocialList/>
                
            </div>
            {/* ==================== Right Offcanvas End Here ==================== */}
        </>
    );
};

export default OffCanvas;
