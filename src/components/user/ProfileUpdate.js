import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailForward } from '@fortawesome/free-solid-svg-icons';
import { FiMail, FiPhone } from "react-icons/fi";

import "../../assets/css/user/profile.css"


const ProfileUpdate = () => {
    return (
        <div className='up-container-right col-sm-8'>
            <div className='row'>
                <div className='col-sm-6'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="Person" />
                    </Form.Group>
                </div>
                <div className='col-sm-6'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="3" />
                    </Form.Group>
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-6'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email Address</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control type="email" placeholder="abc@abc.com" />
                            <InputGroup.Text id="basic-addon1">
                                <FiMail />
                            </InputGroup.Text>
                        </InputGroup>
                    </Form.Group>
                </div>
                <div className='col-sm-6'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Phone Number</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control type="text" />
                            <InputGroup.Text id="basic-addon1">
                                <FiPhone />
                            </InputGroup.Text>
                        </InputGroup>
                    </Form.Group>
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-12'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Person" />
                    </Form.Group>
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-6'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Department</Form.Label>
                        <Form.Control type="text" placeholder="Information Technology" disabled/>
                    </Form.Group>
                </div>
                <div className='col-sm-6'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Faculty</Form.Label>
                        <Form.Control type="text" placeholder="Head Office - 100000031-91" disabled/>
                    </Form.Group>
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-6'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Role</Form.Label>
                        <Form.Control type="text" placeholder="User" disabled/>
                    </Form.Group>
                </div>
            </div>
            <div className='row'>
                <Button variant="primary">Save Changes</Button>{' '}
            </div>
        </div>
    )
};

export default ProfileUpdate;