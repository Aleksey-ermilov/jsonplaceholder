import React, { useState } from "react";

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

const ModalAlbum = ({ isShow, closeModal, onSave, header, item = { title: '' } }) => {
  const [form, setForm] = useState({
    title: item.title
  });

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onClickSave = () => {
    if (!form.title.trim()) {
      return;
    }
    onSave(form);
  };

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
          {header}
        </h5>
        <button
          type="button"
          className="btn-close"
          onClick={closeModal}
        ></button>
      </div>
      <div className="modal-body">
        <div className={"mb-2"}>
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name={"title"}
            onChange={changeHandler}
            value={form.title}
            required
          />
        </div>

      </div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={onClickCLose}
        >
          Close
        </button>
        <button type="button" className="btn btn-primary" onClick={onClickSave}>
          Save
        </button>
      </div>
      </form>
    </Modal>
  );
};

export default ModalAlbum;
