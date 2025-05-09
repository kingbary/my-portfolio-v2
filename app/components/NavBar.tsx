'use client';

import { useEffect, useState } from 'react';
import { Layers3Icon, Send } from 'lucide-react';
import Link from 'next/link';
import { AiOutlineUser } from 'react-icons/ai';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import { SocialLinks } from '@/sanity.types';

interface SocialLinksItems {
    socialLinks: SocialLinks
}

function NavBar({ socialLinks }: SocialLinksItems) {
    const pathname = usePathname();
    function isActiveBar(path: string) {
        return pathname === path;
    }

    const [hovered, setHovered] = useState<boolean>(false);
    const [mounted, setMounted] = useState<boolean>(false);
    const { setTheme, resolvedTheme } = useTheme();

    useEffect(() => { setMounted(true) }, [])
    if (!mounted) return null;

    const email = socialLinks?.email ?? null;

    return (
        <div className='absolute bottom-10 hidden w-full md:flex justify-center'>
            <div className='bg-white border border-[#E1E4EA] rounded-[32px] shadow-lg transition-colors ease-in duration-500 dark:bg-black dark:border-[#2B303B]'>
                <ul className='flex items-center px-[6px] py-1 text-sm text-darkGray dark:text-lightGray'>
                    <li className={`size-fit px-6 py-3 h-full rounded-full cursor-pointer transition-all duration-500 ${isActiveBar('/') ? 'bg-[#F5F7FA] dark:bg-[#1E1E1E]' : ''} hover:bg-[#F5F7FA] dark:hover:bg-[#1E1E1E]`}>
                        <Link href={"/"} className='flex items-center gap-2'>
                            <AiOutlineUser size={16} /> About
                        </Link>
                    </li>
                    <li className={`size-fit px-6 py-3 rounded-full cursor-pointer transition-all duration-500 ${isActiveBar('/projects') ? 'bg-[#F5F7FA] dark:bg-[#1E1E1E]' : ''} hover:bg-[#F5F7FA] dark:hover:bg-[#1E1E1E]`}>
                        <Link href={"/projects"} className='flex items-center gap-2'>
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
                        <Link href={`mailto:${email}`} className='flex items-center gap-2 transition-[max-width] max-w-fit duration-500'>
                            <Send size={16} />
                            {hovered ? email : 'Contact'}
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
        </div>
    );
}

export default NavBar;
