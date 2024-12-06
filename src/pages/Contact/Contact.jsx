import React, { useRef, useState, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";


import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const [currentAnimation, setCurrentAnimation] = useState("idle");
  const [notificationMessage, setNotificationMessage] = useState(null);



  return (
    <>
      <div className="contact-container">
        <div className="contact">
          <h1 className="contact-title">Get in Touch</h1>

          <div className="contact-content">
            <form className="contact-form" ref={form} >
              <label className="input-label">Name</label>
              <input
                className="input-field"
                type="text"
                name="name"
                placeholder="Name"
                onFocus={handleFocus}
                onBlur={handleBlur}
              />

              <label className="input-label">Email</label>
              <input
                className="input-field"
                type="email"
                name="email"
                placeholder="Email"
                onFocus={handleFocus}
                onBlur={handleBlur}
              />

              <label className="input-label">Message</label>
              <textarea
                className="input-field-message"
                name="message"
                placeholder="Message"
                onFocus={handleFocus}
                onBlur={handleBlur}
              ></textarea>

              <button
                type="submit"
                className="send-button"
                onFocus={handleFocus}
                onBlur={handleBlur}
              >
                Send
              </button>
            </form>

            <div className="contact-info">
              <div className="social-icons">
                <a
                  
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  
                </a>
                <a
                  
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  
                </a>
                <a
                 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  
                </a>
                <a
                  
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  
                </a>
                <a
                  
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  
                </a>
              </div>

              <p className="or-contact-via">Or Contact via:</p>

              <div className="contact-via">
                <div className="email-info">
                  
                  <p>emiliankasemi@email.com</p>
                </div>

                <div className="phone-info">
                  
                  <p>+355 68 809 7086</p>
                </div>
              </div>
            </div>
          </div>

          {notificationMessage && (
            <div className="notification">{notificationMessage}</div>
          )}

          
        </div>
        <div className="contact-canvas-container">
          <Canvas
            camera={{
              position: [0, 0, 5],
              fov: 75,
              near: 0.1,
              far: 1000,
            }}
          >
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          </Canvas>
        </div>
      </div>
    </>
  );
};

export default Contact;
