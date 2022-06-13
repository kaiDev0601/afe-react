import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom';

import Table from 'react-bootstrap/Table';
import { FcRefresh } from 'react-icons/fc';
import {Link} from 'react-router-dom';

import '../../assets/css/user/afe_request_show.css';


const UserAfeRequestShow = () => {
    return (
        <div className="container afe-container">
            <div className='row afe-container-heading'>
                <div className='col-sm-3'>
                    <Link className="afe-add-request btn btn-info" to="/user/add_afe_request">+ Add Request</Link>
                </div>
                <div className='col-sm-4'>
                    <div className='row'>
                        <div className='col-sm-8'>
                                <Form.Control
                                className='afe-search-field'
                                type="password"
                                id="inputPassword5"
                                aria-describedby="passwordHelpBlock"
                                placeholder="Search"
                            />
                        </div>
                        <div className='col-sm-4'>
                            <Button className="afe-add-request" variant="info">PDF</Button>{' '}
                        </div>
                    </div>
                </div>
            </div>
            <div className='row afe-show-tabs'>
                <div className='col-sm-6'>
                    <a className='afe-show-tab active'>All</a>
                    <a className='afe-show-tab inactive'>Pending</a>
                    <a className='afe-show-tab inactive'>Approved</a>
                    <a className='afe-show-tab inactive'>Rejected</a>
                    <a className='afe-show-tab inactive'>Cancelled</a>
                    <a className='afe-show-tab inactive'>On Hold</a>
                </div>
                <div className='col-sm-6'>
                    <div className='row v-center'>
                        <div className='col-sm-2'>
                            <Form.Select aria-label="Default select example">
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="20">20</option>
                            </Form.Select>
                        </div>
                        <div className='col-sm-4'>
                            <p>Record per page</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <Table className='afe-request-table' hover>
                    <thead>
                        <tr>
                            <th>AFE ID</th>
                            <th>Facility</th>
                            <th>Project Name</th>
                            <th>Department</th>
                            <th>Prepared By</th>
                            <th>Date</th>
                            <th>Approval State</th>
                            <th>Next Approver</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>100019</td>
                            <td>Head Office-1010-112</td>
                            <td>Custom Broker Partial</td>
                            <td>000010-30</td>
                            <td>Person 3</td>
                            <td>5-3-2022</td>
                            <td>Pending(Level 1)</td>
                            <td>Approver Name</td>
                            <td>
                                <a href="#"><FcRefresh/></a>
                            </td>
                        </tr>
                        <tr>
                            <td>100020</td>
                            <td>Head Office-1010-112</td>
                            <td>Custom Broker Partial</td>
                            <td>000010-30</td>
                            <td>Person 3</td>
                            <td>5-3-2022</td>
                            <td>Pending(Level 1)</td>
                            <td>Approver Name</td>
                            <td>
                                <a href="#"><FcRefresh/></a>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div className='row'>
                <div className='col-sm-6'>
                    <div className='afe-table-page-state'>
                        <p>Showing 1 of 4(10)</p>
                    </div>
                    <div className='afe-table-global'>
                        Cancelled
                    </div>
                </div>
                <div className='col-sm-6 page-navigator'>
                    <Button className="" variant="light">Previous</Button>{' '}
                    <Button className="" variant="info">1</Button>{' '}
                    <Button className="" variant="light">2</Button>{' '}
                    <Button className="" variant="light">Next</Button>{' '}
                </div>
            </div>
        </div>
    )
};

export default UserAfeRequestShow;