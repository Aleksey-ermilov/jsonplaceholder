import React from "react";

const Error = ({ text = "Something went wrong" }) => {
  return (
    <div className="container">
      <div className="alert alert-danger mt-2" role="alert">
        {text}
      </div>
    </div>
  );
};

export default Error;
