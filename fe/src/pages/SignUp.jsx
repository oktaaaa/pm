import React, { useState } from "react";
import Navbar from "../components/NavBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [nipen, setNipen] = useState("");
  const [namaLengkap, setNamaLengkap] = useState("");
  const [tglLahir, setTglLahir] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signupButton = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/users/signup", {
        nipen,
        namaLengkap,
        tglLahir,
        email,
        password,
      });
      navigate("/login");
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
                <div className="card-body p-3">
                  <form onSubmit={signupButton} className="mb-3 mt-md-4">
                    <h3 className="mb-5 text-center">Sign Up Here</h3>
                    <div className="mb-3">
                      <label className="form-label fw-semibold">NIPEN</label>
                      <div className="control">
                        <input
                          type="text"
                          className="form-control input"
                          id="nipen"
                          value={nipen}
                          onChange={(e) => setNipen(e.target.value)}
                          placeholder="No Induk Pensiunan"
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-semibold">
                        Nama Lengkap
                      </label>
                      <div className="control">
                        <input
                          type="text"
                          className="form-control input"
                          id="namalengkap"
                          value={namaLengkap}
                          onChange={(e) => setNamaLengkap(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-semibold">
                        Tanggal Lahir
                      </label>
                      <div className="control">
                        <input
                          type="date"
                          className="form-control input"
                          id="tglLahir"
                          value={tglLahir}
                          onChange={(e) => setTglLahir(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-semibold">
                        Email address
                      </label>
                      <div className="control">
                        <input
                          type="email"
                          className="form-control input"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-semibold">Password</label>
                      <div className="control">
                      <input
                        type="password"
                        className="form-control input"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      </div>
                    </div>

                    <div className="d-grid">
                      <button
                        className="btn btn-primary fw-semibold"
                        type="submit"
                      >
                        Sign Up
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
