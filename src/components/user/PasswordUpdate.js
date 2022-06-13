import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailForward } from '@fortawesome/free-solid-svg-icons';
import { FiMail, FiPhone } from "react-icons/fi";

import "../../assets/css/user/profile.css"


const PasswordUpdate = () => {
    return (
        <div className='up-container-right col-sm-8'>
            <div className='row'>
                <div className='col-sm-8'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Old Password</Form.Label>
                        <Form.Control type="password" placeholder="Old Password"/>
                    </Form.Group>
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-8'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>New Password</Form.Label>
                        <Form.Control type="password" placeholder="New Password"/>
                    </Form.Group>
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-5 container'><Button variant="primary">Save Changes</Button>{' '}</div>
            </div>
        </div>
    )
};

export default PasswordUpdate;