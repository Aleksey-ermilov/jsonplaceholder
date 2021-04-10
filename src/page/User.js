import React from "react";
import { useHistory } from "react-router-dom";

import CardTitle from "../components/CardTitle";

const User = () => {
  const history = useHistory();

  const clickCardPosts = () => {
    history.push({
      pathname: "/posts",
    });
  };

  const clickCardTodo = () => {
    history.push({
      pathname: "/todo",
    });
  };

  const clickCardAlbums = () => {
    history.push({
      pathname: "/albums",
    });
  };

  return (
    <div className="container">
      <div className="row">
        
        <div className="col-4">
          <CardTitle
            title={"posts"}
            onClick={clickCardPosts}
            style={"card mt-3 shadow hover cursor-pointer"}
          />
        </div>
        <div className="col-4">
          <CardTitle
            title={"todo"}
            onClick={clickCardTodo}
            style={"card mt-3 shadow hover cursor-pointer"}
          />
        </div>
        <div className="col-4">
          <CardTitle
            title={"albums"}
            onClick={clickCardAlbums}
            style={"card mt-3 shadow hover cursor-pointer"}
          />
        </div>
      </div>
    </div>
  );
};

export default User;
