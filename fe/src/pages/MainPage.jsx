import React from "react";
import Navbar from "../components/NavBar";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="row bg-primary">
      <div className="col-lg-8 col-md-8 col-sm-8 col-8 p-3">
        <h3 className="text-white">IKPLN</h3>
      </div>

      <div className="col-lg-4 col-md-4 col-sm-4 col-4 mx-auto p-3 text-end">
        <button className="btn btn-light">
          <Link to={`/login`}>Masuk </Link>
        </button>
      </div>
    </div>
  );
};

export default MainPage;
