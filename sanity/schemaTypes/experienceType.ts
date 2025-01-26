import { defineField, defineType } from "sanity";

export const experienceType = defineType({
    name: "experience",
    title: "Experience",
    type: "document",
    fields: [
        defineField({
            name: "role",
            type: "string",
        }),
        defineField({
            name: "company",
            type: "string",
        }),
        defineField({
            name: "companyLocation",
            type: "string",
        }),
        defineField({
            name: "startDate",
            type: "date",
            options: {
                dateFormat: "MM/YYYY",
            },
        }),
        defineField({
            name: "endDate",
            type: "date",
            options: {
                dateFormat: "MM/YYYY",
            },
            description: "Leave blank if it's your current role"
        }),
        defineField({
            name: "workExecuted",
            type: "array",
            of: [
                {
                    type: "block",
                    styles: [{ title: "Normal", value: "normal" }],
                    lists: [
                        { title: "Bullet", value: "bullet" },
                        { title: "Numbered", value: "number" },
                    ],
                },
            ],
        }),
    ],
});
