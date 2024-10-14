'use client';

import { useEffect, useState } from 'react';
import { Layers3Icon, Send } from 'lucide-react';
import Link from 'next/link';
import { AiOutlineUser } from 'react-icons/ai';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { useTheme } from 'next-themes';

function NavBar() {
    const [hovered, setHovered] = useState<boolean>(false);
    const [mounted, setMounted] = useState<boolean>(false)
    const { setTheme, resolvedTheme } = useTheme()

    useEffect(() => { setMounted(true) }, [])
    if (!mounted) return null;

    return (
        <div className='absolute hidden w-fit bottom-10 bg-white border border-[#E1E4EA] rounded-[32px] shadow-lg transition-colors ease-in duration-500 md:block dark:bg-black-500 dark:border-[#2B303B]'>
            <ul className='flex p-[6px] text-sm text-darkGray dark:text-lightGray'>
                <li className='size-fit px-6 py-3 rounded-full cursor-pointer transition-all duration-500 hover:bg-[#F5F7FA] dark:hover:bg-[#1E1E1E]'>
                    <Link href={"#"} className='flex items-center gap-2'>
                        <AiOutlineUser size={16} /> About
                    </Link>
                </li>
                <li className='size-fit px-6 py-3 rounded-full cursor-pointer transition-all duration-500 hover:bg-[#F5F7FA] dark:hover:bg-[#1E1E1E]'>
                    <Link href={"#"} className='flex items-center gap-2'>
                        <Layers3Icon size={16} /> Projects <sup>5</sup>
                    </Link>
                </li>
                <li className='flex items-center'>
                    <div className='h-[26px] w-px bg-lightGray mx-[10px]'></div>
                </li>
                <li
                    className='size-fit px-2 py-3 rounded-full cursor-pointer transition-all ease-in duration-500 hover:px-6 hover:bg-[#F5F7FA] dark:hover:bg-[#1E1E1E]'
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >
                    <Link href={"mailto:kingsleyakwa@gmail.com"} className='flex items-center gap-2 transition-[max-width] max-w-fit duration-500'>
                        <Send size={16} />
                        {hovered ? 'kingsleyakwa@gmail.com' : 'Contact'}
                    </Link>
                </li>
                <li className='size-12 flex items-center justify-center p-3 rounded-full cursor-pointer hover:bg-[#F5F7FA] transition-all ease-in duration-1000 dark:hover:bg-[#1E1E1E]'>
                    {resolvedTheme === "dark" && (
                        <span onClick={() => setTheme("light")} className='transition-all ease-in duration-500'>
                            <MdLightMode size={20} />
                        </span>
                    )}
                    {resolvedTheme === "light" && (
                        <span onClick={() => setTheme("dark")} className='transition-all ease-in duration-500'>
                            <MdDarkMode size={20} />
                        </span>
                    )}
                </li>
            </ul>
        </div>
    );
}

export default NavBar;
