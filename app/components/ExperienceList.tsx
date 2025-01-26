"use client"
import { useState } from "react";
import { PortableText } from "next-sanity";
import customPortableText from "./PortableText";
import { Experience } from "@/sanity.types";

export default function ExperienceList({ experiences }: { experiences: Experience[] }) {
    const [showMore, setShowMore] = useState(false);

    const formatDate = (date: string) => {
        return new Date(date).toLocaleDateString('en-US', { month: '2-digit', year: 'numeric' });
    }

    const displayedExperiences = showMore ? experiences : experiences.slice(0, 2);

    return (
        <>
            <div className="transition-all duration-300 ease-in-out">
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
            </div>
            {experiences.length > 2 && (
                <div className="flex justify-center mt-6 mb-36">
                    <button
                        className="px-6 py-3 bg-black-500 text-sm text-lightGray rounded-[20px] transition-[padding] duration-300 ease-linear hover:px-8 dark:text-black-500 dark:bg-lightGray"
                        onClick={() => setShowMore(!showMore)}
                    >
                        {!showMore ? (<>See More <sup>{experiences.length - 2}</sup></>) : "See Less"}
                    </button>
                </div>
            )}
        </>
    )
}