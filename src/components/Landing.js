import React from 'react';

import Navbar from './layout/Navbar';
import Header from './layout/Header';
const Landing = () => {
    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <Navbar />
                <div className="col-md-9 col-xl-10 page-container">
                <Header />
                    <div>
                        Water
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Landing;