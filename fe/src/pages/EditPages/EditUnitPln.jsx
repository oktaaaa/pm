import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { LinkS } from "../../styles/LinkStyle";

export default function EditUnitPln() {
  const { id } = useParams();
  const [kode_unit, setKodeUnit] = useState("");
  const [nama_unit, setNamaUnit] = useState("");
  

  const navigate = useNavigate();

  useEffect(() => {
    getUnitsById();
  }, []);

  const getUnitsById = async () => {
    const response = await axios.get(
      `http://localhost:3000/api/unitpln/update/${id}`
    );
    setKodeUnit(response.data.kode_unit);
    setNamaUnit(response.data.nama_unit);
  };

  return (
    <>
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

        <div className="form-row">
          <div className="form-group col-lg-6 mb-2">
            <form>
              <label className="form-label fw-semibold">Kode Unit</label>

              <input
                type="text"
                className="form-control"
                value={kode_unit}
                // onChange={(e) => setKodeUnit(e.target.value)}
              />

              <div className="form-group col-lg-6 mb-2"></div>
              <label className="form-label fw-semibold">Nama Unit</label>

              <input
                type="text"
                className="form-control"
                value={nama_unit}
                // onChange={(e) => setNamaUnit(e.target.value)}
              />

              <div className="field">
                <button type="submit" className="btn btn-primary fw-semibold">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
