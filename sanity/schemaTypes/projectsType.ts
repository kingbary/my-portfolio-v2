import { defineField, defineType } from "sanity";

export const projectsSchema = defineType({
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    defineField({
      name: "projectTitle",
      type: "string",
    }),
    defineField({
      name: "projectDescription",
      type: "array",
      of: [
        {
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
        },
      ],
      description:
        "Describe the project or how you achieved the project's goal",
    }),
    defineField({
      name: "liveURL",
      type: "string",
    }),
    defineField({
      name: "sourceCode",
      type: "string",
      description: "Leave blank if it's private",
    }),
    defineField({
        name: 'projectScreenshot',
        type: 'image',
        options: {
          hotspot: true,
        },
        fields: [
          {
            name: 'alt',
            type: 'string',
            title: 'Alternative Text',
          }
        ]
      }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
});
