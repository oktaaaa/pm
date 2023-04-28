import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Select from "react-crud-table/build/Select";
import Navbar from "../components/NavBar";
import { LinkS } from "../styles/LinkStyle";

export default function FormTanggungan() {
  const options = [
    { value: "", label: "Pilih relasi dengan peserta pensiun" },
    { value: "Suami", label: "Suami" },
    { value: "Istri", label: "Istri" },
    { value: "Anak", label: "Anak" },
  ];

  const [relations, setRelations] = useState("");

  const handleRelations = (event) => {
    setRelations(event.target.value);
  };

  return (
    <>
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
                      to={`/registrasiulang/add`}
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

        <div className="col-lg-8 col-md-8 p-5">
          <h2 className="mb-4">Form Tambah Data Tanggungan</h2>
          <form className="">
            <h4 className="mb-2">Cari NIPEN/Nama Pegawai</h4>

            <div className="row">
              <div className="form-group col-lg-6 mb-2">
                <label for="inputEmail4">NIPEN</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="No Induk Pensiunan"
                />
              </div>

              <div className="form-group col-lg-6 mb-2">
                <label for="inputPassword4">Nama Pegawai</label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword"
                />
              </div>
            </div>

            <hr />

            <h4>Input Tanggungan</h4>
            <div className="form-row">
              <div className="form-group col-lg-6 mb-2">
                <label for="inputEmail4">NIK</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="No Induk Tanggungan"
                />
              </div>
              <div className="form-group col-lg-6 mb-2">
                <label for="inputPassword4">Tanggal Lahir</label>
                <input
                  type="date"
                  className="form-control"
                  id="inputPassword4"
                  placeholder="Kode Pos"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-lg-6 mb-2">
                <label for="inputEmail4">Nama Lengkap</label>
                <input type="email" className="form-control" id="inputEmail4" />
              </div>
              <div className="form-group col-lg-6 mb-2">
                <label for="inputPassword4">Relasi</label>
                {/* <input type="password" className="form-control" id="inputPassword4"/> */}
                <select
                  value={relations}
                  onChange={handleRelations}
                  className="form-select"
                >
                  {options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <p>The relation is {relations}</p>
              </div>
            </div>

            <div className="">
              <button type="submit" className="btn btn-primary my-3">
                Simpan
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
