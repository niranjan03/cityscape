import React from 'react';
import { footerServiceLinks } from '../../data/CommonData/CommonData';
import { Link } from 'react-router-dom';
import { projectItems } from '../../data/OthersPageData/OthersPageData';

const FooterServiceItem = () => {
    const convertToSlug = (text) => {
        return text.toLowerCase().replace(/\s+/g, '-');
    };
    return (
        <>
            <div className="footer-item">
                <h6 className="footer-item__title">Blinds</h6>
                <ul className="footer-menu">
                    {
                        projectItems.map((projectItem, projectItemIndex) => {
                            const {id, thumb, title, desc} = projectItem; 

                                // Generate dynamic URL based on the property title
                                const projectURL = `/Blinds/${encodeURIComponent(convertToSlug(title))}`;
                            return (
                                <li className="footer-menu__item" key={projectItemIndex}>
                                    <Link to={projectURL} state={{ id, title, thumb, desc }} className="footer-menu__link">{title}</Link>
                                    
                                </li>
                            )
                        })
                    }
                </ul>
            </div>   
        </>
    );
};

export default FooterServiceItem;