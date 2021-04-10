import React from "react";

import Modal from "react-modal";

const customStyles = {
  content: {
    top: "30%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: 0,
  },
};

const ModalDelet = ({ isShow, closeModal, onDelete }) => {
  const onClickCLose = () => {
    closeModal();
  };
  return (
    <Modal
      isOpen={isShow}
      style={customStyles}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      ariaHideApp={false}
    >
      <form>
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Deleting
          </h5>
          <button
            type="button"
            className="btn-close"
            onClick={closeModal}
          ></button>
        </div>
        <div className="modal-body">Do you really want to delete</div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={onClickCLose}
          >
            Close
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default ModalDelet;
