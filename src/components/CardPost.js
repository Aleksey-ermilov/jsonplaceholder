import React, {useState} from 'react'

import ModalPost from "./modal/ModalPost"
import ModalDelet from "./modal/ModalDelet"

const CardPost = ({post, editPost, deletePost}) => {

  const [isShowModalEdit, setIsShowModalEdit] = useState(false)
  const [isShowModalDelete, setIsShowModalDelete] = useState(false)

  const closeModalEdit = () => { setIsShowModalEdit(false) }
  const openModalEdit = () => { setIsShowModalEdit(true) }

  const closeModalDelete = () => { setIsShowModalDelete(false) }
  const openModalDelete = () => { setIsShowModalDelete(true) }

  const edit = ({title,body}) => {
    editPost({...post, title, body})
  }

  return (
    <div className="card text-start mt-3 shadow">

      <ModalPost
        isShow={isShowModalEdit}
        closeModal={closeModalEdit}
        onSave={edit}
        header={'Edit post'}
        item={post}
      />
      <ModalDelet
        isShow={isShowModalDelete}
        closeModal={closeModalDelete}
        onDelete={ () => deletePost(post)}
      />

      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        <div className="row justify-content-around">
          <button
            type="button"
            className="btn btn-outline-danger col-2"
            onClick={openModalDelete}
          >
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
  )
}

export default CardPost
