import React from 'react';
import Header from '../Common/Header';
import { contacts } from '../../../Database/db';
import MessageTime from '../Common/MessageTime';

const Contacts = () => {
    return (
        <div className='text-start'>
            <Header label='Contacts' />
            {
                contacts?.map((d, i) => (
                    <div className='grid grid-cols-6 gap-2 mb-3 last:mb-0 items-start' key={i}>
                        <img src={d?.image} alt="" className='w-[24px] h-[24px] rounded-full object-cover' />
                        <MessageTime message={d?.name} time={d?.time} />
                    </div>
                ))
            }
        </div>
    )
}

export default Contacts;