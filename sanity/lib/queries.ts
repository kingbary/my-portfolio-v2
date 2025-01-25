import { Author, Technologies } from "@/sanity.types";
import { loadQuery } from "./client";

export const fetchAuthor = () =>
  loadQuery<Author[]>({
    query: `*[_type == "author"]`,
  });

export const fetchSkills = () =>
  loadQuery<Technologies[]>({
    query: `*[_type == "technologies"]`,
  });
