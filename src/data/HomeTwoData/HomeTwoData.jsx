import React from 'react'; 

// Banner Two
import BannerPhoneIcon from '../../../public/assets/images/icons/phone.svg'
export const bannerTwoContent = {
    title: 'Every Corner Holds ',
    boldTitle: 'Possibilities Your Home',
    desc: 'Unlock the Power of Real Estate Making Your Real Estate Dreams a Reality Real Estate here Unlock the Power of Real Estate',
    icon: BannerPhoneIcon,
    text: 'Need help?',
    number: '(319) 555-0115',
    numberLink: 'tel:'
}


// Service Section Data 
import ServiceIcon1 from '../../../public/assets/images/icons/service1.svg'
import ServiceIcon2 from '../../../public/assets/images/icons/service2.svg'
import ServiceIcon3 from '../../../public/assets/images/icons/service3.svg'
export const services = [
    {
        icon: ServiceIcon1,
        title: 'Prestige Management',
        text: '256 Listings',
        btnText: 'More About',
        btnLink: '/about-us'
    },
    {
        icon: ServiceIcon2,
        title: 'Prime Investments',
        text: '631 Listings',
        btnText: 'More About',
        btnLink: '/about-us'
    },
    {
        icon: ServiceIcon3,
        title: 'Swift Home Sales',
        text: '256 Listings',
        btnText: 'More About',
        btnLink: '/about-us'
    },
]


// About Two Data
export const checkLists = [ 
    {
        icon: <i className="fas fa-check"></i>,
        text: 'Prestige Property Management Your Dream Home Awaits'
    },
    {
        icon: <i className="fas fa-check"></i>,
        text: 'Real Estate is a vast industry that deals with the buying, selling'
    },
    {
        icon: <i className="fas fa-check"></i>,
        text: 'Egestas nulla quis venenatis cras sed eu massa eu faucibus'
    },
]

import AboutTwoImg from '../../../public/assets/images/thumbs/about-two-img.png'
export const aboutTwoRight = {
    thumb: AboutTwoImg,
    title: 'Property Management',
    date: 'October 19, 2024'
}


// Floor Plan
export const floorTabLists= [ 
    {
        text: 1
    },
    {
        text: 2
    },
    {
        text: 3
    },
    {
        text: 4
    },
    {
        text: 5
    },
    {
        text: 6
    },
]

// Floor Plan Tab Panels
export const floorTabPanels= [ 
    {
        id: '1',
        floorPlanLists: [
            {
                text: 'Rooms',
                number: '04',
            },
            {
                text: 'Bathroom',
                number: '04',
            },
            {
                text: 'Total Area SQ.M',
                number: '13,002',
            },
            {
                text: 'Parking',
                number: '05',
            },
            {
                text: 'Total Price',
                number: '$2306.2',
            },
        ]
    },
    {
        id: '2',
        floorPlanLists: [
            {
                text: 'Rooms',
                number: '06',
            },
            {
                text: 'Bathroom',
                number: '06',
            },
            {
                text: 'Total Area SQ.M',
                number: '15,000',
            },
            {
                text: 'Parking',
                number: '07',
            },
            {
                text: 'Total Price',
                number: '$2504.8',
            },
        ]
    },
    {
        id: '3',
        floorPlanLists: [
            {
                text: 'Rooms',
                number: '03',
            },
            {
                text: 'Bathroom',
                number: '03',
            },
            {
                text: 'Total Area SQ.M',
                number: '11,355',
            },
            {
                text: 'Parking',
                number: '03',
            },
            {
                text: 'Total Price',
                number: '$1323.1',
            },
        ]
    },
    {
        id: '4',
        floorPlanLists: [
            {
                text: 'Rooms',
                number: '06',
            },
            {
                text: 'Bathroom',
                number: '06',
            },
            {
                text: 'Total Area SQ.M',
                number: '15,281',
            },
            {
                text: 'Parking',
                number: '07',
            },
            {
                text: 'Total Price',
                number: '$2504.8',
            },
        ]
    },
    {
        id: '5',
        floorPlanLists: [
            {
                text: 'Rooms',
                number: '05',
            },
            {
                text: 'Bathroom',
                number: '05',
            },
            {
                text: 'Total Area SQ.M',
                number: '18,512',
            },
            {
                text: 'Parking',
                number: '08',
            },
            {
                text: 'Total Price',
                number: '$1723.1',
            },
        ]
    },
    {
        id: '5',
        floorPlanLists: [
            {
                text: 'Rooms',
                number: '08',
            },
            {
                text: 'Bathroom',
                number: '08',
            },
            {
                text: 'Total Area SQ.M',
                number: '32,256',
            },
            {
                text: 'Parking',
                number: '10',
            },
            {
                text: 'Total Price',
                number: '$5453.1',
            },
        ]
    },
]


// Gallery Data
import galleryImage1 from '../../../public/assets/images/img/monsoon-gallery2.png'
import galleryImage2 from '../../../public/assets/images/img/roman-gallery.png'
import galleryImage3 from '../../../public/assets/images/img/roller-gallery.png'
import galleryImage4 from '../../../public/assets/images/img/Venetian-gallery.png'
import galleryImage5 from '../../../public/assets/images/img/Verical-gallery.png'
import galleryImage6 from '../../../public/assets/images/img/chick-gallery.png'
import galleryImage7 from '../../../public/assets/images/img/Venetian-gallery1.png'
import galleryImage8 from '../../../public/assets/images/img/roman-gallery1.png'
import galleryImage9 from '../../../public/assets/images/img/roller-gallery1.png'
import galleryImage10 from '../../../public/assets/images/img/Verical-gallery1.png'
import galleryImage11 from '../../../public/assets/images/img/monsoon-gallery.png'
import galleryImage12 from '../../../public/assets/images/img/chick-gallery1.png'
import galleryImage13 from '../../../public/assets/images/img/monsoon-gallery1.png'

export const galleries= [
    {
        title: 'Monsoon Blinds',
        image: galleryImage1,
        link: 'galleryImage1',
        icon: <i className="fas fa-expand-alt"></i>
    },
    {
        title:'Roman linds',
        image: galleryImage2,
        link: 'galleryImage2',
        icon: <i className="fas fa-expand-alt"></i>
    },
    {
        title:'Roller Blinds',
        image: galleryImage3,
        link: 'galleryImage3',
        icon: <i className="fas fa-expand-alt"></i>
    },
    {
        image: galleryImage4,
        link: 'galleryImage4',
        icon: <i className="fas fa-expand-alt"></i>
    },
    {
        image: galleryImage5,
        link: 'galleryImage5',
        icon: <i className="fas fa-expand-alt"></i>
    },
    {
        image: galleryImage6,
        link: 'galleryImage6',
        icon: <i className="fas fa-expand-alt"></i>
    },
    {
        image: galleryImage7,
        link: 'galleryImage7',
        icon: <i className="fas fa-expand-alt"></i>
    },

    {
        image: galleryImage8,
        link: 'galleryImage8',
        icon: <i className="fas fa-expand-alt"></i>
    },
    {
        image: galleryImage9,
        link: 'galleryImage9',
        icon: <i className="fas fa-expand-alt"></i>
    },
    {
        image: galleryImage10,
        link: 'galleryImage10',
        icon: <i className="fas fa-expand-alt"></i>
    },
    {
        image: galleryImage11,
        link: 'galleryImage11',
        icon: <i className="fas fa-expand-alt"></i>
    },
    {
        image: galleryImage12,
        link: 'galleryImage12',
        icon: <i className="fas fa-expand-alt"></i>
    },
    {
        image: galleryImage13,
        link: 'galleryImage13',
        icon: <i className="fas fa-expand-alt"></i>
    },
    

]

export const sildegallery=[
    {
        image: galleryImage1,
    },
    {
        image: galleryImage2,
    },
    {
        image: galleryImage3,
    },
    {
        image: galleryImage4,
    },
    {
        image: galleryImage5,
    },
    {
        image: galleryImage6,
    },
]

export const sildegallerys=[
    {
        image: galleryImage7,
    },
    {
        image: galleryImage8,
    },
    {
        image: galleryImage9,
    },
    {
        image: galleryImage10,
    },
    {
        image: galleryImage11,
    },
    {
        image: galleryImage12,
    },
    {
        image: galleryImage13,
    },
]

// Counter Two Data
export const counters= [ 
    {
        number: '200+',
        text: 'Team member'
    },
    {
        number: '20+',
        text: 'Winning award'
    },
    {
        number: '10k+',
        text: 'Complete project'
    },
    {
        number: '900+',
        text: 'Client review'
    },
]


// Apartment Table Data
export const apartmentThs= [ 
    {
        heading: 'Floor No.',
    },
    {
        heading: 'Bathroom',
    },
    {
        heading: 'Rooms',
    },
    {
        heading: 'Total Area SQ.M',
    },
    {
        heading: 'Pricing',
    },
    {
        heading: 'action',
    }
]
export const apartmentTds= [ 
    {
        no: '1st',
        bathroom: '02',
        rooms: '04',
        area: '2000',
        pricing: '$1200',
        action: 'More About',
        actionLink: '/property',
    },
    {
        no: '3rd',
        bathroom: '04',
        rooms: '05',
        area: '1200',
        pricing: '$3600',
        action: 'More About',
        actionLink: '/property',
    },
    {
        no: '5th',
        bathroom: '02',
        rooms: '06',
        area: '1464',
        pricing: '$5200',
        action: 'More About',
        actionLink: '/property',
    },
    {
        no: '7th',
        bathroom: '06',
        rooms: '08',
        area: '2000',
        pricing: '$8200',
        action: 'More About',
        actionLink: '/property',
    },
]





