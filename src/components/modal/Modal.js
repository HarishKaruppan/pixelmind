import "./modal.css";

import React, { useEffect } from "react";

export const Modal = ({ openModal, showModal, setShowModal }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, []);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showModal]);
  return (
    <div className="modal">
      <div className="modalContainer">
        <span>SUCCESS</span>
        <button className="closeBtn" onClick={openModal}>
          Close
        </button>
      </div>
    </div>
  );
};
