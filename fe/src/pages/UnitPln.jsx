import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/NavBar";
import axios from "axios";
import App from "../App";

export default function UnitPln() {
  const [units, setUnit] = useState([]);

  useEffect(() => {
    getUnits();
  }, []);

  const getUnits = async () => {
    const response = await axios.get("http://localhost:3000/api/unitpln");
    setUnit(response.data);
  };

  const deleteUnit = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/unitpln/${id}`);
      getUnits();
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

        <div className="col-lg-8 col-sm-1 col-md-1 mt-5 justify-center">
          <div className="column">
            <Link to={`create`} className="btn btn-primary">
              Add New
            </Link>
            <table className="table is-striped">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Kode Unit PLN</th>
                  <th>Nama Unit</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {units.map((unit, index) => (
                  <tr key={unit._id}>
                    <td>{unit._id}</td>
                    <td>{unit.kode_unit}</td>
                    <td>{unit.nama_unit}</td>
                    <td>
                      <Link className="btn btn-primary m-2">Edit</Link>
                      <button
                        onClick={() => deleteUnit(unit._id)}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}