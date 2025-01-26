import { defineField, defineType } from "sanity";

export const socialLinkSchema = defineType({
  name: "socialLinks",
  title: "SocialLinks",
  type: "document",
  fields: [
    defineField({
      name: "email",
      type: "string",
    }),
    defineField({
      name: "githubLink",
      type: "string",
    }),
    defineField({
      name: "linkedinLink",
      type: "string",
    }),
    defineField({
      name: "twitterLink",
      type: "string",
    }),
    defineField({
      name: "sourceCodeLink",
      type: "string",
    }),
  ],
});
