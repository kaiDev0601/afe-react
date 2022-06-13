import React, {useState} from 'react';
import classnames from 'classnames';

import "../../assets/css/user/profile.css"

import ProfileUpdate from './ProfileUpdate';
import PasswordUpdate from './PasswordUpdate';

const UserProfile = () => {

    const [tabState, setTabState] = useState({
        isProfileUpdate: true
    });

    const { isProfileUpdate } = tabState;

    const onClickType = (e, type) => {
        setTabState({isProfileUpdate : type});
    }

    return (
        <div className='up-page-content container'>
            <div className='row up-profile-tabs'>
                <div className='col-sm-2'>
                    <a className={classnames('col-sm-2 up-tab', {'up-tab-checked': isProfileUpdate})} href="#" onClick={e => onClickType(e, true)}>User Profile</a>
                </div>
                <div className='col-sm-2'>
                    <a className={classnames('col-sm-2 up-tab', {'up-tab-checked': !isProfileUpdate})} href="#" onClick={e => onClickType(e, false)}>Change Password</a>
                </div>
            </div>

            <div className='row'>
                <div className='up-container-left col-sm-3'>
                    <img className='up-user-avatar' src="../../Avatar.png"/>
                    <p className='up-user-name'>Person 3</p>
                    <p className='up-user-type'>User</p>
                    <hr/>
                    <button className='up-upload-avatar'>Upload new Picture</button>
                </div>
                { isProfileUpdate && <ProfileUpdate /> }
                { !isProfileUpdate && <PasswordUpdate /> }
            </div>
        </div>
    )
};

export default UserProfile;