import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Main from "./page/Main";
import User from './page/User'
import CreateUser from './page/CreateUser'
import Posts from './page/Posts'
import Todo from './page/Todo'
import Album from './page/Album'

const useRoutes = () => {
  return (
    <Switch>
      <Route path={"/"} component={Main} exact />
      <Route path={"/user"} component={User} exact />
      <Route path={"/create"} component={CreateUser} exact />
      <Route path={"/posts"} component={Posts} exact />
      <Route path={"/todo"} component={Todo} exact />
      <Route path={"/albums"} component={Album} exact />

      <Redirect to={"/"} />
    </Switch>
  );
};

export default useRoutes;
