import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductList from "./component/ProductList";
import ProductDetail from "./component/ProductDetail";
import Header from "./component/Header";
import Footer from "./component/Footer";
import AppContext from "./AppContext";
import Loader from "./component/Loader";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      footerVisible: false,
      isLoaderVisible: true
    };
    this.appContextValue = {
      footerVisible: this.state.footerVisible,
      toggleFooter: this.toggleFooter,
      loaderVisible: this.state.isLoaderVisible,
      toggleLoader: this.toggleLoader
    };
  }

  toggleLoader = value => {
    this.setState({
      isLoaderVisible: value
    });
  };

  toggleFooter = value => {
    this.setState({
      footerVisible: value
    });
  };

  render() {
    return (
      <AppContext.Provider value={this.appContextValue}>
        <Router>
          <div>
            <Header />
            {this.state.isLoaderVisible && <Loader />}
            <Route path="/" exact component={ProductList} />
            <Route path="/item-details/:id" component={ProductDetail} />
            {this.state.footerVisible && <Footer />}
          </div>
        </Router>
      </AppContext.Provider>
    );
  }
}

export default App;
