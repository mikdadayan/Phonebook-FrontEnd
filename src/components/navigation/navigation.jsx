import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="pa3 pa4-ns">
      <NavLink
        className="link dim black b f1 f-headline-ns tc db mb3 mb4-ns"
        title="Home"
        to="/"
        activeClassName="menuActive"
        exact={true}
      >
        Phonebook
      </NavLink>
      <div className="tc pb3">
        <NavLink
          className="link dim gray f6 f5-ns dib mr3"
          to="/create-contact"
          title="New Contact"
          activeClassName="menuActive"
          exact={true}
        >
          New Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default connect()(Navigation);
