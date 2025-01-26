import { defineField, defineType } from "sanity";

export const technologiesType = defineType({
  name: "technologies",
  title: "Technologies",
  type: "document",
  fields: [
    defineField({
      name: "technology",
      type: "string",
    }),
  ],
});
