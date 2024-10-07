import React from 'react'
import { stats } from '../../../../../Database/db'
import { TrendingDown, TrendingUp } from 'lucide-react'

const Stats = () => {
    return (
        <section className='grid grid-cols-1 xl:grid-cols-2 gap-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {
                    stats?.map((d, i) => (
                        <div className={`${d?.bg} rounded-2xl p-5 `} key={i}>
                            <h6 className={`text-sm font-semibold ${d?.color} mb-1 hover:bg-[#1C1C1C0D] rounded-md`}>{d?.name}</h6>
                            <div className='transition ease-in-out delay-150 flex items-center justify-between hover:bg-[#1C1C1C0D] rounded-md hover:flex-row-reverse hover:delay-300 '>
                                <h6 className={`text-2xl font-semibold ${d?.color}`}>{d?.revenue}</h6>
                                <div className='flex items-center gap-2'>
                                    <p className={`text-xs font-normal ${d?.color}`}>{d?.profitLoss}</p>
                                    {
                                        d?.status ?
                                            <TrendingUp size={14} strokeWidth={1.5} className={`${d?.color}`} /> :
                                            <TrendingDown size={14} strokeWidth={1.5} className={`${d?.color}`} />
                                    }
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='bg-[#F7F9FB] dark:bg-[#FFFFFF1A] rounded-2xl p-5'>
                <h6 className='text-sm font-semibold dark:text-[#FFFFFF]'>Projections vs Actuals</h6>
            </div>
        </section>
    )
}

export default Stats