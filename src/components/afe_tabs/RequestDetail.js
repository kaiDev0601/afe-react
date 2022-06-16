import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import MyInput from '../common/MyInput';

const RequestDetail = () => {
    return (
        <div className='white-container l-shadow'>
            <div className='row'>
                <div className='col-sm-6'>
                    <MyInput 
                        controlId = "formBasicEmail" 
                        label="Project Department" 
                        type="text" 
                        id="1"
                    />
                </div>
                <div className='col-sm-6'>                    
                    <MyInput 
                        controlId = "formBasicEmail" 
                        label="Department" 
                        type="text" 
                        id="1"
                        placeholder="000010-30"
                    />
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-6'>
                    <MyInput 
                        controlId = "formBasicEmail" 
                        label="Facility" 
                        type="text" 
                        id="1"
                        placeholder="000010-31"
                    />
                </div>
                <div className='col-sm-4'>
                    <MyInput 
                        controlId = "formBasicEmail" 
                        label={<span>Budget Amount <b>(NIL if not in Original Plan)</b></span>}
                        type="text" 
                        id="1"
                        placeholder="3"
                    />
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-6'>
                    <MyInput 
                        controlId = "formBasicEmail" 
                        label="If not in plan, State source of funds" 
                        type="text" 
                        id="1"
                        placeholder=""
                    />
                </div>
                <div className='col-sm-4'>
                    <MyInput 
                        controlId = "formBasicEmail" 
                        label="Net Expenditure" 
                        type="text" 
                        id="1"
                        placeholder=""
                    />
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-6'>
                    <MyInput 
                        controlId = "formBasicEmail" 
                        label="Prepared By" 
                        type="text" 
                        id="1"
                        placeholder="Person 3"
                        disabled={true}
                    />
                </div>
                <div className='col-sm-4'>
                    <MyInput 
                        controlId = "formBasicEmail" 
                        label="Government Grafts" 
                        type="text" 
                        id="1"
                    />
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-4'>
                    <MyInput 
                        controlId = "formBasicEmail" 
                        label="Date" 
                        type="date" 
                        id="1"
                        value="6/5/2000"
                    />
                </div>
            </div>
            <div className='row'>
                <Form.Label>Project Types</Form.Label>
            </div>
            <div className='row'>
                <div className='col-sm-2'> <Form.Check className="big-check" id="leases" label="Leases"/> </div>
                <div className='col-sm-3'> <Form.Check className="big-check" id="maintenance" label="CAPEX - Profit Maintenance"/> </div>
                <div className='col-sm-3'> <Form.Check className="big-check" id="improve" label="CAPEX - Profit Improvement"/> </div>
                <div className='col-sm-3'> <Form.Check className="big-check" id="repair" label="Repair & Maintenance"/> </div>
            </div>
            <div className='row d-flex justify-content-end'>
                    <Button className="btn-transparent">Next</Button>
            </div>
        </div>
    )
};

export default RequestDetail;