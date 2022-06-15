import React from 'react';

const NotifItem = ({avatarSrc, notifText}) => {
    console.log(notifText);
    return (
        <div className='row notification-item rounded-3'>
            <div className='col-md-2'><img className='sz-40px' src={avatarSrc}/></div>
            <div className='col-md-10'>
                <p>{notifText}</p>
            </div>
        </div>
    );
}

export default NotifItem;