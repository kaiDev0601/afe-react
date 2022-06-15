import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import MyInput from '../../../common/MyInput';

const UploadCSV = () => {
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
                <div className='col-sm-7'>
                    <h6>Or upload from a URL</h6>
                </div>
            </div>
            <div className='d-flex d-row align-items-center'>
                <Form.Control className="auto-w" type="text" placeholder="https://.."/>
                <Button className="auto-w btn-darkblue">Upload</Button>
                <Form.Check type="checkbox" label="Delete Existing Records"/>
            </div>
            <div className='row'>
                <div className='col-sm-12'>
                    <MyInput
                        controlId = "formBasicEmail" 
                        label="Log Session" 
                        type="textarea"
                    />
                </div>
            </div>
            
            <div className='row'>
                <div className='col-sm-2'><Button variant='info text-white'>Save Log</Button></div>
            </div>
        </div>
    )
};

export default UploadCSV;