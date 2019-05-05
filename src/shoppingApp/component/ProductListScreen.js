import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
const renderItem = ({ product, index }) => {
  let imageSource = product.images && product.images[0];
  return (
    <Col md={3} xs={6}>
      <Link to={`/item-details/${product._id}`}>
        <img className="product-card__image" alt="product-image" src={imageSource} />
        <p className="product-card__name">{product.name}</p>
        <p className="product-card__price">{` ₹ ${Math.ceil(product.sale_price)}`}</p>
      </Link>
    </Col>
  );
};

class ProductListScreen extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", this.onScrollEvent);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScrollEvent);
  }

  onScrollEvent = () => {
    let { laodMoreData } = this.props;
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      laodMoreData && laodMoreData();
    }
  };

  render() {
    let { data } = this.props;
    if (!data.length) {
      return null;
    }

    return (
      <Container>
        <Row className="product_list_container pt20">
          {data.map((product, index) => {
            return renderItem({ product, index });
          })}
        </Row>
      </Container>
    );
  }
}
export default ProductListScreen;
