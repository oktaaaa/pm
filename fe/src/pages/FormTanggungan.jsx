import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Select from "react-crud-table/build/Select";

export default function FormTanggungan() {
  const options = [
    { value: "", label: "Pilih relasi dengan peserta pensiun" },
    { value: "Suami", label: "Suami" },
    { value: "Istri", label: "Istri" },
    { value: "Anak", label: "Anak" },
  ];

  const [relations, setRelations] = useState("");

  const handleRelations = (event) => {
    setRelations(event.target.value);
  };

  return (
    <div className="container-fluid">
      <div className="my-5 row">
        <h2>Form Tambah Data Tanggungan</h2>
      </div>

      <div className="row">
        <form className="">
          <h4 className="mb-2">Cari NIPEN/Nama Pegawai</h4>

          <div className="row">
            <div className="form-group col-lg-6 mb-2">
              <label for="inputEmail4">NIPEN</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                placeholder="No Induk Pensiunan"
              />
            </div>

            <div className="form-group col-lg-6 mb-2">
              <label for="inputPassword4">Nama Pegawai</label>
              <input
                type="password"
                className="form-control"
                id="inputPassword"
              />
            </div>
          </div>

          <hr />

          <h4>Input Tanggungan</h4>
          <div className="form-row">
            <div className="form-group col-lg-6 mb-2">
              <label for="inputEmail4">NIK</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                placeholder="No Induk Tanggungan"
              />
            </div>
            <div className="form-group col-lg-6 mb-2">
              <label for="inputPassword4">Tanggal Lahir</label>
              <input
                type="date"
                className="form-control"
                id="inputPassword4"
                placeholder="Kode Pos"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-lg-6 mb-2">
              <label for="inputEmail4">Nama Lengkap</label>
              <input type="email" className="form-control" id="inputEmail4" />
            </div>
            <div className="form-group col-lg-6 mb-2">
              <label for="inputPassword4">Relasi</label>
              {/* <input type="password" className="form-control" id="inputPassword4"/> */}
              <select
                value={relations}
                onChange={handleRelations}
                className="form-select"
              >
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <p>The relation is {relations}</p>
            </div>
          </div>

          <div className="">
            <button type="submit" className="btn btn-primary my-3">
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
