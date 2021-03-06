import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { GrAttachment } from 'react-icons/gr';
import { AiFillCloseCircle } from 'react-icons/ai';


const ProjectJustification = () => {
    return (
        <div className='aafe-content-container'>
            <div className='row'>
                <div className='col-sm-12'>
                    <h4>Project Description and Justification</h4>
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-2'>
                    <p>Is this an ROI Project</p>
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
                    <Form.Label htmlFor="inputPassword5">Start Date</Form.Label>
                    <Form.Control
                        type="date"
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                    />
                </div>
                <div className='col-sm-4'>
                    <Form.Label htmlFor="inputPassword5">Expected Completion Date</Form.Label>
                    <Form.Control
                        type="date"
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                    />
                </div>
            </div>
            <div className='row'>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </div>
            <div className='row no-padding'>
                <div className='col-sm-12'>
                    <div className='row'>
                        <h4>Quotations</h4>
                    </div>
                    <div className='row'>
                        <div className='col-sm-12 container aafe-e-dialog'>
                            <div className='aafe-e-dialog-header row'>
                                <div className='col-sm-2'>
                                    <h6>Quote #</h6>
                                </div>
                                <div className='col-sm-3'>
                                    <h6>Quote Amount</h6>
                                </div>
                                <div className='col-sm-3'>
                                    <h6>Vendor</h6>
                                </div>
                                <div className='col-sm-1'>
                                    <h6>Preferred</h6>
                                </div>
                                <div className='col-sm-2'>
                                    <h6>Attachment</h6>
                                </div>
                                <div className='col-sm-1'>
                                    <h6>Actions</h6>
                                </div>
                            </div>
                            <div className='aafe-e-dialog-content'>
                                <div className='row no-padding'>
                                    <div className='col-sm-2'>
                                        <p>1</p>
                                    </div>
                                    <div className='col-sm-3'>
                                        <Form.Control type="text"/>
                                    </div>
                                    <div className='col-sm-3'>
                                        <Form.Control type="text" placeholder='Search Vendor'/>
                                    </div>
                                    <div className='col-sm-1'>
                                        <Form.Check type="checkbox"/>
                                    </div>
                                    <div className='col-sm-2'>
                                        <GrAttachment />
                                    </div>
                                    <div className='col-sm-1'>
                                        <AiFillCloseCircle />
                                    </div>
                                </div>
                                <div className='row no-padding'>
                                    <div className='col-sm-2'>
                                    </div>
                                    <div className='col-sm-9'>
                                        <Form.Control as="textarea" rows={3} placeholder="Pros and Cons" />
                                    </div>
                                    <div className='col-sm-1'>
                                    </div>
                                </div>
                                <div className='row no-padding'>
                                    <div className='col-sm-2'>
                                    </div>
                                    <div className='col-sm-9'>
                                        <Form.Control as="textarea" rows={3} placeholder="Other Comments" />
                                    </div>
                                    <div className='col-sm-1'>
                                    </div>
                                </div>
                            </div>
                            <div className='aafe-e-dialog-footer'>
                                <div class="row">
                                    <div class="col-sm-9"></div>
                                    <div class="col-sm-3">
                                        <Button variant="primary">+ Add an Icon</Button>{' '}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProjectJustification;