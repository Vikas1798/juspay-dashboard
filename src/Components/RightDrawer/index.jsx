import React from 'react'
import Notification from './Components/Notification'
import Activities from './Components/Activities'
import Contacts from './Components/Contacts'

const RightDrawer = () => {
    return (
        <div className='col-span-2 p-5 grid gap-y-4 border-l-[1px] border-l-[#1C1C1C1A] h-auto'>
            <Notification />
            <Activities />
            <Contacts />
        </div>
    )
}

export default RightDrawer