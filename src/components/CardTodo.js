import React, { useState } from "react";

import ModalTodo from "./modal/ModalTodo";
import ModalDelet from "./modal/ModalDelet"

import Square from "../svg/Square";
import CheckSquare from "../svg/CheckSquare";

const CardTodo = ({ todo, editTodo, deleteTodo }) => {
  const [isShowModalEdit, setIsShowModalEdit] = useState(false)
  const [isShowModalDelete, setIsShowModalDelete] = useState(false)

  const [isCompleted, setIsCompleted] = useState(todo.completed);

  const closeModalEdit = () => { setIsShowModalEdit(false) }
  const openModalEdit = () => { setIsShowModalEdit(true) }

  const closeModalDelete = () => { setIsShowModalDelete(false) }
  const openModalDelete = () => { setIsShowModalDelete(true) }

  const edit = ({ title }) => {
    editTodo({ ...todo, title });
  };

  const clickCheckSquare = () => {
    setIsCompleted(false);
    editTodo({ ...todo, completed: false });
  }

  const clickSquare = () => {
    setIsCompleted(true);
    editTodo({ ...todo, completed: true });
  }

  return (
    <div className="card text-start mt-3 shadow">
      <ModalTodo
        isShow={isShowModalEdit}
        closeModal={closeModalEdit}
        onSave={edit}
        header={"Edit todo"}
        item={todo}
      />
      <ModalDelet
        isShow={isShowModalDelete}
        closeModal={closeModalDelete}
        onDelete={ () => deleteTodo(todo)}
      />

      <div className="card-body">
        <div className="todo_title">
          <h5 className="card-title">{todo.title}</h5>
          {isCompleted ? (
              <CheckSquare onClick={clickCheckSquare} className={"cursor-pointer"} />
          ) : (
              <Square onClick={clickSquare} className={"cursor-pointer"} />
          )}
        </div>

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

export default CardTodo;
