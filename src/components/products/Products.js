import React from "react";
import products from "./productlist";
import Product from "./Product";
import "./Product.css";

function Products() {
  return (
    <section className={`p-5 bg-gray-200`}>
      <div className={`container w-100 d-flex flex-column align-items-center`}>
        <h1 className={`mb-4`}>Our Products</h1>
        <div className={`d-flex flex-wrap`}>
          {products.map((item, index) => (
            <Product
              key={index}
              title={item.title}
              imgurl={item.imgurl}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
