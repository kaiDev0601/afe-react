import React, { useState } from 'react';
import classnames from 'classnames';
import RecordsShow from './common/RecordsShow';
import UploadFromDB from './common/UploadFromDB';
import UploadCSV from './common/UploadCSV';

const ProjectType = () => {
    const [ requestTabState, setTabState ] = useState({
        afeRequestStep: 0
    });

    const {afeRequestStep} = requestTabState;

    const onClick = (e, nextStep) => {
        setTabState({afeRequestStep: nextStep});
    };


    return (
        <div className='white-container h-shadow'>
            <div className='row'>
                <div className='col-sm-12 mb-2'>
                    <a href={"#"} className={classnames('sp-show-tab', {'active' : afeRequestStep === 0, 'inactive' : afeRequestStep !== 0})} onClick={e => onClick(e, 0)}>Records</a>
                    <a href={"#"} className={classnames('sp-show-tab', {'active' : afeRequestStep === 1, 'inactive' : afeRequestStep !== 0})} onClick={e => onClick(e, 1)}>Upload from Database</a>
                    <a href={"#"} className={classnames('sp-show-tab', {'active' : afeRequestStep === 2, 'inactive' : afeRequestStep !== 0})} onClick={e => onClick(e, 2)}>Upload CSV</a>
                </div>
            </div>
            
            { afeRequestStep === 0 && <RecordsShow />}
            { afeRequestStep === 1 && <UploadFromDB />}
            { afeRequestStep === 2 && <UploadCSV />}
        </div>
    )
};

export default ProjectType;