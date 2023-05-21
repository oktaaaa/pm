import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from './pages/Dashboard.jsx';
import FormCreateUnitPln from './pages/FormCreateUnitPln.jsx';
import UnitPln from './pages/UnitPln.jsx';
import FormTanggungan from './pages/FormTanggungan';
import Tanggungan from './pages/Tanggungan';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import MainPage from './pages/MainPage';
import RegistrasiUlang from './pages/RegistrasiUlang';
import FormRegistrasiUlang from './pages/FormRegistrasiUlang';
import Laporan from './pages/Laporan';
import PesertaPensiun from './pages/PesertaPensiun';
import FormPesertaPensiun from './pages/FormPesertaPensiun';
import Sidebar from './components/Sidebar';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import LaporanStatus from './pages/LaporanStatus';
import EditUnitPln from './pages/EditPages/EditUnitPln';

function App() {
  return (
    <BrowserRouter>
    {/* <Navbar/> */}
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="/" element={<MainPage />} />
          <Route path="signup" element = {<SignUp/>}/>
          <Route path="login" element = {<LogIn/>}/>

          {/* peserta pensiun */}
          <Route path = "pesertapensiun" element = {<PesertaPensiun/>} />
          <Route path = "pesertapensiun/create" element = {<FormPesertaPensiun/>} />

          {/* unit pln */}
          <Route path="unitpln" element={<UnitPln/>} />
          <Route path="unitpln/create" element={<FormCreateUnitPln/>} />
          <Route path="unitpln/update/:id" element={<EditUnitPln/>} />


          <Route path="tanggungan" element = {<Tanggungan/>}/>
          <Route path= "tanggungan/create" element={<FormTanggungan/>} />

          {/* registrasi */}
          <Route path= "registrasiulang" element= {<RegistrasiUlang/>} />
          <Route path = "registrasiulang/create" element = {<FormRegistrasiUlang />} />
          <Route path= "laporan" element = {<Laporan />} />
          <Route path= "laporanstatus" element = {<LaporanStatus />} />
        </Routes>
      <Footer/>
      
    </BrowserRouter>
  )
}

export default App;
