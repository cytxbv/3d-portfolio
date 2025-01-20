import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "./BackButton.css";

const BackButton = () => {
  const navigate = useNavigate(); 

  const handleBack = () => {
    navigate("/"); 
  };

  return (
    <button className="back-button" onClick={handleBack}>
      <FaArrowLeft
        className="back-icon"
        style={{
          fontSize: "30px",
        }}
      />
    </button>
  );
};

export default BackButton;
