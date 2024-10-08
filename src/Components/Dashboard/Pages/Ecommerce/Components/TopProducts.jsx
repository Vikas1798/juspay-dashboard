import React from 'react'
import { productsTableData, productsTableHead, totalSales } from '../../../../../Database/db'
import { Dot } from 'lucide-react';
import { useSelector } from 'react-redux';
import { donutChart, donutChartDark } from '../../../../../assets';
// import Chart from './Chart';

const TopProducts = () => {
    const appTheme = useSelector(d => d?.theme?.mode ?? false);

    return (
        <main className='grid gap-5 grid-cols-1 md:grid-cols-4'>
            <div className='md:col-span-3 bg-[#F7F9FB] dark:bg-[#FFFFFF1A] rounded-2xl p-5 h-fit'>
                <h6 className='text-sm font-semibold dark:text-[#FFFFFF]'>Top Selling Products</h6>
                <table className="table-auto mt-2 w-full">
                    <thead>
                        <tr className='border-b-[1px] p-3 dark:border-b-[#FFFFFF33]'>
                            {
                                productsTableHead?.map((d, i) => (
                                    <th key={i} className='text-start font-normal text-[#1C1C1C66] dark:text-[#FFFFFF66] text-xs py-2'>{d.label}</th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            productsTableData?.map((d, i) => (
                                <tr key={i}>
                                    <td className='text-start font-normal text-[#1C1C1C] dark:text-[#FFFFFF] text-xs py-2'>{d?.name}</td>
                                    <td className='text-start font-normal text-[#1C1C1C] dark:text-[#FFFFFF]  text-xs py-2'>{d?.price}</td>
                                    <td className='text-start font-normal text-[#1C1C1C] dark:text-[#FFFFFF]  text-xs py-2'>{d?.quantity}</td>
                                    <td className='text-start font-normal text-[#1C1C1C] dark:text-[#FFFFFF]  text-xs py-2'>{d?.amount}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div className='md:col-span-1 bg-[#F7F9FB] rounded-2xl p-5 h-fit dark:bg-[#FFFFFF1A]'>
                <h6 className='text-sm font-semibold dark:text-[#FFFFFF]'>Total Sales</h6>
                <div className='mt-2'>
                    {/* Donut Chart svg image */}
                    <div className='w-[120px] h-[120px]  rounded-full mx-auto my-2'>
                        <img src={appTheme ? donutChartDark : donutChart} alt="" className='w-full h-full object-cover' />
                    </div>
                    {/* Donut Chart package */}
                    {/* <Chart /> */}
                    {
                        totalSales?.map((d, i) => (
                            <div className='flex justify-between items-center py-2 last:pb-0' key={i}>
                                <div className='flex items-center'>
                                    <Dot size={14} strokeWidth={6} className={`${d?.color}`} />
                                    <p className='text-xs font-normal text-[#1C1C1C] dark:text-[#FFFFFF]'>{d?.by}</p>
                                </div>
                                <p className='text-xs font-normal text-[#1C1C1C] dark:text-[#FFFFFF]'>{d?.price}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </main>
    )
}

export default TopProducts;