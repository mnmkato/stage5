import React, { useState } from 'react';
import kite from "../assets/success-kite 1.svg"
import close from "../assets/close-circle.svg"
import { Link } from 'react-router-dom';

function Popup() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    document.querySelector('.popup').style.display = 'none'
    setIsOpen(!isOpen);
  };

  return (
    <div className={`popup ${isOpen ? 'open' : ''}`}>
      <div className="popup-content">
        <img src={close} className="close-icon" onClick={togglePopup}></img>
        <div className="popup-container">
            <img src={kite} alt=""></img>
            <p className='sent-message email'>Your video link has been sent to <span>johnmark@gmail.com.</span></p>
            
            <p className='message'>Would you need to view this video later? Save to your account now!</p>
            <button>Save Video</button>
            <p className='message-login'>Don’t have an account? <Link to="/login">Create account</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Popup;
