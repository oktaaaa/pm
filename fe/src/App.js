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

function App() {
  return (
    <BrowserRouter>
      
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="/" element={<MainPage />} />
          <Route path="signup" element = {<SignUp/>}/>
          <Route path="login" element = {<LogIn/>}/>
          <Route path="unitpln" element={<UnitPln/>} />
          <Route path="unitpln/create" element={<FormCreateUnitPln/>} />
          <Route path="tanggungan" element = {<Tanggungan/>}/>
          <Route path= "tanggungan/create" element={<FormTanggungan/>} />
          <Route path= "registrasiulang" element= {<RegistrasiUlang/>} />
          <Route path = "registrasiulang/add" element = {<FormRegistrasiUlang />} />
          <Route path= "laporan" element = {<Laporan />} />
        </Routes>
      
    </BrowserRouter>
  )
}

export default App;
