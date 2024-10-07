import React, { useState } from 'react';
import { ArrowDownUp, ChevronLeft, ChevronRight, ClipboardList, Dot, Ellipsis, Plus, Search, Slack, Square, SquareCheck, Text } from 'lucide-react';
import { orderListData, orderListHead } from '../../../../Database/db';
import { useSelector } from 'react-redux';

const Order = () => {
    const appTheme = useSelector(d => d?.theme?.mode ?? false);

    // let's assume we have 5 page orders lists
    let allOrderPages = [1, 2, 3, 4, 5];

    const [state, setState] = useState({
        checkedData: ['#CM9801', '#CM9803', '#CM9804'],
        checkAll: false,
        page: 1,
        orderName: "",
    })

    // order status enums
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

    //get paginated data by clicking prev and next button
    const getData = (e, type) => {
        e.stopPropagation();
        if (type === 'next') {
            setState((prev) => {
                return {
                    ...prev,
                    page: prev.page + 1
                }
            })
        }
        if (type === 'prev') {
            setState((prev) => {
                return {
                    ...prev,
                    page: prev.page - 1
                }
            })
        }
    }

    //get particular page order list
    const handlePage = (e, d) => {
        e.stopPropagation();

        setState((prev) => {
            return {
                ...prev,
                page: d
            }
        })
    }

    //filter order by name - on search
    const handleSearch = (e) => {
        setState((prev) => {
            return {
                ...prev,
                orderName: e.target.value
            }
        })
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
        <main className='grid gap-y-5'>
            <h2 className='text-sm font-semibold text-[#1C1C1C] dark:text-[#FFFFFF]'>Order List</h2>
            <div className='bg-[#F7F9FB] dark:bg-[#FFFFFF1A] flex items-center justify-between p-2 rounded-lg'>
                <div className='flex items-center gap-4'>
                    <Plus size={24} strokeWidth={1.5} className="text-[#1C1C1C] dark:text-[#FFFFFF] p-1 rounded-md cursor-pointer hover:bg-[#1C1C1C0D] dark:hover:bg-[#FFFFFF1A]" />
                    <Text size={24} strokeWidth={1.5} className="text-[#1C1C1C] dark:text-[#FFFFFF] p-1 rounded-md cursor-pointer hover:bg-[#1C1C1C0D] dark:hover:bg-[#FFFFFF1A]" />
                    <ArrowDownUp size={24} strokeWidth={1.5} className="text-[#1C1C1C] dark:text-[#FFFFFF] p-1 rounded-md cursor-pointer hover:bg-[#1C1C1C0D] dark:hover:bg-[#FFFFFF1A]" />
                </div>
                <div className='flex items-center bg-[#FFFFFF] dark:bg-[#1C1C1C66] gap-1 px-2 py-1 rounded-lg border-[1px] border-[#1C1C1C1A] dark:border-[#FFFFFF33]'>
                    <Search size={14} strokeWidth={2} className="text-[#1C1C1C33] dark:text-[#FFFFFF33]" />
                    <input
                        type="text"
                        value={state.orderName}
                        placeholder='Search'
                        onChange={(e) => handleSearch(e)}
                        className='text-[#1C1C1C33] dark:text-[#FFFFFF33] bg-transparent  border-none  outline-none   w-[100px]  text-xs opacity-[0.6]'
                    />
                </div>
            </div>
            {/* order list table */}
            <table className="table-auto w-full">
                <thead>
                    <tr className='border-b-[1px] p-3'>
                        <th className='text-start font-normal text-[#1C1C1C66] dark:text-[#FFFFFF66] text-xs py-2 flex items-center justify-center '>
                            {
                                checkAll ?
                                    <SquareCheck fill={appTheme ? '#C6C7F8' : '#1C1C1C'} onClick={() => handleCheckAllData(false)} size={14} strokeWidth={1} className='text-[#FFFFFF] dark:text-[#1C1C1C] dark:text-[#FFFFFF66] cursor-pointer' />
                                    :
                                    <Square onClick={() => handleCheckAllData(true)} size={14} strokeWidth={1} className='text-[#1C1C1C33] dark:text-[#FFFFFF66] cursor-pointer' />
                            }
                        </th>
                        {
                            orderListHead?.map((d, i) => (
                                <th key={i} className='text-start font-normal text-[#1C1C1C66] dark:text-[#FFFFFF66] text-xs py-2'>{d.label}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        orderListData?.map((d, i) => (
                            <tr key={i} className='border-b-[1px] border-[#F7F9FB] dark:border-[#FFFFFF0D] hover:bg-[#F7F9FB] dark:hover:bg-[#FFFFFF0D] group'>
                                <td className='text-start flex items-center justify-center font-normal text-[#1C1C1C] dark:text-[#FFFFFF] text-xs py-2 cursor-pointer group-hover:rounded-l-lg'>
                                    {
                                        checkedData.includes(d._id) ?
                                            <SquareCheck onClick={() => handleCheckData(d._id)} fill={appTheme ? '#C6C7F8' : '#1C1C1C'} size={14} strokeWidth={1} className='text-[#FFFFFF] dark:text-[#1C1C1C]' /> :
                                            <Square onClick={() => handleCheckData(d._id)} size={14} strokeWidth={1} className='text-[#1C1C1C33] dark:text-[#FFFFFF66]' />
                                    }
                                </td>
                                <td className='text-start font-normal text-[#1C1C1C] dark:text-[#FFFFFF] py-2'>
                                    <p className='text-xs '>{d?._id}</p>
                                </td>
                                <td className='text-start font-normal text-[#1C1C1C] dark:text-[#FFFFFF] py-2 flex items-center gap-1'>
                                    <img src={d?.image} alt="" className='w-[24px] h-[24px] rounded-full object-cover' />
                                    <p className='text-xs '>{d?.name}</p>
                                </td>
                                <td className='text-start font-normal text-[#1C1C1C] dark:text-[#FFFFFF] text-xs py-2'>{d?.project}</td>
                                <td className='text-start font-normal text-[#1C1C1C] dark:text-[#FFFFFF] text-xs py-2 flex items-center gap-1'>
                                    {d?.address}
                                    <ClipboardList size={14} strokeWidth={1.5} className='text-[#1C1C1C] dark:text-[#FFFFFF] invisible group-hover:visible cursor-pointer' />
                                </td>
                                <td className='text-start font-normal text-[#1C1C1C] dark:text-[#FFFFFF] text-xs py-2'>
                                    <p className='text-xs '>{d?.date}</p>
                                </td>
                                <td className={`flex items-center justify-between  text-start font-normal py-2 group-hover:rounded-r-lg ${statusColor[d?.status] || 'text-[#1C1C1C]'}`} >
                                    <div className='flex items-center gap-1'>
                                        <Dot size={14} strokeWidth={6} />
                                        <p className='text-xs'>{status[d?.status]}</p>
                                    </div>
                                    <Ellipsis size={24} strokeWidth={1.5} className="text-[#1C1C1C] dark:text-[#FFFFFF] mx-2 invisible group-hover:visible p-1 rounded-md cursor-pointer hover:bg-[#1C1C1C0D] dark:hover:bg-[#FFFFFF1A]" />
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            {/* pagination container */}
            <div className='flex items-center gap-2 justify-end'>
                <ChevronLeft onClick={(e) => page !== 1 && getData(e, 'prev')} size={24} strokeWidth={1.5} className={`text-[#1C1C1C]  p-1 rounded-md  ${page === 1 ? 'cursor-not-allowed' : ' cursor-pointer hover:bg-[#1C1C1C0D]'} `} />
                {
                    allOrderPages.map((d, i) => (
                        <p onClick={(e) => handlePage(e, d)} key={i} className={`${page === d ? ' bg-[#1C1C1C0D]' : ''} cursor-pointer hover:bg-[#1C1C1C0D] text-[#1C1C1C] text-sm font-normal w-[24px] h-[24px] rounded-md flex items-center justify-center`}>{d}</p>
                    ))
                }
                <ChevronRight onClick={(e) => allOrderPages.length !== page && getData(e, 'next')} size={24} strokeWidth={1.5} className={`text-[#1C1C1C]  p-1 rounded-md   ${allOrderPages.length === page ? 'cursor-not-allowed' : ' cursor-pointer hover:bg-[#1C1C1C0D]'} `} />
            </div>
        </main>
    )
}

export default Order;