import React from 'react'

const Breadcrumb = (props) => {
    return (
        <div className='flex items-center gap-3'>
            <p className='text-sm text-[#1C1C1C66] font-normal'>Dashboards</p>
            <p className='text-sm text-[#1C1C1C66] font-normal'>/</p>
            <p className='text-sm text-[#1C1C1C] font-normal'>{props.segment}</p>
        </div>
    )
}

export default Breadcrumb;