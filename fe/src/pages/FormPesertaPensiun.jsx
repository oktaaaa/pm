import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Select from "react-crud-table/build/Select";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/NavBar";
import { LinkS } from "../styles/LinkStyle";

export default function FormPesertaPensiun() {
  // variables
  const [tgl_pensiun, setTglPensiun] = useState("");
  const [nipen, setNipen] = useState("");
  const [nama_peserta, setNamaPeserta] = useState("");
  const [tgl_lahir, setTglLahir] = useState("");
  const [alamat, setAlamat] = useState("");
  const [nohp, setNohp] = useState("");
  const [email, setEmail] = useState("");
  const [nama_bank, setNamaBank] = useState("");
  const [no_rek, setNoRek] = useState("");
  const [besar_mp, setBesarMp] = useState("");
  const [unit_pln, setUnitPln] = useState("");

  const navigate = useNavigate();

  const createPesertaPensiun = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/pesertapensiun/create", {
        tgl_pensiun,
        nipen,
        nama_peserta,
        tgl_lahir,
        alamat,
        nohp,
        email,
        nama_bank,
        no_rek,
        besar_mp,
        unit_pln,
      });
      navigate("/pesertapensiun");
    } catch (error) {
      console.log(error);
    }
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

        <div className="col-lg-10 col-md-8 p-5">
          <h2 className="mb-4">Form Peserta Pensiun</h2>
          <form className="mx-5" onSubmit={createPesertaPensiun}>
            <div className="row">
              <div className="form-group col-md-12 mb-2">
                <label className="form-label fw-semibold">
                  Tanggal Pensiun
                </label>
                <input
                  type="date"
                  className="form-control border border-dark"
                  value={tgl_pensiun}
                  onChange={(e) => setTglPensiun(e.target.value)}
                />
              </div>

              <div className="form-group col-md-12 mb-2">
                <label className="form-label fw-semibold">NIPEN</label>
                <input
                  type="text"
                  className="form-control border border-dark"
                  placeholder="No Induk Pensiunan"
                  value={nipen}
                  onChange={(e) => setNipen(e.target.value)}
                />
              </div>

              <div className="form-group col-md-12 mb-2">
                <label className="form-label fw-semibold">
                  Nama Peserta Pensiun
                </label>
                <input
                  type="text"
                  className="form-control border border-dark"
                  value={nama_peserta}
                  onChange={(e) => setNamaPeserta(e.target.value)}
                />
              </div>
            </div>

            <div className="row">
              <div className="form-group col-md-12 mb-2">
                <label className="form-label fw-semibold">Tanggal Lahir</label>
                <input
                  type="date"
                  className="form-control border border-dark"
                  value={tgl_lahir}
                  onChange={(e) => setTglLahir(e.target.value)}
                />
              </div>

              <div className="form-group col-md-12 mb-2">
                <label className="form-label fw-semibold">Alamat</label>
                <input
                  type="text"
                  className="form-control border border-dark"
                  value={alamat}
                  onChange={(e) => setAlamat(e.target.value)}
                />
              </div>
            </div>

            <div className="row">
              <div className="form-group col-md-12 mb-2">
                <label className="form-label fw-semibold">No. HP</label>
                <input
                  type="text"
                  className="form-control border border-dark"
                  value={nohp}
                  onChange={(e) => setNohp(e.target.value)}
                />
              </div>

              <div className="form-group col-md-12 mb-2">
                <label className="form-label fw-semibold">E-mail</label>
                <input
                  type="email"
                  className="form-control border border-dark"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="row">
              <div className="form-group col-md-12 mb-2">
                <label className="form-label fw-semibold">Nama Bank</label>
                <input
                  type="text"
                  className="form-control border border-dark"
                  value={nama_bank}
                  onChange={(e) => setNamaBank(e.target.value)}
                />
              </div>

              <div className="form-group col-md-12 mb-2">
                <label className="form-label fw-semibold">No Rekening</label>
                <input
                  type="text"
                  className="form-control border border-dark"
                  value={no_rek}
                  onChange={(e) => setNoRek(e.target.value)}
                />
              </div>
            </div>

            <div className="row">
              <div className="form-group col-md-12 mb-2">
                <label className="form-label fw-semibold">
                  Besar Manfaat Pensiun
                </label>
                <input
                  type="text"
                  className="form-control border border-dark"
                  value={besar_mp}
                  onChange={(e) => setBesarMp(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group col-md-12 mb-2">
              <label className="form-label fw-semibold">Unit PLN</label>
              <input
                type="text"
                className="form-control border border-dark"
                value={unit_pln}
                onChange={(e) => setUnitPln(e.target.value)}
              />
            </div>
            <div className="">
              <button
                type="submit"
                className="btn btn-primary my-3 form-label fw-semibold"
              >
                Simpan
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
