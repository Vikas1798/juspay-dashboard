import React from 'react';
import { useSelector } from 'react-redux';
import { areaChart, areaChartDark } from '../../../../../../../assets';

const RevenueChart = () => {
    const appTheme = useSelector(d => d?.theme?.mode ?? false);

    return (
        <>
            <div className='md:col-span-3 bg-[#F7F9FB] dark:bg-[#FFFFFF1A] rounded-2xl p-5'>
                <h6 className='text-sm font-semibold dark:text-[#FFFFFF]'>Revenue</h6>
                <figure className='w-full h-full '>
                    <img src={appTheme ? areaChartDark : areaChart} alt="" className='w-full my-3' />
                </figure>
            </div>
        </>
    );
};

export default RevenueChart;
