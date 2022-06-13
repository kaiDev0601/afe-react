import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import "../../assets/css/user/userdashboard.css"


const UserDashboard = () => {
    return (
        <div className='ud-page-content container'>
            <div className='row ud-res-header'>
                <h4>Notifications</h4>
            </div>
            <div className='row ud-res-content'>
                <h3>Today</h3>
                <div className='row ud-notification-item'>
                    <div className='col-md-2'><img src="../Avatar.png"/></div>
                    <div className='col-md-10'>
                        <p>Your AFE Request Approval form is still in 'Pending'</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default UserDashboard;