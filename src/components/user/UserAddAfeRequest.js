import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import classnames from 'classnames';

import RequestDetail from './afe_tabs/RequestDetail';

import '../../assets/css/user/add_afe_request.css';
import ProjectJustification from './afe_tabs/ProjectJustification';


const UserAddAfeRequest = () => {
    const [ requestTabState, setTabState ] = useState({
        afeRequestStep: 0
    });

    const {afeRequestStep} = requestTabState;

    const onClick = (e, nextStep) => {
        setTabState({afeRequestStep: nextStep});
    };


    return (
        <div className='aafe-container'>
            <div className='row'>
                <div className='col-sm-12'>
                    <a className={classnames('aafe-show-tab', {'active' : afeRequestStep === 0, 'inactive' : afeRequestStep != 0})} onClick={e => onClick(e, 0)}>Details</a>
                    <a className={classnames('aafe-show-tab', {'active' : afeRequestStep === 1, 'inactive' : afeRequestStep != 0})} onClick={e => onClick(e, 1)}>Project Justification & Quotation</a>
                    <a className={classnames('aafe-show-tab', {'active' : afeRequestStep === 2, 'inactive' : afeRequestStep != 0})} onClick={e => onClick(e, 2)}>Costing Details</a>
                    <a className={classnames('aafe-show-tab', {'active' : afeRequestStep === 3, 'inactive' : afeRequestStep != 0})} onClick={e => onClick(e, 3)}>ROI Project Analysis</a>
                    <a className={classnames('aafe-show-tab', {'active' : afeRequestStep === 4, 'inactive' : afeRequestStep != 0})} onClick={e => onClick(e, 4)}>Other Expenses</a>
                    <a className={classnames('aafe-show-tab', {'active' : afeRequestStep === 5, 'inactive' : afeRequestStep != 0})} onClick={e => onClick(e, 5)}>On Hold</a>
                </div>
            </div>
            
            { afeRequestStep == 0 && <RequestDetail /> }
            { afeRequestStep == 1 && <ProjectJustification /> }


        </div>
    )
};

export default UserAddAfeRequest;