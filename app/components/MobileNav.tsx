"use client";
import { Layers3Icon, Send, X } from 'lucide-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { CiLinkedin } from 'react-icons/ci';
import { FaCode } from 'react-icons/fa6';
import { FiGithub } from 'react-icons/fi';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

function MobileNav() {
    const [hovered, setHovered] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [showNavBar, setShowNavBar] = useState(false);

    const { setTheme, resolvedTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const handleToggleNavBar = () => {
        setShowNavBar((prevState) => !prevState);
    };

    return (
        <div className="absolute bottom-5 flex justify-center items-end px-4 py-6 md:hidden">
            {!showNavBar && (
                <button
                    className="px-6 py-3 bg-white text-[#525866] border border-lightGray rounded-full shadow dark:bg-black-500 dark:text-lightGray dark:border-[#2B303B]"
                    onClick={handleToggleNavBar}
                >
                    Menu
                </button>
            )}

            <div
                className={`fixed inset-x-0 transform ${showNavBar ? 'translate-y-0 bottom-0' : 'translate-y-full -bottom-4'
                    } mx-4 mb-4 transition-transform duration-500 ease-in-out bg-white dark:bg-black dark:border-[#2B303B] p-6 rounded-[30px] shadow-lg border-t-2 sm:rounded-xl sm:w-[90%]`}
            >
                <div className="flex justify-end">
                    <button
                        className="size-8 p-2 bg-darkGray flex justify-center items-center text-white rounded-full shadow-sm dark:bg-lightGray dark:text-black-500"
                        onClick={handleToggleNavBar}
                    >
                        <X />
                    </button>
                </div>

                <ul className="flex flex-col gap-4 p-4 text-sm text-darkGray dark:text-lightGray">
                    <li className="flex justify-center w-full px-6 py-3 rounded-full cursor-pointer transition-all duration-500 hover:bg-[#F5F7FA] dark:hover:bg-[#1E1E1E]">
                        <Link href="#" className="flex items-center gap-2">
                            <AiOutlineUser size={16} /> About
                        </Link>
                    </li>
                    <li className="flex justify-center w-full px-6 py-3 rounded-full cursor-pointer transition-all duration-500 hover:bg-[#F5F7FA] dark:hover:bg-[#1E1E1E]">
                        <Link href="#" className="flex items-center gap-2">
                            <Layers3Icon size={16} /> Projects <sup>5</sup>
                        </Link>
                    </li>
                    <li
                        className="flex justify-center w-full px-6 py-3 rounded-full cursor-pointer transition-all duration-500 hover:bg-[#F5F7FA] dark:hover:bg-[#1E1E1E]"
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                    >
                        <Link href="mailto:kingsleyakwa@gmail.com" className="flex items-center gap-2">
                            <Send size={16} />
                            {hovered ? 'kingsleyakwa@gmail.com' : 'Contact'}
                        </Link>
                    </li>
                </ul>

                <div className='flex items-center justify-between'>
                    <div className='size-12 flex items-center justify-center p-3 rounded-full cursor-pointer hover:bg-[#F5F7FA] transition-all ease-in duration-1000 dark:hover:bg-[#1E1E1E]'>
                        {resolvedTheme === "dark" && (
                            <span onClick={() => setTheme("light")} className='transition-all ease-in duration-500'>
                                <MdLightMode size={20} color='white' />
                            </span>
                        )}
                        {resolvedTheme === "light" && (
                            <span onClick={() => setTheme("dark")} className='transition-all ease-in duration-500'>
                                <MdDarkMode size={20} color='#7c7c7c' />
                            </span>
                        )}
                    </div>
                    <div>
                        <ul className='flex p-2 gap-1 text-darkGray dark:text-lightGray'>
                            <li className='size-fit p-2 rounded-full cursor-pointer transition-colors duration-300 hover:bg-[#F5F7FA] dark:hover:bg-[#1E1E1E]' title='GitHub profile'>
                                <Link href={"#"}><FiGithub size={20} /></Link>
                            </li>
                            <li className='size-fit p-2 rounded-full cursor-pointer transition-colors duration-300 hover:bg-[#F5F7FA] dark:hover:bg-[#1E1E1E]' title='LinkedIn profile'>
                                <Link href={"#"}><CiLinkedin size={20} /></Link>
                            </li>
                            <li className='size-fit p-2 rounded-full cursor-pointer transition-colors duration-300 hover:bg-[#F5F7FA] dark:hover:bg-[#1E1E1E]' title='Source code'>
                                <Link href={"#"}><FaCode size={20} /></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MobileNav;
