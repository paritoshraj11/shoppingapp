

import React from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container } from "reactstrap";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md" className="shadow-sm  bg-white rounded">
          <Container>
            <NavbarBrand class="brand_text_style" href="/">MY AWESOME SHOP</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/components/">HOME</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/components/">ABOUT</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/components/">CONTACT</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/components/">BAG</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
