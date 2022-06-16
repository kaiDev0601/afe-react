import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import classnames from 'classnames';
import Navbar from '../layout/Navbar';
import Header from '../layout/Header';

import AddUser from './adduser_tabs/AddUser';

import { setUserType } from '../../actions/auth';
import RequestApprover from './adduser_tabs/RequestApprover';


const SuperAddUser = ({
    auth,
    setUserType
}) => {
    useEffect(() => {
        setUserType('super');
    }, [setUserType]);

    const [ requestTabState, setTabState ] = useState({
        afeRequestStep: 0
    });

    const {afeRequestStep} = requestTabState;

    const onClick = (e, nextStep) => {
        setTabState({afeRequestStep: nextStep});
    };


    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <Navbar />
                <div className="col-md-9 col-xl-10 page-container">
                    <Header />
                    <div className='aafe-container'>
                        <div className='row'>
                            <div className='col-sm-12'>
                                <a className={classnames('aafe-show-tab', {'active' : afeRequestStep === 0, 'inactive' : afeRequestStep !== 0})} onClick={e => onClick(e, 0)}>Add Users</a>
                                <a className={classnames('aafe-show-tab', {'active' : afeRequestStep === 1, 'inactive' : afeRequestStep !== 0})} onClick={e => onClick(e, 1)}>Request Approver</a>
                            </div>
                        </div>
                        
                        { afeRequestStep === 0 && <AddUser /> }
                        { afeRequestStep === 1 && <RequestApprover /> }
                    </div>
                </div>
            </div>
        </div>
    )
};
SuperAddUser.propTypes = {
    setUserType: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, { setUserType })(SuperAddUser);
