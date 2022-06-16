import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import classnames from 'classnames';
import Navbar from '../layout/Navbar';
import Header from '../layout/Header';


import SettingsFacility from './setting_tabs/SettingsFacility';
import GlList from './setting_tabs/GlList';
import ProjectType from './setting_tabs/ProjectType';
import BusinessUint from './setting_tabs/BusinessUnit';
import { setUserType } from '../../actions/auth';

const SuperSettings = ({
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
                    <div className='page-content container'>
                        <div className='row mb-3'>
                            <div className='col-sm-12'>
                                <a className={classnames('aafe-show-tab', {'active' : afeRequestStep === 0, 'inactive' : afeRequestStep !== 0})} onClick={e => onClick(e, 0)}>Facility</a>
                                <a className={classnames('aafe-show-tab', {'active' : afeRequestStep === 1, 'inactive' : afeRequestStep !== 0})} onClick={e => onClick(e, 1)}>Business Uint</a>
                                <a className={classnames('aafe-show-tab', {'active' : afeRequestStep === 2, 'inactive' : afeRequestStep !== 0})} onClick={e => onClick(e, 2)}>GL List</a>
                                <a className={classnames('aafe-show-tab', {'active' : afeRequestStep === 3, 'inactive' : afeRequestStep !== 0})} onClick={e => onClick(e, 3)}>Project Type</a>
                            </div>
                        </div>
                        
                        { afeRequestStep === 0 && <SettingsFacility /> }
                        { afeRequestStep === 1 && <BusinessUint /> }
                        { afeRequestStep === 2 && <GlList /> }
                        { afeRequestStep === 3 && <ProjectType /> }


                    </div>
                </div>
            </div>
        </div>
    )
};

SuperSettings.propTypes = {
    setUserType: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, { setUserType })(SuperSettings);