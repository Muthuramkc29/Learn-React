import React from "react";
import { Link } from "react-router-dom";

function about(props) {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <div className="d-flex align-items-center justify-content-center">
        <Link to="/">
          <button className="btn btn-primary btn-sm mt-3">Home</button>
        </Link>
      </div>
    </div>
  );
}

export default about;
