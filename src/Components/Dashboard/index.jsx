import React from 'react';
import Header from './Components/Header';

import Order from './Pages/Order';
import Ecommerce from './Pages/Ecommerce';

const Dashboard = () => {

    return (
        <div className='col-span-8 border-x-[1px] border-x-[#1C1C1C1A] dark:border-x-[#FFFFFF33]'>
            <Header />
            <div className='p-4'>
                <Ecommerce />
                {/* <Order /> */}
            </div>
        </div>
    )
}

export default Dashboard