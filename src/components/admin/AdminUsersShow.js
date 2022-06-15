import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


import Navbar from '../layout/Navbar';
import Header from '../layout/Header';
import { AiOutlineMail, AiTwotonePhone } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';

import MyTable from '../common/MyTable';
import MyInput from '../common/MyInput';
import '../../assets/css/admin/users_show.css';


const MyVerticallyCenteredModal = (props) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add User
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className='row'>
                <div className='col-sm-6'>
                    <MyInput
                        controlId = "formBasicEmail" 
                        label="First Name" 
                        type="text" 
                        id="inputPassword5"
                    />
                </div>
                <div className='col-sm-6'>
                    <MyInput
                        controlId = "formBasicEmail" 
                        label="Last Name" 
                        type="text" 
                        id="inputPassword5"
                    />

                </div>
            </div>
            <div className='row'>
                <div className='col-sm-6'>
                    <MyInput
                        controlId = "formBasicEmail" 
                        label="Email" 
                        type="text" 
                        id="inputPassword5"
                        addOnIcon={<AiOutlineMail/>}
                    />
                </div>
                <div className='col-sm-6'>
                    <MyInput
                        controlId = "formBasicEmail" 
                        label="Phone Number Name" 
                        type="text" 
                        id="inputPassword5"
                        addOnIcon={<AiTwotonePhone/>}
                    />

                </div>
            </div>
            <div className='row'>
                <div className='col-sm-12'>
                    <MyInput
                        controlId = "formBasicEmail" 
                        label="Address" 
                        type="text" 
                        id="inputPassword5"
                    />

                </div>
            </div>
            <div className='row'>
                <div className='col-sm-6'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Department</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Form.Group>
                </div>
                <div className='col-sm-6'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Facility</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Form.Group>
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-6'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Select Roles</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Form.Group>
                </div>
            </div>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <Button className="btn-darkblue" onClick={props.onHide}>Save</Button>
        </Modal.Footer>
      </Modal>
    );
}



const AdminUsersShow = () => {
    const [modalShow, setModalShow] = useState(false);

    
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
            <a href="#"><IoMdClose className='text-danger'/></a>
        ],
        [
            1,
            "Person 1",
            "Custom Broker Partial",
            "Admin",
            "5-3-2022",
            "Dough Jones",
            <a href="#"><IoMdClose className='text-danger'/></a>
        ],
        [
            1,
            "Person 1",
            "Custom Broker Partial",
            "Admin",
            "5-3-2022",
            "Dough Jones",
            <a href="#"><IoMdClose className='text-danger'/></a>
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
                                <Button className="btn btn-darkblue text-white" onClick={() => setModalShow(true)}>+ Add User</Button>
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
                        <div className='row adus-show-tabs d-flex align-items-center mb-3'>
                            <div className='col-sm-6'>
                                <a className='adus-show-tab active'>All</a>
                                <a className='adus-show-tab inactive'>Super Admins</a>
                                <a className='adus-show-tab inactive'>Approver</a>
                                <a className='adus-show-tab inactive'>User</a>
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
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    )
};

export default AdminUsersShow;