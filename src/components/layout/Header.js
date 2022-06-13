import React from 'react';
import { NavLink } from 'react-router-dom';

import '../../assets/css/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOut, faBell, faChevronDown } from '@fortawesome/free-solid-svg-icons';


import userIcon from '../../assets/img/Avatar.png';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-sm">
            <div className="container-fluid">
                <div className='welcome-msg'>
                    <h3 className="row">Dashboard</h3>
                    <p className="row">Hi, person</p>
                </div>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown user-nav">
                            <a className="user-item nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                <div className='row'>
                                    <div className='col-sm-6'>
                                        <p className='row user-name'>Person 3</p>
                                        <p className='row user-type'>User</p>
                                    </div>
                                    <div className='col-sm-6'>
                                        <img className="user-icon" src={userIcon} />
                                        <FontAwesomeIcon className='user-down-arrow' icon={faChevronDown} />
                                    </div>
                                </div>
                            </a>
                            <ul className="dropdown-menu">
                                <li><NavLink className="dropdown-item" to="/user/profile">Profile Settings</NavLink></li>
                                <li><a className="dropdown-item" href="#">Notifications</a></li>
                                <hr/>
                                <li><a className="dropdown-item" href="#">Logout</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" className='nav-link signout'><FontAwesomeIcon icon={faBell} /></a>
                        </li>
                        <li className='nav-splitter'>|</li>
                        <li>
                            <a href="#" className='nav-link notification'><FontAwesomeIcon icon={faSignOut} /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;