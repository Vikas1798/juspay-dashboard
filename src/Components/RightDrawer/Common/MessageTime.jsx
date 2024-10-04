import React from 'react'

const MessageTime = ({ message, time }) => {
    return (
        <div className='text-start pl-2'>
            <p className='text-sm font-normal text-[#1C1C1C] line-clamp-1'>{message}</p>
            {
                time &&
                <p className='text-xs font-normal text-[#1C1C1C66] line-clamp-1'>{time}</p>
            }
        </div>
    )
}

export default MessageTime