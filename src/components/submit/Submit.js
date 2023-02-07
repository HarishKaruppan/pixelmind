import "./submit.css";

import React, { useState } from "react";
import { Modal } from "../modal/Modal";

export const Submit = () => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <>
      <button className="submit" onClick={openModal}>
        SUBMIT BALLOT BUTTON
      </button>
      {showModal ? (
        <Modal
          setShowModal={setShowModal}
          showModal={showModal}
          openModal={openModal}
        />
      ) : null}
    </>
  );
};
