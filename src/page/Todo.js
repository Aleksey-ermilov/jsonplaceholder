import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import Loader from "../components/Loader";
import Error from "../components/Error";
import CardTodo from "../components/CardTodo";

import ModalTodo from "../components/modal/ModalTodo";

import {
  fetchedTodos,
  createTodo,
  editTodo,
  deleteTodo,
} from "../store/user/actionUser";

const Todo = ({
  todos,
  loading,
  error,
  fetchedTodos,
  createTodo,
  editTodo,
  deleteTodo,
}) => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    fetchedTodos();
  }, []);

  const closeModal = () => {
    setIsShow(false);
  };
  const openModal = () => {
    setIsShow(true);
  };

  const clickEditTodo = (todo) => {
    editTodo(todo);
  };

  const clickCreateTodo = (todo) => {
    createTodo(todo);
  };

  const clickDeleteTodo = (todo) => {
    deleteTodo(todo);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="container">
      {error && <Error text={error.message} />}

      <ModalTodo
        isShow={isShow}
        closeModal={closeModal}
        onSave={clickCreateTodo}
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

      {todos.length ? (
        todos.map((todo) => (
          <CardTodo
            todo={todo}
            editTodo={clickEditTodo}
            deleteTodo={clickDeleteTodo}
            key={todo.id}
          />
        ))
      ) : (
        <h2 className="mt-4">The list is empty</h2>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.user.todos,
  loading: state.app.loading,
  error: state.app.error,
});

const mapDispatchToProps = {
  fetchedTodos,
  createTodo,
  editTodo,
  deleteTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
