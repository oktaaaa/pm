import React, { useState, useRef, useEffect } from "react";
import Navbar from "../components/NavBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { LinkS } from "../styles/LinkStyle";

export default function FormRegistrasiUlang() {
  const [nipen, setNipen] = useState("");
  const [nama_peserta, setNamaPeserta] = useState("");
  const [ktpWajah, setFotoKtpWajah] = useState("");
  const [ktp, setKtp] = useState("");

  const navigate = useNavigate();

  const createRegistrasiUlang = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/registrasiulang/create", {
        nipen,
        nama_peserta,
      });
      navigate("/registrasiulang");
    } catch (error) {
      console.log(error);
    }
  };

  // const getPesertaByNip = async () => {
  //   const response = await axios.get(
  //     `http://localhost:3000/api/peserta/${nipen}`
  //   );
  //   setNamaPeserta(response.data[0].nama_peserta);
  //   // setNip(response.data.nipen);
  // };

  // const keyEnterHandler = (e) => {
  //   if (e.key === "Enter") {
  //     e.preventDefault();
  //     console.log(nipen);
  //     // console.log(getPesertaByNip);
  //     getPesertaByNip();
  //   }
  // };

  // const handleKtpWajah = (e) => {
  //   setFotoKtpWajah(e.target.files[2]);
  // };

  // const handleKtp = (e) => {
  //   console.log(e.target.files[0]);
  //   // setKtp(e.target.files[0]);
  // };

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

        <div className="col-lg-8 col-md-8 p-5">
          <h2 className="mb-4">Registrasi Ulang</h2>
          <form onSubmit={createRegistrasiUlang}>
            <div className="form-group col-lg-6 mb-2">
              <label>
                <strong>NIP</strong>
              </label>

              {/* <p>Nip adalah {nip}</p> */}

              <input
                type="text"
                className="form-control"
                id="nip"
                value={nipen}
                onChange={(e) => setNipen(e.target.value)}
                placeholder="No Induk Pensiun"
              />
            </div>

            <div className="form-group col-lg-6 mb-2">
              <label>
                <strong>Nama Peserta</strong>
              </label>
              <input
                type="text"
                className="form-control"
                id="namaPegawai"
                value={nama_peserta}
                onChange={(e) => setNamaPeserta(e.target.value)}
              />
            </div>

            {/* <div className="form-group col-lg-6 mb-2">
              <label>
                <strong>Upload Foto Wajah dan KTP</strong>
              </label>
              <input
                type="file"
                className="form-control"
                id="ktpWajah"
                value={ktpWajah}
                onChange={(e) => setFotoKtpWajah(e.target.value)}
              />
            </div>

            <div className="form-group col-lg-6 mb-2">
              <label>
                <strong>Upload KTP</strong>
              </label>
              <input
                type="file"
                className="form-control"
                id="ktp"
                value={ktp}
                onChange={(e) => setKtp(e.target.value)}
              />
            </div> */}

            <button type="submit" className="btn btn-primary fw-semibold">
              Simpan
            </button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}
