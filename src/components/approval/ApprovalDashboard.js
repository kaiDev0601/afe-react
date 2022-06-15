import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { GiNotebook } from 'react-icons/gi';
import Form from 'react-bootstrap/Form';

import "../../assets/css/approval/dashboard.css"
import { Button } from 'react-bootstrap';
import Navbar from '../layout/Navbar';
import Header from '../layout/Header';


const ApprovalDashboard = () => {
    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <Navbar />
                <div className="col-md-9 col-xl-10 page-container">
                    <Header />
                    <div className='page-content container'>
                        <div className='row mb-4'>
                            <div className='col-sm-4'>
                                <div className='apvd-status-div'>
                                    <div className='row'>
                                        <div className='col-sm-3'>
                                            <div className=' apvd-pending-icon-div'><GiNotebook className='apvd-pending-icon' /></div>
                                        </div>
                                        <div className='col-sm-9'>
                                            <div className='row'><div className='col-sm-4 text-white'><h4>02</h4></div></div>
                                            <div className='row'><div className='col-sm-12 text-white'><h6>All AFE Requests</h6></div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-4'>
                                <div className='apvd-status-div'>
                                    <div className='row'>
                                        <div className='col-sm-3'>
                                            <div className=' apvd-pending-icon-div'><GiNotebook className='apvd-pending-icon' /></div>
                                        </div>
                                        <div className='col-sm-9'>
                                            <div className='row'><div className='col-sm-4 text-white'><h4>05</h4></div></div>
                                            <div className='row'><div className='col-sm-12 text-white'><h6>Pending Approvals</h6></div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-4'>
                                <div className='apvd-status-div'>
                                    <div className='row'>
                                        <div className='col-sm-3'>
                                            <div className=' apvd-pending-icon-div'><GiNotebook className='apvd-pending-icon' /></div>
                                        </div>
                                        <div className='col-sm-9'>
                                            <div className='row'><div className='col-sm-4 text-white'><h4>02</h4></div></div>
                                            <div className='row'><div className='col-sm-12 text-white'><h6>My Requests</h6></div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-sm-7'>
                                <div className='white-container h-shadow container'>
                                    <div className='row apvd-res-header'>
                                        <h5>Notifications</h5>
                                    </div>
                                    <div className='row apvd-res-content'>
                                        <div className='col-sm-12'>
                                            <div className='row'>
                                                <h4>Today</h4>
                                                <div className='apvd-notification-item'>
                                                    <div className="d-flex flex-row">
                                                        <img className="sz-40px mx-2" src="../Avatar.png"/>
                                                        <p>Annette Watson is waiting for her proposal for expenditure request form</p>
                                                    </div>
                                                    <div className="d-flex justify-content-end mt-n2">
                                                        <Button className="font-sm btn-darkblue" >See Request Form</Button>{' '}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <h4>Yesterday</h4>
                                            </div>
                                            <div className='d-flex flex-row apvd-notif-before-item'>
                                                <img className='sz-40px mx-2' src="../Avatar.png"/>
                                                <p>Annette Watson is waiting for her proposal for expenditure request form</p>
                                            </div>
                                            <div className='d-flex flex-row apvd-notif-before-item'>
                                                <img className='sz-40px mx-2' src="../Avatar.png"/>
                                                <p>Annette Watson is waiting for her proposal for expenditure request form</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className='col-sm-5'>
                                <div className='white-container h-shadow apvd-right-container'>
                                    <div className='row d-flex align-items-center mb-2'>
                                        <div className="col-sm-8">
                                            <p>Recent Approved Expenditure</p>
                                        </div>
                                        <div className='col-sm-4'>
                                            <Form.Control
                                                type='text'
                                                placeholder="0.00"
                                                />
                                        </div>
                                    </div>
                                    <div className='row apvd-approved-exp-cont mb-2'>
                                        <div className='col-sm-12'>
                                            <div className='row'>
                                                <div className='col-sm-6'><div className='row'>
                                                    <div className='col-sm-3'><img className="sz-3em"src="../Avatar.png"/></div>
                                                    <div className='col-sm-9'>
                                                        <div className='row'><p>Bernard Murphy</p></div>
                                                        <div className='row'><p className="lightgreen">Approved</p></div>
                                                    </div>
                                                </div></div>
                                                <div className='col-sm-6 row'>
                                                    <div className='col-sm-3'><h6>Date</h6></div>
                                                    <div className='col-sm-9 grey'><p>29-05-2022</p></div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-sm-3'><h6>Facility</h6></div>
                                                <div className='col-sm-9 grey'><p>Cooperate Operations</p></div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-sm-3'><h6>Facility</h6></div>
                                                <div className='col-sm-9 grey'><p>Cooperate Operations</p></div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-sm-3'><h6>Facility</h6></div>
                                                <div className='col-sm-9 grey'><p>Cooperate Operations</p></div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-sm-3'><h6>Facility</h6></div>
                                                <div className='col-sm-9 grey'><p>Cooperate Operations</p></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row apvd-approved-exp-cont mb-2'>
                                        <div className='col-sm-12'>
                                            <div className='row'>
                                                <div className='col-sm-6'><div className='row'>
                                                    <div className='col-sm-3'><img className="sz-3em"src="../Avatar.png"/></div>
                                                    <div className='col-sm-9'>
                                                        <div className='row'><p>Bernard Murphy</p></div>
                                                        <div className='row'><p className="lightgreen">Approved</p></div>
                                                    </div>
                                                </div></div>
                                                <div className='col-sm-6 row'>
                                                    <div className='col-sm-3'><h6>Date</h6></div>
                                                    <div className='col-sm-9 grey'><p>29-05-2022</p></div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-sm-3'><h6>Facility</h6></div>
                                                <div className='col-sm-9 grey'><p>Cooperate Operations</p></div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-sm-3'><h6>Facility</h6></div>
                                                <div className='col-sm-9 grey'><p>Cooperate Operations</p></div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-sm-3'><h6>Facility</h6></div>
                                                <div className='col-sm-9 grey'><p>Cooperate Operations</p></div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-sm-3'><h6>Facility</h6></div>
                                                <div className='col-sm-9 grey'><p>Cooperate Operations</p></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ApprovalDashboard;