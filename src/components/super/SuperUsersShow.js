import React, {useState, useEffect} from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


import Navbar from '../layout/Navbar';
import Header from '../layout/Header';
import { AiOutlineMail, AiTwotonePhone } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';

import MyInput from '../common/MyInput';
import MyTable from '../common/MyTable';
import { setUserType } from '../../actions/auth';
const SuperUsersShow = ({
    auth,
    setUserType
}) => {
    useEffect(() => {
        setUserType('super');
    }, [setUserType]);

    
    const tHeaders = [  
        "ID",
        "Super Admins",
        "Email",
        "Roles",
        "Updated On",
        "Updated By",
        "Actions"
    ];
    const tableData = [
        [
            1,
            "Person 1",
            "Custom Broker Partial",
            "Admin",
            "5-3-2022",
            "Dough Jones",
            <a href={"#"}><IoMdClose className='text-danger'/></a>
        ],
        [
            1,
            "Person 1",
            "Custom Broker Partial",
            "Admin",
            "5-3-2022",
            "Dough Jones",
            <a href={"#"}><IoMdClose className='text-danger'/></a>
        ],
        [
            1,
            "Person 1",
            "Custom Broker Partial",
            "Admin",
            "5-3-2022",
            "Dough Jones",
            <a href={"#"}><IoMdClose className='text-danger'/></a>
        ]
    ];

    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <Navbar />
                <div className="col-md-9 col-xl-10 page-container">
                    <Header />
                    <div className="container adus-container">
                    <div className='row afe-container-heading d-flex justify-content-between mb-3'>
                            <div className='col-sm-3'>
                                <a className="btn btn-darkblue text-white" href="/super/add_user">+ Add User</a>
                            </div>
                            <div className='col-sm-4'>
                                <div className='d-flex flex-row'>
                                    <Form.Control
                                        className='afe-search-field'
                                        type="password"
                                        id="inputPassword5"
                                        aria-describedby="passwordHelpBlock"
                                        placeholder="Search"
                                    />
                                    <Button className="afe-add-request mx-2 text-white" variant="info">PDF</Button>{' '}
                                    <Button className="afe-add-request text-white" variant="info">IMPORT</Button>{' '}
                                </div>
                            </div>
                        </div>
                        <div className='row link-tabs d-flex align-items-center mb-3'>
                            <div className='col-sm-6'>
                                <a className='link-tab active'>All</a>
                                <a className='link-tab inactive'>Super Admins</a>
                                <a className='link-tab inactive'>Approver</a>
                                <a className='link-tab inactive'>User</a>
                            </div>
                            <div className='col-sm-6'>
                                <div className='v-center d-flex justify-content-end'>
                                    <Form.Select aria-label="Default select example" className='mx-2'>
                                        <option value="5">5</option>
                                        <option value="10">10</option>
                                        <option value="20">20</option>
                                    </Form.Select>
                                    <p>Record per page</p>
                                </div>
                            </div>
                        </div>
                        <MyTable 
                            header={tHeaders} 
                            data={tableData} 
                            curPage={1} 
                            totalPage={4} 
                            columCount={10}/>
                    </div>
                </div>
            </div>
        </div>
    )
};

SuperUsersShow.propTypes = {
    setUserType: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, { setUserType })(SuperUsersShow);