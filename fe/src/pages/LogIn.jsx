import React, { useState } from "react";
import Navbar from "../components/NavBar";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const logInButton = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/users/login", {
        email,
        password,
      });
      navigate('/dashboard')
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-lg-12">
          <Navbar />
        </div>
      </div>

      <div className="vh-100 d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-12 col-md-8 col-lg-6">
              <div className="border border-3 border-primary"></div>
              <div className="card bg-white">
                <div className="card-body p-5">

                  <form onSubmit={logInButton} className="mb-3 mt-md-4">
                    <h3 className="mb-5 text-center">
                      Please enter your login and password!
                    </h3>

                    <div className="mb-3">
                      <label className="form-label fw-semibold">
                        Email address
                      </label>
                      <input 
                        type="email" 
                        className="form-control input" 
                        id="email"
                        value = {email}
                        onChange = {(e) => setEmail(e.target.value)} 
                        />
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-semibold">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control input"
                        id="password"
                        value = {password}
                        onChange = {(e) => setPassword(e.target.value)}
                      />
                    </div>

                    <div className="d-grid">
                      <button
                        className="btn btn-primary fw-semibold"
                        type="submit"
                      >
                        Login
                      </button>
                    </div>

                  </form>

                  <div>
                    <p className="mb-0 text-center">
                      Don't have an account?{" "}
                      <a className="text-primary fw-bold">
                        <Link to={`/signup`}>Sign Up</Link>
                      </a>
                    </p>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
