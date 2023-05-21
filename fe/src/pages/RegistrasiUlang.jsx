import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import { LinkS } from "../styles/LinkStyle";
import { log } from "console";

export default function RegistrasiUlang() {
  const [registrasis, setRegistrasis] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    getRegistrasi();
  }, []);

  const getRegistrasi = async () => {
    const response = await axios.get("http://localhost:3000/api/registrasiulang");
    setRegistrasis(response.data);
  };

  return (
    <>
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
            <h4 className="mb-3">Form Registrasi Ulang</h4>
          <input
            type=""
            className="form-control mb-3 border border-dark"
            placeholder="Ketik nama unit"
            // value={kode_unit}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="column">
            <Link to={`create`} className="btn btn-primary mb-5">
              Add New
            </Link>
            <table className="table is-striped table-bordered border-dark">
              <thead>
                <tr className="text-center">
                  <th>No</th>
                  <th>NIPEN</th>
                  <th>Nama Peserta</th>
                  <th>Foto Wajah dan KTP</th>
                  <th>Foto KTP</th>
                </tr>
              </thead>

              <tbody>
                {registrasis
                  .filter((registrasi) =>
                    registrasi.nama_peserta.toLowerCase().includes(query)
                  )
                  .map((registrasi, index) => (
                    <tr key={registrasi._id}>
                      <td className="text-center justify-content-center">
                        {index + 1}
                      </td>
                      <td>{registrasi.nipen}</td>
                      <td>{registrasi.nama_peserta}</td>
                      <td>{registrasi.ktpWajah}</td>
                      <td>{registrasi.ktp}</td>
                      
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
