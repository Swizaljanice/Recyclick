import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const images = [
    "https://img.freepik.com/free-vector/people-recycling-concept_23-2148519354.jpg?semt=ais_hybrid",
    "https://thumbs.dreamstime.com/b/sorting-recycling-waste-tiny-people-throw-garbage-trash-container-recycle-sign-classification-hold-paper-light-332378218.jpg",
    "https://us.123rf.com/450wm/alexdndz/alexdndz2205/alexdndz220500212/186586434-people-collecting-garbage-web-concept-in-flat-design-man-and-woman-gathering-plastic-waste-in-bags.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // Change image every 6 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="login-page">
      <div className="login-container">
        {/* Left Section with Carousel */}
        <div className="login-left">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="login-image"
          />
          <h2 className="carousel-heading">Earn rewards for e-waste recycling</h2> 
        </div>

        {/* Right Section with Login/Sign Up */}
        <div className="login-right">
          <h1>RECYCLICK</h1>
          <button className="login-btn">Login</button>
          <button className="signup-btn">Sign Up</button>
          <h5>
            By signing up, you agree to our <a href="#">Terms of Service</a> and{" "}
            <a href="#">Privacy Policy</a>
          </h5>
        </div>
      </div>
    </div>
  );
}

export default App;
