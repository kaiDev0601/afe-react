import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOut, faBell, faChevronDown } from '@fortawesome/free-solid-svg-icons';


import userIcon from '../../assets/img/Avatar.png';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-sm">
            <div className="container-fluid">
                <div className='welcome-msg'>
                    <h3 className="row">Dashboard</h3>
                    <p className="row font-roboto">Hi, person</p>
                </div>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown user-nav">
                            <a className="user-item nav-link dropdown-toggle" href={"#"} role="button" data-bs-toggle="dropdown">
                                <div className='row'>
                                    <div className='col-sm-6'>
                                        <p className='row user-name font-roboto'>Person 3</p>
                                        <p className='row user-type font-roboto text-warning'>User</p>
                                    </div>
                                    <div className='col-sm-6'>
                                        <img className="user-icon" src={userIcon} alt="a"/>
                                        <FontAwesomeIcon className='user-down-arrow text-white' icon={faChevronDown} />
                                    </div>
                                </div>
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/user/profile">Profile Settings</Link></li>
                                <li><a className="dropdown-item" href={"#"}>Notifications</a></li>
                                <hr/>
                                <li><a className="dropdown-item" href="/">Logout</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href={"#"} className='nav-link notification dropdown-toggle text-white' data-bs-toggle="dropdown"><FontAwesomeIcon icon={faBell} /></a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/user/profile">Settings a</Link></li>
                                <li><a className="dropdown-item" href={"#"}>Notifications</a></li>
                                <hr/>
                                <li><a className="dropdown-item" href="/">Logout</a></li>
                            </ul>
                        </li>
                        <li className='nav-splitter'>|</li>
                        <li>
                            <a href={"#"} className="nav-link signout text-white"><FontAwesomeIcon icon={faSignOut} /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;