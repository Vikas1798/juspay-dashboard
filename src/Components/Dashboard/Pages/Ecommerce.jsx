import React from 'react'
import { stats } from '../../../Database/db'
import { TrendingDown, TrendingUp } from 'lucide-react'

const Ecommerce = () => {
    return (
        <>
            <h2 className='text-sm font-semibold text-[#1C1C1C]'>eCommerce</h2>
            <section className='grid grid-cols-2 gap-4 mt-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    {
                        stats?.map((d, i) => (
                            <div className={`${d?.bg} rounded-2xl p-5`} key={i}>
                                <h6 className='text-sm font-semibold text-[#1C1C1C] mb-1'>{d?.name}</h6>
                                <div className='flex items-center justify-between'>
                                    <h6 className='text-2xl font-semibold text-[#1C1C1C]'>{d?.revenue}</h6>
                                    <div className='flex items-center gap-2'>
                                        <p className='text-xs font-normal text-[#1C1C1C]'>{d?.profitLoss}</p>
                                        {
                                            d?.status ?
                                                <TrendingUp size={14} strokeWidth={1.5} className="text-[#1C1C1C]" /> :
                                                <TrendingDown size={14} strokeWidth={1.5} className="text-[#1C1C1C]" />
                                        }
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div>Right Content</div>
            </section>
        </>
    )
}

export default Ecommerce