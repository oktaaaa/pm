import React, { useState } from "react";
import { LinkS } from "../styles/LinkStyle";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
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
      
    </div>
  );
};

export default Sidebar;
// import React, { useState } from 'react';
// import {
//     FaTh,
//     FaBars,
//     FaUserAlt,
//     FaRegChartBar,
//     FaCommentAlt,
//     FaShoppingBag,
//     FaThList
// }from "react-icons/fa";
// import { NavLink } from 'react-router-dom';

// const Sidebar = ({children}) => {
//     const[isOpen ,setIsOpen] = useState(false);
//     const toggle = () => setIsOpen (!isOpen);
//     const menuItem=[
//         {
//             path:"/",
//             name:"Dashboard",
//             icon:<FaTh/>
//         },
//         {
//             path:"/about",
//             name:"About",
//             icon:<FaUserAlt/>
//         },
//         {
//             path:"/analytics",
//             name:"Analytics",
//             icon:<FaRegChartBar/>
//         },
//         {
//             path:"/comment",
//             name:"Comment",
//             icon:<FaCommentAlt/>
//         },
//         {
//             path:"/product",
//             name:"Product",
//             icon:<FaShoppingBag/>
//         },
//         {
//             path:"/productList",
//             name:"Product List",
//             icon:<FaThList/>
//         }
//     ]
//     return (
//         <div classNameName="container">
//            <div style={{width: isOpen ? "200px" : "50px"}} classNameName="sidebar">
//                <div classNameName="top_section">
//                    <h1 style={{display: isOpen ? "block" : "none"}} classNameName="logo">Logo</h1>
//                    <div style={{marginLeft: isOpen ? "50px" : "0px"}} classNameName="bars">
//                        <FaBars onClick={toggle}/>
//                    </div>
//                </div>
//                {
//                    menuItem.map((item, index)=>(
//                        <NavLink to={item.path} key={index} classNameName="link" activeclassNameName="active">
//                            <div classNameName="icon">{item.icon}</div>
//                            <div style={{display: isOpen ? "block" : "none"}} classNameName="link_text">{item.name}</div>
//                        </NavLink>
//                    ))
//                }
//            </div>
//            <main>{children}</main>
//         </div>
//     );
// };

// export default Sidebar;
