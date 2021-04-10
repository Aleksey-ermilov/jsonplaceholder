import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import Loader from "../components/Loader";
import Error from "../components/Error";
import CardAlbum from "../components/CardAlbum";

import ModalAlbum from "../components/modal/ModalAlbum";

import {
  fetchedAlbums,
  createAlbum,
  editAlbum,
  deleteAlbum,
} from "../store/user/actionUser";

const Album = ({
  albums,
  loading,
  error,
  fetchedAlbums,
  createAlbum,
  editAlbum,
  deleteAlbum,
}) => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    fetchedAlbums();
  }, []);

  const closeModal = () => {
    setIsShow(false);
  };
  const openModal = () => {
    setIsShow(true);
  };

  const clickCreateAlbum = (album) => {
    createAlbum(album);
  };
  const clickEditAlbum = (album) => {
    editAlbum(album);
  };

  const clickDeleteAlbum = (album) => {
    deleteAlbum(album);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="container">
      {error && <Error text={error.message} />}

      <ModalAlbum
        isShow={isShow}
        closeModal={closeModal}
        onSave={clickCreateAlbum}
        header={"Create todo"}
      />

      <div className="card mt-3 shadow hover cursor-pointer">
        <div
          className="card-body fs-1 text-primary fw-bold"
          onClick={openModal}
        >
          +
        </div>
      </div>

      {albums.length ? (
        albums.map((album) => (
          <CardAlbum
            album={album}
            editAlbum={clickEditAlbum}
            deleteAlbum={clickDeleteAlbum}
            key={album.id}
          />
        ))
      ) : (
        <h2 className="mt-4">The list is empty</h2>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  albums: state.user.albums,
  loading: state.app.loading,
  error: state.app.error,
});

const mapDispatchToProps = {
  fetchedAlbums,
  createAlbum,
  editAlbum,
  deleteAlbum,
};

export default connect(mapStateToProps, mapDispatchToProps)(Album);
