import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AiOutlineMail, AiOutlinePlusCircle, AiTwotonePhone } from 'react-icons/ai';
import MyInput from '../../common/MyInput';
import InputGroup from 'react-bootstrap/InputGroup';

const AddUser = () => {
    return (
        <div className='white-container l-shadow p-3em'>
            <div className='d-flex justify-content-between'>
                <div className='col-sm-4'>
                    <MyInput 
                        controlId = "formBasicEmail" 
                        label="First Name" 
                        type="text" 
                        id="1"
                    />
                </div>
                <div className='col-sm-4'>                    
                    <MyInput 
                        controlId = "formBasicEmail" 
                        label="Department" 
                        type="text" 
                        id="1"
                        placeholder="000010-30"
                    />
                </div>
            </div>
            <div className='d-flex justify-content-between'>
                <div className='col-sm-4'>
                    <MyInput 
                        controlId = "formBasicEmail" 
                        label="Email" 
                        type="email" 
                        id="1"
                        addOnIcon={<AiOutlineMail/>}
                    />
                </div>
                <div className='col-sm-4'>
                    <MyInput 
                        controlId = "formBasicEmail" 
                        label="Phone Number" 
                        type="text" 
                        id="1"
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
                        id="1"
                        placeholder=""
                    />
                </div>
            </div>
            <div className='d-flex justify-content-between'>
                <div className='col-sm-4'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Department</Form.Label>
                        <Form.Select aria-label="Default select example full-width">
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Form.Group>
                </div>
                <div className='col-sm-4'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Facility Name</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Select aria-label="Default select example full-width">
                                <option>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                            <InputGroup.Text>
                                <AiOutlinePlusCircle/>
                            </InputGroup.Text>
                        </InputGroup>
                    </Form.Group>
                </div>
            </div>
            
            <div className='d-flex justify-content-between'>
                <div className='col-sm-4'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Select Role</Form.Label>
                        <Form.Select aria-label="Default select example full-width">
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Form.Group>
                </div>
                <div className='col-sm-4'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Approver Level</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Select aria-label="Default select example full-width">
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                            <InputGroup.Text>
                                <AiOutlinePlusCircle/>
                            </InputGroup.Text>
                        </InputGroup>
                    </Form.Group>
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-2'> <Form.Check id="leases" className="big-check" label="Approve All Levels"/> </div>
            </div>
            <div className='row d-flex justify-content-center'>
                    <Button className="btn-darkblue">Save</Button>
            </div>
        </div>
    )
};

export default AddUser;