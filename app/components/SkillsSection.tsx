import { Technologies } from "@/sanity.types";
import { fetchSkills } from "@/sanity/lib/queries";

async function SkillsSection() {
    let skills: { data: Technologies[] } = { data: [] };
    try {
        skills = await fetchSkills();
    } catch (error) {
        console.error('error', error);
    }

    return (
        <section className="flex justify-center w-full mx-auto mt-12 p-6 text-sm transition-all duration-500 ease-in-out bg-white dark:bg-black dark:border-[#2B303B] rounded-[30px] borde sm:rounded-xl sm:w-[90%]">
            <div className="grid grid-cols-2 justify-items-center md:flex flex-col w-full justify-center flex-wrap gap-3 md:flex-row">
                {skills?.data?.map((item) => {
                    return (
                        <div className="flex justify-center w-full md:w-fit px-6 py-3 rounded-[20px] uppercase bg-[#F5F7FA] transition-all duration-500 ease-in dark:bg-[#1E1E1E]" key={item._id}>
                            {item.technology}
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default SkillsSection
