import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { connect } from "react-redux";

import { clearUser } from "../store/user/actionUser";

const Header = ({ clearUser }) => {
  const history = useHistory();
  const location = useLocation();

  const clickHeader = () => {
    clearUser();
  };

  const goBack = () => {
    history.goBack();
  };
  return (
    <nav className="navbar navbar-light bg-primary">
      <div className="container-fluid ">
        <Link
          className="navbar-brand text-white"
          to={"/"}
          onClick={clickHeader}
        >
          Jsonplaceholder
        </Link>
        {!(location.pathname === "/") && (
          <button className="btn btn-secondary" onClick={goBack}>
            Back
          </button>
        )}
      </div>
    </nav>
  );
};

const mapDispatchToProps = {
  clearUser,
};

export default connect(null, mapDispatchToProps)(Header);
