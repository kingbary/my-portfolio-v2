import { fetchExperience } from "@/sanity/lib/queries";
import ExperienceList from "./ExperienceList";

export default async function ExperienceSection() {
    const result = await fetchExperience();
    const sortedExperiences = result.data.sort((a, b) =>
        new Date(b.startDate || 0).getTime() - new Date(a.startDate || 0).getTime()
    );

    return (
        <section className="flex flex-col mt-6 border-t border-darkGray dark:border-lightGray">
            <h3 className="text-sm mt-6 font-semibold md:text-xl">EXPERIENCE</h3>
            <ExperienceList experiences={sortedExperiences} />
        </section>
    )
}