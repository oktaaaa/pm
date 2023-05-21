import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/NavBar";
import axios from "axios";
import { LinkS } from "../styles/LinkStyle";

export default function Tanggungan() {
  const [tanggungans, setTanggungans] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    getTanggungans();
  }, []);

  const getTanggungans = async () => {
    const response = await axios.get("http://localhost:3000/api/tanggungan");
    setTanggungans(response.data);
  };

  const deleteTanggungan = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/tanggungan/${id}`);
      getTanggungans();
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
          <h2>Tanggungan</h2>
          <input
            type=""
            className="form-control mb-3 border border-dark"
            placeholder="Ketik nama peserta"
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="column">
            <Link to={`create`} className="btn btn-primary">
              Add New
            </Link>
            <table className="table is-striped table-bordered mt-5 border border-dark">
              <thead>
                <tr className="text-center">
                  <th>Id</th>
                  <th>NIP</th>
                  <th>Nama Peserta Pensiun</th>
                  <th>NIK Tanggungan</th>
                  <th>Nama Tanggungan</th>
                  <th>Tanggal Lahir</th>
                  <th>Relasi</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {tanggungans
                  .filter((tanggungan) =>
                    tanggungan.nama_peserta.toLowerCase().includes(query)
                  )
                  .map((tanggungan, index) => (
                    <tr key={tanggungan._id}>
                      <td>{index + 1}</td>
                      <td>{tanggungan.nipen}</td>
                      <td>{tanggungan.nama_peserta}</td>
                      <td>{tanggungan.nik_tanggungan}</td>
                      <td>{tanggungan.nama_tanggungan}</td>
                      <td>{tanggungan.tgl_lahir}</td>
                      <td>{tanggungan.relasi}</td>
                      <td>
                        <Link
                          className="btn btn-primary mx-4 fa-regular fa-pen-to-square"
                          to={`/tanggungan/update/${tanggungan._id}`}
                        ></Link>
                        <button
                          onClick={() => deleteTanggungan(tanggungan._id)}
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
