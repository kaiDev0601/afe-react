import React, { useEffect } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import {Link} from 'react-router-dom';

import { AiOutlineFilePdf } from 'react-icons/ai';

import Navbar from '../layout/Navbar';
import Header from '../layout/Header';
import MyTable from '../common/MyTable';
import { setUserType } from '../../actions/auth';


const AdminAfeRequestShow = ({
    auth,
    setUserType
}) => {
    useEffect(() => {
        setUserType('admin');
    }, [setUserType]);

    const tHeaders = [  
        "AFE ID",
        "Facility",
        "Project Name",
        "Department",
        "Prepared By",
        "Date",
        "Approval State",
        "Next Approver",
        "Actions"
    ];

    const tableData = [
        [
            "100019",
            "Head Office-1010-112",
            "Custom Broker Partial",
            "000010-30",
            "Person 3",
            "5-3-2022",
            "Pending(Level 1)",
            "Approver Name",
            <span>
                <a href={"#"}><b className='green m-l-1'>A</b></a>
                <a href={"#"}><b className='red m-l-1'>R</b></a>
                <a href={"#"}><b className='blue m-l-1'>C</b></a>
                <a href={"#"}><AiOutlineFilePdf color='red'/></a>
            </span>
        ],
        [
            "100020",
            "Head Office-1010-112",
            "Custom Broker Partial",
            "000010-30",
            "Person 3",
            "5-3-2022",
            "Pending(Level 1)",
            "Approver Name",
            <span>
                <a href={"#"}><b className='green m-l-1'>A</b></a>
                <a href={"#"}><b className='red m-l-1'>R</b></a>
                <a href={"#"}><b className='blue m-l-1'>C</b></a>
                <a href={"#"}><AiOutlineFilePdf color='red'/></a>
            </span>
        ],
        [
            "100020",
            "Head Office-1010-112",
            "Custom Broker Partial",
            "000010-30",
            "Person 3",
            "5-3-2022",
            "Pending(Level 1)",
            "Approver Name",
            <span>
                <a href={"#"}><b className='green m-l-1'>A</b></a>
                <a href={"#"}><b className='red m-l-1'>R</b></a>
                <a href={"#"}><b className='blue m-l-1'>C</b></a>
                <a href={"#"}><AiOutlineFilePdf color='red'/></a>
            </span>
        ],
        [
            "100020",
            "Head Office-1010-112",
            "Custom Broker Partial",
            "000010-30",
            "Person 3",
            "5-3-2022",
            "Pending(Level 1)",
            "Approver Name",
            <span>
                <a href={"#"}><b className='green m-l-1'>A</b></a>
                <a href={"#"}><b className='red m-l-1'>R</b></a>
                <a href={"#"}><b className='blue m-l-1'>C</b></a>
                <a href={"#"}><AiOutlineFilePdf color='red'/></a>
            </span>
        ]
    ];
    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <Navbar />
                <div className="col-md-9 col-xl-10 page-container">
                    <Header />
                    <div className="container">
                        <div className='row afe-container-heading d-flex justify-content-between mb-3'>
                            <div className='col-sm-3'>
                                <Link className="afe-add-request btn btn-info text-white" to="/user/add_afe_request">+ Add Request</Link>
                            </div>
                            <div className='col-sm-4'>
                                <div className='d-flex flex-row'>
                                    <Form.Control
                                        className='afe-search-field mx-2'
                                        type="password"
                                        id="inputPassword5"
                                        aria-describedby="passwordHelpBlock"
                                        placeholder="Search"
                                    />
                                    <Button className="afe-add-request  text-white" variant="info">PDF</Button>{' '}
                                </div>
                            </div>
                        </div>
                        <div className='row afe-show-tabs d-flex align-items-center mb-3'>
                            <div className='col-sm-8'>
                                <a href={"#"} className='afe-show-tab mx-1 active'>All</a>
                                <a href={"#"} className='afe-show-tab mx-2 inactive'>Pending</a>
                                <a href={"#"} className='afe-show-tab mx-2 inactive'>Approved</a>
                                <a href={"#"} className='afe-show-tab mx-2 inactive'>Rejected</a>
                                <a href={"#"} className='afe-show-tab mx-2 inactive'>Cancelled</a>
                                <a href={"#"} className='afe-show-tab mx-2 inactive'>On Hold</a>
                            </div>
                            <div className='col-sm-4'>
                                <div className='v-center d-flex justify-content-end mx'>
                                    <Form.Select aria-label="Default select example" className="mx-2">
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



AdminAfeRequestShow.propTypes = {
    setUserType: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, { setUserType })(AdminAfeRequestShow);