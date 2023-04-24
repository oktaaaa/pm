import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/NavBar";
import axios from "axios";

export default function Tanggungan(){
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
                                <i className="fs-5 fa fa-house"></i><span className="fs-4 ms-2 d-none d-sm-inline"><Link to = {`/dashboard`}>Beranda</Link></span>
                            </a>
                        </li>
                        <li className="nav-item py-2 py-sm-0">
                            <a className="nav-link text-white">
                                <i className="fa-solid fa-people-group fa-lg"></i><span className="fs-4 ms-2 d-none d-sm-inline"><Link to = {`/pesertapensiun`}>Peserta Pensiun </Link></span>
                            </a>
                        </li>
                        <li className="nav-item py-2 py-sm-0">
                            <a className="nav-link text-white">
                                <i className="fa-solid fa-people-roof fa-lg"></i><span className="fs-4 ms-2 d-none d-sm-inline"><Link to = {`/tanggungan`}>Tanggungan</Link></span>
                            </a>
                        </li>
                        <li className="nav-item py-2 py-sm-0">
                            <a className="nav-link text-white">
                                <i className="fa-solid fa-building fa-xl"></i><span className="fs-4 ms-2 d-none d-sm-inline"><Link to = {`/unitpln`}>Unit PLN</Link></span>
                            </a>
                        </li>

                        <li className="nav-item py-2 py-sm-0">
                            <a className="nav-link text-white">
                                <i className="fa-solid fa-table-list fa-lg"></i><span className="fs-4 ms-2 d-none d-sm-inline">Registrasi Ulang</span>
                            </a>
                        </li>

                        <li className="nav-item py-2 py-sm-0">
                            <a className="nav-link text-white">
                                <i className="fa-solid fa-file-lines fa-xl"></i><span className="fs-4 ms-2 d-none d-sm-inline">Laporan</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="col-lg-8 col-sm-1 col-md-1 mt-5 justify-center">
                <div className="column">
                <Link to={`create`} className="btn btn-primary">
                Add New
                </Link>
                    <table className="table is-striped">
                    <thead>
                        <tr>
                        <th>NIPEN</th>
                        <th>NIK Tanggungan</th>
                        <th>Nama Tanggungan</th>
                        <th>Relasi</th>
                        <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                    
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <Link 
                                    
                                    className="btn btn-primary m-2"
                                >
                                Edit
                                </Link>
                                <button
                                    
                                    className="btn btn-danger"
                                >
                                    Delete
                                </button>
                            </td>
                            
                        </tr>
                    </tbody>
                    </table>
                </div>
                </div>
            </div>

        
        </React.Fragment>
    );
}