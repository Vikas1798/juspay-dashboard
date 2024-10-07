import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AlignRight, AppWindow, Bell, Moon, Search, Slack, Star, Sun, TimerReset } from 'lucide-react';
import Breadcrumb from './Breadcrumb';
import { handleTheme } from '../../../Redux/themeSlice';
import { image4 } from '../../../assets';

const Header = () => {
    const appTheme = useSelector(d => d.theme?.mode ?? false);
    const dispatch = useDispatch();
    const [state, setState] = useState({
        searchParam: "",
        showNav: "translate-y-0 ",
        lastScrollY: 0,
    })

    useEffect(() => {
        if (appTheme) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [appTheme]);

    const animateNavbar = () => {
        let { lastScrollY } = state;
        if (window.scrollY > 80) {
            if (window.scrollY > lastScrollY) {
                setState((prev) => {
                    return {
                        ...prev,
                        showNav: "-translate-y-[80px]",
                    };
                });
            } else {
                setState((prev) => {
                    return {
                        ...prev,
                        showNav: "bg-[#FFFFFF] dark:bg-[#1C1C1C]",
                    };
                });
            }
        } else {
            setState((prev) => {
                return {
                    ...prev,
                    showNav: "translate-y-0",
                };
            });
        }
        setState((prev) => {
            return {
                ...prev,
                lastScrollY: window.scrollY,
            };
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", animateNavbar);
        return () => {
            window.removeEventListener("scroll", animateNavbar);
        };
    }, [state.lastScrollY]);

    const updateInput = (e) => {
        setState((prev) => {
            return {
                ...prev,
                searchParam: e.target.value
            }
        })
    }

    return (
        <div className={`flex items-center justify-between border-b-[1px] border-b-[#1C1C1C1A] dark:border-b-[#FFFFFF33] p-4 z-10 sticky top-0 transition-transform duration-500 ${state?.showNav} `}>
            <div className='flex items-center gap-2 md:gap-4'>
                <AppWindow size={24} strokeWidth={1.5} className="hidden md:flex text-[#1C1C1C] dark:text-[#FFFFFF] p-1 rounded-md cursor-pointer hover:bg-[#1C1C1C0D] dark:hover:bg-[#FFFFFF1A] " />
                <Star size={24} strokeWidth={1.5} className="hidden md:flex text-[#1C1C1C] dark:text-[#FFFFFF] p-1 rounded-md cursor-pointer hover:bg-[#1C1C1C0D] dark:hover:bg-[#FFFFFF1A]" />
                <img src={image4} alt="" className='md:hidden flex w-[20px] h-[20px] rounded-full object-cover' />
                <Breadcrumb />
            </div>
            <div className='hidden md:flex items-center gap-2 md:gap-4'>
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
                    appTheme ?
                        <Moon onClick={() => dispatch(handleTheme())} size={24} strokeWidth={1.5} className="text-[#1C1C1C] dark:text-[#FFFFFF] p-1 rounded-md cursor-pointer hover:bg-[#1C1C1C0D] dark:hover:bg-[#FFFFFF1A] " />
                        : <Sun onClick={() => dispatch(handleTheme())} size={24} strokeWidth={1.5} className="text-[#1C1C1C]  p-1 rounded-md cursor-pointer hover:bg-[#1C1C1C0D]  " />
                }
                <TimerReset size={24} strokeWidth={1.5} className="text-[#1C1C1C] dark:text-[#FFFFFF] p-1 rounded-md cursor-pointer hover:bg-[#1C1C1C0D] dark:hover:bg-[#FFFFFF1A] " />
                <Bell size={24} strokeWidth={1.5} className="text-[#1C1C1C] dark:text-[#FFFFFF] p-1 rounded-md cursor-pointer hover:bg-[#1C1C1C0D] dark:hover:bg-[#FFFFFF1A] " />
                <AppWindow size={24} strokeWidth={1.5} className="text-[#1C1C1C] dark:text-[#FFFFFF] p-1 rounded-md cursor-pointer hover:bg-[#1C1C1C0D] dark:hover:bg-[#FFFFFF1A] " />
            </div>
            <div className='md:hidden flex items-center gap-2 md:gap-4'>
                {
                    appTheme ?
                        <Moon onClick={() => dispatch(handleTheme())} size={24} strokeWidth={1.5} className="text-[#1C1C1C] dark:text-[#FFFFFF] p-1 rounded-md cursor-pointer hover:bg-[#1C1C1C0D] dark:hover:bg-[#FFFFFF1A] " />
                        : <Sun onClick={() => dispatch(handleTheme())} size={24} strokeWidth={1.5} className="text-[#1C1C1C]  p-1 rounded-md cursor-pointer hover:bg-[#1C1C1C0D]  " />
                }
                <AlignRight onClick={() => view} size={24} strokeWidth={1.5} className="text-[#1C1C1C] dark:text-[#FFFFFF] p-1 rounded-md cursor-pointer hover:bg-[#1C1C1C0D] dark:hover:bg-[#FFFFFF1A] " />
            </div>
        </div>
    )
}

export default Header