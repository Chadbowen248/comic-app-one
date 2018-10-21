import React from "react";
import { Link } from "react-router-dom";

const Navigation = (props) => (
  <div className="navigation">
    <Link className="navigation__link" to="/">Collection</Link>
    <Link className="navigation__link" to="/search">Search</Link>
    <button className="button" onClick={props.signOut}>sign out</button>
    <div className="user-info">
      <img className="user-info__profile-pic " src={props.userInfo.photoURL} alt={props.userInfo.displayName}/>
    </div>
  </div>
);

export default Navigation;
