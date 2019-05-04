import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ProductListScreen from "./ProductListScreen";
const nativeFetch = (page = 1) => {
  return axios.get(`https://assignment-appstreet.herokuapp.com/api/v1/products?page=${page}`).then(result => {
    //passing data only and left error handling on  function which call one
    return result.data;
  });
};

class ProductListContainer extends React.Component {
  state = {
    products: [],
    page: 1
  };
  componentDidMount() {
    nativeFetch(this.state.page)
      .then(data => {
        let { products } = data;
        this.setState({ products });
      })
      .catch(err => {
        console.log("error >>>", err);
      });
  }

  laodMoreData = () => {
    let nextPage = this.state.page + 1;
    nativeFetch(nextPage)
      .then(data => {
        let { products } = data;
        let newProducts = [...this.state.products, ...products];
        this.setState({ page: nextPage, products: newProducts });
      })
      .catch(err => {
        console.log("error in laod more >>>", err);
      });
  };
  render() {
    let {
      state: { products }
    } = this;
    return <ProductListScreen data={products} laodMoreData={this.laodMoreData} />;
  }
}

export default ProductListContainer;
