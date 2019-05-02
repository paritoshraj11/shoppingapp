import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const nativeFetch = (page = 1) => {
  return axios.get(`https://assignment-appstreet.herokuapp.com/api/v1/products?page=${page}`).then(result => {
    //passing data only and left error handling on  function which call one
    return result.data;
  });
};

class ListContainer extends React.Component {
  state = {
    products: [],
    page: 1
  };
  componentDidMount() {
    nativeFetch(this.state.page)
      .then(data => {
        let { products, success } = data;
        this.setState({ products });
      })
      .catch(err => {
        console.log("error >>>", err);
      });
  }

  laodMoreData = () => {
    let nextPage = this.state.page + 1;
    console.log(">>>> laod more called>>>");
    nativeFetch(nextPage)
      .then(data => {
        let { products, success } = data;
        console.log(">>>>> products >>>", products);
        let newProducts = [...this.state.products, ...products];
        this.setState({ page: nextPage, products: newProducts });
      })
      .catch(err => {
        console.log("error >>>", err);
      });
  };
  render() {
    let {
      state: { products }
    } = this;
    return <ShoppingList data={products} laodMoreData={this.laodMoreData} />;
  }
}

const renderItem = ({ data, index }) => {
  let imageSource = data.images && data.images[0];
  console.log(">>>> data >>>", data);
  return (
    <div className="col-md-3  col-6 ">
      <Link to={`/item-details/${data._id}`}>
        <img
          className="card-img-top"
          alt="image"
          style={{ height: "20vw", objectFit: "contain", width: "100%" }}
          src={imageSource}
        />
        <div className="card-body">
          <p className="card-text">{data.name}</p>
          <p className="card-text">{` ₹ ${Math.ceil(data.sale_price)}`}</p>
        </div>
      </Link>
    </div>
  );
};

const ShoppingList = ({ data = [], laodMoreData }) => {
  if (!data.length) {
    return null;
  }

  window.onscroll = () => {
    console.log(">>>>> scrolling >>>>");
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      console.log("end to the reached");
      laodMoreData && laodMoreData();
    }
  };
  return (
    <div className="container">
      <div className="row  product_list_container">
        {data.map((product, index) => {
          return renderItem({ data: product, index });
        })}
      </div>
    </div>
  );
};

export default ListContainer;
