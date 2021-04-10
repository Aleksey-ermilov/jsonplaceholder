import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import Loader from "../components/Loader";
import Error from "../components/Error";
import CardPost from "../components/CardPost";

import ModalPost from "../components/modal/ModalPost"

import { fetchedPosts, createPost, editPost, deletePost } from "../store/user/actionUser";

const Posts = ({ posts, loading, error, fetchedPosts, createPost, editPost, deletePost }) => {

  const [isShow, setIsShow] = useState(false)

  useEffect(() => {
    fetchedPosts();
  }, []);

  const closeModal = () => { setIsShow(false) }
  const openModal = () => { setIsShow(true) }

  const clickEditPost = (post) => {
    editPost(post)
  };

  const clickCreatePost = (post) => {
    createPost(post);
  };

  const clickDeletePost = (post) => {
    deletePost(post)
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="container">
      {error && <Error text={error.message} />}

      <ModalPost 
        isShow={isShow}
        closeModal={closeModal}
        onSave={clickCreatePost}
        header={'Create post'}
      />

      <div className="card mt-3 shadow hover cursor-pointer">
        <div
          className="card-body fs-1 text-primary fw-bold"
          onClick={openModal}
        >
          +
        </div>
      </div>

      {
        posts.length ?
      posts.map((post) => (
        <CardPost post={post} key={post.id} editPost={clickEditPost} deletePost={clickDeletePost} />
      ))
      :
      <h2 className="mt-4">The list is empty</h2>
    }
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.user.posts,
  loading: state.app.loading,
  error: state.app.error,
});

const mapDispatchToProps = {
  fetchedPosts,
  createPost,
  editPost,
  deletePost
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
