import React from 'react'
import Stats from './Components/Stats';
import RevenueStats from './Components/RevenueStats';
import TopProducts from './Components/TopProducts';


const Ecommerce = () => {
    return (
        <div className='grid gap-y-5'>
            <h2 className='text-sm font-semibold text-[#1C1C1C]'>eCommerce</h2>
            <Stats />
            <RevenueStats />
            <TopProducts />
        </div>
    )
}

export default Ecommerce;