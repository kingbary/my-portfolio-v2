function ExperienceSection() {
    return (
        <section className="flex flex-col mt-6 border-t border-darkGray dark:border-lightGray">
            <h3 className="text-sm mt-6 font-semibold md:text-xl">EXPERIENCE</h3>
            <div className="mb-28 md:mb-36">
                <div className="flex py-6 gap-6 border-b border-darkGray dark:border-lightGray">
                    <div className="text-nowrap text-xs md:text-sm">2022 - Present</div>
                    <div>
                        <div className="mb-4">
                            <h4 className="text- font-medium md:text-xl">Web Development Intern</h4>
                            <h5 className="text-xs italic md:text-sm">The Roothub • Uyo, Akwa Ibom</h5>
                        </div>
                        <ul className="flex flex-col gap-3 text-xs list-disc md:text-sm">
                            <li>Performed code reviews and product documentation for better product testing</li>
                            <li>Worked with other developers to achieve better product designs and functionality</li>
                        </ul>
                    </div>
                </div>
                <div className="flex py-6 gap-6 border-b border-darkGray dark:border-lightGray">
                    <div className="text-nowrap text-xs md:text-sm">2022 - Present</div>
                    <div>
                        <div className="mb-4">
                            <h4 className="text- font-medium md:text-xl">Web Development Intern</h4>
                            <h5 className="text-xs italic md:text-sm">The Roothub • Uyo, Akwa Ibom</h5>
                        </div>
                        <ul className="flex flex-col gap-3 text-xs list-disc md:text-sm">
                            <li>Performed code reviews and product documentation for better product testing</li>
                            <li>Worked with other developers to achieve better product designs and functionality</li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-center mt-6">
                    <button
                        className="px-6 py-3 bg-black-500 text-sm text-lightGray rounded-[20px] dark:text-black-500 dark:bg-lightGray">
                        See More<sup className="ml-1">4</sup>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default ExperienceSection
