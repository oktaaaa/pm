import React, { useState, useRef, useEffect } from "react";
import Navbar from "../components/NavBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { LinkS } from "../styles/LinkStyle";
import Form from "react-bootstrap/Form";
import AsyncSelect from 'react-select/async';

export default function FormRegistrasiUlang() {
  //button
  
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

        <div className="col-lg-8 col-md-8 p-5">
          <h2 className="mb-4">Registrasi Ulang</h2>
          <Form>
            <Form.Group className="mb-4">
              <Form.Label>
                <strong>NIP</strong>
              </Form.Label>
              <Form.Control type="text" placeholder="Nomor Induk Pensiun" />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>
                <strong>Nama Lengkap</strong>
              </Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>
                <strong>Upload Foto Wajah dan KTP</strong>
              </Form.Label>
              <Form.Control type="file" />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>
                <strong>Upload KTP</strong>
              </Form.Label>
              <Form.Control type="file" />
            </Form.Group>
          </Form>

          <div className="field">
            <button type="submit" className="btn btn-primary fw-semibold">
              Simpan
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
