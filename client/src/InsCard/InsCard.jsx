import React from "react";
import "./InsCard.scss";

const InsCard = ({ children }) => {
  return (
    <>
      <div className="ins-card">
        <div className="card-wraper">{children}</div>
      </div>
    </>
  );
};

export default InsCard;
