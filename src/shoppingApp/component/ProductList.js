import React from "react";
import AppContext from "../AppContext";
import ProductListScreen from "./ProductListScreen";
import { nativeFetch } from "../clientUtility";

const PRODUCT_LIST_URL = "https://assignment-appstreet.herokuapp.com/api/v1/products?page=";

class ProductListContainer extends React.Component {
  state = {
    products: [],
    page: 0,
    hasMore: true
  };
  componentDidMount() {
    let { toggleFooter } = this.props;
    toggleFooter && toggleFooter(false);
    let { page } = this.state;
    this.fetchData(page + 1);
  }

  fetchData = nextPage => {
    let { toggleFooter, toggleLoader } = this.props;
    toggleLoader && toggleLoader(true);
    let url = PRODUCT_LIST_URL + nextPage;
    nativeFetch(url)
      .then(data => {
        let { products = [] } = data;
        if (!products.length) {
          //when fetching products data from server and it give blank array that means server has no more data
          //then set hasNext false
          this.setState({
            hasMore: false
          });
        }
        this.setState({ products: [...this.state.products, ...products], page: nextPage });
        toggleFooter && toggleFooter(true);
        toggleLoader && toggleLoader(false);
      })
      .catch(err => {
        alert("error in network call >>>", err);
      });
  };

  laodMoreData = () => {
    let nextPage = this.state.page + 1;
    if (this.state.hasMore) {
      //if server has more data then make call otherwise ignore call
      this.fetchData(nextPage);
    }
  };
  render() {
    let {
      state: { products }
    } = this;
    return <ProductListScreen data={products} laodMoreData={this.laodMoreData} />;
  }
}

export default props => {
  return (
    <AppContext.Consumer>
      {value => {
        return <ProductListContainer {...value} {...props} />;
      }}
    </AppContext.Consumer>
  );
};
