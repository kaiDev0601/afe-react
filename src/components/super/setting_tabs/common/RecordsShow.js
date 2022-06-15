import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


import { AiOutlineMail, AiTwotonePhone } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';
import MyTable from '../../../common/MyTable';
import MyInput from '../../../common/MyInput';



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
            Add New
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className='row'>
                <div className='col-sm-6'>
                    <MyInput
                        controlId = "formBasicEmail" 
                        label="First Name" 
                        type="text" 
                    />
                </div>
                <div className='col-sm-6'>
                    <MyInput
                        controlId = "formBasicEmail" 
                        label="Last Name" 
                        type="text" 
                    />
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-6'>
                    <MyInput
                        controlId = "formBasicEmail" 
                        label="Email" 
                        type="email"
                        addOnIcon={<AiOutlineMail/>} 
                    />
                </div>
                <div className='col-sm-6'>
                    <MyInput
                        controlId = "formBasicEmail" 
                        label="Phone Number" 
                        type="text"
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
        <Modal.Footer>
          <Button onClick={props.onHide}>Save</Button>
        </Modal.Footer>
      </Modal>
    );
}



const RecordsShow = () => {
    const [modalShow, setModalShow] = useState(false);

    
    const tHeaders = [  
        "ID",
        "Cost Center",
        "Facility",
        "Updated On",
        "Updated By",
        "Actions"
    ];
    const tableData = [
        [
            1,
            "000-01",
            "000-01",
            "4-6-2022",
            "Person 1",
            <a href="#"><IoMdClose className='text-danger'/></a>
        ],
        [
            1,
            "000-01",
            "000-01",
            "4-6-2022",
            "Person 1",
            <a href="#"><IoMdClose className='text-danger'/></a>
        ],[
            1,
            "000-01",
            "000-01",
            "4-6-2022",
            "Person 1",
            <a href="#"><IoMdClose className='text-danger'/></a>
        ],[
            1,
            "000-01",
            "000-01",
            "4-6-2022",
            "Person 1",
            <a href="#"><IoMdClose className='text-danger'/></a>
        ],
    ];


    return (
        <div className="container">
            <div className='row d-flex justify-content-between'>
                    <Button className="btn btn-darkblue" onClick={() => setModalShow(true)}>+ Add New</Button>
                    <Form.Control
                        className='auto-w'
                        type="password"
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                        placeholder="Search"
                    />
            </div>
            <MyTable 
                header={tHeaders} 
                data={tableData} 
                curPage={1} 
                totalPage={4} 
                columCount={10}/>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    )
};

export default RecordsShow;