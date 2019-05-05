import React from "react";
import { nativeFetch, isArrayEqaul } from "../clientUtility";
import ProductDetailScreen from "./ProductDetailScreen";
import AppContext from "../AppContext";

const PRODUCT_DETAIL_URL = "https://assignment-appstreet.herokuapp.com/api/v1/products/";

class ProductDetail extends React.Component {
  state = {
    data: null
  };

  getCurrentId = () => {
    let { match } = this.props;
    let { params: { id } = {} } = match;
    return id;
  };

  componentDidMount() {
    let { toggleFooter, footerVisible, toggleLoader } = this.props;
    toggleFooter && toggleFooter(false);
    toggleLoader && toggleLoader(true);
    let currentProductId = this.getCurrentId();
    this.loadData(currentProductId);
  }

  loadData = productId => {
    let url = `${PRODUCT_DETAIL_URL}${productId}`;
    nativeFetch(url)
      .then(res => {
        // console.log(">>>>> product details >>>>>>", res);
        this.loadState(res);
        let { toggleFooter, footerVisible, toggleLoader } = this.props;
        toggleFooter && toggleFooter(true);
        toggleLoader && toggleLoader(false);
      })
      .catch(err => {
        console.log(">>>> err in loading data>>>>", err);
      });
  };

  loadState = (data = {}) => {
    let { primary_product, attributes, options, product_variations, selected_option_ids = [] } = data;
    //find available color and storage
    let availableAttributes = {};
    attributes.forEach(element => {
      let { _id, name } = element;
      //find in options to get available options for the product
      let attributeOptions = options.filter((option = {}) => {
        return option.attrib_id == _id;
      });
      availableAttributes[name] = [...attributeOptions];
    });
    //find selected storage or selected color - may be used in future or what
    let selectedAttributes = {};
    selected_option_ids.forEach(selectedId => {
      //find in  available color attributes and find in available storage available
      Object.keys(availableAttributes).map(availableAttributeKey => {
        let selectedAttribute = availableAttributes[availableAttributeKey].find(attribute => {
          // console.log(">>> availableAttributeKey  ", availableAttributeKey, selectedId, attribute._id);
          return attribute._id == selectedId;
        });
        if (selectedAttribute) {
          selectedAttributes[availableAttributeKey] = selectedAttribute._id;
        }
      });
    });
    let product_details = this.getProductDetails({ primary_product, selected_option_ids, product_variations });
    //setting initial state for the product :::

    this.setState({
      primary_product,
      attributes,
      options,
      product_variations,
      selected_option_ids,
      availableAttributes,
      selectedAttributes,
      product_details
    });
  };

  getProductDetails = ({ primary_product, selected_option_ids, product_variations = [] }) => {
    //here selected_option_ids is simple array of selected id
    let product_variation_detail = product_variations.find(product_variation => {
      let { sign = [] } = product_variation;
      return isArrayEqaul(sign, selected_option_ids);
    });
    // console.log(">>>> product variation match>>>>", product_variation_detail);
    return Object.assign({}, primary_product, product_variation_detail);
  };

  selectColor = colorId => {
    let { selectedAttributes, primary_product, product_variations } = this.state;
    selectedAttributes["Colour"] = colorId;
    let product_details = this.getProductDetails({
      primary_product,
      product_variations,
      selected_option_ids: Object.values(selectedAttributes)
    });

    this.setState({
      selectedAttributes: selectedAttributes,
      product_details
    });
  };

  selectStorage = storageId => {
    let { selectedAttributes, primary_product, product_variations } = this.state;
    selectedAttributes["Storage"] = storageId;
    let product_details = this.getProductDetails({
      primary_product,
      product_variations,
      selected_option_ids: Object.values(selectedAttributes)
    });
    this.setState({
      selectedAttributes: selectedAttributes,
      product_details
    });
  };

  render() {
    let { product_details, selectedAttributes, availableAttributes } = this.state;
    return (
      <ProductDetailScreen
        product_details={product_details}
        selectedAttributes={selectedAttributes}
        availableAttributes={availableAttributes}
        selectColor={this.selectColor}
        selectStorage={this.selectStorage}
      />
    );
  }
}

export default props => {
  return (
    <AppContext.Consumer>
      {value => {
        return <ProductDetail {...value} {...props} />;
      }}
    </AppContext.Consumer>
  );
};
