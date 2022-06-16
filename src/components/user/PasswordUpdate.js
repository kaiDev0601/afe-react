import React from 'react';
import Button from 'react-bootstrap/Button';

import MyInput from '../common/MyInput';


const PasswordUpdate = () => {
    return (
        <div className='up-container-right col-sm-8'>
            <div className='row'>
                <div className='col-sm-8'>
                    <MyInput 
                        controlId = "formBasicEmail" 
                        label="Old Password" 
                        type="password" 
                        id="1"
                        placeholder="Old Password"
                    />
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-8'>
                    <MyInput 
                        controlId = "formBasicEmail" 
                        label="New Password" 
                        type="password" 
                        id="1"
                        placeholder="New Password"
                    />
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-5 container'><Button className='btn-darkblue'>Save Changes</Button>{' '}</div>
            </div>
        </div>
    )
};

export default PasswordUpdate;