import React, { useState } from "react";

import ModalAlbum from "./modal/ModalAlbum";
import ModalDelet from "./modal/ModalDelet"

const CardAlbum = ({ album, editAlbum, deleteAlbum }) => {
  const [isShowModalEdit, setIsShowModalEdit] = useState(false)
  const [isShowModalDelete, setIsShowModalDelete] = useState(false)

  const closeModalEdit = () => { setIsShowModalEdit(false) }
  const openModalEdit = () => { setIsShowModalEdit(true) }

  const closeModalDelete = () => { setIsShowModalDelete(false) }
  const openModalDelete = () => { setIsShowModalDelete(true) }

  const edit = ({ title }) => {
    editAlbum({ ...album, title });
  };

  return (
    <div className="card text-start mt-3 shadow">
      <ModalAlbum
        isShow={isShowModalEdit}
        closeModal={closeModalEdit}
        onSave={edit}
        header={"Edit album"}
        item={album}
      />
      <ModalDelet
        isShow={isShowModalDelete}
        closeModal={closeModalDelete}
        onDelete={ () => deleteAlbum(album)}
      />

      <div className="card-body">
        <h5 className="card-title mb-4">{album.title}</h5>
        <div className="row justify-content-around">
          <button type="button" className="btn btn-outline-danger col-2" onClick={openModalDelete}>
            Delete
          </button>
          <button
            type="button"
            className="btn btn-primary col-2"
            onClick={openModalEdit}
          >
            edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardAlbum;
