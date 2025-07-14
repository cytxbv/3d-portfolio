import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "./BackButton.css";

const BackButton = () => {
  const navigate = useNavigate(); 

  const handleBack = () => {
    console.log('Back button clicked!'); 
    navigate('/'); 
  };

  return (
    <div className="back-button-wrapper">
      <FaArrowLeft
        className="back-icon"
        onClick={handleBack} // Click handler directly on the icon
        style={{
          fontSize: "30px",
        }}
      />
    </div>
  );
};

export default BackButton;