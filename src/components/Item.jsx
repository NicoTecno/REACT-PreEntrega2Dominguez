import { Link } from "react-router-dom";
import React from "react";

export const Item = ({ producto }) => {
  const imageUrl = require(`../imgs/${producto.pictureUrl}`);
  return (
    <div key={producto.id} className="ConteinerDivCardItem">
      <img src={imageUrl} alt="" />
      <h1>{producto.title}</h1>
      <p>{producto.description}</p>
      <Link to={`/item/${producto.id}`}>
        <button className="BotonComprar">Ver Mas</button>
      </Link>

      <h2>Stcok: </h2>
    </div>
  );
};
