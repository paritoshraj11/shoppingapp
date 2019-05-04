import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductList from "./component/ProductList";
import ProductDetail from "./component/ProductDetail";
import Header from "./component/Header";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route path="/" exact component={ProductList} />
          <Route path="/item-details/:id" component={ProductDetail} />
        </div>
      </Router>
    );
  }
}

export default App;
