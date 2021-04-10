import React, { useState } from "react";

import ModalDelet from "../components/modal/ModalDelet";

const UserCard = ({ user, editUser, loginUser, deleteUser }) => {
  const [isShowModalDelete, setIsShowModalDelete] = useState(false);

  const closeModalDelete = () => {
    setIsShowModalDelete(false);
  };
  const openModalDelete = () => {
    setIsShowModalDelete(true);
  };

  const clickUserEdit = () => {
    editUser(user)
  }

  const clickUserLogin = () => {
    loginUser(user)
  }

  const clickUserDelete = () => {
    deleteUser(user)
  }
  return (
    <div className="card mt-3 shadow">
      <ModalDelet
        isShow={isShowModalDelete}
        closeModal={closeModalDelete}
        onDelete={clickUserDelete}
      />

      <div className="card-body">
        <h5 className="card-title">{user.username}</h5>
        <p className="card-text">{user.email}</p>
        <div className="row justify-content-around">
          <button
            type="button"
            className="btn btn-danger col-2"
            onClick={openModalDelete}
          >
            Delete
          </button>
          <button
            type="button"
            className="btn btn-outline-primary col-2"
            onClick={clickUserEdit}
          >
            edit
          </button>
          <button
            type="button"
            className="btn btn-primary col-2"
            onClick={clickUserLogin}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
