import React, { useState } from 'react'
import { orderListData, orderListHead } from '../../../../Database/db'
import { Calendar, ClipboardList, Dot, Ellipsis, Square, SquareCheck } from 'lucide-react'
import { useSelector } from 'react-redux';

const OrderTable = () => {
    const appTheme = useSelector(d => d?.theme?.mode ?? false);

    const [state, setState] = useState({
        checkedData: ['#CM9801', '#CM9803', '#CM9804'],
        checkAll: false,
        page: 1,
        orderName: "",
    })

    let status = {
        0: 'Rejected',
        1: 'Complete',
        2: 'Approved',
        3: 'In Progress',
        4: 'Pending'
    }

    // order status color enums
    let statusColor = {
        0: 'text-[#1C1C1C66] dark:text-[#FFFFFF66]',
        1: 'text-[#4AA785] ',
        2: 'text-[#FFC555]',
        3: 'text-[#8A8CD9]',
        4: 'text-[#59A8D4]'
    }


    // select/ un-select order list
    const handleCheckData = (id) => {
        let { checkedData } = state;
        if (checkedData.includes(id)) {
            checkedData = checkedData?.filter(d => d !== id);
        } else {
            checkedData.push(id)
        }
        setState((prev) => {
            return {
                ...prev,
                checkedData: checkedData
            }
        })
    }

    const handleCheckAllData = (key) => {
        let { checkedData } = state;
        let data = []
        for (let i = 0; i < orderListData.length; i++) {
            if (!checkedData.includes(orderListData[i]._id)) {
                data.push(orderListData[i]._id)
            }
        }
        setState((prev) => {
            return {
                ...prev,
                checkedData: key ? [...prev.checkedData, ...data] : [],
                checkAll: key
            }
        })
    }
    let { checkedData, page, checkAll } = state;

    return (
        <div className="relative overflow-x-auto sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead>
                    <tr className='border-b-[1px] p-3  dark:border-b-[#FFFFFF1A]'>
                        <th scope="col" className="px-2 py-2  text-start font-normal text-[#1C1C1C66] dark:text-[#FFFFFF66] text-xs" >
                            {
                                checkAll ?
                                    <SquareCheck fill={appTheme ? '#C6C7F8' : '#1C1C1C'} onClick={() => handleCheckAllData(false)} size={14} strokeWidth={1} className='text-[#FFFFFF] dark:text-[#1C1C1C] dark:text-[#FFFFFF66] cursor-pointer' />
                                    :
                                    <Square onClick={() => handleCheckAllData(true)} size={14} strokeWidth={1} className='text-[#1C1C1C33] dark:text-[#FFFFFF66] cursor-pointer' />
                            }
                        </th>
                        {
                            orderListHead?.map((d, i) => (
                                <th key={i} scope="col" className={`${i === 0 ? ' pr-6' : ' px-6'} py-2  text-start font-normal text-[#1C1C1C66] dark:text-[#FFFFFF66] text-xs`}>
                                    {d?.label}
                                </th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        orderListData?.map((d, i) => (
                            <tr key={i} className="border-b-[1px] border-b-[#F7F9FB] dark:border-b-[#FFFFFF0D] hover:bg-[#F7F9FB] dark:hover:bg-[#FFFFFF0D] group">
                                <th scope="col" className="px-2 py-2  text-start font-normal text-[#1C1C1C66] dark:text-[#FFFFFF66] text-xs" >
                                    {
                                        checkedData.includes(d._id) ?
                                            <SquareCheck onClick={() => handleCheckData(d._id)} fill={appTheme ? '#C6C7F8' : '#1C1C1C'} size={14} strokeWidth={1} className='text-[#FFFFFF] dark:text-[#1C1C1C]' /> :
                                            <Square onClick={() => handleCheckData(d._id)} size={14} strokeWidth={1} className='text-[#1C1C1C33] dark:text-[#FFFFFF66]' />
                                    }
                                </th>
                                <td className="pr-6 py-2 text-start font-normal text-[#1C1C1C] dark:text-[#FFFFFF] text-xs">
                                    {d?._id}
                                </td>
                                <td className="px-6 py-2 text-start font-normal text-[#1C1C1C] dark:text-[#FFFFFF] text-xs flex items-center gap-1">
                                    <img src={d?.image} alt="" className='w-[24px] h-[24px] rounded-full object-cover' />
                                    <p className='text-xs  whitespace-nowrap'>{d?.name}</p>
                                </td>
                                <td className="px-6 py-2 text-start font-normal text-[#1C1C1C] dark:text-[#FFFFFF] text-xs whitespace-nowrap">
                                    {d?.project}
                                </td>
                                <td className="px-6 py-2 text-start font-normal text-[#1C1C1C] dark:text-[#FFFFFF] text-xs relative whitespace-nowrap">
                                    {d?.address}
                                    {/* <ClipboardList size={14} strokeWidth={1.5} className='text-[#1C1C1C] dark:text-[#FFFFFF] invisible group-hover:visible cursor-pointer absolute right-0' /> */}
                                </td>
                                <td className="px-6 py-2 text-start font-normal text-[#1C1C1C] dark:text-[#FFFFFF] text-xs relative whitespace-nowrap">
                                    {/* <Calendar size={14} strokeWidth={1.5} className='text-[#1C1C1C] dark:text-[#FFFFFF]  cursor-pointer absolute left-0' /> */}
                                    {d?.date}
                                </td>
                                <td className={`px-6 py-2 text-start font-normal text-xs ${statusColor[d?.status] || 'text-[#1C1C1C]'} whitespace-nowrap`}>
                                    <div className='flex items-center gap-1'>
                                        <Dot size={14} strokeWidth={6} />
                                        <p className='text-xs whitespace-nowrap'>{status[d?.status]}</p>
                                    </div>
                                    {/* <Dot size={14} strokeWidth={6} />
                                    {status[d?.status]} */}
                                    {/* <Ellipsis size={24} strokeWidth={1.5} className="text-[#1C1C1C] dark:text-[#FFFFFF] mx-2 invisible group-hover:visible p-1 rounded-md cursor-pointer hover:bg-[#1C1C1C0D] dark:hover:bg-[#FFFFFF1A] absolute right-0" /> */}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default OrderTable;