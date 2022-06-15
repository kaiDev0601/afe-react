import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailForward } from '@fortawesome/free-solid-svg-icons';
import { FiMail, FiPhone } from "react-icons/fi";

import MyInput from '../common/MyInput';
import "../../assets/css/user/profile.css"


const ProfileUpdate = () => {
    return (
        <div className='up-container-right col-sm-8'>
            <div className='row'>
                <div className='col-sm-6'>
                    <MyInput 
                        controlId = "formBasicEmail" 
                        label="First Name" 
                        type="text" 
                        placeholder="Person" 
                        id="1"
                    />
                </div>
                <div className='col-sm-6'>
                    <MyInput 
                        controlId = "formBasicEmail" 
                        label="Last Name" 
                        type="text" 
                        placeholder="3" 
                        id="1"
                    />
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-6'>
                    <MyInput 
                        controlId = "formBasicEmail" 
                        label="Email Address" 
                        type="email" 
                        placeholder="abc@abc.com" 
                        id="1"
                        addOnIcon={<FiMail/>}
                    />
                </div>
                <div className='col-sm-6'>
                    <MyInput 
                        controlId = "formBasicEmail" 
                        label="Phone Number" 
                        type="text" 
                        id="1"
                        addOnIcon={<FiPhone/>}
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
                        placeholder="Person"
                    />
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-6'>
                    <MyInput 
                        controlId = "formBasicEmail" 
                        label="Department" 
                        type="text" 
                        id="1"
                        placeholder="Information Technology"
                        disabled={true}
                    />
                </div>
                <div className='col-sm-6'>
                    <MyInput 
                        controlId = "formBasicEmail" 
                        label="Faculty" 
                        type="text" 
                        id="1"
                        placeholder="Head Office - 100000031-91"
                        disabled={true}
                    />
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-6'>
                    <MyInput 
                        controlId = "formBasicEmail" 
                        label="Role" 
                        type="text" 
                        id="1"
                        placeholder="User"
                        disabled={true}
                    />
                </div>
            </div>
            <div className='row d-flex justify-content-center'>
                <Button className='btn-darkblue'>Save Changes</Button>{' '}
            </div>
        </div>
    )
};

export default ProfileUpdate;