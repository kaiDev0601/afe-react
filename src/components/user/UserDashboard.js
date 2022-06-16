import React, { useEffect } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Navbar from '../layout/Navbar';
import Header from '../layout/Header';
import NotifItem from '../common/NotifItem';
import { setUserType } from '../../actions/auth';

const UserDashboard = ({
    auth,
    setUserType
}) => {
    useEffect(() => {
        setUserType('user');
    }, [setUserType]);

    return (
        <div className="container-fluid">
            <div className="row">
                <Navbar />
                <div className="col-md-9 col-xl-10 page-container">
                    <Header />
                    <div className='page-content white-container h-shadow p-3em'>
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
    );
};

UserDashboard.propTypes = {
    setUserType: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, { setUserType })(UserDashboard);
