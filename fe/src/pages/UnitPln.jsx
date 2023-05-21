import React, { useState, useEffect, ReactFragment } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import axios from "axios";
import App from "../App";
import Sidebar from "../components/Sidebar";
import { LinkS } from "../styles/LinkStyle";

export default function UnitPln() {
  const [units, setUnit] = useState([]);
  const [query, setQuery] = useState("");

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

  // const searchHandle = async (e) => {
  //   let namaunit = e.target.value;
  //   if (namaunit) {
  //     let result = await fetch(`http://localhost:3000/api/unitpln/${namaunit}`);
  //     result = await result.json();
  //     if (result) {
  //       setUnit(result);
  //     }
  //   } else {
  //     getUnits();
  //   }
  // };
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-lg-12">
          <NavBar />
        </div>
      </div>
      <div className="row flex-nowrap">
        <div className="bg-dark col-auto col-md-2 col-lg-2 min-vh-100 d-flex flex-column justify-content-between">
          <div className="bg-dark p-2">
            <ul className="nav nav-pills flex-column mt-5">
              <li className="nav-item py-2 py-sm-0">
                <a className="nav-link text-white">
                  {/* <i className="fs-5 fa fa-house"></i><span className="fs-4 ms-2 d-none d-sm-inline"><Link to = {`/dashboard`}><LinkS>Beranda</LinkS></Link></span> */}
                  <i className="fs-5 fa fa-house"></i>
                  <span className="fs-4 ms-2 d-none d-sm-inline">
                    <LinkS className="" to="/dashboard">
                      Dashboard
                    </LinkS>
                  </span>
                </a>
              </li>
              <li className="nav-item py-2 py-sm-0">
                <a className="nav-link text-white">
                  <i className="fa-solid fa-people-group fa-lg"></i>
                  <span className="fs-4 ms-2 d-none d-sm-inline">
                    <Link
                      to={`/pesertapensiun`}
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Peserta Pensiun{" "}
                    </Link>
                  </span>
                </a>
              </li>
              <li className="nav-item py-2 py-sm-0">
                <a className="nav-link text-white">
                  <i className="fa-solid fa-people-roof fa-lg"></i>
                  <span className="fs-4 ms-2 d-none d-sm-inline">
                    <Link
                      to={`/tanggungan`}
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Tanggungan
                    </Link>
                  </span>
                </a>
              </li>
              <li className="nav-item py-2 py-sm-0">
                <a className="nav-link text-white">
                  <i className="fa-solid fa-building fa-xl"></i>
                  <span className="fs-4 ms-2 d-none d-sm-inline">
                    <Link
                      to={`/unitpln`}
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Unit PLN
                    </Link>
                  </span>
                </a>
              </li>

              <li className="nav-item py-2 py-sm-0">
                <a className="nav-link text-white">
                  <i className="fa-solid fa-table-list fa-lg"></i>
                  <span className="fs-4 ms-2 d-none d-sm-inline">
                    <Link
                      to={`/registrasiulang`}
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Registrasi Ulang
                    </Link>
                  </span>
                </a>
              </li>

              <li className="nav-item py-2 py-sm-0">
                <a className="nav-link text-white">
                  <i className="fa-solid fa-file-lines fa-xl"></i>
                  <span className="fs-4 ms-2 d-none d-sm-inline">
                    <Link
                      to={`/laporan`}
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Laporan
                    </Link>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-lg-8 col-sm-1 col-md-1 mt-5 justify-center">
          <h2>Unit PLN</h2>
          <input
            type=""
            className="form-control mb-3 border border-dark"
            placeholder="Ketik nama unit"
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="column">
            <Link to={`create`} className="btn btn-primary mb-5">
              Add New
            </Link>
            <table className="table is-striped table-bordered border-dark">
              <thead>
                <tr className="text-center">
                  <th>Id</th>
                  <th>Kode Unit PLN</th>
                  <th>Nama Unit</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {units
                  .filter((unit) =>
                    unit.nama_unit.toLowerCase().includes(query)
                  )
                  .map((unit, index) => (
                    <tr key={unit._id}>
                      <td className="text-center justify-content-center">
                        {index + 1}
                      </td>
                      <td>{unit.kode_unit}</td>
                      <td>{unit.nama_unit}</td>
                      <td className="justify-content-center">
                        <Link
                          className="btn btn-primary mx-4 fa-regular fa-pen-to-square"
                          to={`/unitpln/update/${unit._id}`}
                        ></Link>
                        <button
                          onClick={() => deleteUnit(unit._id)}
                          className="btn btn-danger fa-solid fa-trash-can"
                        ></button>
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
