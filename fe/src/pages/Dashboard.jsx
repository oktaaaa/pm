import React, { useState, useEffect } from "react";
// import Navbar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import { LinkS } from "../styles/LinkStyle";
import axios from "axios";
import { Line, Bar } from "react-chartjs-2";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import NavBar from "../components/NavBar";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [units, setUnit] = useState([]);
  const [pesertas, setPesertas] = useState([]);
  const [tanggungans, setTanggungans] = useState([]);
  const [pesertaAktif, setPesertaAktif] = useState([]);
  const [pesertaNonAktif, setPesertaNonAktif] = useState([]);
  const [chartData, setChartData] = useState({});

  const getPesertas = async () => {
    const response = await axios.get(
      "http://localhost:3000/api/pesertapensiun"
    );
    setPesertas(response.data);
  };

  // untuk peserta aktif
  const getPesertaAktif = async () => {
    const res = await axios.get("http://localhost:3000/api/registrasiulang");
    setPesertaAktif(res.data);
  };

  const unitPlnData = {
    labels: units.map((unit) => unit.nama_unit),
    datasets: [
      {
        label: "Unit PLN",
        data: [units.map((unit) => unit.nama_unit).length],
        backgroundColor: "#1AA7EC",
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };
  const pesertaNonAktifData = {
    labels: pesertaAktif.map((item) => item.created_at),
    datasets: [
      {
        label: "Peserta Non Aktif",
        data: [pesertaNonAktif],
        backgroundColor: "#1AA7EC",
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };
  
  
  const pesertaAktifData = {
    labels: pesertaAktif.map((item) => item.created_at),
    datasets: [
      {
        label: "Peserta Aktif",
        data: [pesertaAktif.length],
        backgroundColor: "#1AA7EC",
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };

  const pesertaPensiunData = {
    labels: pesertas.map((peserta) => peserta.tgl_pensiun),
    datasets: [
      {
        label: "Unit PLN",
        data: [pesertas.map((peserta) => peserta.nipen).length],
        backgroundColor: "#1AA7EC",
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };

  const options = {};
  useEffect(() => {
    getUnits();
    getPesertas();
    getTanggungans();
    getPesertaAktif();
  }, []);

  const persertaNonAktif = pesertas.length-pesertaAktif.length
  const getUnits = async () => {
    const response = await axios.get("http://localhost:3000/api/unitpln");
    setUnit(response.data);
  };

  const getTanggungans = async () => {
    const response = await axios.get("http://localhost:3000/api/tanggungan");
    setTanggungans(response.data);
  };

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-lg-12">
          <NavBar />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <DropdownButton id="dropdown-basic-button" title="Hi, User">
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
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
        <div className="p-3 col-md-10">
          <h2>Dashboard</h2>
          <div class="row p-3">
            <div class="col-sm-3">
              <div className="border border-3 border-primary"></div>
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Peserta Pensiun</h4>
                  <h4 class="card-text">{pesertas.length}</h4>
                </div>
              </div>
            </div>

            <div class="col-sm-3">
              <div className="border border-3 border-primary"></div>
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Unit PLN</h4>
                  <h4 class="card-text">{units.length}</h4>
                </div>
              </div>
            </div>

            <div class="col-sm-3">
              <div className="border border-3 border-primary"></div>
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Peserta Pensiun Aktif</h4>
                  <h4 class="card-text">{pesertaAktif.length}</h4>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div className="border border-3 border-primary"></div>
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Peserta Pensiun Non-Aktif</h4>
                  <h4 class="card-text">{persertaNonAktif}</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="row m-3">
            <div className="row">
              {/* peserta pensiun */}
              <div className="col-lg-6">
                <h4 className="text-center">Peserta Pensiun</h4>
                <Bar data={pesertaPensiunData} options={options}></Bar>
              </div>

              {/* unit pln */}
              <div className="col-lg-6">
                <h4 className="text-center">Unit PLN</h4>
                <Bar data={unitPlnData} options={options}></Bar>
              </div>
            </div>

            <div className="row p-3">
              {/* peserta pensiun aktif */}
              <div className="col-lg-6">
                <h4 className="text-center">Peserta Pensiun Aktif</h4>
                <Bar data={pesertaAktifData} options={options}></Bar>
              </div>

              {/* peserta pensiun non-aktif */}
              <div className="col-lg-6">
                <h4 className="text-center">Peserta Pensiun Non-Aktif</h4>
                <Bar data={pesertaNonAktifData} options={options}></Bar>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
