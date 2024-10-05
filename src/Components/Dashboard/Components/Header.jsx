import React, { useEffect, useState } from 'react'
import { AppWindow, Bell, Moon, Search, Slack, Star, Sun, TimerReset } from 'lucide-react';
import Breadcrumb from './Breadcrumb';

const Header = () => {
    const [state, setState] = useState({
        searchParam: "",
        darkMode: localStorage.getItem('theme') === 'dark' || false
    })

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [state.darkMode]);

    const updateInput = (e) => {
        setState((prev) => {
            return {
                ...prev,
                searchParam: e.target.value
            }
        })
    }

    const toggleMode = () => {
        setState((prev) => {
            return {
                ...prev,
                darkMode: !prev.darkMode
            }
        })
    }

    const { darkMode } = state;
    console.log('darkMode', darkMode)
    return (
        <div className='flex items-center justify-between border-b-[1px] border-r-[#1C1C1C1A] p-4 dark:bg-red-400'>
            <div className='flex items-center gap-4'>
                <AppWindow size={24} strokeWidth={1.5} className="text-[#1C1C1C] p-1 rounded-md cursor-pointer hover:bg-[#1C1C1C0D]" />
                <Star size={24} strokeWidth={1.5} className="text-[#1C1C1C] p-1 rounded-md cursor-pointer hover:bg-[#1C1C1C0D]" />
                <Breadcrumb segment="Default" />
            </div>
            <div className='flex items-center gap-4'>
                <div className='flex items-center bg-[#1C1C1C0D] gap-1 px-2 py-1 rounded-lg'>
                    <Search size={14} strokeWidth={2} className="text-[#1C1C1C33]" />
                    <input
                        type="text"
                        value={state.searchParam}
                        placeholder='Search'
                        onChange={(e) => updateInput(e)}
                        className='text-[#1C1C1C33] border-none outline-none bg-transparent  w-[100px]  text-xs'
                    />
                    <Slack size={14} strokeWidth={2} className="text-[#1C1C1C33]" />
                </div>
                {
                    darkMode ?
                        <Moon onClick={toggleMode} size={24} strokeWidth={1.5} className="text-[#1C1C1C] p-1 rounded-md cursor-pointer hover:bg-[#1C1C1C0D]" />
                        :
                        <Sun onClick={toggleMode} size={24} strokeWidth={1.5} className="text-[#1C1C1C] p-1 rounded-md cursor-pointer hover:bg-[#1C1C1C0D]" />
                }
                <TimerReset size={24} strokeWidth={1.5} className="text-[#1C1C1C] p-1 rounded-md cursor-pointer hover:bg-[#1C1C1C0D]" />
                <Bell size={24} strokeWidth={1.5} className="text-[#1C1C1C] p-1 rounded-md cursor-pointer hover:bg-[#1C1C1C0D]" />
                <AppWindow size={24} strokeWidth={1.5} className="text-[#1C1C1C] p-1 rounded-md cursor-pointer hover:bg-[#1C1C1C0D]" />
            </div>
        </div>
    )
}

export default Header