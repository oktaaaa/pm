import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/NavBar";
import axios from "axios";
import { LinkS } from "../styles/LinkStyle";

export default function PesertaPensiun() {
  const [pesertas, setPesertas] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    getPesertas();
  }, []);

  const getPesertas = async () => {
    const response = await axios.get(
      "http://localhost:3000/api/pesertapensiun"
    );
    setPesertas(response.data);
  };

  const deletePeserta = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/pesertapensiun/${id}`);
      getPesertas();
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

        <div className="col-lg-10 col-sm-1 col-md-1 mt-5 justify-center">
          <input
            type=""
            className="form-control mb-3 border border-dark"
            placeholder="Ketik nama peserta"
            // value={kode_unit}
            onChange={(e) => setQuery(e.target.value)}
          />

          <div className="column">
            <Link to={`create`} className="btn btn-primary">
              Add New
            </Link>
            <table className="table is-striped">
              <thead>
                <tr>
                  <th>No</th>
                  <th>NIPEN</th>
                  <th>Nama Peserta</th>
                  <th>Tgl Lahir</th>
                  <th>Alamat</th>
                  <th>No. HP</th>
                  <th>E-mail</th>
                  <th>Nama Bank</th>
                  <th>No Rekening</th>
                  <th>Besar MP</th>
                  <th>Unit PLN</th>
                  <th>Aksi</th>
                </tr>
              </thead>

              <tbody>
                {pesertas.filter((peserta)=> peserta.nama_peserta.toLowerCase().includes(query)).map((peserta, index) => (
                  <tr key={peserta._id}>
                    <td>{index + 1}</td>
                    <td>{peserta.nipen}</td>
                    <td>{peserta.nama_peserta}</td>
                    <td>{peserta.tgl_lahir}</td>
                    <td>{peserta.alamat}</td>
                    <td>{peserta.no_hp}</td>
                    <td>{peserta.email}</td>
                    <td>{peserta.nama_bank}</td>
                    <td>{peserta.no_rek}</td>
                    <td>{peserta.besar_mp}</td>
                    <td>{peserta.unit_pln}</td>
                    <td>
                      <Link className="btn btn-primary m-2">Ubah</Link>
                      <button
                        onClick={() => deletePeserta(peserta._id)}
                        className="btn btn-danger"
                      >
                        Hapus
                      </button>
                    </td>
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
