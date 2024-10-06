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
        <div className='flex items-center justify-between border-b-[1px] border-b-[#1C1C1C1A] dark:border-b-[#FFFFFF33] p-4'>
            <div className='flex items-center gap-4'>
                <AppWindow size={24} strokeWidth={1.5} className="text-[#1C1C1C] dark:text-[#FFFFFF] p-1 rounded-md cursor-pointer hover:bg-[#1C1C1C0D] dark:hover:bg-[#FFFFFF1A] " />
                <Star size={24} strokeWidth={1.5} className="text-[#1C1C1C] dark:text-[#FFFFFF] p-1 rounded-md cursor-pointer hover:bg-[#1C1C1C0D] dark:hover:bg-[#FFFFFF1A]" />
                <Breadcrumb segment="Default" />
            </div>
            <div className='flex items-center gap-4'>
                <div className='flex items-center bg-[#1C1C1C0D] dark:bg-[#FFFFFF1A] gap-1 px-2 py-1 rounded-lg'>
                    <Search size={14} strokeWidth={2} className="text-[#1C1C1C33] dark:text-[#FFFFFF33]" />
                    <input
                        type="text"
                        value={state.searchParam}
                        placeholder='Search'
                        onChange={(e) => updateInput(e)}
                        className='text-[#1C1C1C33] dark:text-[#FFFFFF33] border-none outline-none bg-transparent  w-[100px]  text-xs opacity-[0.6]'
                    />
                    <Slack size={14} strokeWidth={2} className="text-[#1C1C1C33] dark:text-[#FFFFFF33]" />
                </div>
                {
                    darkMode ?
                        <Moon onClick={toggleMode} size={24} strokeWidth={1.5} className="text-[#1C1C1C] dark:text-[#FFFFFF] p-1 rounded-md cursor-pointer hover:bg-[#1C1C1C0D] dark:hover:bg-[#FFFFFF1A] " />
                        :
                        <Sun onClick={toggleMode} size={24} strokeWidth={1.5} className="text-[#1C1C1C]  p-1 rounded-md cursor-pointer hover:bg-[#1C1C1C0D]  " />
                }
                <TimerReset size={24} strokeWidth={1.5} className="text-[#1C1C1C] dark:text-[#FFFFFF] p-1 rounded-md cursor-pointer hover:bg-[#1C1C1C0D] dark:hover:bg-[#FFFFFF1A] " />
                <Bell size={24} strokeWidth={1.5} className="text-[#1C1C1C] dark:text-[#FFFFFF] p-1 rounded-md cursor-pointer hover:bg-[#1C1C1C0D] dark:hover:bg-[#FFFFFF1A] " />
                <AppWindow size={24} strokeWidth={1.5} className="text-[#1C1C1C] dark:text-[#FFFFFF] p-1 rounded-md cursor-pointer hover:bg-[#1C1C1C0D] dark:hover:bg-[#FFFFFF1A] " />
            </div>
        </div>
    )
}

export default Header