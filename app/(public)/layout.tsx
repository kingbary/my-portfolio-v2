import React from 'react'
import Providers from '../providers/ThemeProvider'
import NavBar from '../components/NavBar'
import MobileNav from '../components/MobileNav'
import SocialsLink from '../components/SocialsLink'
import { SocialLinks } from '@/sanity.types'
import { fetchSocialLink } from '@/sanity/lib/queries'

async function layout({ children }: Readonly<{ children: React.ReactNode }>) {
    let socialLinks: { data: SocialLinks[] } = { data: [] };
    try {
        socialLinks = await fetchSocialLink();
    } catch (error) {
        console.error('error', error);
    }
    return (
        <main className="w-full h-full">
            <Providers>
                <div className="flex justify-center h-full w-full text-[#525866] bg-[#F5F5F5] overflow-y-scroll transition-all ease-in duration-700 dark:text-lightGray dark:bg-black-500">
                    {children}
                </div>
                <NavBar socialLinks={socialLinks.data[0]} />
                <MobileNav socialLinks={socialLinks.data[0]} />
                <SocialsLink socialLinks={socialLinks.data[0]} />
            </Providers>
        </main>
    )
}

export default layout
