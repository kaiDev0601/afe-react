import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const RequestDetail = () => {
    return (
        <div className='aafe-content-container'>
            <div className='row'>
                <div className='col-sm-6'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Project Department</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                </div>
                <div className='col-sm-6'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Department</Form.Label>
                        <Form.Control type="text" placeholder="000010-30" />
                    </Form.Group>
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-6'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Facility</Form.Label>
                        <Form.Control type="text" placeholder="000010-31"/>
                    </Form.Group>
                </div>
                <div className='col-sm-4'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Budget Amount<b>(NIL if not in Original Plan)</b></Form.Label>
                        <Form.Control type="text" placeholder="3" />
                    </Form.Group>
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-6'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>If not in plan, State source of funds</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>
                </div>
                <div className='col-sm-4'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Net Expenditure</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-6'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Prepared By</Form.Label>
                        <Form.Control type="text" placeholder="Person 3" disabled/>
                    </Form.Group>
                </div>
                <div className='col-sm-4'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Government Grafts</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-4'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="date" placeholder="6/5/2000"/>
                    </Form.Group>
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