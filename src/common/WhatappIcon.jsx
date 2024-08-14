import React from 'react';
import '../../public/assets/css/whatapp.css'

function WhatappIcon() {
  return (
    
    <div className="whatsapp-container">
      
      <a href="https://wa.me/yourPhoneNumber?text=Your%20message" target="_blank" rel="noopener noreferrer" className="btn  btn-floating">
      <i class="fab fa-whatsapp"></i>
      </a>
    </div>
  );
}

export default WhatappIcon;
