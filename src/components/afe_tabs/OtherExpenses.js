import React from 'react';
import Button from 'react-bootstrap/Button';
import MyInput from '../common/MyInput';

const OtherExpenses = ({type = 'user'}) => {
    return (
        <div className='white-container l-shadow'>
            <div className='row'>
                <div className='col-sm-12'>
                    <MyInput 
                        controlId = "formBasicEmail" 
                        label="Associated Expenses (to be included in Payback and RONA Calculations)" 
                        type="textarea" 
                        id="1"
                    />
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-12'>
                    <MyInput 
                        controlId = "formBasicEmail" 
                        label="Miscellaneous (Gov't Grand/Loans; Special Tax Considerations; Community Relations etc.)" 
                        type="textarea" 
                        id="1"
                    />
                </div>
            </div>
            <div className='container d-flex justify-content-center'>
                { type === 'user' && <Button className="btn-darkblue">Submit</Button> }
                { type === 'approver' && (
                    <div>
                        <Button className="mx-1 bg-green text-white" variant="success">Approve</Button>
                        <Button variant="danger">Reject</Button>
                    </div>
                )}
                { type === 'admin' && (
                    <div>
                        <Button className="text-white" variant="warning">Approve All Levels</Button>
                        <Button className="mx-1 bg-green text-white" variant="success">Approve</Button>
                        <Button variant="danger">Reject</Button>
                    </div>
                )}
                { type === 'super' && <Button className="btn-darkblue">Submit</Button> }
            </div>
        </div>
    )
};

export default OtherExpenses;