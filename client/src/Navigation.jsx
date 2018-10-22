import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => (
  <div className="navigation">
    <Link className="navigation__link" to="/">Collection</Link>
    <Link className="navigation__link" to="/search">Search</Link>
  </div>
);

export default Navigation;
