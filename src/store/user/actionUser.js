import { request } from "../../helpers/http";
import {
  CLEAR_USER,
  FETCH_ALBUMS,
  FETCH_POSTS,
  FETCH_TODOS,
  FETCH_USERS,
  SET_USER,
  CREATE_POST,
  EDIT_POST,
  CREATE_TODO,
  CREATE_ALBUM,
  EDIT_TODO,
  EDIT_ALBUM,
  DELETE_POST,
  DELETE_TODO,
  DELETE_ALBUM,
  DELETE_USER,
  CREATE_USER,
  EDIT_USER,
} from "../types";
import { hideLoader, showLoader, showError } from "../app/actionApp";

export function setUser(user) {
  return {
    type: SET_USER,
    payload: user,
  };
}
export function clearUser() {
  return {
    type: CLEAR_USER,
  };
}

// ***
// fetch
// ***

export function fetchedUser() {
  return async (dispatch) => {
    try {
      dispatch(showLoader());
      const json = await request("https://jsonplaceholder.typicode.com/users");
      dispatch({ type: FETCH_USERS, payload: json });
      dispatch(hideLoader());
    } catch (e) {
      dispatch(showError(e.message));
      dispatch(hideLoader());
    }
  };
}

export function fetchedPosts() {
  return async (dispatch, getState) => {
    try {
      const {
        user: {
          user: { id },
        },
      } = getState();
      dispatch(showLoader());
      const json = await request(
        `https://jsonplaceholder.typicode.com/posts?userId=${id}`
      );
      dispatch({ type: FETCH_POSTS, payload: json });
      dispatch(hideLoader());
    } catch (e) {
      dispatch(showError(e.message));
      dispatch(hideLoader());
    }
  };
}

export function fetchedTodos() {
  return async (dispatch, getState) => {
    try {
      const {
        user: {
          user: { id },
        },
      } = getState();
      dispatch(showLoader());
      const json = await request(
        `https://jsonplaceholder.typicode.com/todos?userId=${id}`
      );
      dispatch({ type: FETCH_TODOS, payload: json });
      dispatch(hideLoader());
    } catch (e) {
      dispatch(showError(e.message));
      dispatch(hideLoader());
    }
  };
}

export function fetchedAlbums() {
  return async (dispatch, getState) => {
    try {
      const {
        user: {
          user: { id },
        },
      } = getState();
      dispatch(showLoader());
      const json = await request(
        `https://jsonplaceholder.typicode.com/albums?userId=${id}`
      );
      dispatch({ type: FETCH_ALBUMS, payload: json });
      dispatch(hideLoader());
    } catch (e) {
      dispatch(showError(e.message));
      dispatch(hideLoader());
    }
  };
}

// ***
// create
// ***

export function createUser(user) {
  return async (dispatch) => {
    try {
      dispatch(showLoader());
      const json = await request(
        "https://jsonplaceholder.typicode.com/users",
        "POST",
        user
      );
      dispatch({ type: CREATE_USER, payload: json });
      dispatch(hideLoader());
    } catch (e) {
      dispatch(showError(e.message));
      dispatch(hideLoader());
    }
  };
}

export function createPost(post) {
  return async (dispatch, getState) => {
    try {
      const {
        user: {
          user: { id },
        },
      } = getState();
      dispatch(showLoader());
      const json = await request(
        "https://jsonplaceholder.typicode.com/posts",
        "POST",
        { ...post, userId: id }
      );
      dispatch({ type: CREATE_POST, payload: json });
      dispatch(hideLoader());
    } catch (e) {
      dispatch(showError(e.message));
      dispatch(hideLoader());
    }
  };
}

export function createTodo(todo) {
  return async (dispatch, getState) => {
    try {
      const {
        user: {
          user: { id },
        },
      } = getState();
      dispatch(showLoader());
      const json = await request(
        "https://jsonplaceholder.typicode.com/todos",
        "POST",
        { ...todo, userId: id }
      );
      console.log(json);
      dispatch({ type: CREATE_TODO, payload: json });
      dispatch(hideLoader());
    } catch (e) {
      dispatch(showError(e.message));
      dispatch(hideLoader());
    }
  };
}

export function createAlbum(album) {
  return async (dispatch, getState) => {
    try {
      const {
        user: {
          user: { id },
        },
      } = getState();
      dispatch(showLoader());
      const json = await request(
        "https://jsonplaceholder.typicode.com/albums",
        "POST",
        { ...album, userId: id }
      );
      dispatch({ type: CREATE_ALBUM, payload: json });
      dispatch(hideLoader());
    } catch (e) {
      dispatch(showError(e.message));
      dispatch(hideLoader());
    }
  };
}

// ***
// edit
// ***

export function editUser(value) {
  return async (dispatch, getState) => {
    try {
      const {
        user: {
          user,
        },
      } = getState();
      dispatch(showLoader());
      const json = await request(
        `https://jsonplaceholder.typicode.com/users/${user.id}`,
        "PUT",
        { ...user, ...value}
      );
      dispatch({ type: EDIT_USER, payload: json });
      dispatch(hideLoader());
    } catch (e) {
      dispatch(showError(e.message));
      dispatch(hideLoader());
    }
  };
}

export function editPost(post) {
  return async (dispatch) => {
    try {
      dispatch(showLoader());
      const json = await request(
        `https://jsonplaceholder.typicode.com/posts/${post.id}`,
        "PUT",
        post
      );
      dispatch({ type: EDIT_POST, payload: json });
      dispatch(hideLoader());
    } catch (e) {
      dispatch(showError(e.message));
      dispatch(hideLoader());
    }
  };
}

export function editTodo(todo) {
  return async (dispatch) => {
    try {
      dispatch(showLoader());
      const json = await request(
        `https://jsonplaceholder.typicode.com/todos/${todo.id}`,
        "PUT",
        todo
      );
      dispatch({ type: EDIT_TODO, payload: json });
      dispatch(hideLoader());
    } catch (e) {
      dispatch(showError(e.message));
      dispatch(hideLoader());
    }
  };
}


export function editAlbum(album) {
  return async (dispatch) => {
    try {
      dispatch(showLoader());
      const json = await request(
        `https://jsonplaceholder.typicode.com/albums/${album.id}`,
        "PUT",
        album
      );
      dispatch({ type: EDIT_ALBUM, payload: json });
      dispatch(hideLoader());
    } catch (e) {
      dispatch(showError(e.message));
      dispatch(hideLoader());
    }
  };
}

// ***
// delete
// ***

export function deleteUser(user) {
  return async (dispatch) => {
    try {
      dispatch(showLoader());
      const json = await request(
        `https://jsonplaceholder.typicode.com/users/${user.id}`,
        "DELETE"
      );
      dispatch({ type: DELETE_USER, payload: user });
      dispatch(hideLoader());
    } catch (e) {
      dispatch(showError(e.message));
      dispatch(hideLoader());
    }
  };
}

export function deletePost(post) {
  return async (dispatch) => {
    try {
      dispatch(showLoader());
      const json = await request(
        `https://jsonplaceholder.typicode.com/posts/${post.id}`,
        "DELETE"
      );
      dispatch({ type: DELETE_POST, payload: post });
      dispatch(hideLoader());
    } catch (e) {
      dispatch(showError(e.message));
      dispatch(hideLoader());
    }
  };
}

export function deleteTodo(todo) {
  return async (dispatch) => {
    try {
      dispatch(showLoader());
      const json = await request(
        `https://jsonplaceholder.typicode.com/todos/${todo.id}`,
        "DELETE"
      );
      dispatch({ type: DELETE_TODO, payload: todo });
      dispatch(hideLoader());
    } catch (e) {
      dispatch(showError(e.message));
      dispatch(hideLoader());
    }
  };
}

export function deleteAlbum(album) {
  return async (dispatch) => {
    try {
      dispatch(showLoader());
      const json = await request(
        `https://jsonplaceholder.typicode.com/albums/${album.id}`,
        "DELETE"
      );
      dispatch({ type: DELETE_ALBUM, payload: album });
      dispatch(hideLoader());
    } catch (e) {
      dispatch(showError(e.message));
      dispatch(hideLoader());
    }
  };
}