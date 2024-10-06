import React from 'react'

const Breadcrumb = (props) => {
    return (
        <div className='flex items-center gap-3'>
            <p className='text-sm text-[#1C1C1C66] font-normal dark:text-[#FFFFFF66]'>Dashboards</p>
            <p className='text-sm text-[#1C1C1C66] font-normal dark:text-[#FFFFFF33]'>/</p>
            <p className='text-sm text-[#1C1C1C] font-normal dark:text-[#FFFFFF]'>{props.segment}</p>
        </div>
    )
}

export default Breadcrumb;