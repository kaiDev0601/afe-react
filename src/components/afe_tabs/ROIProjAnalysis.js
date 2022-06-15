import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { AiFillCloseCircle } from 'react-icons/ai';

import MyInput from '../common/MyInput';


const ROIProjAnalysis = () => {

    const [moreDetailState, setMoreDetail] = useState({
        isMoreDetail : true
    });

    const { isMoreDetail } = moreDetailState;

    return (
        <div className='white-container l-shadow'>
            <div className='row'>
                <div className='col-sm-6'>
                    <MyInput
                        controlId = "formBasicEmail" 
                        label="Required ROI"
                        type="text" 
                        id="inputPassword5"
                    />
                </div>
                <div className='col-sm-6'>
                    <MyInput
                        controlId = "formBasicEmail" 
                        label="Project ROI"
                        type="text" 
                        id="inputPassword5"
                    />
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-6'>
                    <MyInput
                        controlId = "formBasicEmail" 
                        label="Capital Outay"
                        type="text" 
                        id="inputPassword5"
                    />
                </div>
                <div className='col-sm-3'>
                    <MyInput
                        controlId = "formBasicEmail" 
                        label="Estimated Date of ROI Realization"
                        type="date" 
                        id="inputPassword5"
                    />
                </div>
                <div className='col-sm-2'>
                    <MyInput
                        controlId = "formBasicEmail" 
                        label="Payback"
                        type="text" 
                        id="inputPassword5"
                    />
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-6'>
                    <MyInput
                        controlId = "formBasicEmail" 
                        label="Required incremental income / cost savings"
                        type="text" 
                        id="inputPassword5"
                    />
                </div>
                <div className='col-sm-6'>
                    <MyInput
                        controlId = "formBasicEmail" 
                        label="Estimated ROI Amount"
                        type="text" 
                        id="inputPassword5"
                    />
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-12'>                   
                    <MyInput
                        controlId = "formBasicEmail" 
                        label="Comments" 
                        type="textarea" 
                    />                    
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-2'><h5>More Details?</h5></div>
                <div className='col-sm-1'><Form.Check type="checkbox" id="leases" value={isMoreDetail}/></div>
            </div>
            <div className='row no-padding'>
                <div className='col-sm-12'>
                    <div className='row'>
                        <div className='col-sm-12 container aafe-e-dialog'>
                            <div className='aafe-e-dialog-header row'>
                                <div className='col-sm-1'>
                                    <h6>S.no</h6>
                                </div>
                                <div className='col-sm-1'>
                                    <h6>Year</h6>
                                </div>
                                <div className='col-sm-2'>
                                    <h6>Additional Revenue</h6>
                                </div>
                                <div className='col-sm-3'>
                                    <h6>Incremental Labour Costs</h6>
                                </div>
                                <div className='col-sm-2'>
                                    <h6>Labour savings</h6>
                                </div>
                                
                                <div className='col-sm-2'>
                                    <h6>Other savings</h6>
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
                                    <div className='col-sm-1'>
                                        <Form.Control type="text" placeholder="Year"/>
                                    </div>
                                    <div className='col-sm-2'>
                                        <Form.Control type="text"/>
                                    </div>
                                    <div className='col-sm-3'>
                                        <Form.Control type="text"/>
                                    </div>
                                    <div className='col-sm-2'>
                                        <Form.Control type="text"/>
                                    </div>
                                    <div className='col-sm-2'>
                                        <Form.Control type="text"/>
                                    </div>
                                    <div className='col-sm-1'>
                                        <AiFillCloseCircle />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-9"></div>
                                    <div className="col-sm-3">
                                        <Button className="btn-darkblue">+ Add an Icon</Button>{' '}
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
                                        <Form.Control type='text' placeholder="0.00"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row container'>
                <div className='col-sm-10'></div>
                <div className='col-sm-2'>
                    <Button className="btn-transparent">Next</Button>
                </div>
            </div>
        </div>
    )
};

export default ROIProjAnalysis;