import React from 'react';
import Header from './Components/Header';
import Ecommerce from './Pages/Ecommerce';

const Dashboard = () => {

    return (
        <div className='col-span-8'>
            <Header />
            <div className='p-4'>
                <Ecommerce />
            </div>
        </div>
    )
}

export default Dashboard