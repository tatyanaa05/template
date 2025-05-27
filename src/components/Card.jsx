
import React from "react";

export const Card = ({ image, name, listeners }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="image" />
      <div className="info">
        <h3 className="name">{name}</h3>
        <p className="listeners">
  {isNaN(Number(listeners))
    ? listeners
    : `${Number(listeners).toLocaleString()} listeners`}
</p>
      </div>
    </div>
  );
};
