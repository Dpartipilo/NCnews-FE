import React from "react";
import { Link } from "react-router-dom";

const NoMatch = () => (
  <div>
    <Link to="/">
      <div className="Page404" />
    </Link>
  </div>
);

export default NoMatch;
