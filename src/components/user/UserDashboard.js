import React from 'react';

import "../../assets/css/user/userdashboard.css"

import Navbar from '../layout/Navbar';
import Header from '../layout/Header';
import NotifItem from '../common/NotifItem';

const UserDashboard = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <Navbar />
                <div className="col-md-9 col-xl-10 page-container">
                    <Header />
                    <div className='page-content white-container h-shadow container'>
                        <div className='row mb-4'>
                            <h4>Notifications</h4>
                        </div>
                        <div className=''>
                            <h3 className="pl-0">Today</h3>
                            <NotifItem avatarSrc="../Avatar.png" notifText="Your AFE Request Approval form is still in 'Pending'"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default UserDashboard;