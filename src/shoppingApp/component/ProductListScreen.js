import React from "react";
import { Link } from "react-router-dom";

const renderItem = ({ product, index }) => {
  let imageSource = product.images && product.images[0];
  return (
    <div className="col-md-3  col-6 ">
      <Link to={`/item-details/${product._id}`}>
        <img className="product-card__image" alt="product-image" src={imageSource} />
        <p className="product-card__name">{product.name}</p>
        <p className="product-card__price">{` ₹ ${Math.ceil(product.sale_price)}`}</p>
      </Link>
    </div>
  );
};

const ProductListScreen = ({ data = [], laodMoreData }) => {
  if (!data.length) {
    return null;
  }

  window.onscroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      console.log("end to the reached");
      laodMoreData && laodMoreData();
    }
  };
  return (
    <div className="container">
      <div className="row  product_list_container">
        {data.map((product, index) => {
          return renderItem({ product, index });
        })}
      </div>
    </div>
  );
};

export default ProductListScreen;
