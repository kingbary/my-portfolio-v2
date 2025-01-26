import customPortableText from '@/app/components/PortableText';
import type { Projects } from '@/sanity.types';
import { urlFor } from '@/sanity/lib/image';
import { fetchProjects } from '@/sanity/lib/queries';
import { PortableText } from '@portabletext/react';
import { Link as LinkIcon } from 'lucide-react'
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { FaCode } from 'react-icons/fa6'

export const metadata: Metadata = {
    title: "Kingsley Akwa | Projects",
    description: "Hello! I'm Kingsley Akwa, a front-end web engineer crafting exceptional web experiences",
};

let projects: { data: Projects[] } = { data: [] };
try {
    projects = await fetchProjects();
} catch (error) {
    console.error('error', error);
}

function Projects() {
    return (
        <section className='min-h-screen w-full max-w-[624px] py-20 px-4 md:px-0'>
            <div className='flex flex-col gap-12 pb-36'>
                {projects.data.map((project) => {
                    const imageSource =
                        project.projectScreenshot?.asset?._ref
                            ? urlFor(project.projectScreenshot).width(3500).height(2000).url()
                            : typeof project.projectScreenshot === 'string'
                                ? project.projectScreenshot
                                : "/placeholder-image.webp";

                    return (
                        <div className='bg-white dark:bg-black rounded-[32px]' key={project._id}>
                            <div className='w-full'>
                                <Image
                                    src={imageSource}
                                    alt={`${project.projectTitle} screenshot`}
                                    width={3500}
                                    height={2000}
                                    className="w-full h-[350px] rounded-[32px] object-cover shadow"
                                />
                            </div>
                            <div className='p-6 bg-white dark:bg-black rounded-b-[32px]'>
                                <div>
                                    <h2 className='text-[32px] font-medium mb-3 leading-7'>{project.projectTitle}</h2>
                                    <PortableText
                                        value={project.projectDescription || []}
                                        components={customPortableText}
                                    />
                                </div>
                                <div className='mt-6 flex items-center gap-3'>
                                    <Link href={project.liveURL || "#"}>
                                        <button
                                            className="flex items-center gap-1 px-6 py-3 bg-black-500 text-sm text-white rounded-[20px] transition-[padding] duration-300 ease-linear hover:px-8 dark:text-black-500 dark:bg-lightGray"><LinkIcon size={16} />Visit Project
                                        </button>
                                    </Link>
                                    {
                                        project.sourceCode && (
                                            <div className='size-fit flex items-center justify-center p-2 rounded-full hover:bg-[#F5F7FA] dark:hover:bg-black-500' title='Source code'>
                                                <Link href={project.sourceCode}><FaCode size={24} /></Link>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Projects