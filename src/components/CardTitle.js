import React from "react";

const CardTitle = ({ title = "Card", onClick = () => {}, style = "" }) => {
  return (
    <div
      className={style}
      onClick={onClick}
    >
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
      </div>
    </div>
  );
};

export default CardTitle;
