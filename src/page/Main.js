import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

import { fetchedUser, setUser, deleteUser, clearUser } from "../store/user/actionUser";

import UserCard from "../components/UserCard";
import Loader from "../components/Loader";
import Error from "../components/Error";

const Main = ({ users, loading, error, fetchedUser,setUser, deleteUser, clearUser }) => {
  const history = useHistory();

  useEffect(() => {
    !users.length && fetchedUser();
    clearUser()
  }, []);

  const clickLoginUser = (user) => {
    setUser(user)
    history.push({
      pathname: "/user",
    });
  };

  const clickEditUser = (user) => {
    setUser(user)
    history.push({
      pathname: "/create",
    });
  };

  const clickCreateUser = () => {
    history.push({
      pathname: "/create",
    });
  };

  const clickDeleteUser = (user) => {
    deleteUser(user)
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="container">
      {error && <Error text={error.message} />}

      <div
        className="card mt-3 shadow hover cursor-pointer"
        onClick={clickCreateUser}
      >
        <div className="card-body fs-1 text-primary fw-bold">+</div>
      </div>

      {users.map((user) => (
        <UserCard
          user={user}
          key={user.id}
          editUser={ clickEditUser }
          loginUser={ clickLoginUser }
          deleteUser={ clickDeleteUser }
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.user.users,
  loading: state.app.loading,
  error: state.app.error,
});

const mapDispatchToProps = {
  fetchedUser,
  setUser,
  deleteUser,
  clearUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
