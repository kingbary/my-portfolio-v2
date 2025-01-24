import React from 'react'
import Providers from '../providers/ThemeProvider'
import NavBar from '../components/NavBar'
import MobileNav from '../components/MobileNav'
import SocialsLink from '../components/SocialsLink'

function layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <main className="w-full h-full">
            <Providers>
                <div className="flex justify-center h-full text-[#525866] bg-[#F5F5F5] w-full overflow-scroll transition-all ease-in duration-700 dark:text-lightGray dark:bg-black-500">
                    {children}
                </div>
                <NavBar />
                <MobileNav />
                <SocialsLink />
            </Providers>
        </main>
    )
}

export default layout
