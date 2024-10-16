
import { Link as LinkIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { FaCode } from 'react-icons/fa6'

function Projects() {
    return (
        <section className='min-h-screen w-full max-w-[624px] py-20 px-4 md:px-0'>
            <div className='flex flex-col gap-12 mb-32'>
                <div className='bg-white dark:bg-black rounded-[32px]'>
                    <div className='bg-[url(/images/project-img.png)] bg-cover bg-center h-[350px] w-full rounded-[32px]'></div>
                    <div className='p-6 bg-white dark:bg-black rounded-b-[32px]'>
                        <div>
                            <h2 className='text-[32px] font-medium mb-3 leading-7'>Project Title</h2>
                            <p className='text-sm'>
                                This is an easy-to-access alternative to cloud-sharing platforms like OneDrive and Mega.
                                It provides a no authentication simple authentication (just a password) that lets users
                                easily store files on a website which can be visited by others and then can be easily
                                downloaded without any password restriction.
                            </p>
                        </div>
                        <div className='mt-6 flex items-center gap-3'>
                            <Link href={"#"}>
                                <button
                                    className="flex items-center gap-1 px-6 py-3 bg-black-500 text-sm text-white rounded-[20px] transition-[padding] duration-300 ease-linear hover:px-8 dark:text-black-500 dark:bg-lightGray"><LinkIcon size={16} />Visit Project
                                </button>
                            </Link>
                            <div className='size-fit flex items-center justify-center p-2 rounded-full hover:bg-[#F5F7FA] dark:hover:bg-black-500' title='Source code'>
                                <Link href={"#"}><FaCode size={24} /></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-white dark:bg-black rounded-[32px]'>
                    <div className='bg-[url(/images/project-img.png)] bg-cover bg-center h-[350px] w-full rounded-[32px]'></div>
                    <div className='p-6 bg-white dark:bg-black rounded-b-[32px]'>
                        <div>
                            <h2 className='text-[32px] font-medium mb-3'>Project Title</h2>
                            <p className='text-sm'>
                                This is an easy-to-access alternative to cloud-sharing platforms like OneDrive and Mega.
                                It provides a no authentication simple authentication (just a password) that lets users
                                easily store files on a website which can be visited by others and then can be easily
                                downloaded without any password restriction.
                            </p>
                        </div>
                        <div className='mt-6 flex items-center gap-3'>
                            <Link href={"#"}>
                                <button
                                    className="flex items-center gap-1 px-6 py-3 bg-black-500 text-sm text-lightGray rounded-[20px] transition-[padding] duration-300 ease-linear hover:px-8 dark:text-black-500 dark:bg-lightGray"><LinkIcon size={16} />Visit Project
                                </button>
                            </Link>
                            <div className='size-fit flex items-center justify-center p-2 rounded-full hover:bg-[#F5F7FA] dark:hover:bg-black-500' title='Source code'>
                                <Link href={"#"}><FaCode size={24} /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
