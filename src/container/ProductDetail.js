import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectedProduct } from "../redux/actions/productActions";

const ProductDetails = () => {
  const product = useSelector((state) => state.product);

  const {image,title, description,price,category} = product;

  const dispatch = useDispatch();
  const { productId } = useParams();
  console.log(product);

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("Err ", err);
      });

    console.log("Individual product", response.data);

    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
  }, [productId]);

  return (
    <div className="ui grid container">
      {Object.keys(product).length == 0 ? (
        <div>Loading...</div>
      ) : (
        <div className="ui placeholder segment">
          <div calssName="two column stakable center aligned grid">
            <div className="ui vertical devider">
              AND
              <div className="middle aligned row">
                <div className="column lp">
                  <div className="ui small centered image">
                    <img src={image} />
                  </div>
                  <div className="colunm rp">
                    <h1>{title}</h1>
                    <h2>
                      <a className="ui teal tag label">${price}</a>
                    </h2>
                    <h3 className="ui brown block header">{category}</h3>
                    <p>{description}</p>
                    <div className="ui vertical animated button" tabIndex="0">
                      <div className="hidden content">
                        <i className="shop icon"></i>
                      </div>
                      <div className="visible content">Add to Cart</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
