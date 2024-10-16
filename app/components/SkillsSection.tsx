function SkillsSection() {
    return (
        <section className="flex justify-center w-full mx-auto mt-12 p-6 text-sm transition-all duration-500 ease-in-out bg-white dark:bg-black dark:border-[#2B303B] rounded-[30px] border-t-2 sm:rounded-xl sm:w-[90%]">
            <div className="flex flex-col w-full justify-center gap-3 md:flex-row">
                <div className="flex gap-3">
                    <div className="flex justify-center w-full px-6 py-3 rounded-[20px] capitalize bg-[#F5F7FA] transition-all duration-500 ease-in dark:bg-[#1E1E1E]">
                        REACT
                    </div>
                    <div className="flex justify-center w-full px-6 py-3 rounded-[20px] capitalize bg-[#F5F7FA] transition-all duration-500 ease-in dark:bg-[#1E1E1E]">
                        NEXTJS
                    </div>
                </div>
                <div className="flex gap-3">
                    <div className="flex justify-center w-full px-6 py-3 rounded-[20px] capitalize bg-[#F5F7FA] transition-all duration-500 ease-in dark:bg-[#1E1E1E]">
                        TYPESCRIPT
                    </div>
                    <div className="flex justify-center w-full px-6 py-3 rounded-[20px] capitalize bg-[#F5F7FA] transition-all duration-500 ease-in dark:bg-[#1E1E1E]">
                        TAILWIND
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SkillsSection
