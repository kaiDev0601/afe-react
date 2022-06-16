import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import {AiFillEyeInvisible} from 'react-icons/ai';
import InputGroup from 'react-bootstrap/InputGroup';
import MyInput from '../../../common/MyInput';

const UploadFromDB = () => {
    return (
        <div className='white-container l-shadow'>
            <div className='row'>
                <div className='col-sm-8'>
                    <MyInput
                        controlId = "formBasicEmail" 
                        label="Username" 
                        type="text"
                    />
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-8'>
                    <MyInput
                        controlId = "formBasicEmail" 
                        label="Password" 
                        type="password"
                        addOnIcon={<AiFillEyeInvisible/>}
                    />
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-12'>
                    <MyInput
                        controlId = "formBasicEmail" 
                        label="Connection String" 
                        type="text"
                    />
                </div>
            </div>
            <div className='d-flex align-items-center justify-content-left'>
                <Button className="btn-darkblue">Update</Button>
                <Form.Check 
                     className="big-check"
                    type="checkbox"
                    id='yes'
                    label="Delete Existing Records"
                />
                <Form.Check 
                 className="big-check"
                    type="checkbox"
                    id='yes'
                    label="Update Duplicates"
                />
            </div>
            <div className='row'>
                <div className='col-sm-12'>
                    <MyInput
                        controlId = "formBasicEmail" 
                        label="Username" 
                        type="textarea"
                    />
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-2'><Button variant='success'>Save Log</Button></div>
            </div>
        </div>
    )
};

export default UploadFromDB;