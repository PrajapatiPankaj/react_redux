import React from "react";
import { useSelector } from "react-redux";
import {Link} from 'react-router-dom'

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  console.log("products", products);

  const renderList = products.map((product) => {
    const { id, price, category, title, image } = product;
    return (
      <div className="ui grid">
        <div className="four column wide" key={id}>
            <Link />
          <div className="ui cards">
            <div className="ui centered card">
              <div className="ui small centered image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">$ {price} </div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <>{renderList}</>;
};

export default ProductComponent;
