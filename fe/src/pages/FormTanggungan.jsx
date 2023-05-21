import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Select from "react-crud-table/build/Select";
import Navbar from "../components/NavBar";
import { LinkS } from "../styles/LinkStyle";

export default function FormTanggungan() {
  const [nipen, setNip] = useState("");
  const [nama_peserta, setNamaPeserta] = useState("");

  const [nik_tanggungan, setNikTanggungan] = useState("");
  const [tgl_lahir, setTglLahirTanggungan] = useState("");
  const [nama_tanggungan, setNamaTanggungan] = useState("");
  const [relasi, setRelations] = useState("");

  const navigate = useNavigate();

  //create tanggungan
  const createTanggungan = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/tanggungan/create", {
        nipen,
        nama_peserta,
        nik_tanggungan,
        tgl_lahir,
        nama_tanggungan,
        relasi,
      });
      navigate("/tanggungan");
    } catch (error) {
      console.log(error);
    }
  };
  const getPesertaByNip = async () => {
    const response = await axios.get(
      `http://localhost:3000/api/peserta/${nipen}`
    );
    setNamaPeserta(response.data[0].nama_peserta);
    // setNip(response.data.nipen);
  };

  const options = [
    { value: "", label: "Pilih relasi dengan peserta pensiun" },
    { value: "Suami", label: "Suami" },
    { value: "Istri", label: "Istri" },
    { value: "Anak", label: "Anak" },
  ];

  const handleRelations = (e) => {
    setRelations(e.target.value);
  };

  const handleNip = (e) => {
    setNip(e.target.value);
  };

  const keyEnterHandler = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      console.log(nipen);
      // console.log(getPesertaByNip);
      getPesertaByNip();
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
          <h2 className="mb-4">Tambah Data Tanggungan</h2>
          <form onSubmit={createTanggungan}>
            <h4 className="mb-2">Cari NIP/Nama Pegawai</h4>

            <div className="row">
              <div className="form-group col-lg-6 mb-2">
                <label htmlFor="inputNIP">NIP</label>

                {/* <p>Nip adalah {nip}</p> */}

                <input
                  type="text"
                  className="form-control"
                  id="nip"
                  value={nipen}
                  onChange={(e) => setNip(e.target.value)}
                  onKeyDown={keyEnterHandler}
                  placeholder="No Induk Pensiun"
                />
              </div>

              <div className="form-group col-lg-6 mb-2">
                <label htmlFor="inputPassword4">Nama Pegawai</label>
                <input
                  type="text"
                  className="form-control"
                  id="namaPegawai"
                  value={nama_peserta}
                  onChange={(e) => setNamaPeserta(e.target.value)}
                />
              </div>
            </div>

            <hr />

            <h4>Input Tanggungan</h4>
            <div className="form-row">
              <div className="form-group col-lg-6 mb-2">
                <label htmlFor="Nik">NIK</label>
                <input
                  type="text"
                  className="form-control"
                  id="nik"
                  value={nik_tanggungan}
                  onChange={(e) => setNikTanggungan(e.target.value)}
                  placeholder="No Induk Tanggungan"
                />
              </div>
              <div className="form-group col-lg-6 mb-2">
                <label htmlFor="tgllahir">Tanggal Lahir</label>
                <input
                  type="date"
                  className="form-control"
                  id="tglLahir"
                  value={tgl_lahir}
                  onChange={(e) => setTglLahirTanggungan(e.target.value)}
                  placeholder="Tanggal Lahir"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-lg-6 mb-2">
                <label>Nama Lengkap</label>
                <input
                  type="text"
                  className="form-control"
                  id="namaLengkap"
                  value={nama_tanggungan}
                  onChange={(e) => setNamaTanggungan(e.target.value)}
                />
              </div>
              <div className="form-group col-lg-6 mb-2">
                <label htmlFor="relasi">Relasi</label>

                <select
                  value={relasi}
                  onChange={handleRelations}
                  className="form-select"
                >
                  {options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button type="submit" className="btn btn-primary my-3">
              Simpan
            </button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}
