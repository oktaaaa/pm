import React, { useState, useEffect } from "react";
import Navbar from "../components/NavBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { LinkS } from "../styles/LinkStyle";
import Dropdown from "react-bootstrap/Dropdown";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";

import { Calendar } from "react-date-range";

export default function Laporan() {
  const [pesertas, setPesertas] = useState([]);
  const [allpesertas, setAllPesertas] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  useEffect(() => {
    getPesertas();
  }, []);

  const getPesertas = async () => {
    const response = await axios.get(
      "http://localhost:3000/api/pesertapensiun"
    );
    setPesertas(response.data);
    setAllPesertas(response.data);
  };
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (date) => {
    let filtered = allpesertas.filter((peserta) => {
      let productDate = new Date(peserta["tgl_pensiun"]);
      return (
        productDate >= date.selection.startDate &&
        productDate <= date.selection.endDate
      );
    });
    setStartDate(date.selection.startDate);
    setEndDate(date.selection.endDate);
    setPesertas(filtered);
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

        {/* contents */}
        <div className="col-lg-10 col-sm-1 col-md-1 mt-5 justify-center">
          <h2 className="text-center">Laporan</h2>
          <p>Pilih laporan</p>
          <Dropdown className="p-2">
            <Dropdown.Toggle id="dropdown-basic">Laporan</Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Laporan Peserta</Dropdown.Item>
              <Dropdown.Item href="#/action-1">
                Laporan Status Peserta{" "}
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
          <table className="table is-striped table-bordered">
            <thead>
              <tr>
                <th>No</th>
                <th>Tgl Pensiun</th>
                <th>NIPEN</th>
                <th>Nama Peserta</th>
                <th>Tgl Lahir</th>
                <th>Alamat</th>
                <th>No. HP</th>
                <th>E-mail</th>
                <th>Besar MP</th>
                <th>Unit PLN</th>
              </tr>
            </thead>

            <tbody>
              {pesertas.map((peserta, index) => (
                <tr key={peserta._id}>
                  <td>{index + 1}</td>
                  <td>{peserta.tgl_pensiun}</td>
                  <td>{peserta.nipen}</td>
                  <td>{peserta.nama_peserta}</td>
                  <td>{peserta.tgl_lahir}</td>
                  <td>{peserta.alamat}</td>
                  <td>{peserta.nohp}</td>
                  <td>{peserta.email}</td>
                  <td>{peserta.besar_mp}</td>
                  <td>{peserta.unit_pln}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
}
