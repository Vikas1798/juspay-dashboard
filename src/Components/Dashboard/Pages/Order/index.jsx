import React, { useState } from 'react';
import { ArrowDownUp, ClipboardList, Dot, Ellipsis, Plus, Search, Slack, Square, SquareCheck, Text } from 'lucide-react';
import { orderListData, orderListHead } from '../../../../Database/db';

const Order = () => {
    const [state, setState] = useState({
        checkedData: ['#CM9801', '#CM9803', '#CM9804']
    })

    let status = {
        0: 'Rejected',
        1: 'Complete',
        2: 'Approved',
        3: 'In Progress',
        4: 'Pending'
    }
    let statusColor = {
        0: 'text-[#1C1C1C66]',
        1: 'text-[#4AA785]',
        2: 'text-[#FFC555]',
        3: 'text-[#8A8CD9]',
        4: 'text-[#59A8D4]'
    }

    let { checkedData } = state;
    return (
        <main className='grid gap-y-5'>
            <h2 className='text-sm font-semibold text-[#1C1C1C]'>Order List</h2>
            <div className='bg-[#F7F9FB] flex items-center justify-between p-2 rounded-lg'>
                <div className='flex items-center gap-4'>
                    <Plus size={24} strokeWidth={1.5} className="text-[#1C1C1C] p-1 rounded-md cursor-pointer hover:bg-[#1C1C1C0D]" />
                    <Text size={24} strokeWidth={1.5} className="text-[#1C1C1C] p-1 rounded-md cursor-pointer hover:bg-[#1C1C1C0D]" />
                    <ArrowDownUp size={24} strokeWidth={1.5} className="text-[#1C1C1C] p-1 rounded-md cursor-pointer hover:bg-[#1C1C1C0D]" />
                </div>
                <div className='flex items-center bg-[#FFFFFF] gap-1 px-2 py-1 rounded-lg border-[1px] border-[#1C1C1C1A]'>
                    <Search size={14} strokeWidth={2} className="text-[#1C1C1C33]" />
                    <input
                        type="text"
                        value=""
                        placeholder='Search'
                        onChange={(e) => updateInput(e)}
                        className='text-[#1C1C1C33] bg-transparent  border-none  outline-none   w-[100px]  text-xs opacity-[0.6]'
                    />
                </div>
            </div>
            <table className="table-auto w-full">
                <thead>
                    <tr className='border-b-[1px] p-3'>
                        <th className='text-start font-normal text-[#1C1C1C66] text-xs py-2 flex items-center justify-center '>
                            <Square size={14} strokeWidth={1} className='text-[#1C1C1C33]' />
                        </th>
                        {
                            orderListHead?.map((d, i) => (
                                <th key={i} className='text-start font-normal text-[#1C1C1C66] text-xs py-2'>{d.label}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        orderListData?.map((d, i) => (
                            <tr key={i} className='border-b-[1px] border-[#F7F9FB] hover:bg-[#F7F9FB] group'>
                                <td className='text-start flex items-center justify-center font-normal text-[#1C1C1C] text-xs py-2 cursor-pointer group-hover:rounded-l-lg'>
                                    {
                                        checkedData.includes(d._id) ?
                                            <SquareCheck size={14} strokeWidth={1} className='text-[#1C1C1C] ' /> :
                                            <Square size={14} strokeWidth={1} className='text-[#1C1C1C33]' />
                                    }
                                </td>
                                <td className='text-start font-normal text-[#1C1C1C] text-xs py-2'>{d?._id}</td>
                                <td className='text-start font-normal text-[#1C1C1C] py-2 flex items-center gap-1'>
                                    <img src={d?.image} alt="" className='w-[24px] h-[24px] rounded-full object-cover' />
                                    <p className='text-xs '>{d?.name}</p>
                                </td>
                                <td className='text-start font-normal text-[#1C1C1C] text-xs py-2'>{d?.project}</td>
                                <td className='text-start font-normal text-[#1C1C1C] text-xs py-2 flex items-center gap-1'>
                                    {d?.address}
                                    <ClipboardList size={14} strokeWidth={1.5} className='text-[#1C1C1C] invisible group-hover:visible cursor-pointer' />
                                </td>
                                <td className='text-start font-normal text-[#1C1C1C] text-xs py-2'>{d?.date}</td>
                                <td className={`flex items-center justify-between  text-start font-normal py-2 group-hover:rounded-r-lg ${statusColor[d?.status] || 'text-[#1C1C1C]'}`} >
                                    <div className='flex items-center gap-1'>
                                        <Dot size={14} strokeWidth={6} />
                                        <p className='text-xs'>{status[d?.status]}</p>
                                    </div>
                                    <Ellipsis size={24} strokeWidth={1.5} className="text-[#1C1C1C] mx-2 invisible group-hover:visible p-1 rounded-md cursor-pointer hover:bg-[#1C1C1C0D]" />
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </main>
    )
}

export default Order;