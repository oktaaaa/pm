import React, { useState } from 'react';

const Sidebar = () => {
    return(
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className="bg-dark col-auto col-md-3 col-lg-4 min-vh-100 d-flex flex-column justify-content-between">
                    <div className="bg-dark p-2">
                        <a href="" className="d-flex text-decoration-none mt-1 align-items-center">
                            <span className="fs-4 d-none d-sm-inline">Side Menu</span>
                        </a>
                        <ul className="nav nav-pills flex-column mt-4">
                            <li className="nav-item py-2 py-sm-0">
                                <a href="#" className="nav-link text-white">
                                    <i className="fs-5 fa fa-gauge"></i><span className="fs-4 ms-2 d-none d-sm-inline">Dashboard</span>
                                </a>
                            </li>
                            <li className="nav-item py-2 py-sm-0">
                                <a href="#" className="nav-link text-white">
                                    <i className="fs-5 fa fa-house"></i><span className="fs-4 ms-2 d-none d-sm-inline">Home</span>
                                </a>
                            </li>
                            <li className="nav-item py-2 py-sm-0">
                                <a href="#" className="nav-link text-white">
                                    <i className="fs-5 fa fa-table-list"></i><span className="fs-4 ms-2 d-none d-sm-inline">About</span>
                                </a>
                            </li>
                            <li className="nav-item py-2 py-sm-0">
                                <a href="#" className="nav-link text-white">
                                    <i className="fs-5 fa fa-table-list"></i><span className="fs-4 ms-2 d-none d-sm-inline">Products</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* <div className="p-3">
                    <h2>Content Page</h2>
                </div> */}
            </div>
       
        </div>
    )
}

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