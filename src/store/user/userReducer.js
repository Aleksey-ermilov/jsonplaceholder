import {
  CLEAR_USER,
  FETCH_ALBUMS,
  FETCH_POSTS,
  FETCH_TODOS,
  FETCH_USERS,
  SET_USER,
  CREATE_POST,
  EDIT_POST,
  EDIT_TODO,
  EDIT_ALBUM,
  CREATE_TODO,
  CREATE_ALBUM,
  DELETE_POST,
  DELETE_TODO,
  DELETE_ALBUM,
  DELETE_USER,
  CREATE_USER,
  EDIT_USER,
} from "../types";

const initialState = {
  users: [],
  posts: [],
  todos: [],
  albums: [],
  user: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, users: action.payload };
    case FETCH_POSTS:
      return { ...state, posts: action.payload };
    case FETCH_TODOS:
      return { ...state, todos: action.payload };
    case FETCH_ALBUMS:
      return { ...state, albums: action.payload };
    case SET_USER:
      return { ...state, user: action.payload };
    case CLEAR_USER:
      return { ...state, user: null };
    case CREATE_USER:
      return { ...state, users: [action.payload, ...state.users] };
    case CREATE_POST:
      return { ...state, posts: [action.payload, ...state.posts] };
    case CREATE_TODO:
      return { ...state, todos: [action.payload, ...state.todos] };
    case CREATE_ALBUM:
      return { ...state, albums: [action.payload, ...state.albums] };
    case EDIT_USER:
        return {
          ...state,
          users: state.users.map((item) => {
            if (item.id === action.payload.id) {
              return action.payload;
            }
            return item;
          }),
        };
    case EDIT_POST:
      return {
        ...state,
        posts: state.posts.map((item) => {
          if (item.id === action.payload.id) {
            return action.payload;
          }
          return item;
        }),
      };
    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((item) => {
          if (item.id === action.payload.id) {
            return action.payload;
          }
          return item;
        }),
      };
    case EDIT_ALBUM:
      return {
        ...state,
        albums: state.albums.map((item) => {
          if (item.id === action.payload.id) {
            return action.payload;
          }
          return item;
        }),
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((item) => item.id !== action.payload.id),
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((item) => item.id !== action.payload.id),
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload.id),
      };
    case DELETE_ALBUM:
      return {
        ...state,
        albums: state.albums.filter((item) => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};
