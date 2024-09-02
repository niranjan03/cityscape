import React from 'react';

// ============================== Property Sidebar Page Data Start ==============================
export const propertyTypes = [
    {
        text: 'House',
        value: 'Houses',
    },
    {
        text: 'Apartment',
        value: 'Apartments',
    },
    {
        text: 'Office',
        value: 'Office',
    },
    {
        text: 'Villa',
        value: 'Villa',
    },
    {
        text: 'Single Family',
        value: 'Single Family',
    },
    {
        text: 'Luxury Home',
        value: 'Luxury Home',
    },
]

export const reasons = [
    {
        text: 'Buying',
        value: 'Buy',
    },
    {
        text: 'Renting',
        value: 'Rent',
    },
    {
        text: 'Selling',
        value: 'Sell',
    },
]

export const searchAmenities = [
    {
        text: 'Dishwasher'
    },
    {
        text: 'Floor Coverings'
    },
    {
        text: 'Internet'
    },
    {
        text: 'Build Wardrobes'
    },
    {
        text: 'Supermarket'
    },
    {
        text: 'Kids Zone'
    },
]
export const priceRanges = [
    {
        text: 'Low Budget',
        value: 'Low Price'
    },
    {
        text: 'Medium',
        value: 'Medium Price'
    },
    {
        text: 'High Budget',
        value: 'High Price'
    }
]
export const bedBaths = [
    {
        text: 'Single'
    },
    {
        text: 'Double'
    },
    {
        text: 'Up To 3'
    },
    {
        text: 'Up To 5'
    },
    {
        text: 'Supermarket'
    },
]

// ============================== Property Sidebar Page Data End ==============================


// ============================== Property Details Page Data Start ==============================
import propertyDetailsThumb1 from '../../../public/assets/images/thumbs/property-details-1.png';
import propertyDetailsThumb2 from '../../../public/assets/images/thumbs/property-details-2.png';
import propertyDetailsThumb3 from '../../../public/assets/images/thumbs/property-details-3.png';
import propertyDetailsThumb4 from '../../../public/assets/images/thumbs/property-details-4.png';
export const propertyDetailsThumbs = [
    {
        thumb: propertyDetailsThumb1
    },
    {
        thumb: propertyDetailsThumb2
    },
    {
        thumb: propertyDetailsThumb3
    },
    {
        thumb: propertyDetailsThumb4
    },
]

import amenitiesIcon1 from '../../../public/assets/images/icons/amenities1.svg';
import amenitiesIcon2 from '../../../public/assets/images/icons/amenities2.svg';
import amenitiesIcon3 from '../../../public/assets/images/icons/amenities3.svg';
import amenitiesIcon4 from '../../../public/assets/images/icons/amenities4.svg';
import amenitiesIcon5 from '../../../public/assets/images/icons/amenities5.svg';
import amenitiesIcon6 from '../../../public/assets/images/icons/amenities6.svg';
export const propertyDetailsAmenities = [ 
    {
        icon: amenitiesIcon1,
        text: "Room", 
        title: "4 Room"  
    },
    {
        icon: amenitiesIcon2,
        text: "Bed", 
        title: "3 Beds"  
    },
    {
        icon: amenitiesIcon3,
        text: "Bath", 
        title: "2 Baths"  
    },
    {
        icon: amenitiesIcon4,
        text: "Space", 
        title: "3 Space"  
    },
    {
        icon: amenitiesIcon5,
        text: "Size", 
        title: "1020 sqft"  
    },
    {
        icon: amenitiesIcon6,
        text: " Property Type ", 
        title: "Apartment"  
    },
]

export const featureLists = [
    {
        icon: <i className="fas fa-check"></i>,
        text: 'Dream Property Solutions'
    },
    {
        icon: <i className="fas fa-check"></i>,
        text: 'Prestige Property Management'
    },
    {
        icon: <i className="fas fa-check"></i>,
        text: 'Secure Property Partners'
    },
    {
        icon: <i className="fas fa-check"></i>,
        text: 'Global Real Estate Investments'
    },
    {
        icon: <i className="fas fa-check"></i>,
        text: 'Doors to Your Future'
    },
    {
        icon: <i className="fas fa-check"></i>,
        text: 'You Home with Experience'
    },
]

export const addressContents = [
    {
        text: 'Address',
        title: 'Mirpur 1,Chineese'
    },
    {
        text: 'Code',
        title: '2365'
    }
]

// Common Sidebar Data
export const categoryLists = [
    {
        link: '/blog',
        text: 'Venetian Blinds',
        number: '(1)'
    },
    {
        link: '/blog',
        text: 'Verical Blinds',
        number: '(1)'
    },
    {
        link: '/blog',
        text: 'Roman Blinds',
        number: '(1)'
    },
    {
        link: '/blog',
        text: 'Roller Blinds',
        number: '(1)'
    },
    {
        link: '/blog',
        text: 'Chick blinds',
        number: '(1)'
    },
]

import SidebarPropertyImg1 from '../../../public/assets/images/thumbs/properties-1.png';
import SidebarPropertyImg2 from '../../../public/assets/images/thumbs/properties-2.png';
import SidebarPropertyImg3 from '../../../public/assets/images/thumbs/properties-3.png';
import SidebarPropertyImg4 from '../../../public/assets/images/thumbs/properties-4.png';
import SidebarPropertyImg5 from '../../../public/assets/images/thumbs/properties-5.png';
import SidebarPropertyImg6 from '../../../public/assets/images/thumbs/properties-6.png';

export const sidebarProperties = [
    {
        link: '/property',
        image: SidebarPropertyImg1,
        text: 'Relax House'
    },
    {
        link: '/property',
        image: SidebarPropertyImg2,
        text: 'Hunting Adventure'
    },
    {
        link: '/property',
        image: SidebarPropertyImg3,
        text: 'Homeowner ship'
    },
    {
        link: '/property',
        image: SidebarPropertyImg4,
        text: 'Real Dreams'
    },
    {
        link: '/property',
        image: SidebarPropertyImg5,
        text: 'New Doors'
    },
    {
        link: '/property',
        image: SidebarPropertyImg6,
        text: 'The Heart'
    },
]

export const sidebarTags = [
    {
        text: 'All Project',
        link: '/blog'
    },
    {
        text: 'Finders',
        link: '/blog'
    },
    {
        text: 'Home Sales',
        link: '/blog'
    },
    {
        text: 'Swift',
        link: '/blog'
    },
    {
        text: 'Reliable Rentals',
        link: '/blog'
    },
    {
        text: 'Living',
        link: '/blog'
    },
]
// ============================== Property Details Page Data End ==============================


// ============================== Listing Page Data Start ==============================
export const addListings = [
    {
        link: '#basicInformation',
        text: 'Basic Information'
    },
    {
        link: '#propertyGallery',
        text: 'Property Gallery'
    },
    {
        link: '#propertyInformation',
        text: 'Property Information'
    },
    {
        link: '#propertyContactDetails',
        text: 'Property Contact Details'
    },
]

export const addAmenities = [
    {
        text: 'Air Condition'
    },
    {
        text: 'Lawn'
    },
    {
        text: 'Swimming Pool'
    },
    {
        text: 'Barbeque'
    },
    {
        text: 'Microwave'
    },
    {
        text: 'TV Cable'
    },
    {
        text: 'Dryer'
    },
    {
        text: 'Outdoor Shower'
    },
    {
        text: 'Washer'
    },
    {
        text: 'Gym'
    },
    {
        text: 'Refrigerator'
    },
    {
        text: 'WiFi'
    },
    {
        text: 'Laundry'
    },
    {
        text: 'Souna'
    },
    {
        text: 'Window Coverings'
    },
]
// ============================== Listing Page Data End ==============================


// ============================== Map Location Page Data Start ==============================
export const mapLocations = [
    {
        id: 1,
        title: 'Alabama',
        mapLocationsCards: [
            {
                title: 'New York',
                mapLocationsContacts: [
                    {
                        icon: <i className="fas fa-map-marker-alt"></i>,
                        title: 'Address',
                        address: 'Room No 146, near ambemata mandir, Rohidas nagar, sukarwadi, m.g. road, borivali east, mumbai - 66 '
                    },
                    {
                        icon: <i className="fas fa-phone"></i>,
                        title: 'Phone Number',
                        address: ' 9833270303 / 9769623317 '
                    },
                ],
                mapLocationsButtons: [
                    {
                        link: '/contact',
                        text: 'Appointment',
                        icon: <i className="fas fa-paper-plane"></i>
                    },
                    {
                        link: 'https://www.google.com',
                        text: 'Website',
                        icon: <i className="fas fa-paper-plane"></i>
                    },
                ]           
            },
            {
                title: 'New York',
                mapLocationsContacts: [
                    {
                        icon: <i className="fas fa-map-marker-alt"></i>,
                        title: 'Address',
                        address: 'Room No 146, near ambemata mandir, Rohidas nagar, sukarwadi, m.g. road, borivali east, mumbai - 66 '
                    },
                    {
                        icon: <i className="fas fa-phone"></i>,
                        title: 'Phone Number',
                        address: ' 9833270303 / 9769623317 '
                    },
                ],
                mapLocationsButtons: [
                    {
                        link: '/contact',
                        text: 'Appointment',
                        icon: <i className="fas fa-paper-plane"></i>
                    },
                    {
                        link: 'https://www.google.com',
                        text: 'Website',
                        icon: <i className="fas fa-paper-plane"></i>
                    },
                ]           
            },
            {
                title: 'New York',
                mapLocationsContacts: [
                    {
                        icon: <i className="fas fa-map-marker-alt"></i>,
                        title: 'Address',
                        address: ' 5816 S. Coulter Street Amarillo, TX 79119 '
                    },
                    {
                        icon: <i className="fas fa-phone"></i>,
                        title: 'Phone Number',
                        address: ' 012 345 678 9101 '
                    },
                ],
                mapLocationsButtons: [
                    {
                        link: '/contact',
                        text: 'Appointment',
                        icon: <i className="fas fa-paper-plane"></i>
                    },
                    {
                        link: 'https://www.google.com',
                        text: 'Website',
                        icon: <i className="fas fa-paper-plane"></i>
                    },
                ]           
            },
            {
                title: 'New York',
                mapLocationsContacts: [
                    {
                        icon: <i className="fas fa-map-marker-alt"></i>,
                        title: 'Address',
                        address: ' 5816 S. Coulter Street Amarillo, TX 79119 '
                    },
                    {
                        icon: <i className="fas fa-phone"></i>,
                        title: 'Phone Number',
                        address: ' 012 345 678 9101 '
                    },
                ],
                mapLocationsButtons: [
                    {
                        link: '/contact',
                        text: 'Appointment',
                        icon: <i className="fas fa-paper-plane"></i>
                    },
                    {
                        link: 'https://www.google.com',
                        text: 'Website',
                        icon: <i className="fas fa-paper-plane"></i>
                    },
                ]           
            },
        ]
    },
    {
        id: 2,
        title: 'Boston',
        mapLocationsCards: [
            {
                title: 'New York',
                mapLocationsContacts: [
                    {
                        icon: <i className="fas fa-map-marker-alt"></i>,
                        title: 'Address',
                        address: ' 5816 S. Coulter Street Amarillo, TX 79119 '
                    },
                    {
                        icon: <i className="fas fa-phone"></i>,
                        title: 'Phone Number',
                        address: ' 012 345 678 9101 '
                    },
                ],
                mapLocationsButtons: [
                    {
                        link: '/contact',
                        text: 'Appointment',
                        icon: <i className="fas fa-paper-plane"></i>
                    },
                    {
                        link: 'https://www.google.com',
                        text: 'Website',
                        icon: <i className="fas fa-paper-plane"></i>
                    },
                ]           
            },
            {
                title: 'New York',
                mapLocationsContacts: [
                    {
                        icon: <i className="fas fa-map-marker-alt"></i>,
                        title: 'Address',
                        address: ' 5816 S. Coulter Street Amarillo, TX 79119 '
                    },
                    {
                        icon: <i className="fas fa-phone"></i>,
                        title: 'Phone Number',
                        address: ' 012 345 678 9101 '
                    },
                ],
                mapLocationsButtons: [
                    {
                        link: '/contact',
                        text: 'Appointment',
                        icon: <i className="fas fa-paper-plane"></i>
                    },
                    {
                        link: 'https://www.google.com',
                        text: 'Website',
                        icon: <i className="fas fa-paper-plane"></i>
                    },
                ]           
            },
            {
                title: 'New York',
                mapLocationsContacts: [
                    {
                        icon: <i className="fas fa-map-marker-alt"></i>,
                        title: 'Address',
                        address: ' 5816 S. Coulter Street Amarillo, TX 79119 '
                    },
                    {
                        icon: <i className="fas fa-phone"></i>,
                        title: 'Phone Number',
                        address: ' 012 345 678 9101 '
                    },
                ],
                mapLocationsButtons: [
                    {
                        link: '/contact',
                        text: 'Appointment',
                        icon: <i className="fas fa-paper-plane"></i>
                    },
                    {
                        link: 'https://www.google.com',
                        text: 'Website',
                        icon: <i className="fas fa-paper-plane"></i>
                    },
                ]           
            },
            {
                title: 'New York',
                mapLocationsContacts: [
                    {
                        icon: <i className="fas fa-map-marker-alt"></i>,
                        title: 'Address',
                        address: ' 5816 S. Coulter Street Amarillo, TX 79119 '
                    },
                    {
                        icon: <i className="fas fa-phone"></i>,
                        title: 'Phone Number',
                        address: ' 012 345 678 9101 '
                    },
                ],
                mapLocationsButtons: [
                    {
                        link: '/contact',
                        text: 'Appointment',
                        icon: <i className="fas fa-paper-plane"></i>
                    },
                    {
                        link: 'https://www.google.com',
                        text: 'Website',
                        icon: <i className="fas fa-paper-plane"></i>
                    },
                ]           
            },
        ]
    },
    {
        id: 3,
        title: 'North America',
        mapLocationsCards: [
            {
                title: 'New York',
                mapLocationsContacts: [
                    {
                        icon: <i className="fas fa-map-marker-alt"></i>,
                        title: 'Address',
                        address: ' 5816 S. Coulter Street Amarillo, TX 79119 '
                    },
                    {
                        icon: <i className="fas fa-phone"></i>,
                        title: 'Phone Number',
                        address: ' 012 345 678 9101 '
                    },
                ],
                mapLocationsButtons: [
                    {
                        link: '/contact',
                        text: 'Appointment',
                        icon: <i className="fas fa-paper-plane"></i>
                    },
                    {
                        link: 'https://www.google.com',
                        text: 'Website',
                        icon: <i className="fas fa-paper-plane"></i>
                    },
                ]           
            },
            {
                title: 'New York',
                mapLocationsContacts: [
                    {
                        icon: <i className="fas fa-map-marker-alt"></i>,
                        title: 'Address',
                        address: ' 5816 S. Coulter Street Amarillo, TX 79119 '
                    },
                    {
                        icon: <i className="fas fa-phone"></i>,
                        title: 'Phone Number',
                        address: ' 012 345 678 9101 '
                    },
                ],
                mapLocationsButtons: [
                    {
                        link: '/contact',
                        text: 'Appointment',
                        icon: <i className="fas fa-paper-plane"></i>
                    },
                    {
                        link: 'https://www.google.com',
                        text: 'Website',
                        icon: <i className="fas fa-paper-plane"></i>
                    },
                ]           
            },
            {
                title: 'New York',
                mapLocationsContacts: [
                    {
                        icon: <i className="fas fa-map-marker-alt"></i>,
                        title: 'Address',
                        address: ' 5816 S. Coulter Street Amarillo, TX 79119 '
                    },
                    {
                        icon: <i className="fas fa-phone"></i>,
                        title: 'Phone Number',
                        address: ' 012 345 678 9101 '
                    },
                ],
                mapLocationsButtons: [
                    {
                        link: '/contact',
                        text: 'Appointment',
                        icon: <i className="fas fa-paper-plane"></i>
                    },
                    {
                        link: 'https://www.google.com',
                        text: 'Website',
                        icon: <i className="fas fa-paper-plane"></i>
                    },
                ]           
            },
            {
                title: 'New York',
                mapLocationsContacts: [
                    {
                        icon: <i className="fas fa-map-marker-alt"></i>,
                        title: 'Address',
                        address: ' 5816 S. Coulter Street Amarillo, TX 79119 '
                    },
                    {
                        icon: <i className="fas fa-phone"></i>,
                        title: 'Phone Number',
                        address: ' 012 345 678 9101 '
                    },
                ],
                mapLocationsButtons: [
                    {
                        link: '/contact',
                        text: 'Appointment',
                        icon: <i className="fas fa-paper-plane"></i>
                    },
                    {
                        link: 'https://www.google.com',
                        text: 'Website',
                        icon: <i className="fas fa-paper-plane"></i>
                    },
                ]           
            },
        ]
    },
]
// ============================== Map Location Page Data End ==============================


// ============================== Team Section Data Start ==============================
import teamImg1 from '../../../public/assets/images/thumbs/team1.png';
import teamImg2 from '../../../public/assets/images/thumbs/team2.png';
import teamImg3 from '../../../public/assets/images/thumbs/team3.png';

export const teams = [
    {
        thumb: teamImg1,
        name: 'Annette Black',
        designation: ' President of Sales ',
        shareIcon: <i className="fas fa-share-alt"></i>
    },  
    {
        thumb: teamImg2,
        name: 'Savannah Nguyen',
        designation: 'Manager of Sales',
        shareIcon: <i className="fas fa-share-alt"></i>
    },  
    {
        thumb: teamImg3,
        name: 'Bessie Cooper',
        designation: 'Director of Sales',
        shareIcon: <i className="fas fa-share-alt"></i>
    },  
]

// ============================== Team Section Data End ==============================



// ====================== Faq Page Counter Four Data Start ====================
import counterFourIcon1 from '../../../public/assets/images/icons/counter-four1.svg';
import counterFourIcon2 from '../../../public/assets/images/icons/counter-four2.svg';
import counterFourIcon3 from '../../../public/assets/images/icons/counter-four3.svg';
import counterFourIcon4 from '../../../public/assets/images/icons/counter-four4.svg';

export const counterFourContents = [
    {
        icon: counterFourIcon1,
        number: '800+',
        text: 'Happy Client'
    },
    {
        icon: counterFourIcon2,
        number: '440+',
        text: ' Project done '
    },
    {
        icon: counterFourIcon3,
        number: '500k',
        text: 'Employees'
    },
    {
        icon: counterFourIcon4,
        number: '80+',
        text: ' Award winning '
    },
]
// ====================== Faq Page Counter Four Data End ====================


// ========================= Checkout Page Data Start =========================
import paymentMethodImg1 from '../../../public/assets/images/thumbs/paypal.png';
import paymentMethodImg2 from '../../../public/assets/images/thumbs/visa.png';

export const paymentMethods = [
    {
        text: 'Debit card / Credit card',
        img: paymentMethodImg1
    },
    {
        text: 'Paypal',
        img: paymentMethodImg2
    },
]

// Bill Lists
export const billingLists = [
    {
        text: '3 Rooms Manhattan × 2',
        amount: '321.95'
    },
    {
        text: 'OE Replica Wheels × 2',
        amount: ' $185.00 '
    },
    {
        text: 'Wheel Bearing Retainer × 2',
        amount: ' $130.00'
    },
    {
        text: 'Shipping and Handing',
        amount: ' $15.00'
    },
    {
        text: 'Vat',
        amount: ' $20.00'
    }
]
// ========================= Checkout Page Data End =========================


// ========================= Cart Page Data Start =========================
import cartThumb1 from '../../../public/assets/images/thumbs/property-1.png';
import cartThumb2 from '../../../public/assets/images/thumbs/property-2.png';
import cartThumb3 from '../../../public/assets/images/thumbs/property-3.png';
import cartThumb4 from '../../../public/assets/images/thumbs/property-4.png';

export const cartItems = [
    {       
        thumb: cartThumb1,
        title: '3 Rooms Manhattan',
        locationIcon: <i className="fas fa-map-marker-alt"></i>,
        location: '66 Broklyant, New York America',
        price: '85.10'
    },
    {       
        thumb: cartThumb2,
        title: 'Wheel Bearing Retainer',
        locationIcon: <i className="fas fa-map-marker-alt"></i>,
        location: '66 Broklyant, New York America',
        price: '50.50'
    },
    {       
        thumb: cartThumb3,
        title: 'Your journey home owner',
        locationIcon: <i className="fas fa-map-marker-alt"></i>,
        location: '66 Broklyant, New York America',
        price: '45.80'
    },
    {       
        thumb: cartThumb4,
        title: '3 Rooms Manhattan',
        locationIcon: <i className="fas fa-map-marker-alt"></i>,
        location: '66 Broklyant, New York America',
        price: '90.20'
    },
]
// ========================= Cart Page Data End =========================


// ========================= Account Page Data Start =========================
export const accountTabs = [
    {
        icon: <i className="fas fa-home"></i>,
        text: 'Home '
    },
    {
        icon: <i className="fas fa-user"></i>,
        text: ' Profile'
    },
    {
        icon: <i className="fas fa-map-marker-alt"></i>,
        text: ' address'
    },
    {
        icon: <i className="fas fa-user"></i>,
        text: ' Account Details'
    },
    {
        icon: <i className="fas fa-list"></i>,
        text: ' My Properties'
    },
    {
        icon: <i className="fas fa-heart"></i>,
        text: ' Favorite Properties'
    },
    {
        icon: <i className="fas fa-map-marked-alt"></i>,
        text: ' Add Property'
    },
    {
        icon: <i className="fas fa-money-check"></i>,
        text: ' Payments'
    },
    {
        icon: <i className="fas fa-lock"></i>,
        text: ' Change Password'
    },
]

export const accountProfileInfos = [ 
    {
        icon: <i className="fas fa-map-marker-alt"></i>,
        text: '66 Broklyant, New York India'
    },
    {
        icon: <i className="fas fa-phone"></i>,
        text: '012 345 678 9101'
    },
    {
        icon: <i className="fas fa-envelope"></i>,
        text: 'example@gmail.com'
    }
]

export const accountAddress = [ 
    {
        title: 'Charging Address alter',
        name: 'Rosalina D. William',
        accountAddressInfos: [
            {
                title: 'location:',
                text: '66 Broklyant, New York India'
            },
            {
                title: 'Phone:',
                text: ' 012 345 678 9101'
            },
            {
                title: 'Email:',
                text: ' example@gmail.com'
            },
        ]
    },
    {
        title: 'Transporting Address alter',
        name: 'Rosalina D. William',
        accountAddressInfos: [
            {
                title: 'location:',
                text: '66 Broklyant, New York India'
            },
            {
                title: 'Phone:',
                text: ' 012 345 678 9101'
            },
            {
                title: 'Email:',
                text: ' example@gmail.com'
            },
        ]
    },
]

import PropertyTableThumb1 from '../../../public/assets/images/thumbs/property-1.png';
import PropertyTableThumb2 from '../../../public/assets/images/thumbs/property-2.png';
import PropertyTableThumb3 from '../../../public/assets/images/thumbs/property-3.png';
import PropertyTableThumb4 from '../../../public/assets/images/thumbs/property-4.png';

export const propertyTables = [ 
    {
        thumb: PropertyTableThumb1,
        title: '3 Rooms Manhattan',
        location: ' 66 Broklyant, New York America ',
        locationIcon: <i className="fas fa-map-marker-alt"></i>,
        price: '$85.00',
        date: '17/02/2024',
        editIcon: <i className="fas fa-edit"></i>,
        deleteIcon: <i className="fas fa-trash-alt"></i> 
    },
    {
        thumb: PropertyTableThumb2,
        title: 'Wheel Bearing Retainer',
        location: ' 66 Broklyant, New York America ',
        locationIcon: <i className="fas fa-map-marker-alt"></i>,
        price: '$85.00',
        date: '17/02/2024',
        editIcon: <i className="fas fa-edit"></i>,
        deleteIcon: <i className="fas fa-trash-alt"></i> 
    },
    {
        thumb: PropertyTableThumb3,
        title: 'Your journey home owner',
        location: ' 66 Broklyant, New York America ',
        locationIcon: <i className="fas fa-map-marker-alt"></i>,
        price: '$85.00',
        date: '17/02/2024',
        editIcon: <i className="fas fa-edit"></i>,
        deleteIcon: <i className="fas fa-trash-alt"></i> 
    },
    {
        thumb: PropertyTableThumb4,
        title: 'Turning Dreams into',
        location: ' 66 Broklyant, New York America ',
        locationIcon: <i className="fas fa-map-marker-alt"></i>,
        price: '$85.00',
        date: '17/02/2024',
        editIcon: <i className="fas fa-edit"></i>,
        deleteIcon: <i className="fas fa-trash-alt"></i> 
    },
]
// ========================= Account Page Data End =========================


// ========================= Project Page Data End =========================
import projectItemThumb1 from '../../../public/assets/images/img/Roller-blinds.png';
import projectItemThumb2 from '../../../public/assets/images/img/Monsoon-blind.png';
import projectItemThumb3 from '../../../public/assets/images/img/Chick-blind.png';
import projectItemThumb4 from '../../../public/assets/images/img/Roman-blinds.png';
import projectItemThumb5 from '../../../public/assets/images/img/Venetian-blinds.png'
import projectItemThumb6 from '../../../public/assets/images/img/Verical-blinds.png';


export const projectItems = [
    {
        id: 1,
        thumb: projectItemThumb5,
        title: 'Venetian Blind',
        desc: 'Venetian Blinds are a classic choice for homeowners seeking versatile and stylish window coverings. With adjustable horizontal slats, these blinds offer precise control over light and privacy, making them perfect for any room. Available in materials like aluminum, wood, and faux wood, Venetian Blinds complement a variety of interior styles, from modern to traditional. Their durable construction ensures longevity, while their sleek design enhances the overall aesthetic of your space. Easy to clean and maintain, Venetian Blinds provide a functional, attractive solution that balances form and function for both homes and offices.',
    },
    {
        id: 2,
        thumb: projectItemThumb6,
        title: 'Verical Blinds',
        desc: 'Vertical Blinds are ideal for covering large windows and sliding doors, offering a sleek and modern aesthetic. Featuring easy-to-operate vertical slats that glide smoothly, these blinds provide excellent light control and privacy. Available in a variety of colors, materials, and textures, Vertical Blinds can complement contemporary and minimalist interior designs. Their durable, easy-to-clean construction makes them perfect for high-traffic areas, such as living rooms, offices, or commercial spaces. Vertical Blinds offer a practical, stylish solution that enhances natural light while maintaining an elegant look, creating a polished, functional space.',
    },
    {
        id: 3,
        thumb: projectItemThumb1,
        title: 'Roller Blinds',
        desc: 'Roller Blinds are known for their sleek, minimalist design and versatile functionality. Available in a variety of fabrics, including blackout, light-filtering, and sheer, these blinds cater to diverse lighting needs and décor styles. Roller Blinds are easy to operate, rolling up neatly when not in use, which maximizes window space and allows for a clean, modern look. Ideal for bedrooms, kitchens, and offices, these blinds offer both style and practicality. Their simple, customizable design makes them a perfect choice for those seeking a straightforward, efficient solution that complements any interior.',
    },
    {
        id: 4,
        thumb: projectItemThumb4,
        title: 'Roman Blinds',
        desc: 'Roman Blinds bring timeless elegance to any home with their soft, cascading fabric folds. These blinds are available in a wide range of fabrics, from light-filtering to blackout options, providing excellent control over light and privacy. Roman Blinds combine the luxurious feel of drapery with the functionality of shades, making them a versatile choice for both casual and formal settings. Customizable in various patterns, colors, and textures, they perfectly complement any décor style. Their refined appearance adds sophistication to bedrooms, living rooms, and dining areas, creating a cozy, elegant ambiance.',
    },
    {
        id: 5,
        thumb: projectItemThumb2,
        title: 'Monsoon Blinds',
        desc: 'Monsoon Blinds are specifically designed to protect outdoor areas like balconies, patios, and verandas from heavy rain and harsh weather. Made from high-quality, water-resistant materials such as PVC or tough fabrics, these blinds provide a robust shield while allowing visibility and airflow. They are easy to roll up when not in use and can be quickly deployed during sudden downpours, making them highly practical for monsoon-prone regions. Monsoon Blinds are perfect for maintaining outdoor comfort, combining durability with style, ensuring your outdoor spaces remain dry, clean, and functional throughout the rainy season.',
    },
    {
        id: 6,
        thumb: projectItemThumb3,
        title: 'Chick Blinds',
        desc: 'Chick Blinds, also known as bamboo or woven wood blinds, offer a natural, rustic appeal with their eco-friendly materials. Made from sustainable resources like bamboo, reeds, or jute, these blinds provide an earthy texture that adds warmth to any room. Chick Blinds are perfect for creating a bohemian, coastal, or nature-inspired aesthetic, allowing soft, diffused light to enter while maintaining privacy. They add a unique, handcrafted look to living spaces, sunrooms, and patios. Durable and easy to maintain, Chick Blinds are an excellent choice for those who value sustainability and natural beauty in home décor.',
    },
    
    // {
    //     id: 5,
    //     thumb: projectItemThumb1,
    //     title: 'Building Trust, One Home at a Tim',
    //     desc: 'Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros justo, posuere lobor mattis fmentum ullam. Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorr viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuebortis non, viverraAliquam eros justo, posuere loborti viverra laoreet matti ulamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorpe',
    // },
    // {
    //     id: 6,
    //     thumb: projectItemThumb2,
    //     title: 'Brick by Brick Your Dream Home Awaits',
    //     desc: 'Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros justo, posuere lobor mattis fmentum ullam. Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorr viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuebortis non, viverraAliquam eros justo, posuere loborti viverra laoreet matti ulamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorpe',
    // },
    // {
    //     id: 7,
    //     thumb: projectItemThumb3,
    //     title: 'Guiding You Home with Experienc',
    //     desc: 'Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros justo, posuere lobor mattis fmentum ullam. Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorr viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuebortis non, viverraAliquam eros justo, posuere loborti viverra laoreet matti ulamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorpe',
    // },
    // {
    //     id: 8,
    //     thumb: projectItemThumb4,
    //     title: 'A Tradition of Trust in Real Estate',
    //     desc: 'Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros justo, posuere lobor mattis fmentum ullam. Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorr viverra laoreet Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuebortis non, viverraAliquam eros justo, posuere loborti viverra laoreet matti ulamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorpe',
    // },
]

export const challengeLists = [
    {
        text: 'Balancing Style and Functionality:'
    },
    {
        text: 'Sustainability'
    },
    {
        text: 'Customization'
    },
    {
        text: 'Technological Integration'
    },
    {
        text: 'Quality Control'
    },
    {
        text: 'Cost Efficiency'
    },
]

export const projectSidebarLists = [
    {
        text: 'Timeless Elegance with Adjustable Control',
        title: 'Venetian Blinds',
    },
    {
        text: 'Modern Solutions for Large Windows',
        title: 'Verical Blinds',
    },
    {
        text: 'Soft Folds, Sophisticated Style',
        title: 'Roman Blinds'
    },
    {
        text: 'Sleek Design, Versatile Functionality',
        title: 'Roller Blinds'
    },
    {
        text: 'Weather-Resistant Protection for Outdoor Spaces',
        title: 'Monsoon Blinds'
    },
    {
        text: 'Natural Warmth with Eco-Friendly Charm',
        title: 'Chick Blinds'
    }
]
// ========================= Project Page Data End =========================



// ========================= Project Page Data End =========================
export const contactTopInfos = [
    {
        icon: <i className="fas fa-paper-plane"></i>,
        title: 'Email',
        textOne: 'vidyrathipathak@gmail.com',
        // textTwo: 'cityscape@example.com',
        link: 'mailto:'
    },
    {
        icon: <i className="fas fa-map-marker-alt"></i>,
        title: 'Location',
        text: 'Room No 146, near ambemata mandir, Rohidas nagar, sukarwadi, m.g. road, borivali east, mumbai - 66',
    },
    {
        icon: <i className="fas fa-phone"></i>,
        title: 'Contacts ',
        textOne: '9833270303',
        textTwo: '9769623317',
        link: 'tel:'
    },
]
// ========================= Project Page Data End =========================


// ========================= Project Page Data End =========================
// export const propertyTables = [
//     {

//     },
// ]
// ========================= Project Page Data End =========================


// ========================= Project Page Data End =========================
// export const propertyTables = [
//     {

//     },
// ]
// ========================= Project Page Data End =========================

