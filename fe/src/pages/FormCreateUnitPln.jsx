import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/NavBar";
import { Link } from "react-router-dom";

export default function FormCreateUnitPln() {
  const [kode_unit, setKodeUnit] = useState("");
  const [nama_unit, setNamaUnit] = useState("");
  const navigate = useNavigate();

  const createUnit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/unitpln/create", {
        kode_unit,
        nama_unit,
      });
      navigate("/unitpln");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-lg-12">
          <Navbar />
        </div>
      </div>

      <div className="row flex-nowrap">
        <div className="bg-dark col-auto col-md-2 col-lg-2 min-vh-100 d-flex flex-column justify-content-between">
          <div className="bg-dark p-2">
            <ul className="nav nav-pills flex-column mt-5">
              <li className="nav-item py-2 py-sm-0">
                <a className="nav-link text-white">
                  <i className="fs-5 fa fa-house"></i>
                  <span className="fs-4 ms-2 d-none d-sm-inline">
                    <Link to={`/dashboard`}>Beranda</Link>
                  </span>
                </a>
              </li>
              <li className="nav-item py-2 py-sm-0">
                <a className="nav-link text-white">
                  <i className="fa-solid fa-people-group fa-lg"></i>
                  <span className="fs-4 ms-2 d-none d-sm-inline">
                    <Link to={`/pesertapensiun`}>Peserta Pensiun </Link>
                  </span>
                </a>
              </li>
              <li className="nav-item py-2 py-sm-0">
                <a className="nav-link text-white">
                  <i className="fa-solid fa-people-roof fa-lg"></i>
                  <span className="fs-4 ms-2 d-none d-sm-inline">
                    <Link to={`/tanggungan`}>Tanggungan</Link>
                  </span>
                </a>
              </li>
              <li className="nav-item py-2 py-sm-0">
                <a className="nav-link text-white">
                  <i className="fa-solid fa-building fa-xl"></i>
                  <span className="fs-4 ms-2 d-none d-sm-inline">
                    <Link to={`/unitpln`}>Unit PLN</Link>
                  </span>
                </a>
              </li>

              <li className="nav-item py-2 py-sm-0">
                <a className="nav-link text-white">
                  <i className="fa-solid fa-table-list fa-lg"></i>
                  <span className="fs-4 ms-2 d-none d-sm-inline">
                    Registrasi Ulang
                  </span>
                </a>
              </li>

              <li className="nav-item py-2 py-sm-0">
                <a className="nav-link text-white">
                  <i className="fa-solid fa-file-lines fa-xl"></i>
                  <span className="fs-4 ms-2 d-none d-sm-inline">Laporan</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="columns mt-5 mx-5">
          <div className="column is-half">
            <form onSubmit={createUnit}>

              <div className="mb-3">
                <label className="form-label fw-semibold">Kode Unit</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={kode_unit}
                    onChange={(e) => setKodeUnit(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Nama Unit</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={nama_unit}
                    onChange={(e) => setNamaUnit(e.target.value)}
                  />
                </div>
              </div>

              <div className="field">
                <button type="submit" className="btn btn-primary fw-semibold">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
