import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import MyInput from '../../common/MyInput';

const RequestDetail = () => {
    return (
        <div className='white-container l-shadow'>
            <div className='row'>
                <div className='col-sm-6'>
                    <MyInput
                        controlId = "formBasicEmail" 
                        label="Project Department" 
                        type="text" 
                    />
                    
                </div>
                <div className='col-sm-6'>                    
                    <MyInput
                        controlId = "formBasicEmail" 
                        label="Department" 
                        type="text" 
                        placeholder="000010-30"
                    />
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-6'>
                    <MyInput
                        controlId = "formBasicEmail" 
                        label="Facility" 
                        placeholder="000010-31"
                        type="text" 
                    />
                </div>
                <div className='col-sm-4'>
                    <MyInput
                        controlId = "formBasicEmail" 
                        label="Budget Amount<b>(NIL if not in Original Plan)" 
                        type="text" 
                    />
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-6'>
                    <MyInput
                        controlId = "formBasicEmail" 
                        label="If not in plan, State source of funds" 
                        type="text" 
                    />
                </div>
                <div className='col-sm-4'>
                    <MyInput
                        controlId = "formBasicEmail" 
                        label="Net Expenditure" 
                        type="text" 
                    />
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-6'>
                    <MyInput
                        controlId = "formBasicEmail" 
                        label="Prepared By" 
                        type="text" 
                        placeholder="Person 3" 
                        disabled={true}
                    />
                </div>
                <div className='col-sm-4'>
                    <MyInput
                        controlId = "formBasicEmail" 
                        label="Government Grafts" 
                        type="text" 
                    />
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-4'>
                    <MyInput
                        controlId = "formBasicEmail" 
                        label="Date" 
                        type="date" 
                    />
                </div>
            </div>
            <div className='row'>
                <Form.Label>Project Types</Form.Label>
            </div>
            <div className='row'>
                <div className='col-sm-2'> <Form.Check id="leases" label="Leases"/> </div>
                <div className='col-sm-3'> <Form.Check id="maintenance" label="CAPEX - Profit Maintenance"/> </div>
                <div className='col-sm-3'> <Form.Check id="improve" label="CAPEX - Profit Improvement"/> </div>
                <div className='col-sm-3'> <Form.Check id="repair" label="Repair & Maintenance"/> </div>
            </div>
            <div className='row container'>
                <div className='col-sm-3'>
                    <Button variant="primary">Next</Button>
                </div>
            </div>
        </div>
    )
};

export default RequestDetail;