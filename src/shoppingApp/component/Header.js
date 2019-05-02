import React from "react";

export default () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light shadow-sm p-3 mb-5 bg-white rounded ">
        <div className="container ">
          <span className="navbar-brand" href="#">
            MY AWESOME SHOP
          </span>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent ">
            <ul class="navbar-nav ml-auto ">
              <li class="nav-item  active">
                <span class="nav-link ">HOME</span>
              </li>
              <li class="nav-item active">
                <span class="nav-link" href="#">
                  ABOUT
                </span>
              </li>
              <li class="nav-item active">
                <span class="nav-link" href="#" tabindex="-1">
                  CONTACT
                </span>
              </li>
              <li class="nav-item active">
                <span class="nav-link" href="#" tabindex="-1">
                  BAG
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
