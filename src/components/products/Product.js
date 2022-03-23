import React from "react";
import "./Product.css";

function Product({ title, imgurl, description }) {
  return (
    <div
      className={`width-300 height-400 bg-light rounded-10 m-4 shadow d-flex flex-column justify-content-between align-items-center p-4`}
    >
      <img className={`img-fluid w-50`} src={imgurl} alt="" />
      <div className={`w-100 d-flex flex-column justify-content-center h-50`}>
        <h3 align="center">{title}</h3>
        <p align="center">{description}</p>
      </div>
    </div>
  );
}

export default Product;
