import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import MyInput from '../../common/MyInput';

const OtherExpenses = () => {
    return (
        <div className='white-container l-shadow'>
            <div className='row'>
                <div className='col-sm-12'>
                    <MyInput
                        controlId = "formBasicEmail" 
                        label="Associated Expenses (to be included in Payback and RONA Calculations)" 
                        type="textarea" 
                    />
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-12'>
                    <MyInput
                        controlId = "formBasicEmail" 
                        label="Miscellaneous (Gov't Grand/Loans; Special Tax Considerations; Community Relations etc.)" 
                        type="textarea" 
                    />
                </div>
            </div>
            <div className='d-flex justify-content-center'>
                    <Button className="text-white" variant="primary">Submit</Button>
            </div>
        </div>
    )
};

export default OtherExpenses;