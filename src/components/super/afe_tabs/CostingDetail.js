import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { GrAttachment } from 'react-icons/gr';
import { AiFillCloseCircle } from 'react-icons/ai';


const CostingDetail = () => {
    return (
        <div className='white-container l-shadow'>
            <div className='row'>
                <div className='col-sm-12'>
                    <h4>Foreign Exchange</h4>
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-2'>
                    <p>Foreign Exchange Required</p>
                </div>
                <div className='col-sm-1'>
                    <Form.Check 
                        type="radio"
                        id='yes'
                        label="Yes"
                    />
                </div>
                <div className='col-sm-1'>
                    <Form.Check 
                        type="radio"
                        id='no'
                        label="No"
                    />
                </div>
                <div className='col-sm-4'>
                    <Form.Label htmlFor="inputPassword5">Rate</Form.Label>
                    <Form.Control
                        type="text"
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                    />
                </div>
                <div className='col-sm-4'>
                    <Form.Label htmlFor="inputPassword5">Other Comments</Form.Label>
                    <Form.Control
                        type="text"
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                    />
                </div>
            </div>
            <div className='row no-padding'>
                <div className='col-sm-12'>
                    <div className='row'>
                        <h4>Item Details</h4>
                    </div>
                    <div className='row'>
                        <div className='col-sm-12 container aafe-e-dialog'>
                            <div className='aafe-e-dialog-header row'>
                                <div className='col-sm-1'>
                                    <h6>Item #</h6>
                                </div>
                                <div className='col-sm-3'>
                                    <h6>Item Description</h6>
                                </div>
                                <div className='col-sm-4'>
                                    <h6>Vendor</h6>
                                </div>
                                <div className='col-sm-2'>
                                    <h6>Doc Value</h6>
                                </div>
                                <div className='col-sm-1'>
                                    <h6>Price</h6>
                                </div>
                                <div className='col-sm-1'>
                                    <h6>Actions</h6>
                                </div>
                            </div>
                            <div className='aafe-e-dialog-content'>
                                <div className='row no-padding'>
                                    <div className='col-sm-1'>
                                        <p>1</p>
                                    </div>
                                    <div className='col-sm-3'>
                                        <Form.Control type="text"/>
                                    </div>
                                    <div className='col-sm-4'>
                                        <Form.Control type="text" placeholder='Search Vendor'/>
                                    </div>
                                    <div className='col-sm-2'>
                                        <InputGroup className="mb-3">
                                            <Form.Control
                                            type='text'
                                            placeholder="Recipient's username"
                                            aria-label="Recipient's username"
                                            aria-describedby="basic-addon2"
                                            />
                                            <InputGroup.Text id="basic-addon2">$</InputGroup.Text>
                                        </InputGroup>
                                    </div>
                                    <div className='col-sm-1'>
                                        <Form.Control type='text' />
                                    </div>
                                    <div className='col-sm-1'>
                                        <AiFillCloseCircle />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className='col-sm-10'></div>
                                    <div className='col-sm-2'>
                                        <Button variant='primary'>+ Add an Icon</Button>
                                    </div>
                                </div>
                            </div>
                            <div className='aafe-e-dialog-footer'>
                                <div className="row">
                                    <div className="col-sm-8"></div>
                                    <div className='col-sm-2'>
                                        <h5>Total</h5>
                                    </div>
                                    <div className="col-sm-2">
                                        <InputGroup className="mb-3">
                                            <Form.Control
                                            type='text'
                                            placeholder="0.00"
                                            />
                                            <InputGroup.Text id="basic-addon2">CAD</InputGroup.Text>
                                        </InputGroup>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-8"></div>
                                    <div className='col-sm-2'>
                                        <h5>Government Grants</h5>
                                    </div>
                                    <div className="col-sm-2">
                                        <InputGroup className="mb-3">
                                            <Form.Control
                                            type='text'
                                            placeholder="0.00"
                                            />
                                            <InputGroup.Text id="basic-addon2">CAD</InputGroup.Text>
                                        </InputGroup>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-8"></div>
                                    <div className='col-sm-2'>
                                        <h5>Net Expenditures</h5>
                                    </div>
                                    <div className="col-sm-2">
                                        <InputGroup className="mb-3">
                                            <Form.Control
                                            type='text'
                                            placeholder="0.00"
                                            />
                                            <InputGroup.Text id="basic-addon2">CAD</InputGroup.Text>
                                        </InputGroup>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <p>We cannot provide three quotes because</p>
            </div>
            <div className='row'>
                <div className='col-sm-3'>
                    <Form.Control type="text"/></div>
                <div className='col-sm-7'></div>
                <div className="col-sm-2">
                    <Button variant="primary">Next</Button>
                </div>
            </div>
        </div>
    )
};

export default CostingDetail;