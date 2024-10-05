import React from 'react';
import Header from './Components/Header';
import Ecommerce from './Pages/Ecommerce';

const Dashboard = () => {

    return (
        <div className='col-span-8 border-x-[1px] border-r-[#1C1C1C1A]'>
            <Header />
            <div className='p-4'>
                <Ecommerce />
            </div>
        </div>
    )
}

export default Dashboard