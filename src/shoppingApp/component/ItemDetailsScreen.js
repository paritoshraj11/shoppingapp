import React, { Component } from "react";

export default class ItemDetailsScreen extends Component {
  render() {
    let { product_details, selectedAttributes, availableAttributes } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 border">
            <h1>image coursel</h1>
          </div>
          <div className="col-md-6 border">
            <h1>product-detail</h1>
          </div>
        </div>
      </div>
    );
  }
}
