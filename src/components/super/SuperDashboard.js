import React, {useState} from 'react';

import "../../assets/css/admin/dashboard.css"
import { Button, Modal } from 'react-bootstrap';
import Navbar from '../layout/Navbar';
import Header from '../layout/Header';

import MyInput from '../common/MyInput';

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
            Ask Approver
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <MyInput
                controlId = "formBasicEmail" 
                label="Email address" 
                type="email" 
                id="inputPassword5"
                placeholder="approver@abc.com"
            />
            <MyInput
                controlId = "formBasicEmail" 
                label="Message" 
                type="textarea" 
                id="inputPassword5"
                placeholder="Dear Approver ..."
            />
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn-darkblue full-width" onClick={props.onHide}>Send Email</Button>
        </Modal.Footer>
      </Modal>
    );
  }


const SuperDashboard = () => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <Navbar />
                <div className="col-md-9 col-xl-10 page-container">
                    <Header />
                    <div className='page-content container'>
                        <div className="row">
                            <div className='col-sm-7'>
                                <div className='white-container h-shadow container'>
                                    <div className='row adm-res-header'>
                                        <h5>Notifications</h5>
                                    </div>
                                    <div className='row adm-res-content'>
                                        <div className='col-sm-12'>
                                            <div className='row'>
                                                <h4>Today</h4>
                                                <div className='apvd-notification-item'>
                                                    <div className="d-flex flex-row">
                                                        <img className="sz-40px mx-2" src="../Avatar.png"/>
                                                        <p>Annette Watson is waiting for her proposal for expenditure request form</p>
                                                    </div>
                                                    <div className="d-flex justify-content-end mt-n2">
                                                        <Button className="font-sm btn-darkblue" onClick={() => setModalShow(true)} variant="primary">Ask Approver</Button>{' '}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <h4>Yesterday</h4>
                                            </div>
                                            <div className='d-flex flex-row apvd-notif-before-item'>
                                                <img className='sz-40px mx-2' src="../Avatar.png" alt="a"/>
                                                <p>Annette Watson is waiting for her proposal for expenditure request form</p>
                                            </div>
                                            <div className='d-flex flex-row apvd-notif-before-item'>
                                                <img className='sz-40px mx-2' src="../Avatar.png" alt="a"/>
                                                <p>Annette Watson is waiting for her proposal for expenditure request form</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-5'>
                                <div className='white-container h-shadow'>
                                    <div className='row'>
                                        <div className='col-sm-9'><b>Registered Users</b></div>
                                        <div className='col-sm-3'><span className='text-muted'>See All</span></div>
                                    </div>
                                    <hr/>
                                    <div className='row adm-approved-exp-cont'>
                                        <div className='col-sm-12'>
                                            <div className='row d-flex align-items-center mb-2'>
                                                <div className='col-sm-2'>
                                                    <img className='sz-40px' src="../Avatar.png"/>
                                                </div>
                                                <div className='col-sm-10'>
                                                    <p className="text-muted">Annette Water</p>
                                                </div>
                                            </div>
                                            <div className='row d-flex align-items-center mb-2'>
                                                <div className='col-sm-2'>
                                                    <img className='sz-40px' src="../Avatar.png"/>
                                                </div>
                                                <div className='col-sm-10'>
                                                    <p className="text-muted">Annette Water</p>
                                                </div>
                                            </div>
                                            <div className='row d-flex align-items-center mb-2'>
                                                <div className='col-sm-2'>
                                                    <img className='sz-40px' src="../Avatar.png"/>
                                                </div>
                                                <div className='col-sm-10'>
                                                    <p className="text-muted">Annette Water</p>
                                                </div>
                                            </div>
                                            <div className='row d-flex align-items-center mb-2'>
                                                <div className='col-sm-2'>
                                                    <img className='sz-40px' src="../Avatar.png"/>
                                                </div>
                                                <div className='col-sm-10'>
                                                    <p className="text-muted">Annette Water</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </div>
            </div>
        </div>
    )
};

export default SuperDashboard;