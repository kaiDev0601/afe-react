import React from 'react';
import '../../assets/css/navbar.css';

import { BsUiChecksGrid } from 'react-icons/bs';
import { AiOutlineSetting } from  'react-icons/ai';
import { GiNotebook } from 'react-icons/gi';
import { BiUserCircle } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

    const navLinks = [
        {
            id : 1,
            title : 'Dashboard',
            icon : <BsUiChecksGrid />,
            url : "/user/dashboard"
        },
        {
            id : 2,
            title : 'AFE Request',
            icon : <GiNotebook />,
            url : "/user/afe_request_show"
        },
        {
            id : 3,
            title : 'Users',
            icon : <BiUserCircle />,
            url : "/admin/users_show"
        },
        {
            id : 4,
            title : 'Settings',
            icon : <AiOutlineSetting />,
            url : "/super/settings"
        }
        
    ];

    const itemContent = navLinks.map(nav => (
        <li className="nav-item" key={nav.id}>
            <NavLink to={nav.url} className="nav-link align-middle px-0">
                {nav.icon}
                <span className="ms-1 d-none d-sm-inline">{nav.title}</span>
            </NavLink>
        </li>
    ));

    return (
        <div className="col-md-3 col-xl-2 px-sm-2 px-0 sidebar">
            <div className="d-flex flex-column align-items-center px-3 pt-2 text-white min-vh-100 side-bar-content">
                <a href="#" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-blue text-decoration-none">
                    <span className="fs-10 d-none d-sm-inline afe-mark afe-logo">AFE</span>
                </a>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    { itemContent }
                </ul>
            </div>
        </div>
    );
};

export default NavBar;