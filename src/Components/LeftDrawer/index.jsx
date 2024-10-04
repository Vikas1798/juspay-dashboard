import React from 'react'
import Dashboard from './Components/Dashboard'
import MenuPage from './Components/MenuPage'

const LeftDrawer = () => {

    let tabs = [
        {
            name: 'Favorites',
            slug: 'favorites',
            color: 'text-[#1C1C1C66]'
        },
        {
            name: 'Recently',
            slug: 'recently',
            color: 'text-[#1C1C1C33]'
        },
    ]

    let segments = [
        {
            name: 'Overview',
        },
        {
            name: 'Projects',
        },
    ]

    return (
        <section className='col-span-2 p-4 grid gap-y-4 border-r-[1px] border-r-[#1C1C1C1A]'>
            <figure className='flex items-center'>
                <img src="https://framerusercontent.com/images/GCFgMvkEdGKHPs31ezbHUFXr1A.png" alt="" className='w-[24px] h-[24px] rounded-full' />
                <h1 className='text-sm font-normal ps-2'>ByeWind</h1>
            </figure>
            <div className=''>
                <div className='flex items-center gap-2'>
                    {
                        tabs?.map((d, i) => (
                            <p key={i} className={`flex justify-center text-sm font-normal ${d.color} cursor-pointer hover:bg-[#1C1C1C0D] rounded-lg p-1 px-2`}>{d.name}</p>
                        ))
                    }
                </div>
                <div className=''>
                    {
                        segments?.map((d, i) => (
                            <div key={i} className='flex items-center p-1 px-2  cursor-pointer'>
                                <div className='w-[5px] h-[5px] bg-[#1C1C1C33] rounded-full'></div>
                                <p className='flex justify-center text-sm font-normal  text-[#1C1C1C] pl-2'>
                                    {d.name}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <Dashboard />
            <MenuPage />
        </section>
    )
}

export default LeftDrawer;
