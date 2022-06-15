import React, { useState } from 'react';
import classnames from 'classnames';
import Navbar from '../layout/Navbar';
import Header from '../layout/Header';

import RequestDetail from '../afe_tabs/RequestDetail';

import '../../assets/css/admin/add_afe_request.css';
import ProjectJustification from '../afe_tabs/ProjectJustification';
import CostingDetail from '../afe_tabs/CostingDetail';
import ROIProjAnalysis from '../afe_tabs/ROIProjAnalysis';
import OtherExpenses from '../afe_tabs/OtherExpenses';


const AdminAddAfeRequest = () => {
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
                        <div className='row mb-3'>
                            <div className='col-sm-12'>
                                <a className={classnames('aafe-show-tab', {'active' : afeRequestStep === 0, 'inactive' : afeRequestStep !== 0})} onClick={e => onClick(e, 0)}>Details</a>
                                <a className={classnames('aafe-show-tab', {'active' : afeRequestStep === 1, 'inactive' : afeRequestStep !== 0})} onClick={e => onClick(e, 1)}>Project Justification & Quotation</a>
                                <a className={classnames('aafe-show-tab', {'active' : afeRequestStep === 2, 'inactive' : afeRequestStep !== 0})} onClick={e => onClick(e, 2)}>Costing Details</a>
                                <a className={classnames('aafe-show-tab', {'active' : afeRequestStep === 3, 'inactive' : afeRequestStep !== 0})} onClick={e => onClick(e, 3)}>ROI Project Analysis</a>
                                <a className={classnames('aafe-show-tab', {'active' : afeRequestStep === 4, 'inactive' : afeRequestStep !== 0})} onClick={e => onClick(e, 4)}>Other Expenses</a>
                            </div>
                        </div>
                        
                        { afeRequestStep === 0 && <RequestDetail /> }
                        { afeRequestStep === 1 && <ProjectJustification /> }
                        { afeRequestStep === 2 && <CostingDetail /> }
                        { afeRequestStep === 3 && <ROIProjAnalysis /> }
                        { afeRequestStep === 4 && <OtherExpenses type="admin" /> }


                    </div>
                </div>
            </div>
        </div>
    )
};

export default AdminAddAfeRequest;