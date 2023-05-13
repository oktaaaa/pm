import React, { useState, useEffect } from "react";
import Navbar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import { LinkS } from "../styles/LinkStyle";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const Dashboard = () => {
  const [units, setUnit] = useState([]);
  const [pesertas, setPesertas] = useState([]);
  const [tanggungans, setTanggungans] = useState([]);

  const data = {
    labels: ["May 12", "", "May 13", "", "May 14", ""],
    datasets: [
      {
        data: [8, 9, 6, 10, 8, 7],
        backgroundColor: "transparent",
        borderColor: "#f26c6d",
        pointBorderColor: "transparent",
        pointBorderWidth: 4,
        tension: 0.5,
      },
    ],
  };

  const options = {
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 2,
        max: 10,
        ticks: {
          stepSize: 2,
          callback: (value) => value + "K",
        },
        grid: {
          borderDash: [10],
        },
      },
    },
  };
  useEffect(() => {
    getUnits();
    getPesertas();
    getTanggungans();
  }, []);

  const getUnits = async () => {
    const response = await axios.get("http://localhost:3000/api/unitpln");
    setUnit(response.data);
  };

  const getPesertas = async () => {
    const response = await axios.get(
      "http://localhost:3000/api/pesertapensiun"
    );
    setPesertas(response.data);
  };

  const getTanggungans = async () => {
    const response = await axios.get("http://localhost:3000/api/tanggungan");
    setTanggungans(response.data);
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

        {/* contents */}
        <div className="p-3 col-md-10">
          <h2>Dashboard</h2>
          <div class="row p-3">
            <div class="col-sm-3">
              <div className="border border-3 border-primary"></div>
              <div class="card">
                <div class="card-body">
                  <h3 class="card-title">Peserta Pensiun</h3>
                  <h4 class="card-text">{pesertas.length}</h4>
                </div>
              </div>
            </div>

            <div class="col-sm-3">
              <div className="border border-3 border-primary"></div>
              <div class="card">
                <div class="card-body">
                  <h3 class="card-title">Unit PLN</h3>
                  <h4 class="card-text">{units.length}</h4>
                </div>
              </div>
            </div>

            <div class="col-sm-3">
              <div className="border border-3 border-primary"></div>
              <div class="card">
                <div class="card-body">
                  <h3 class="card-title">Tanggungan</h3>
                  <h4 class="card-text">{tanggungans.length}</h4>
                </div>
              </div>
            </div>
            {/* <div class="col-sm-3">
              <div className="border border-3 border-primary"></div>
              <div class="card">
                <div class="card-body">
                  <h3 class="card-title">Registrasi Ulang</h3>
                  <h4 class="card-text">1600</h4>
                </div>
              </div>
            </div> */}
          </div>

          <div className="row m-3">
            <h4>Users Overview</h4>
            <Line data={data} options={options}></Line>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
