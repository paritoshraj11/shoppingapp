import React, { Component } from "react";
import ImageCarousel from "./ImageCarousel";
import ProductDescription from "./ProductDescription";
export default class ProductDetailScreen extends Component {
  render() {
    let { product_details } = this.props;
    if (!product_details) {
      return null;
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 ">
            <ImageCarousel images={product_details.images} />
          </div>
          <div className="col-md-6 ">
            <ProductDescription {...this.props} />
          </div>
        </div>
      </div>
    );
  }
}
