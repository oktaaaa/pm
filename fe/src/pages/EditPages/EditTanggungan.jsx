import { React, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { LinkS } from "../../styles/LinkStyle";
import NavBar from "../../components/NavBar";

export default function EditTanggungan() {
  const { id } = useParams();
  const [nipen, setNipen] = useState("");
  const [nama_peserta, setNamaPeserta] = useState("");

  const [nik_tanggungan, setNikTanggungan] = useState("");
  const [tgl_lahir, setTglLahirTanggungan] = useState("");
  const [nama_tanggungan, setNamaTanggungan] = useState("");
  const [relasi, setRelations] = useState("");

  const navigate = useNavigate()

  const getTanggunganById = async (e) =>{
    try{
        await axios.get("")
    } catch(error){
        console.log(error)
    }
  }
}
