import React, {useEffect, useState} from 'react';
import classnames from 'classnames';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ProfileUpdate from './ProfileUpdate';
import PasswordUpdate from './PasswordUpdate';
import Navbar from '../layout/Navbar';
import Header from '../layout/Header';
import Button from 'react-bootstrap/Button';
import { setUserType } from '../../actions/auth';

const UserProfile = ({
    auth,
    setUserType
}) => {
    useEffect(() => {
        setUserType('user');
    }, [setUserType]);

    const [tabState, setTabState] = useState({
        isProfileUpdate: true
    });

    const { isProfileUpdate } = tabState;

    const onClickType = (e, type) => {
        setTabState({isProfileUpdate : type});
    }

    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <Navbar />
                <div className="col-md-9 col-xl-10 page-container">
                    <Header />
                    <div className='up-page-content container'>
                        <div className='up-profile-tabs d-flex flex-row mb-2'>
                            <a className={classnames('tab mx-2', {'tab-checked': isProfileUpdate})} href={"#"} onClick={e => onClickType(e, true)}>User Profile</a>
                            <a className={classnames('tab mx-2', {'tab-checked': !isProfileUpdate})} href={"#"} onClick={e => onClickType(e, false)}>Change Password</a>
                        </div>

                        <div className='row'>
                            <div className='up-container-left col-sm-3'>
                                <img className='sz-10em' src="../../Avatar.png" alt="a"/>
                                <p className='up-user-name'>Person 3</p>
                                <p className='up-user-type'>User</p>
                                <hr/>
                                <Button className="btn-darkblue">Upload new Picture</Button>
                            </div>
                            { isProfileUpdate && <ProfileUpdate /> }
                            { !isProfileUpdate && <PasswordUpdate /> }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

UserProfile.propTypes = {
    setUserType: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, { setUserType })(UserProfile);
