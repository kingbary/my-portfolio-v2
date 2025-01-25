"use client"
import { PortableText } from "next-sanity";
import customPortableText from "./PortableText";
import { useEffect, useState } from "react";
import { fetchExperience } from "@/sanity/lib/queries";
import { Experience } from "@/sanity.types";

export default function ExperienceSection() {
    const [showMore, setShowMore] = useState<boolean>(false);
    const [experience, setExperience] = useState<Experience[]>([]);

    const handleShowMore = () => {
        setShowMore((prevState) => !prevState)
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetchExperience();
                const sortedExperiences = result.data.sort((a, b) =>
                    new Date(b.startDate || 0).getTime() - new Date(a.startDate || 0).getTime()
                );
                setExperience(sortedExperiences);
            } catch (error) {
                console.error('error', error);
            }
        };
        fetchData();
    }, []);

    const formatDate = (date: string) => {
        return new Date(date).toLocaleDateString('en-US', { month: '2-digit', year: 'numeric' });
    }

    const displayedExperiences = showMore ? experience : experience.slice(0, 2);

    return (
        <section className="flex flex-col mt-6 border-t border-darkGray dark:border-lightGray">
            <h3 className="text-sm mt-6 font-semibold md:text-xl">EXPERIENCE</h3>
            <div className="mb-36 transition-all duration-300 ease-in-out md:mb-36">
                {displayedExperiences.map((item) => (
                    <div
                        className="flex py-6 gap-6 border-b border-darkGray dark:border-lightGray"
                        key={item._id}
                    >
                        <small className="text-nowrap">
                            {item.startDate ? formatDate(item.startDate) : "Unknown"} -{" "}
                            {item.endDate ? formatDate(item.endDate) : "Present"}
                        </small>
                        <div>
                            <div className="mb-4">
                                <h4 className="text- font-medium md:text-xl">{item.role}</h4>
                                <h5 className="text-xs italic md:text-sm">{item.company} • {item.companyLocation}</h5>
                            </div>
                            {item.workExecuted && (
                                <PortableText
                                    value={item.workExecuted}
                                    components={customPortableText}
                                />
                            )}
                        </div>
                    </div>
                ))}
                {experience.length > 2 && (
                    <div className="flex justify-center mt-6">
                        <button
                            className="px-6 py-3 bg-black-500 text-sm text-lightGray rounded-[20px] transition-[padding] duration-300 ease-linear hover:px-8 dark:text-black-500 dark:bg-lightGray"
                            onClick={handleShowMore}
                        >
                            {!showMore ? (<>See More <sup>{experience.length}</sup></>) : "See Less"}
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}