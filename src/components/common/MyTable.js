import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import { BsFillCircleFill } from 'react-icons/bs';

const MyTable = ({
    header,
    data,
    curPage,
    totalPage,
    columCount
}) => {
    return (
        <div>
            <div className='row'>
                <Table className='cus-table' hover>
                    <thead>
                        <tr>
                            {header.map(head => <th key={Math.random()}>{head}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        { data.map(row => (
                            <tr key={Math.random()}> 
                                {row.map(col => (<td key={Math.random()}>{col}</td>))}
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
            <div className='row'>
                <div className='col-sm-6'>
                    <div className='afe-table-page-state'>
                        <p>Showing {curPage} of {totalPage}({columCount})</p>
                    </div>
                    <div className='afe-table-global'>
                        <span><BsFillCircleFill color='green' className='mx-1'/>Approved</span>
                        <span><BsFillCircleFill color='red' className='mx-1'/>Rejected</span>
                        <span><BsFillCircleFill color='blue' className='mx-1'/>Cancelled</span>
                        <span><BsFillCircleFill color='#FFB547' className='mx-1'/>On-Hold</span>
                    </div>
                </div>
                <div className='col-sm-6 page-navigator'>
                    <Button className="" variant="light">Previous</Button>{' '}
                    <Button className="" variant="info">1</Button>{' '}
                    <Button className="" variant="light">2</Button>{' '}
                    <Button className="" variant="light">Next</Button>{' '}
                </div>
            </div>
        </div>
    );
};



export default MyTable;