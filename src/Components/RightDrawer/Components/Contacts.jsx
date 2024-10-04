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
                    <div className='flex items-center mb-2 last:mb-0' key={i}>
                        <img src="https://framerusercontent.com/images/GCFgMvkEdGKHPs31ezbHUFXr1A.png" alt="" className='w-[24px] h-[24px] rounded-full' />
                        <MessageTime message={d?.name} time={d?.time} />
                    </div>
                ))
            }
        </div>
    )
}

export default Contacts;