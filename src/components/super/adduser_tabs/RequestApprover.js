import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AiOutlineMail, AiOutlinePlusCircle, AiTwotonePhone } from 'react-icons/ai';
import MyInput from '../../common/MyInput';
import InputGroup from 'react-bootstrap/InputGroup';

const RequestApprover = () => {
    return (
        <div className='white-container l-shadow p-3em'>
            <div className='row'>
                <div className='col-sm-8'>
                    <MyInput 
                        controlId = "formBasicEmail" 
                        label="Level 2 Approver" 
                        type="text" 
                        id="1"
                    />
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-8'>
                    <MyInput 
                        controlId = "formBasicEmail" 
                        label="Level 3 Approver" 
                        type="text" 
                        id="1"
                    />
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-8'>
                    <MyInput 
                        controlId = "formBasicEmail" 
                        label="Level 4 Approver" 
                        type="text" 
                        id="1"
                    />
                </div>
            </div>
            <div className='d-flex flex-row'>
                <Form.Check id="leases" label="Approve All Levels"/>
                <Form.Check id="leases" label="Default Level 5 Approver"/>
            </div>
            <div className='row d-flex justify-content-center'>
                    <Button className="btn-darkblue">Save</Button>
            </div>
        </div>
    )
};

export default RequestApprover;