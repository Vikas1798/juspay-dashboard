import React, { useState } from 'react'
import { ShieldEllipsis, PanelsTopLeft, FolderOpenDot, BookOpenText, ChevronRight, ListOrdered } from 'lucide-react'

const Dashboard = () => {
    const [state, setState] = useState({
        currentSegment: 'default'
    })

    let list = [
        {
            name: 'Default',
            icon: ShieldEllipsis,
            slug: 'default'
        },
        {
            name: 'Orders',
            icon: ListOrdered,
            slug: 'orders'
        },
        {
            name: 'eCommerce',
            icon: PanelsTopLeft,
            slug: 'ecommerce'

        },
        {
            name: 'Projects',
            icon: FolderOpenDot,
            slug: 'projects'

        },
        {
            name: 'Online Courses',
            icon: BookOpenText,
            slug: 'onlineCourses'
        }
    ]

    const handleData = (key) => {
        setState((prev) => {
            return {
                ...prev,
                currentSegment: key
            }
        })
    }

    return (
        <div>
            <h2 className='text-[#1C1C1C66] text-sm font-normal px-2 mb-1 dark:text-[#FFFFFF66]'>Dashboards</h2>
            <>
                {
                    list?.map((d, i) => (
                        <div key={i} onMouseEnter={() => handleData(d.slug)} className={`${d?.slug === state?.currentSegment ? 'bg-[#1C1C1C0D] dark:bg-[#FFFFFF1A]' : ''} relative flex items-center py-[2px] rounded-[8px] cursor-pointer mb-1`}>
                            {
                                d?.slug === state?.currentSegment && <div className='h-[14px] w-[3px] absolute left-0 bg-[#1C1C1C] rounded-[1px] dark:bg-[#C6C7F8]'></div>
                            }
                            <div className='flex items-center pl-4'>
                                <ChevronRight size={14} strokeWidth={1.5} className={`text-[#1C1C1C33] dark:text-[#FFFFFF33] ${d?.slug === state?.currentSegment ? 'invisible' : ''}`} />
                                <d.icon size={16} strokeWidth={1.5} className="text-[#1C1C1C] dark:text-[#FFFFFF]" />
                                <p className='text-sm font-normal pl-1 dark:text-[#FFFFFF]'>{d?.name}</p>
                            </div>
                        </div>
                    ))
                }
            </>
        </div>
    )
}

export default Dashboard;