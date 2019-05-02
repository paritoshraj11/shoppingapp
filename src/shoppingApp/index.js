import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ShoppingList from "./component/ShoppingList";
import ItemDetail from "./component/ItemDetail";
import Header from "./component/Header";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route path="/" exact component={ShoppingList} />
          <Route path="/item-details/:id" component={ItemDetail} />
        </div>
      </Router>
    );
  }
}

export default App;
