import { SocialLinks } from '@/sanity.types';
import Link from 'next/link'
import { CiLinkedin } from 'react-icons/ci'
import { FaCode } from 'react-icons/fa6'
import { FiGithub } from 'react-icons/fi'

interface SocialLinksItems {
    socialLinks: SocialLinks
}

async function SocialsLink({ socialLinks }: SocialLinksItems) {

    const githubUrl = socialLinks.githubLink ?? ""
    const linkedInUrl = socialLinks.linkedinLink ?? ""
    const sourceCode = socialLinks.sourceCodeLink ?? ""

    return (
        <div className='absolute hidden bottom-10 right-14 bg-white border border-[#E1E4EA] rounded-[32px] shadow-customShadow transition-all ease-in duration-500 md:block dark:bg-black dark:border-[#2B303B]'>
            <ul className='flex flex-col p-2 gap-1 text-darkGray dark:text-lightGray'>
                <li className='size-fit p-2 rounded-full cursor-pointer transition-colors duration-300 hover:bg-[#F5F7FA] dark:hover:bg-[#1E1E1E]' title='GitHub profile'>
                    <Link target='_blank' href={githubUrl}><FiGithub size={24} /></Link>
                </li>
                <li className='size-fit p-2 rounded-full cursor-pointer transition-colors duration-300 hover:bg-[#F5F7FA] dark:hover:bg-[#1E1E1E]' title='LinkedIn profile'>
                    <Link target='_blank' href={linkedInUrl}><CiLinkedin size={24} /></Link>
                </li>
                <li className='size-fit p-2 rounded-full cursor-pointer transition-colors duration-300 hover:bg-[#F5F7FA] dark:hover:bg-[#1E1E1E]' title='Source code'>
                    <Link target='_blank' href={sourceCode}><FaCode size={24} /></Link>
                </li>
            </ul>
        </div>
    )
}

export default SocialsLink
